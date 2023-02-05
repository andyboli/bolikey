interface MinFunctionInterface {
  password: string;
  minNumber: number;
}

// minDigit: tem pelo menos x dígitos (0-9)
const minDigit = ({ password, minNumber }: MinFunctionInterface) => {
  const minDigitRegex = new RegExp(`([\\s\\S]*\\d){${minNumber},}`);

  return minDigitRegex.test(password);
};

//minLowercase: tem pelo menos x caracteres minúsculos
const minLowercase = ({ password, minNumber }: MinFunctionInterface) => {
  const minLowercaseRegex = new RegExp(`([\\s\\S]*[a-z]){${minNumber},}`);

  return minLowercaseRegex.test(password);
};

//minSize: tem pelo menos x caracteres.
const minSize = ({ password, minNumber }: MinFunctionInterface) => {};

// minSpecialChars: tem pelo menos x caracteres especiais ( Os caracteres especiais são os
// caracteres da seguinte string: "!@#$%^&*()-+\/{}[]" )
const minSpecialChars = ({ password, minNumber }: MinFunctionInterface) => {};

// minUppercase: tem pelo menos x caracteres maiúsculos
const minUppercase = ({ password, minNumber }: MinFunctionInterface) => {};

// noRepeted: não tenha nenhum caractere repetido em sequência ( ou seja, "aab" viola esta
//*  */condição, mas "aba" não)
const noRepeted = (password: string) => {};

const AppController = {
  minDigit,
  minLowercase,
  minSize,
  minSpecialChars,
  minUppercase,
  noRepeted,
};

export default AppController;
