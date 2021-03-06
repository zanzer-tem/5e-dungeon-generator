import {roll} from '../Helper/Dice';
import {Door, Archway, Well} from './Exit';

export const STARTING_AREA = 10;
export const PASSAGE = 11;
export const CHAMBER = 12;
export const STAIRS = 13;

export const MAX_EXITS = 150;
var currentExits = 0;


function updateCurrentExist(newExits){
    currentExits = currentExits + newExits;
}

export function StartingArea(){
    console.log("Generating starting area");
    var result = roll(10);
    var startingArea = {
        type: STARTING_AREA,
        exits: 0
    };
    switch(result) {
        case 1:
            startingArea.usage = "Entrance";
            startingArea.description = "Square, 20 x 20 ft; passage on each wall";
            startingArea.exits = [Archway(),Archway(),Archway()];
            break;
        case 2:
            startingArea.usage = "Entrance";
            startingArea.description =  "Square, 20 x 20 ft; door on two walls, passage on third wall";
            startingArea.exits = [Door(),Door(),Archway()];
            break;
        case 3:
            startingArea.usage = "Entrance";
            startingArea.description = "Square, 40 x 40 ft; door on three walls";
            startingArea.exits = [Door(),Door(),Door()];
            break;
        case 4:
            startingArea.usage = "Entrance";
            startingArea.description = "Rectangle, 80 x 20 ft; passage on each wall";
            startingArea.exits = [Door(),Door(),Door()];
            break;
        case 5:
            startingArea.usage = "Entrance";
            startingArea.description = "Rectangle, 20 x 40 ft; passage on each wall";
            startingArea.exits = [Archway(),Archway(),Archway()];
            break;
        case 6:
            startingArea.usage = "Entrance";
            startingArea.description = "Circle, 40 ft diameter; one passage at each cardinal direction";
            startingArea.exits = [Archway(),Archway(),Archway()];
            break;
        case 7:
            startingArea.usage = "Entrance";
            startingArea.description = "Circle, 40 ft diameter; one passage at each cardinal direction; well in middle of room (might lead down to lower level)";
            startingArea.exits = [Archway(),Archway(),Archway(),Well()];
            break;
        case 8:
            startingArea.usage = "Entrance";
            startingArea.description = "Square 20 x 20 ft; door on two walls, passage on third wall, secret door on fourth wall";
            startingArea.exits = [Door(),Door(),Archway(),Door()];
            break;   
        case 9:
            startingArea.usage = "Entrance";
            startingArea.description =  "Passage, 10 ft wide; T intersection";
            startingArea.exits = [Archway(),Archway()];
            break;
        default:
            startingArea.usage = "Entrance";
            startingArea.description =  "Passage, 10ft wide; four-way intersection";
            startingArea.exits = [Archway(),Archway(),Archway(),Archway()];
            break;
    } 
    return startingArea;
}

export function Stairs(){
    console.log("Generating stairs");
    var result = roll(10);
    var stairs = {
        type: STAIRS,
        exits: []
    };
    switch(result) {
        default:
            stairs.description =  "No stairs yet!";
            break;
    } 

    return stairs;
}

