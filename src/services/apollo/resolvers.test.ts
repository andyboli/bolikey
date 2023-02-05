import { RuleTypes } from "../../constants";
import AppController from "../../controller";
import FakerServicer from "../faker";
import resolvers from "./resolvers";

jest.mock("../../controller");

describe("Test apollo resolvers", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("First case: should call all rules callback", () => {
    const randomPasswordMock = FakerServicer.getRandomPassword();
    const randomValueMock = FakerServicer.getRandomNumber();

    resolvers.Query.verify(undefined, {
      password: randomPasswordMock,
      rules: [
        { rule: RuleTypes.minDigit, value: randomValueMock },
        { rule: RuleTypes.minLowercase, value: randomValueMock },
        { rule: RuleTypes.minSize, value: randomValueMock },
        { rule: RuleTypes.minSpecialChars, value: randomValueMock },
        { rule: RuleTypes.minUppercase, value: randomValueMock },
        { rule: RuleTypes.noRepeted, value: randomValueMock },
      ],
    });

    [
      RuleTypes.minDigit,
      RuleTypes.minLowercase,
      RuleTypes.minSize,
      RuleTypes.minSpecialChars,
      RuleTypes.minUppercase,
    ].forEach((rule) => {
      expect(AppController[rule]).toHaveBeenCalledWith({
        password: randomPasswordMock,
        minNumber: randomValueMock,
      });
    });

    expect(AppController.noRepeted).toHaveBeenCalledWith(randomPasswordMock);
  });

  it("Second case: should call some rules callback and not call others", () => {
    const randomPasswordMock = FakerServicer.getRandomPassword();
    const randomValueMock = FakerServicer.getRandomNumber();

    resolvers.Query.verify(undefined, {
      password: randomPasswordMock,
      rules: [
        { rule: RuleTypes.minDigit, value: randomValueMock },
        { rule: RuleTypes.minLowercase, value: randomValueMock },
        { rule: RuleTypes.minSize, value: randomValueMock },
      ],
    });

    const calledRules = [
      RuleTypes.minDigit,
      RuleTypes.minLowercase,
      RuleTypes.minSize,
    ];

    const notCalledRules = [
      RuleTypes.minSpecialChars,
      RuleTypes.minUppercase,
      RuleTypes.noRepeted,
    ];

    calledRules.forEach((rule) =>
      expect(AppController[rule]).toHaveBeenCalledWith({
        password: randomPasswordMock,
        minNumber: randomValueMock,
      })
    );

    notCalledRules.forEach((rule) =>
      expect(AppController[rule]).not.toBeCalled()
    );
  });

  it("Third case: should return only failed rules", () => {
    const randomPasswordMock = FakerServicer.getRandomPassword();
    const randomValueMock = FakerServicer.getRandomNumber();

    jest
      .spyOn(AppController, RuleTypes.minDigit)
      .mockImplementation(jest.fn(() => true));
    jest
      .spyOn(AppController, RuleTypes.minLowercase)
      .mockImplementation(jest.fn(() => true));
    jest
      .spyOn(AppController, RuleTypes.minSize)
      .mockImplementation(jest.fn(() => true));
    jest
      .spyOn(AppController, RuleTypes.minSpecialChars)
      .mockImplementation(jest.fn(() => false));
    jest
      .spyOn(AppController, RuleTypes.minUppercase)
      .mockImplementation(jest.fn(() => false));
    jest
      .spyOn(AppController, RuleTypes.noRepeted)
      .mockImplementation(jest.fn(() => false));

    expect(
      resolvers.Query.verify(undefined, {
        password: randomPasswordMock,
        rules: [
          { rule: RuleTypes.minDigit, value: randomValueMock },
          { rule: RuleTypes.minLowercase, value: randomValueMock },
          { rule: RuleTypes.minSize, value: randomValueMock },
          { rule: RuleTypes.minSpecialChars, value: randomValueMock },
          { rule: RuleTypes.minUppercase, value: randomValueMock },
          { rule: RuleTypes.noRepeted, value: randomValueMock },
        ],
      })
    ).toEqual({
      verify: false,
      noMatch: [
        RuleTypes.minSpecialChars,
        RuleTypes.minUppercase,
        RuleTypes.noRepeted,
      ],
    });
  });
});
