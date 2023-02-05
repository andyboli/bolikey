import AppController from "./controller";
import AppService from "./services";

const TEXT_REGEX = /^[a-zA-Z]*$/;
const NUMBER_REGEX = /^[0-9]*$/;

const getRandomNumbers = (length: number) => {
  const randomNumbers = [];

  for (let i = 0; i < length; i++) {
    randomNumbers.push(AppService.FakerService.getRandomNumber());
  }

  return randomNumbers;
};

describe("Test App Controller", () => {
  describe("Text minDigit function", () => {
    it("Should return true when the password has at least the min number quantity of integers", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber();
      const randomNumbers = getRandomNumbers(minNumberMock);
      const randomPassword = AppService.FakerService.getRandomPassword();

      const randomPasswordOnlyWithIntegersMock = randomNumbers.join("");
      const randomPasswordWithIntegersAtStartMock =
        randomPasswordOnlyWithIntegersMock + randomPassword;
      const randomPasswordWithIntegersAtEndMock =
        randomPassword + randomPasswordOnlyWithIntegersMock;
      const randomPasswordWithIntegersAtMiddleMock =
        randomPassword + randomNumbers.join("") + randomPassword;
      const randomPasswordWithIntegersSpreadedAtMiddleMock =
        randomPassword + randomNumbers.join(randomPassword) + randomPassword;

      const validPasswordsMocks = [
        randomPasswordOnlyWithIntegersMock,
        randomPasswordWithIntegersAtStartMock,
        randomPasswordWithIntegersAtEndMock,
        randomPasswordWithIntegersAtMiddleMock,
        randomPasswordWithIntegersSpreadedAtMiddleMock,
      ];

      validPasswordsMocks.forEach((validPasswordMock) =>
        expect(
          AppController.minDigit({
            password: validPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeTruthy()
      );
    });

    it("Should return false when the password has less than the min number quantity of integers", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber(1);
      const lessThanMinNumberMock =
        AppService.FakerService.getLessThanMinNumber(minNumberMock);
      const randomNumbers = getRandomNumbers(lessThanMinNumberMock);
      const randomTextPassword = AppService.FakerService.getRandomPassword(
        undefined,
        TEXT_REGEX
      );

      const randomPasswordOnlyWithIntegersMock = randomNumbers.join("");
      const randomPasswordWithIntegersAtStartMock =
        randomPasswordOnlyWithIntegersMock + randomTextPassword;
      const randomPasswordWithIntegersAtEndMock =
        randomTextPassword + randomPasswordOnlyWithIntegersMock;
      const randomPasswordWithIntegersAtMiddleMock =
        randomTextPassword + randomNumbers.join("") + randomTextPassword;
      const randomPasswordWithIntegersSpreadedAtMiddleMock =
        randomTextPassword +
        randomNumbers.join(randomTextPassword) +
        randomTextPassword;

      const invalidPasswordsMocks = [
        randomPasswordOnlyWithIntegersMock,
        randomPasswordWithIntegersAtStartMock,
        randomPasswordWithIntegersAtEndMock,
        randomPasswordWithIntegersAtMiddleMock,
        randomPasswordWithIntegersSpreadedAtMiddleMock,
      ];

      invalidPasswordsMocks.forEach((invalidPasswordMock) =>
        expect(
          AppController.minDigit({
            password: invalidPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeFalsy()
      );
    });
  });

  describe("Test minLowercase function ", () => {
    it("Should return true when the password has at least the min number quantity of lowercase caracters", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber();
      const randomPassword = AppService.FakerService.getRandomPassword();

      const randomPasswordOnlyWithLowercaseCaracters =
        AppService.FakerService.getRandomWord(
          minNumberMock
        ).toLocaleLowerCase();
      const randomPasswordWithLowercaseCaractersAtStartMock =
        randomPasswordOnlyWithLowercaseCaracters + randomPassword;
      const randomPasswordWithLowercaseCaractersAtEndMock =
        randomPassword + randomPasswordOnlyWithLowercaseCaracters;
      const randomPasswordWithLowercaseCaractersAtMiddleMock =
        randomPassword +
        randomPasswordOnlyWithLowercaseCaracters +
        randomPassword;
      const randomPasswordWithLowercaseCaractersSpreadedAtMiddleMock =
        randomPassword +
        randomPasswordOnlyWithLowercaseCaracters
          .split("")
          .join(randomPassword) +
        randomPassword;

      const validPasswordsMocks = [
        randomPasswordOnlyWithLowercaseCaracters,
        randomPasswordWithLowercaseCaractersAtStartMock,
        randomPasswordWithLowercaseCaractersAtEndMock,
        randomPasswordWithLowercaseCaractersAtMiddleMock,
        randomPasswordWithLowercaseCaractersSpreadedAtMiddleMock,
      ];

      validPasswordsMocks.forEach((validPasswordMock) =>
        expect(
          AppController.minLowercase({
            password: validPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeTruthy()
      );
    });

    it("Should return false when the password has less than the min number quantity of lowercase caracters", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber(1);
      const lessThanMinNumberMock =
        AppService.FakerService.getLessThanMinNumber(minNumberMock);
      const randomNumberPassword = AppService.FakerService.getRandomPassword(
        undefined,
        NUMBER_REGEX
      );

      const randomPasswordOnlyWithLowercaseCaracters =
        AppService.FakerService.getRandomWord(
          lessThanMinNumberMock
        ).toLocaleLowerCase();
      const randomPasswordWithLowercaseCaractersAtStartMock =
        randomPasswordOnlyWithLowercaseCaracters + randomNumberPassword;
      const randomPasswordWithLowercaseCaractersAtEndMock =
        randomNumberPassword + randomPasswordOnlyWithLowercaseCaracters;
      const randomPasswordWithLowercaseCaractersAtMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithLowercaseCaracters +
        randomNumberPassword;
      const randomPasswordWithLowercaseCaractersSpreadedAtMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithLowercaseCaracters
          .split("")
          .join(randomNumberPassword) +
        randomNumberPassword;

      const invalidPasswordsMocks = [
        randomPasswordOnlyWithLowercaseCaracters,
        randomPasswordWithLowercaseCaractersAtStartMock,
        randomPasswordWithLowercaseCaractersAtEndMock,
        randomPasswordWithLowercaseCaractersAtMiddleMock,
        randomPasswordWithLowercaseCaractersSpreadedAtMiddleMock,
      ];

      invalidPasswordsMocks.forEach((invalidPasswordMock) =>
        expect(
          AppController.minLowercase({
            password: invalidPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeFalsy()
      );
    });
  });

  describe("Test minSize function ", () => {});

  describe("Test minSpecialChars function ", () => {});

  describe("Test minUppercase function ", () => {});

  describe("Test noRepeted function ", () => {});
});
