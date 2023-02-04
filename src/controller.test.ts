import AppController from "./controller";
import AppService from "./services";

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
      const TEXT_REGEX = /^[a-zA-Z]*$/;
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

  describe("Test minLowercase function ", () => {});

  describe("Test minSize function ", () => {});

  describe("Test minSpecialChars function ", () => {});

  describe("Test minUppercase function ", () => {});

  describe("Test noRepeted function ", () => {});
});
