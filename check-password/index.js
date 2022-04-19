"use strict";
exports.__esModule = true;
exports.passwordCheck = void 0;
var passwordCheck = function (password) {
    var whitespace = /^(?=.*\s)/;
    var uppercaseChar = /^(?=.*[A-Z]).*$/;
    var lowercaseChar = /(?=.*[a-z])/;
    var digits = /(?=.*[0-9])/;
    var specialChars = /^(?=.*[~`!@#$%^&*()--+={}|\:;"'<>,.?/_₹]).*$/;
    var length = /^.{8,255}$/;
    var verification = {
        message: "Please enter a password",
        status: false
    };
    if (whitespace.test(password)) {
        verification.message = "Password contains whitespace";
        return verification;
    }
    if (!uppercaseChar.test(password)) {
        verification.message =
            "Password must contain at least one uppercase character";
        return verification;
    }
    if (!lowercaseChar.test(password)) {
        verification.message = "Password must contain at least one lowercase char";
        return verification;
    }
    if (!digits.test(password)) {
        verification.message = "Password must contain at least one digit";
        return verification;
    }
    if (!specialChars.test(password)) {
        verification.message = "Password must contain one special character";
        return verification;
    }
    if (!length.test(password)) {
        verification.message = "Password must be at least 8 - 255 characters long";
        return verification;
    }
    verification.message = "Password meets requirements";
    verification.status = true;
    return verification;
};
exports.passwordCheck = passwordCheck;
module.exports = exports.passwordCheck;
