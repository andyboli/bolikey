import { RuleTypes } from "../../constants";
import resolvers from "./resolvers";

describe("Test apollo resolvers", () => {
  it("First case: should pass in all rules", () => {
    const allRulesPassedPassowordMock = "1TestP@s$w0rd";
    const valueMock = 2;

    expect(
      resolvers.Query.verify(undefined, {
        password: allRulesPassedPassowordMock,
        rules: [
          { rule: RuleTypes.minDigit, value: valueMock },
          { rule: RuleTypes.minLowercase, value: valueMock },
          { rule: RuleTypes.minSize, value: valueMock },
          { rule: RuleTypes.minSpecialChars, value: valueMock },
          { rule: RuleTypes.minUppercase, value: valueMock },
          { rule: RuleTypes.noRepeted, value: valueMock },
        ],
      })
    ).toEqual({ verify: true, noMatch: [] });
  });

  it("Second case: should not pass in any rule", () => {
    const anyRulesPassedPasswordMock = "1TP@ss$w0rd";
    const valueMock = 13;

    expect(
      resolvers.Query.verify(undefined, {
        password: anyRulesPassedPasswordMock,
        rules: [
          { rule: RuleTypes.minDigit, value: valueMock },
          { rule: RuleTypes.minLowercase, value: valueMock },
          { rule: RuleTypes.minSize, value: valueMock },
          { rule: RuleTypes.minSpecialChars, value: valueMock },
          { rule: RuleTypes.minUppercase, value: valueMock },
          { rule: RuleTypes.noRepeted, value: valueMock },
        ],
      })
    ).toEqual({
      verify: false,
      noMatch: [
        RuleTypes.minDigit,
        RuleTypes.minLowercase,
        RuleTypes.minSize,
        RuleTypes.minSpecialChars,
        RuleTypes.minUppercase,
        RuleTypes.noRepeted,
      ],
    });
  });

  it("Third case: should pass in some rules", () => {
    const allRulesPassedPassowordMock = "TesteSenhaForte!123&";

    expect(
      resolvers.Query.verify(undefined, {
        password: allRulesPassedPassowordMock,
        rules: [
          { rule: RuleTypes.minDigit, value: 4 },
          { rule: RuleTypes.minSize, value: 8 },
          { rule: RuleTypes.minSpecialChars, value: 2 },
          { rule: RuleTypes.noRepeted, value: 0 },
        ],
      })
    ).toEqual({ verify: false, noMatch: [RuleTypes.minDigit] });
  });
});
