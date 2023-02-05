import { faker } from "@faker-js/faker";

const getRandomNumber = (min = 0) =>
  faker.datatype.number({
    precision: 1,
    max: 9,
    min,
  });

const getLessThanMinNumber = (minNumber: number) =>
  minNumber -
  faker.datatype.number({
    precision: 1,
    max: minNumber,
    min: minNumber === 0 ? 0 : 1,
  });

const getGreaterThanMinNumber = (minNumber: number) =>
  minNumber + faker.datatype.number({ precision: 1, max: 9, min: 1 });

const getRandomWord = (length: number = 3) => faker.lorem.word(length);

const getRandomPassword = (
  length = 3,
  regex = /^[a-zA-Z0-9!@#$%^&*()\-+\\\/{}\[\]]*$/
) => faker.internet.password(length, undefined, regex);

const FakerServicer = {
  getRandomNumber,
  getRandomWord,
  getRandomPassword,
  getLessThanMinNumber,
  getGreaterThanMinNumber,
};

export default FakerServicer;
