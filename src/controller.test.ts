import AppConstants from "./constants";
import AppController from "./controller";
import AppService from "./services";

const getRandomNumbers = (length: number) => {
  const randomNumbers = [];

  for (let i = 0; i < length; i++)
    randomNumbers.push(AppService.FakerService.getRandomNumber());

  return randomNumbers;
};

describe("Test App Controller", () => {
  describe("Text minDigit function", () => {
    it("Should return true when the password has at least the min number quantity of integers", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber();
      const randomNumbers = getRandomNumbers(minNumberMock);
      const randomPassword = AppService.FakerService.getRandomPassword();

      const randomPasswordOnlyWithIntegersMock = randomNumbers.join("");
      const randomPasswordWithIntegersInTheStartMock =
        randomPasswordOnlyWithIntegersMock + randomPassword;
      const randomPasswordWithIntegersInTheEndMock =
        randomPassword + randomPasswordOnlyWithIntegersMock;
      const randomPasswordWithIntegersInTheMiddleMock =
        randomPassword + randomNumbers.join("") + randomPassword;
      const randomPasswordWithIntegersSpreadedInTheMiddleMock =
        randomPassword + randomNumbers.join(randomPassword) + randomPassword;

      const validPasswordsMocks = [
        randomPasswordOnlyWithIntegersMock,
        randomPasswordWithIntegersInTheStartMock,
        randomPasswordWithIntegersInTheEndMock,
        randomPasswordWithIntegersInTheMiddleMock,
        randomPasswordWithIntegersSpreadedInTheMiddleMock,
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
      // When the min number is 0 the minDigit function should return true
      const minNumberMock = AppService.FakerService.getRandomNumber(1);
      const lessThanMinNumberMock =
        AppService.FakerService.getLessThanMinNumber(minNumberMock);
      const randomNumbers = getRandomNumbers(lessThanMinNumberMock);
      const randomTextPassword = AppService.FakerService.getRandomPassword(
        undefined,
        AppConstants.TEXT_REGEX
      );

      const randomPasswordOnlyWithIntegersMock = randomNumbers.join("");
      const randomPasswordWithIntegersInTheStartMock =
        randomPasswordOnlyWithIntegersMock + randomTextPassword;
      const randomPasswordWithIntegersInTheEndMock =
        randomTextPassword + randomPasswordOnlyWithIntegersMock;
      const randomPasswordWithIntegersInTheMiddleMock =
        randomTextPassword + randomNumbers.join("") + randomTextPassword;
      const randomPasswordWithIntegersSpreadedInTheMiddleMock =
        randomTextPassword +
        randomNumbers.join(randomTextPassword) +
        randomTextPassword;

      const invalidPasswordsMocks = [
        randomPasswordOnlyWithIntegersMock,
        randomPasswordWithIntegersInTheStartMock,
        randomPasswordWithIntegersInTheEndMock,
        randomPasswordWithIntegersInTheMiddleMock,
        randomPasswordWithIntegersSpreadedInTheMiddleMock,
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
      const randomPasswordWithLowercaseCaractersInTheStartMock =
        randomPasswordOnlyWithLowercaseCaracters + randomPassword;
      const randomPasswordWithLowercaseCaractersInTheEndMock =
        randomPassword + randomPasswordOnlyWithLowercaseCaracters;
      const randomPasswordWithLowercaseCaractersInTheMiddleMock =
        randomPassword +
        randomPasswordOnlyWithLowercaseCaracters +
        randomPassword;
      const randomPasswordWithLowercaseCaractersSpreadedInTheMiddleMock =
        randomPassword +
        randomPasswordOnlyWithLowercaseCaracters
          .split("")
          .join(randomPassword) +
        randomPassword;

      const validPasswordsMocks = [
        randomPasswordOnlyWithLowercaseCaracters,
        randomPasswordWithLowercaseCaractersInTheStartMock,
        randomPasswordWithLowercaseCaractersInTheEndMock,
        randomPasswordWithLowercaseCaractersInTheMiddleMock,
        randomPasswordWithLowercaseCaractersSpreadedInTheMiddleMock,
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
      // When the min number is 0 the minLowercase function should return true
      const minNumberMock = AppService.FakerService.getRandomNumber(1);
      const lessThanMinNumberMock =
        AppService.FakerService.getLessThanMinNumber(minNumberMock);
      const randomNumberPassword = AppService.FakerService.getRandomPassword(
        undefined,
        AppConstants.NUMBER_REGEX
      );

      const randomPasswordOnlyWithLowercaseCaracters = lessThanMinNumberMock
        ? AppService.FakerService.getRandomWord(
            lessThanMinNumberMock
          ).toLocaleLowerCase()
        : "";
      const randomPasswordWithLowercaseCaractersInTheStartMock =
        randomPasswordOnlyWithLowercaseCaracters + randomNumberPassword;
      const randomPasswordWithLowercaseCaractersInTheEndMock =
        randomNumberPassword + randomPasswordOnlyWithLowercaseCaracters;
      const randomPasswordWithLowercaseCaractersInTheMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithLowercaseCaracters +
        randomNumberPassword;
      const randomPasswordWithLowercaseCaractersSpreadedInTheMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithLowercaseCaracters
          .split("")
          .join(randomNumberPassword) +
        randomNumberPassword;

      const invalidPasswordsMocks = [
        randomPasswordOnlyWithLowercaseCaracters,
        randomPasswordWithLowercaseCaractersInTheStartMock,
        randomPasswordWithLowercaseCaractersInTheEndMock,
        randomPasswordWithLowercaseCaractersInTheMiddleMock,
        randomPasswordWithLowercaseCaractersSpreadedInTheMiddleMock,
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

  describe("Test minSize function ", () => {
    it("Should return true when the password has at least the min number size", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber();
      const greaterThanMinNumber =
        AppService.FakerService.getGreaterThanMinNumber(minNumberMock);
      const randomPasswordWithExactSizeMock =
        AppService.FakerService.getRandomPassword(minNumberMock);
      const randomPasswordWithGreaterSizeMock =
        AppService.FakerService.getRandomPassword(greaterThanMinNumber);

      const validPasswordsMocks = [
        randomPasswordWithExactSizeMock,
        randomPasswordWithGreaterSizeMock,
      ];

      validPasswordsMocks.forEach((validPasswordMock) =>
        expect(
          AppController.minSize({
            password: validPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeTruthy()
      );
    });

    it("Should return false when the password has less than the min number size", () => {
      // When the min number is 0 the minSize function should return true
      const minNumberMock = AppService.FakerService.getRandomNumber(1);
      const lessThanMinNumberMock =
        AppService.FakerService.getLessThanMinNumber(minNumberMock);
      const randomPasswordWithLessSizeMock =
        AppService.FakerService.getRandomPassword(lessThanMinNumberMock);

      expect(
        AppController.minSize({
          password: randomPasswordWithLessSizeMock,
          minNumber: minNumberMock,
        })
      ).toBeFalsy();
    });
  });

  describe("Test minSpecialChars function ", () => {
    it("Should return true when the password has at least the min number quantity of special caracters", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber();
      const randomPassword = AppService.FakerService.getRandomPassword();

      const randomPasswordOnlyWithSpecialCaracters =
        AppService.FakerService.getRandomPassword(
          minNumberMock,
          AppConstants.SPECIAL_REGEX
        );
      const randomPasswordWithSpecialCaractersInTheStartMock =
        randomPasswordOnlyWithSpecialCaracters + randomPassword;
      const randomPasswordWithSpecialCaractersInTheEndMock =
        randomPassword + randomPasswordOnlyWithSpecialCaracters;
      const randomPasswordWithSpecialCaractersInTheMiddleMock =
        randomPassword +
        randomPasswordOnlyWithSpecialCaracters +
        randomPassword;
      const randomPasswordWithSpecialCaractersSpreadedInTheMiddleMock =
        randomPassword +
        randomPasswordOnlyWithSpecialCaracters.split("").join(randomPassword) +
        randomPassword;

      const validPasswordsMocks = [
        randomPasswordOnlyWithSpecialCaracters,
        randomPasswordWithSpecialCaractersInTheStartMock,
        randomPasswordWithSpecialCaractersInTheEndMock,
        randomPasswordWithSpecialCaractersInTheMiddleMock,
        randomPasswordWithSpecialCaractersSpreadedInTheMiddleMock,
      ];

      validPasswordsMocks.forEach((validPasswordMock) =>
        expect(
          AppController.minSpecialChars({
            password: validPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeTruthy()
      );
    });

    it("Should return false when the password has less than the min number quantity of special caracters", () => {
      // When the min number is 0 the minSpecialChars function should return true
      const minNumberMock = AppService.FakerService.getRandomNumber(1);
      const lessThanMinNumberMock =
        AppService.FakerService.getLessThanMinNumber(minNumberMock);
      const randomNumberPassword = AppService.FakerService.getRandomPassword(
        undefined,
        AppConstants.NUMBER_REGEX
      );

      const randomPasswordOnlyWithSpecialCaracters = lessThanMinNumberMock
        ? AppService.FakerService.getRandomPassword(
            lessThanMinNumberMock,
            AppConstants.SPECIAL_REGEX
          )
        : "";
      const randomPasswordWithSpecialCaractersInTheStartMock =
        randomPasswordOnlyWithSpecialCaracters + randomNumberPassword;
      const randomPasswordWithSpecialCaractersInTheEndMock =
        randomNumberPassword + randomPasswordOnlyWithSpecialCaracters;
      const randomPasswordWithSpecialCaractersInTheMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithSpecialCaracters +
        randomNumberPassword;
      const randomPasswordWithSpecialCaractersSpreadedInTheMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithSpecialCaracters
          .split("")
          .join(randomNumberPassword) +
        randomNumberPassword;

      const invalidPasswordsMocks = [
        randomPasswordOnlyWithSpecialCaracters,
        randomPasswordWithSpecialCaractersInTheStartMock,
        randomPasswordWithSpecialCaractersInTheEndMock,
        randomPasswordWithSpecialCaractersInTheMiddleMock,
        randomPasswordWithSpecialCaractersSpreadedInTheMiddleMock,
      ];

      invalidPasswordsMocks.forEach((invalidPasswordMock) =>
        expect(
          AppController.minSpecialChars({
            password: invalidPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeFalsy()
      );
    });
  });

  describe("Test minUppercase function ", () => {
    it("Should return true when the password has at least the min number quantity of uppercase caracters", () => {
      const minNumberMock = AppService.FakerService.getRandomNumber();
      const randomPassword = AppService.FakerService.getRandomPassword();

      const randomPasswordOnlyWithUppercaseCaracters =
        AppService.FakerService.getRandomWord(
          minNumberMock
        ).toLocaleUpperCase();
      const randomPasswordWithUppercaseCaractersInTheStartMock =
        randomPasswordOnlyWithUppercaseCaracters + randomPassword;
      const randomPasswordWithUppercaseCaractersInTheEndMock =
        randomPassword + randomPasswordOnlyWithUppercaseCaracters;
      const randomPasswordWithUppercaseCaractersInTheMiddleMock =
        randomPassword +
        randomPasswordOnlyWithUppercaseCaracters +
        randomPassword;
      const randomPasswordWithUppercaseCaractersSpreadedInTheMiddleMock =
        randomPassword +
        randomPasswordOnlyWithUppercaseCaracters
          .split("")
          .join(randomPassword) +
        randomPassword;

      const validPasswordsMocks = [
        randomPasswordOnlyWithUppercaseCaracters,
        randomPasswordWithUppercaseCaractersInTheStartMock,
        randomPasswordWithUppercaseCaractersInTheEndMock,
        randomPasswordWithUppercaseCaractersInTheMiddleMock,
        randomPasswordWithUppercaseCaractersSpreadedInTheMiddleMock,
      ];

      validPasswordsMocks.forEach((validPasswordMock) =>
        expect(
          AppController.minUppercase({
            password: validPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeTruthy()
      );
    });

    it("Should return false when the password has less than the min number quantity of uppercase caracters", () => {
      // When the min number is 0 the minUppercase function should return true
      const minNumberMock = AppService.FakerService.getRandomNumber(1);
      const lessThanMinNumberMock =
        AppService.FakerService.getLessThanMinNumber(minNumberMock);
      const randomNumberPassword = AppService.FakerService.getRandomPassword(
        undefined,
        AppConstants.NUMBER_REGEX
      );

      const randomPasswordOnlyWithUppercaseCaracters = lessThanMinNumberMock
        ? AppService.FakerService.getRandomWord(
            lessThanMinNumberMock
          ).toLocaleUpperCase()
        : "";
      const randomPasswordWithUppercaseCaractersInTheStartMock =
        randomPasswordOnlyWithUppercaseCaracters + randomNumberPassword;
      const randomPasswordWithUppercaseCaractersInTheEndMock =
        randomNumberPassword + randomPasswordOnlyWithUppercaseCaracters;
      const randomPasswordWithUppercaseCaractersInTheMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithUppercaseCaracters +
        randomNumberPassword;
      const randomPasswordWithUppercaseCaractersSpreadedInTheMiddleMock =
        randomNumberPassword +
        randomPasswordOnlyWithUppercaseCaracters
          .split("")
          .join(randomNumberPassword) +
        randomNumberPassword;

      const invalidPasswordsMocks = [
        randomPasswordOnlyWithUppercaseCaracters,
        randomPasswordWithUppercaseCaractersInTheStartMock,
        randomPasswordWithUppercaseCaractersInTheEndMock,
        randomPasswordWithUppercaseCaractersInTheMiddleMock,
        randomPasswordWithUppercaseCaractersSpreadedInTheMiddleMock,
      ];

      invalidPasswordsMocks.forEach((invalidPasswordMock) =>
        expect(
          AppController.minUppercase({
            password: invalidPasswordMock,
            minNumber: minNumberMock,
          })
        ).toBeFalsy()
      );
    });
  });

  describe("Test noRepeted function ", () => {
    it("Should return true when the password do not has any caractere repeated in sequence", () => {
      const noRepeatedCaracterePasswordMock = "TestNoRepeated";

      expect(
        AppController.noRepeted(noRepeatedCaracterePasswordMock)
      ).toBeTruthy();
    });

    it("Should return false when the password has any caractere repeated in sequence", () => {
      const noRepeatedCaracterePassword = "TestNoRepeated";

      const repeatedCaracterePasswordMock = "AA";
      const repeatedCaracterePasswordInTheStartMock =
        repeatedCaracterePasswordMock + noRepeatedCaracterePassword;
      const repeatedCaracterePasswordInTheEndMock =
        noRepeatedCaracterePassword + repeatedCaracterePasswordMock;
      const repeatedCaracterePasswordInTheMiddleMock =
        noRepeatedCaracterePassword +
        repeatedCaracterePasswordMock +
        noRepeatedCaracterePassword;

      const invalidPasswordsMocks = [
        repeatedCaracterePasswordMock,
        repeatedCaracterePasswordInTheStartMock,
        repeatedCaracterePasswordInTheEndMock,
        repeatedCaracterePasswordInTheMiddleMock,
      ];

      invalidPasswordsMocks.forEach((invalidPasswordMock) =>
        expect(AppController.noRepeted(invalidPasswordMock)).toBeFalsy()
      );
    });
  });
});
