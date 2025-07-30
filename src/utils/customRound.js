 export function customRound(num) {
  const decimal = num % 1;

  if (decimal === 0.5 || decimal === -0.5) {
    return num;
  } else {
    return Math.round(num);
  }
}