var moment = require("moment");

const time = moment().hour()+":"+moment().minute();
// const time = "01:12"
let hourInt = parseInt(time[0]+time[1]);
let minuteIntOne = parseInt(time[3])
let minuteIntTwo = parseInt(time[4]);
var hour = null;
var minuteOne = "";
var minuteTwo = "";
var merediam = "AM";

if (hourInt > 12){
    hourInt = hourInt % 12;
    merediam = "PM"
}

if (minuteIntOne === 0 && minuteIntTwo !== 0){
    minuteOne = "Oh"
}

switch (hourInt) {
    case 1:
        hour = "One"
        break;

    case 2:
        hour = "Two"
        break;

    case 3:
        hour = "Three"
        break;

    case 4:
        hour = "Four"
        break;

    case 5:
        hour = "Five"
        break;

    case 6:
        hour = "Six"
        break;

    case 7:
        hour = "Seven"
        break;

    case 8:
        hour = "Eight"
        break;

    case 9:
        hour = "Nine"
        break;

    case 10:
        hour = "Ten"
        break;

    case 11:
        hour = "Eleven"
        break;

    case 12:
        hour = "Twelve"
}

switch (minuteIntOne) {

    case 1:
        minuteOne = "Ten"
        break;

    case 2:
        minuteOne = "Twenty"
        break;

    case 3:
        minuteOne = "Thirty"
        break;

    case 4:
        minuteOne = "Fourty"
        break;

    case 5:
        minuteOne = "Fifty"
        break;

    case 6:
        minuteOne = "Sixty"
        break;

    case 7:
        minuteOne = "Seventy"
        break;

    case 8:
        minuteOne = "Eightty"
        break;

    case 9:
        minuteOne = "Ninety"
        break;
}

switch (minuteIntTwo) {
    case 1:
        minuteTwo = "One"
        break;

    case 2:
        minuteTwo = "Two"
        break;

    case 3:
        minuteTwo = "Three"
        break;

    case 4:
        minuteTwo = "Four"
        break;

    case 5:
        minuteTwo = "Five"
        break;

    case 6:
        minuteTwo = "Six"
        break;

    case 7:
        minuteTwo = "Seven"
        break;

    case 8:
        minuteTwo = "Eight"
        break;

    case 9:
        minuteTwo = "Nine"
}

let minutesInt = parseInt(JSON.stringify(minuteIntOne)+JSON.stringify(minuteIntTwo));
var minutes;

switch (minutesInt) {
    case 11:
        minutes = "Eleven"
        break;

    case 12:
        minutes = "Twelve"
        break;

    case 13:
        minutes = "Thirteen"
        break;

    case 14:
        minutes = "Fourteen"
        break;

    case 15:
        minutes = "Fifteen"
        break;

    case 16:
        minutes = "Sixteen"
        break;

    case 17:
        minutes = "Seventeen"
        break;

    case 18:
        minutes = "Eighteen"
        break;

    case 19:
        minutes = "Nineteen"
        break;

    default:
        minutes = minuteOne+ " " + minuteTwo
}

console.log ("It is " + hour + " " + minutes + " " + merediam);



