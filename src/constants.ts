export enum RuleTypes {
  "minDigit" = "minDigit",
  "minLowercase" = "minLowercase",
  "minSize" = "minSize",
  "minSpecialChars" = "minSpecialChars",
  "minUppercase" = "minUppercase",
  "noRepeted" = "noRepeted",
}

const TEXT_REGEX = /^[a-zA-Z]*$/;
const NUMBER_REGEX = /^[0-9]*$/;
const SPECIAL_REGEX = /^[!@#$%^&*()\-+\\\/{}\[\]]*$/;

const AppConstants = { TEXT_REGEX, NUMBER_REGEX, SPECIAL_REGEX };

export default AppConstants;
