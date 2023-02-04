enum RuleTypes {
  minSize,
  minUppercase,
  minLowercase,
  minDigit,
  minSpecialChars,
  noRepeted,
}

type Rule = {
  rule: RuleTypes;
  value: Number;
};

const verify = (password: string, rules: Rule) => {
  return { verify: false, noMatch: ["noRepeted"] };
};

export const Query = { verify };
