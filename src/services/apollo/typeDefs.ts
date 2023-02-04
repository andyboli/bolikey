const typeDefs = `#graphql
enum RuleTypes {
  minDigit
  minLowercase
  minSize
  minSpecialChars
  minUppercase
  noRepeted
}

type Verify {
  noMatch: [RuleTypes]
  verify: Boolean
}

input Rule {
  rule: RuleTypes
  value: Int
}

type Query {
  verify(password: String!, rules: [Rule]): Verify
}
`;

export default typeDefs;
