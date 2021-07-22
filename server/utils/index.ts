const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NAME_LENGTH = 3;
const PRICE_MIN = 50;
const PRICE_MAX = 900;

export const makeAleatoryName = () : string => {
  let result = '';
  
  for (let i = 0; i < NAME_LENGTH; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }

  return result;
}

export const getAleatoryPrice = () : number => {
  return Math.floor(Math.random() * (PRICE_MAX - PRICE_MIN + 1)) + PRICE_MIN;
}