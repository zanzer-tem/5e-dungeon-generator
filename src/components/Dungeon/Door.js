import {roll} from '../Helper/Dice';
import {Passage} from './Passage';
import {Chamber} from './Chamber';
import {Stairs} from './Stairs';

export const DOOR = 3;

export function Door(){
    var result = roll(20);
    var door = {
        type: DOOR,
        exits:[],
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
            door.description =  "Wooden";
            door.exits = [LeadsTo()];
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 11:
        case 12:
            door.description =  "Wooden, barred or locked";
            door.exits = [LeadsTo()];
            door.locked = true;
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 13:
            door.description =  "Stone";
            door.exits = [LeadsTo()];
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 14:
            door.description =  "Stone, barred or locked";
            door.exits = [LeadsTo()];
            door.locked = true;
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 15:
            door.description =  "Iron";
            door.exits = [LeadsTo()];
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 16:
            door.description =  "Iron, barred or locked";
            door.exits = [LeadsTo()];
            door.locked = true;
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 17:
            door.description =  "Portcullis";
            door.exits = [LeadsTo()];
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 18:
            door.description =  "Portcullis, barred or locked";
            door.exits = [LeadsTo()];
            door.locked = true;
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        case 19:
            door.description =  "Secret door";
            door.exits = [LeadsTo()];
            door.trapped = door.exits.length === 0 ? true : false;
            break;
        default:
            door.description =  "Secret door, barred or locked";
            door.exits = [LeadsTo()];
            door.locked = true;
            door.trapped = door.exits.length === 0 ? true : false;
            break;
    }
    return door;
}

function LeadsTo(){
    var result = roll(20);
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
