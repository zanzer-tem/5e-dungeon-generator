import {roll} from '../Helper/Dice';
import {Chamber, Stairs, Passage} from './Section';

export const DOOR = 20;
export const ARCHWAY = 21;
export const WELL = 22;

export function Door(seed = 0){
    console.log("Generating door");
    var result = seed > 0 && seed <= 20 ? seed : roll(20) ;
    var door = {
        type: DOOR,
        leadsTo: null,
        locked: false,
        trapped: false
    }
    switch(result){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: 
        case 6:
        case 7: 
        case 8:
        case 9:
        case 10:
            door.description =  "Wooden door";
            door.leadsTo = LeadsTo();
            door.trapped = !(door.leadsTo) ? true : false;
            break;
        case 11:
        case 12:
            door.description =  "Wooden, barred or locked door";
            door.leadsTo = LeadsTo();
            door.locked = true;
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        case 13:
            door.description =  "Stone door";
            door.leadsTo = LeadsTo();
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        case 14:
            door.description =  "Stone, barred or locked door";
            door.leadsTo = LeadsTo();
            door.locked = true;
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        case 15:
            door.description =  "Iron door";
            door.leadsTo = LeadsTo();
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        case 16:
            door.description =  "Iron, barred or locked door";
            door.leadsTo = LeadsTo();
            door.locked = true;
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        case 17:
            door.description =  "Portcullis door";
            door.leadsTo = LeadsTo();
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        case 18:
            door.description =  "Portcullis, barred or locked door";
            door.leadsTo = LeadsTo();
            door.locked = true;
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        case 19:
            door.description =  "Secret door";
            door.leadsTo = LeadsTo();
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
        default:
            door.description =  "Secret door, barred or locked door";
            door.leadsTo = LeadsTo();
            door.locked = true;
            door.trapped = !(door.leadsTo)  ? true : false;
            break;
    }
    return door;
}

export function Archway(seed = 0){
    console.log("Generating archway");
    var archway = {
        type: ARCHWAY,
        description: "An archway",
        locked: false,
        trapped: false,
        leadsTo: LeadsTo(seed)
    };

    if(!archway.leadsTo){
        archway.description = "An impassable archway";
        archway.locked = true;
    }
    return archway;
}

export function Well(seed = 0){
    console.log("Generating well");
    var well = {
        type: WELL,
        description: "A well",
        locked: false,
        trapped: false,
        leadsTo: LeadsTo(seed)
    };

    if(!well.leadsTo){
        well.description = "An impassable well";
        well.locked = true;
    }
    return well;
}

function LeadsTo(seed = 0){
    var result = seed > 0 && seed <= 20 ? seed : roll(20);
    switch(result){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            return Passage();
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            return Chamber();
        case 19:
            return Stairs();
        default:
            return;
    }
}