import {roll} from './Dice';


export const CHAMBER = 4;

export function Chamber(){
    var result = roll(10);
    var chamber = {
        type: CHAMBER,
        exits: 0
    };
    switch(result) {
        case 1:
        case 2:
            chamber.description = "Square, 20 x 20 ft";
            break;
        case 3:
        case 4:
            chamber.description = "Square, 30 x 30 ft";
            break;
        case 5:
        case 6:
            chamber.description = "Square, 40 x 40 ft";
            break;
        case 7:
        case 8:
        case 9:
            chamber.description = "Rectangle, 20 x 30 ft";
            break;
        case 10:
        case 11:
        case 12: 
            chamber.description = "Rectangle, 30 x 40 ft";
            break;
        case 13:
        case 14:
            chamber.description = "Rectangle, 40 x 50 ft";
            break;
        case 15:
            chamber.description = "Rectangle, 50 x 80 ft";
            break;
        case 16:
            chamber.description = "Circle, 30ft diameter";
            break;
        case 17:
            chamber.description = "Circle, 50ft diameter";
            break;
        case 18:
            chamber.description = "Octagon, 40 x 40ft diameter";
            break;
        case 19:
            chamber.description = "Octagon, 60 x 60ft diameter";
            break;
        default:
            chamber.description =  "Trapezoid, roughly 40 x 60ft";
            break;
    } 
    return chamber;
}