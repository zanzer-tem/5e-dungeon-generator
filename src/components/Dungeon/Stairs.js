import {roll} from './Dice';


export const STAIRS = 5;

export function Stairs(){
    var result = roll(10);
    var stairs = {
        type: STAIRS,
        exits: 0
    };
    switch(result) {
        default:
            stairs.description =  "No stairs yet!";
            break;
    } 

    return stairs;
}