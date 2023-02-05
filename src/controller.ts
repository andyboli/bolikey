interface MinFunctionInterface {
  password: string;
  minNumber: number;
}

/**
 * Rule callback that checks if the password has at least the minNumber of digits (0-9).
 */
const minDigit = ({ password, minNumber }: MinFunctionInterface) => {
  const minDigitRegex = new RegExp(`([\\s\\S]*\\d){${minNumber},}`);

  return minDigitRegex.test(password);
};

/**
 * Rule callback that checks if the password has at least the minNumber of lowercase caracters.
 */
const minLowercase = ({ password, minNumber }: MinFunctionInterface) => {
  const minLowercaseRegex = new RegExp(`([\\s\\S]*[a-z]){${minNumber},}`);

  return minLowercaseRegex.test(password);
};

/**
 * Rule callback that checks if the password has at least the minNumber of size.
 */
const minSize = ({ password, minNumber }: MinFunctionInterface) =>
  password.length >= minNumber;

/**
 * Rule callback that checks if the password has at least the minNumber of special caracters (!@#$%^&*()-+\/{}[]).
 */
const minSpecialChars = ({ password, minNumber }: MinFunctionInterface) => {
  const minSpecialCharsRegex = new RegExp(
    `([\\s\\S]*[!@#$%^&*()\\-+\\\\\/{}\\[\\]]){${minNumber},}`
  );

  return minSpecialCharsRegex.test(password);
};

/**
 * Rule callback that checks if the password has at least the minNumber of uppercasecase caracters.
 */
const minUppercase = ({ password, minNumber }: MinFunctionInterface) => {
  const minUppercaseRegex = new RegExp(`([\\s\\S]*[A-Z]){${minNumber},}`);

  return minUppercaseRegex.test(password);
};

/**
 * Rule callback that checks if the password has no repeated caracters in sequence.
 */
const noRepeted = (password: string) =>
  password
    .split("")
    .every((letter, index) =>
      index === 0 ? true : letter !== password[index - 1]
    );

/**
 * Application controller with all business logic functions isolated.
 */
const AppController = {
  minDigit,
  minLowercase,
  minSize,
  minSpecialChars,
  minUppercase,
  noRepeted,
};

export default AppController;
