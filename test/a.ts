import * as utils from "../src/utils";
const date = new Date(2020, 8, 10, 10, 10, 10);
const a = utils.getFirstDateOfWeek(date, 0);
const b = utils.getLastDateOfWeek(date, 6);
console.log(a, date, b);