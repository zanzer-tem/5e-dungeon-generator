import {roll} from './Dice';
import {Door} from './Door';
import {Passage} from './Passage';
import {Stairs} from './Stairs';

export const STARTING_AREA = 1;
export const PASSAGE = 2;

export function StartingArea(){
    var result = roll(10);
    var startingArea = {
        type: STARTING_AREA,
        exits: 0
    };
    switch(result) {
        case 1:
            startingArea.description = "Square, 20 x 20 ft; passage on each wall";
            startingArea.exits = [Passage(),Passage(),Passage()];
            break;
        case 2:
            startingArea.description =  "Square, 20 x 20 ft; door on two walls, passage on third wall";
            startingArea.exits = [Door(),Door(),Passage()];
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
            startingArea.exits = [Passage(),Passage(),Passage()];
            break;
        case 6:
            startingArea.description = "Circle, 40 ft diameter; one passage at each cardinal direction";
            startingArea.exits = [Passage(),Passage(),Passage()];
            break;
        case 7:
            startingArea.description = "Circle, 40 ft diameter; one passage at each cardinal direction; well in middle of room (might lead down to lower level)";
            startingArea.exits = [Passage(),Passage(),Passage(),Stairs()];
            break;
        case 8:
            startingArea.description = "Square 20 x 20 ft; door on two walls, passage on third wall, secret door on fourth wall";
            startingArea.exits = [Door(),Door(),Passage(),Door()];
            break;   
        case 9:
            startingArea.description =  "Passage, 10 ft wide; T intersection";
            startingArea.exits = [Passage(),Passage()];
            break;
        default:
            startingArea.description =  "Passage, 10ft wide; four-way intersection";
            startingArea.exits = [Passage(),Passage(),Passage(),Passage()];
            break;
    } 
    return startingArea;
}