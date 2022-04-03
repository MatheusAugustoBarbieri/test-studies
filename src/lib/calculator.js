const sum = (num1, num2) => {
  const int1 = parseInt(num1);
  const int2 = parseInt(num2);
  // se o numero Não for um numero ele dispara um erro
  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check your input');
  }

  return int1 + int2;
};

function sumTwo(num1, num2) {
  return num1 * num2;
}

export { sum, sumTwo };
