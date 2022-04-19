"use strict";
/**
 * functions are modified from Prashant Yadav
 * @https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/#:~:text=Javascript%20does%20not%20have%20any,to%20generate%20unique%20random%20ids.
 */
exports.__esModule = true;
/**
 * @returns unique id -- this exported function does almost the extact
 * same as the react-uuid package but without the additional bundle.
 * For this use case this function will suit this application well
 */
/** @returns random string of 4 chars */
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
/**
 *
 * @param num amount of substrings of 4 characters
 * @returns unique id
 *
 * example: guid(4) -> 9769-9c3d-2b0f-f736
 */
function guid(num) {
    var str = "";
    for (var i = 0; i < num; i++) {
        str += s4() + "-";
    }
    return str.slice(0, -1);
}
exports["default"] = guid;
module.exports = guid;
