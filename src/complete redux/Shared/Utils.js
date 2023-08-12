import * as Constants from '../Shared/Constants'

export function isEmailValid(email) {
    let emailRegex = Constants.Email_Regex;
    return emailRegex.test(email);
}

export function isNumberValid(number) {
    let numberRegex = Constants.Number_Regex;
    return numberRegex.test(number);
}

export function isPasswordValid(password) {
    let PasswordRegex = Constants.Password_Regex;
    return PasswordRegex.test(password);
}
export function isConfirmPasswordValid(confirmPassword, password) {
    if (confirmPassword !== password) {
        return false;
    }
    return true;
}