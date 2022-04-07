function checkForVowels(str) {
  let regEx = /[aeiou]/g;
  const y = Array.from(new Set(str.toLowerCase().match(regEx)));
  console.log(`vowels : ${y.toString().replace(/,/g, ", ")}`);
}
checkForVowels("what Are the vowEls in thIs sentence?");
