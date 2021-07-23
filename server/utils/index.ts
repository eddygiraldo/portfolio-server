const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NAME_LENGTH = 3;

export const makeAleatoryName = (): string => {
  let result = '';

  for (let i = 0; i < NAME_LENGTH; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }

  return result;
};

export const getAleatoryPrice = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getMonthDifference = (firstDate: Date, secondDate: Date): number => {
  let months = 1;

  months += (secondDate.getFullYear() - firstDate.getFullYear()) * 12;
  months -= firstDate.getMonth();
  months += secondDate.getMonth();

  return months <= 0 ? 1 : months;
};
