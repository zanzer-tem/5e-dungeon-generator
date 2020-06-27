
function roll(dice){
    return Math.floor(Math.random() * Math.floor(dice)) + 1;;
}

export function StartingArea(){
    var result = roll(10);
    switch(result) {
        case 1:
            return "Square, 20 x 20 ft; passage on each wall"
        case 2:
            return "Square, 20 x 20 ft; door on two walls, passage on third wall"
        case 3:
            return "Square, 40 x 40 ft; door on three walls"
        case 4:
            return "Rectangle, 80 x 20 ft; passage on each wall"
        case 5:
            return "Rectangle, 20 x 40 ft; passage on each wall"
        case 6:
            return "Circle, 40 ft diameter; one passage at each cardinal direction"
        case 7:
            return "Circle, 40 ft diameter; one passage at each cardinal direction; well in middle of room (might lead down to lower level)"
        case 8:
            return "Square 20 x 20 ft; door on two walls, passage on third wall, secret door on fourth wall"       
        case 9:
            return "Passage, 10 ft wide; T intersection"
        default:
            return "Passage, 10ft wide; four-way intersection"
    } 
}

export function Passage(){
    var result = roll(20);
    switch(result){
        case 1:
        case 2:
            return "Continue straight 30ft, no doors or side passages";
        case 3:
            return "Continue straight 20ft./ door to the right, then an additional 10ft. ahead";
        case 4:
            return "Continue straight 20ft./ door to the left, then an additional 10 ft. ahead";
        case 5: 
            return "Continue straight 20ft; passage ends in a door";
        case 6:
        case 7: 
            return "Continue straight 20ft; side passage to the right, then an additional 10 ft ahead";
        case 8:
        case 9:
            return "Continue straight 20ft; side passage to the left, then an additional 10 ft ahead";
        case 10:
            return "Continue straight 20ft; comes to a dead end; 10 % chance of a secret door";
        case 11:
        case 12:
            return "Continue straight 20ft; then the passage turns left and continues 10 ft";
        case 13:
        case 14:
            return "Continue straight 20ft; then the passage turns right anc continues 10ft";
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            return "Chamber";
        default:
            return "Stairs";
    }
}