export function Passage(){
    console.log("Generating passage");
    var result = (currentExits + 1 >= MAX_EXITS) ? 2 : roll(20);
    var passage = {
        type: PASSAGE,
        exits:[]
    }
    switch(result){
        case 1:
        case 2:
            passage.usage = "Passage";
            passage.description = "Continue straight 30ft, no doors or side passages";
            break;
        case 3:
            passage.usage = "Passage";
            passage.description =  "Continue straight 20ft./ door to the right, then an additional 10ft. ahead";
            passage.exits = [Door(), Archway()];
            break;
        case 4:
            passage.usage = "Passage";
            passage.description =  "Continue straight 20ft./ door to the left, then an additional 10 ft. ahead";
            passage.exits = [Door(), Archway()];
            break;
        case 5: 
            passage.usage = "Passage";
            passage.description =  "Continue straight 20ft; passage ends in a door";
            passage.exits = [Door()];
            break;
        case 6:
        case 7: 
            passage.usage = "Passage";  
            passage.description =  "Continue straight 20ft; side passage to the right, then an additional 10 ft ahead";
            passage.exits = [Archway(), Archway()];
            break;
        case 8:
        case 9:
            passage.usage = "Passage";
            passage.description =  "Continue straight 20ft; side passage to the left, then an additional 10 ft ahead";
            passage.exits = [Archway(), Archway()];
            break;
        case 10:
            passage.usage = "Passage";
            passage.description =  "Continue straight 20ft; comes to a dead end; 10 % chance of a secret door";
            passage.exits = [Door()];
            break;
        case 11:
        case 12:
            passage.usage = "Passage";
            passage.description =  "Continue straight 20ft; then the passage turns left and continues 10 ft";
            passage.exits = [Archway()];
            break;
        case 13:
        case 14:
            passage.usage = "Passage";
            passage.description =  "Continue straight 20ft; then the passage turns right anc continues 10ft";
            passage.exits = [ Archway()];
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            passage.usage = "Chamber";
            passage.description =  "Chamber";
            passage.exits = [Archway(18)];
            break;
        default:
            passage.usage = "Stairs";
            passage.description =  "Stairs";
            passage.exits = [Archway(19)];
            break;
    }
    updateCurrentExist(passage.exits.length);
    return passage;
}

export function Chamber(){
    console.log("Generating chamber");

    var result = roll(10);
    var chamber = {
        type: CHAMBER,
        exits: []
    };
    switch(result) {
        case 1:
        case 2:
            chamber.usage = chamberPurpose();
            chamber.description =  "Square, 20 x 20 ft";
            chamber.exits = normalChamberExits();
            break;
        case 3:
        case 4:
            chamber.usage = chamberPurpose();
            chamber.description = "Square, 30 x 30 ft";
            chamber.exits = normalChamberExits();
            break;
        case 5:
        case 6:
            chamber.usage = chamberPurpose();
            chamber.description = "Square, 40 x 40 ft";
            chamber.exits = normalChamberExits();
            break;
        case 7:
        case 8:
        case 9:
            chamber.usage = chamberPurpose();
            chamber.description = "Rectangle, 20 x 30 ft";
            chamber.exits = normalChamberExits();
            break;
        case 10:
        case 11:
        case 12: 
            chamber.usage = chamberPurpose();
            chamber.description = "Rectangle, 30 x 40 ft";
            chamber.exits = normalChamberExits();
            break;
        case 13:
        case 14:
            chamber.usage = chamberPurpose();
            chamber.description = "Rectangle, 40 x 50 ft";
            chamber.exits = largeChamberExits();
            break;
        case 15:
            chamber.usage = chamberPurpose();
            chamber.description = "Rectangle, 50 x 80 ft";
            chamber.exits = largeChamberExits();
            break;
        case 16:
            chamber.usage = chamberPurpose();
            chamber.description = "Circle, 30ft diameter";
            chamber.exits = normalChamberExits();
            break;
        case 17:
            chamber.usage = chamberPurpose();
            chamber.description = "Circle, 50ft diameter";
            chamber.exits = largeChamberExits();
            break;
        case 18:
            chamber.usage = chamberPurpose();
            chamber.description = "Octagon, 40 x 40ft diameter";
            chamber.exits = largeChamberExits();
            break;
        case 19:
            chamber.usage = chamberPurpose();
            chamber.description = "Octagon, 60 x 60ft diameter";
            chamber.exits = largeChamberExits();
            break;
        default:
            chamber.usage = chamberPurpose();
            chamber.description =  "Trapezoid, roughly 40 x 60ft";
            chamber.exits = largeChamberExits();
            break;
    } 
    return chamber;
}

