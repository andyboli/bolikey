import { faker } from "@faker-js/faker";

/**
 * Function that returns an number greater than the given number.
 */
const getGreaterThanNumber = (num: number) =>
  num + faker.datatype.number({ precision: 1, max: 9, min: 1 });

/**
 * Function that returns an number less than the given number.
 */
const getLessThanNumber = (num: number) =>
  num -
  faker.datatype.number({
    precision: 1,
    max: num,
    min: num === 0 ? 0 : 1,
  });

/**
 * Function that returns an random integer number between the min and 9.
 */
const getRandomNumber = (min = 0) =>
  faker.datatype.number({
    precision: 1,
    max: 9,
    min,
  });

/**
 * Function that returns an random password with the given length and that matches the given regex.
 */
const getRandomPassword = (
  length = 3,
  regex = /^[a-zA-Z0-9!@#$%^&*()\-+\\\/{}\[\]]*$/
) => faker.internet.password(length, undefined, regex);

/**
 * Function that returns an random word with the given length.
 */
const getRandomWord = (length: number = 3) => faker.lorem.word(length);

/**
 * Module with functions that use instances of the @faker-js/faker module.
 */
const FakerServicer = {
  getGreaterThanNumber,
  getLessThanNumber,
  getRandomNumber,
  getRandomPassword,
  getRandomWord,
};

export default FakerServicer;
