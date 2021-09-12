// 'cat' -> { c: 1, a: 1, t: 1}

export const getLetterCount = (value: string): unknown => {
  const letters = value.split('');
  const letterCount: any = {};

  letters.forEach(letter => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });

  return letterCount;
};