function largeChamberExits(){
    var result = roll(20);
    var exits = [];

    switch(result) {
        case 1:
        case 2:
        case 3:
            exits = [];
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            exits = [chamberExit()];
            break;
        case 9:
        case 10:
        case 11:
        case 12: 
        case 13:
            exits = [chamberExit(),chamberExit()];
            break;
        case 14:
        case 15:
        case 16:
        case 17:
            exits = [chamberExit(),chamberExit(),chamberExit()];
            break;
        case 18:
            exits = [chamberExit(),chamberExit(),chamberExit(),chamberExit()];
            break;
        case 19:
            exits = [chamberExit(),chamberExit(),chamberExit(),chamberExit(),chamberExit()];
            break;
        default:
            exits = [chamberExit(),chamberExit(),chamberExit(),chamberExit(),chamberExit(),chamberExit()];
            break;
    } 

    return exits;

}

function normalChamberExits(){
    var result = roll(20);
    var exits = [];

    switch(result) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            exits = [];
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            exits = [chamberExit()];
            break;
        case 12: 
        case 13:
        case 14:
        case 15:
            exits = [chamberExit(),chamberExit()];
            break;
        case 16:
        case 17:
        case 18:
            exits = [chamberExit(),chamberExit(),chamberExit()];
            break;
        case 19:
        default:
            exits = [chamberExit(),chamberExit(),chamberExit(),chamberExit()];
            break;
    } 

    return exits;

}

function chamberExit(){
    var result = roll(20);
    return result <= 10 ? Door() : Archway();
}

function chamberPurpose(seed = 0){
    var result = seed > 0 && seed <= 100 ? seed : roll(100);

    switch(result){
        case 1:
            return "Antechamber";
        case 2:
        case 3:
            return "Armory";
        case 4:
            return "Audience chamber";
        case 5:
            return "Aviary";
        case 6:
        case 7:
            return "Banquet room";
        case 8:
        case 9:
        case 10:
            return "Barracks";
        case 11:
            return "Bathroom";
        case 12:
            return "Bedroom";
        case 13:
            return "Bestiary";
        case 14:
        case 15:
        case 16:
            return "Cell";
        case 17:
            return "Chantry";
        case 18:
            return "Chapel";
        case 19:
        case 20:
            return "Cistern";
        case 21:
            return "Classroom";
        case 22:
            return "Closet";
        case 23:
        case 24:
            return "Conjuring room";
        case 25:
        case 26:
            return "Court";
        case 27:
        case 28:
        case 29:
            return "Crypt";
        case 30:
        case 31:
            return "Dining room";
        case 32:
        case 33:
            return "Divination room";
        case 34:
            return "Dormitory";
        case 35:
            return "Dressing room";
        case 36:
            return "Vestibule";
        case 37:
        case 38:
            return "Gallery";
        case 39:
        case 40:
            return "Game room";
        case 41:
        case 42:
        case 43:
            return "Guardroom";
        case 44:
        case 45:
            return "Hall";
        case 46:
        case 47:
            return "Great Hall";
        case 48:
        case 49:
            return "Hallway";
        case 50:
            return "Kennel";
        case 51:
        case 52:
            return "Kitchen";
        case 53:
        case 54:
            return "Laboratory";
        case 55:
        case 56:
        case 57:
            return "Library";
        case 58:
        case 59:
            return "Lounge";
        case 60:
            return "Meditation chamber";
        case 61:
            return "Observatory";
        case 62: 
            return "Office";
        case 63:
        case 64:
            return "Pantry";
        case 65:
        case 66:
            return "Prison";
        case 67:
        case 68:
            return "Reception room";
        case 69:
        case 70:
            return "Refectory";
        case 71:
            return "Robing room";
        case 72:
            return "Salon";
        case 73:
        case 74:
            return "Shrine";
        case 75:
        case 76:
            return "Sitting room";
        case 77:
        case 78:
            return "Smithy";
        case 79:
            return "Stable";
        case 80:
        case 81:
            return "Storage room";
        case 82:
        case 83:
            return "Vault";
        case 84:
        case 85:
            return "Study";
        case 86:
        case 87:
        case 88:
            return "Temple";
        case 89:
        case 90:
            return "Throne room";
        case 91:
            return "Torture chamber";
        case 92:
        case 93:
            return "Training room";
        case 94:
        case 95:
            return "Trophy room";
        case 96:
            return "Waiting room";
        case 97:
            return "Nursery";
        case 98:
            return "Well";
        case 99:
        default:
            return "Workshop";
    }
    
}