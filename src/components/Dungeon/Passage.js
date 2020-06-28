import {Door} from './Door';
import {roll} from './Dice';
import {Stairs} from './Stairs';
import {Chamber} from './Chamber';
export const PASSAGE = 2;


export function Passage(){
    var result = roll(20);
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
            passage.exits = [Door(), Passage()];
            break;
        case 4:
            passage.description =  "Continue straight 20ft./ door to the left, then an additional 10 ft. ahead";
            passage.exits = [Door(), Passage()];
            break;
        case 5: 
            passage.description =  "Continue straight 20ft; passage ends in a door";
            passage.exits = [Door()];
            break;
        case 6:
        case 7: 
            passage.description =  "Continue straight 20ft; side passage to the right, then an additional 10 ft ahead";
            passage.exits = [Passage(), Passage()];
            break;
        case 8:
        case 9:
            passage.description =  "Continue straight 20ft; side passage to the left, then an additional 10 ft ahead";
            passage.exits = [Passage(), Passage()];
            break;
        case 10:
            passage.description =  "Continue straight 20ft; comes to a dead end; 10 % chance of a secret door";
            passage.exits = [Door(), Passage()];
            break;
        case 11:
        case 12:
            passage.description =  "Continue straight 20ft; then the passage turns left and continues 10 ft";
            passage.exits = [Passage()];
            break;
        case 13:
        case 14:
            passage.description =  "Continue straight 20ft; then the passage turns right anc continues 10ft";
            passage.exits = [ Passage()];
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            passage.description =  "Chamber";
            passage.exits = [Chamber()];
            break;
        default:
            passage.description =  "Stairs";
            passage.exits = [Stairs()];
            break;
    }
    return passage;
}