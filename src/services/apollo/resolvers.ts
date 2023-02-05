import AppController from "../../controller";

enum RuleTypes {
  "minDigit" = "minDigit",
  "minLowercase" = "minLowercase",
  "minSize" = "minSize",
  "minSpecialChars" = "minSpecialChars",
  "minUppercase" = "minUppercase",
  "noRepeted" = "noRepeted",
}

type Rule = {
  rule: RuleTypes;
  value: number;
};

interface VerifyArgsInterface {
  password: string;
  rules: Rule[];
}

const mapRuleToController = {
  [RuleTypes.minDigit]: AppController.minDigit,
  [RuleTypes.minLowercase]: AppController.minLowercase,
  [RuleTypes.minSize]: AppController.minSize,
  [RuleTypes.minSpecialChars]: AppController.minSpecialChars,
  [RuleTypes.minUppercase]: AppController.minUppercase,
  [RuleTypes.noRepeted]: AppController.noRepeted,
};

const verify = (parent: any, { password, rules }: VerifyArgsInterface) => {
  const noMatchRules = rules
    .filter(({ rule, value }) => {
      if (rule === RuleTypes.noRepeted)
        return !mapRuleToController[rule](password);

      return !mapRuleToController[rule]({ password, minNumber: value });
    })
    .map(({ rule }) => rule);

  return { verify: !noMatchRules.length, noMatch: noMatchRules };
};

export const Query = { verify };
