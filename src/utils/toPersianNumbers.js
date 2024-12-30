const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const persianToEnglishMap = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};
export function toPersianNumbersWithComma(n) {
  if (containsPersianDigits(n)) {
    // Sometimes i read from DB and all digits in english format so, i seprate with comma and change to persian
    //but, sometimes i read from an input so first each time i have to change them to english
    //and remove comma then do other opration

    const englishNumber = toEnglishNumbers(n);
    const numWithCommas = numberWithCommas(englishNumber); // 1000,2343
    const persianNumber = toPersianNumbers(numWithCommas);
    return persianNumber;
  } else {
    const numWithCommas = numberWithCommas(n); // 1000,2343
    const persianNumber = toPersianNumbers(numWithCommas);
    return persianNumber;
  }
}
// function containsEnglishDigits(persianNumber) {
//   const englishDigitRegex = /[0-9]/; // Regular expression for English digits
//   return englishDigitRegex.test(persianNumber);
// }
function containsPersianDigits(englishNumber) {
  const persianDigitRegex = /[\u06F0-\u06F9]/; // Regular expression for Persian digits
  return persianDigitRegex.test(englishNumber);
}
function numberWithCommas(x) {
  const removeAllComma = x.toString().replaceAll(",", "");
  const result = removeAllComma.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return result;
}

export function toPersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
export function toEnglishNumbers(n) {
  const clearComma = n.replaceAll(",", "");
  return clearComma
    .toString()
    .replace(/[\u06F0-\u06F9]/g, (digit) => persianToEnglishMap[digit]);
}
