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
            startingArea.description = "Square, 20 x 20 ft; passage on each wall";
            startingArea.exits = [Archway(),Archway(),Archway()];
            break;
        case 2:
            startingArea.description =  "Square, 20 x 20 ft; door on two walls, passage on third wall";
            startingArea.exits = [Door(),Door(),Archway()];
            break;
        case 3:
            startingArea.description = "Square, 40 x 40 ft; door on three walls";
            startingArea.exits = [Door(),Door(),Door()];
            break;
        case 4:
            startingArea.description = "Rectangle, 80 x 20 ft; passage on each wall";
            startingArea.exits = [Door(),Door(),Door()];
            break;
        case 5:
            startingArea.description = "Rectangle, 20 x 40 ft; passage on each wall";
            startingArea.exits = [Archway(),Archway(),Archway()];
            break;
        case 6:
            startingArea.description = "Circle, 40 ft diameter; one passage at each cardinal direction";
            startingArea.exits = [Archway(),Archway(),Archway()];
            break;
        case 7:
            startingArea.description = "Circle, 40 ft diameter; one passage at each cardinal direction; well in middle of room (might lead down to lower level)";
            startingArea.exits = [Archway(),Archway(),Archway(),Well()];
            break;
        case 8:
            startingArea.description = "Square 20 x 20 ft; door on two walls, passage on third wall, secret door on fourth wall";
            startingArea.exits = [Door(),Door(),Archway(),Door()];
            break;   
        case 9:
            startingArea.description =  "Passage, 10 ft wide; T intersection";
            startingArea.exits = [Archway(),Archway()];
            break;
        default:
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
            passage.description = "Continue straight 30ft, no doors or side passages";
            break;
        case 3:
            passage.description =  "Continue straight 20ft./ door to the right, then an additional 10ft. ahead";
            passage.exits = [Door(), Archway()];
            break;
        case 4:
            passage.description =  "Continue straight 20ft./ door to the left, then an additional 10 ft. ahead";
            passage.exits = [Door(), Archway()];
            break;
        case 5: 
            passage.description =  "Continue straight 20ft; passage ends in a door";
            passage.exits = [Door()];
            break;
        case 6:
        case 7: 
            passage.description =  "Continue straight 20ft; side passage to the right, then an additional 10 ft ahead";
            passage.exits = [Archway(), Archway()];
            break;
        case 8:
        case 9:
            passage.description =  "Continue straight 20ft; side passage to the left, then an additional 10 ft ahead";
            passage.exits = [Archway(), Archway()];
            break;
        case 10:
            passage.description =  "Continue straight 20ft; comes to a dead end; 10 % chance of a secret door";
            passage.exits = [Door()];
            break;
        case 11:
        case 12:
            passage.description =  "Continue straight 20ft; then the passage turns left and continues 10 ft";
            passage.exits = [Archway()];
            break;
        case 13:
        case 14:
            passage.description =  "Continue straight 20ft; then the passage turns right anc continues 10ft";
            passage.exits = [ Archway()];
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            passage.description =  "Chamber";
            passage.exits = [Archway(18)];
            break;
        default:
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
            chamber.description = "Square, 20 x 20 ft";
            chamber.exits = normalChamberExits();
            break;
        case 3:
        case 4:
            chamber.description = "Square, 30 x 30 ft";
            chamber.exits = normalChamberExits();
            break;
        case 5:
        case 6:
            chamber.description = "Square, 40 x 40 ft";
            chamber.exits = normalChamberExits();
            break;
        case 7:
        case 8:
        case 9:
            chamber.description = "Rectangle, 20 x 30 ft";
            chamber.exits = normalChamberExits();
            break;
        case 10:
        case 11:
        case 12: 
            chamber.description = "Rectangle, 30 x 40 ft";
            chamber.exits = normalChamberExits();
            break;
        case 13:
        case 14:
            chamber.description = "Rectangle, 40 x 50 ft";
            chamber.exits = largeChamberExits();
            break;
        case 15:
            chamber.description = "Rectangle, 50 x 80 ft";
            chamber.exits = largeChamberExits();
            break;
        case 16:
            chamber.description = "Circle, 30ft diameter";
            chamber.exits = normalChamberExits();
            break;
        case 17:
            chamber.description = "Circle, 50ft diameter";
            chamber.exits = largeChamberExits();
            break;
        case 18:
            chamber.description = "Octagon, 40 x 40ft diameter";
            chamber.exits = largeChamberExits();
            break;
        case 19:
            chamber.description = "Octagon, 60 x 60ft diameter";
            chamber.exits = largeChamberExits();
            break;
        default:
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