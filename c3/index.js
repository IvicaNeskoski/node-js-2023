// // const test_funkcija = require("./text_convert");
// const { b, c, test_funkcija } = require(`./text_convert`);

// console.log(b);
// console.log(c);
// console.log(test_funkcija(c, b));

// // const test_funkcija = require(`./text_convert`);

// // console.log(test_funkcija(20, 15));

const { firstLetterUppercase, textStats } = require(`./text_convert`);

text1 = "zdravo svetu ova e samo test.";

console.log(firstLetterUppercase(text1));

let primer_text =
  "Zdravo Zhivko.Kako si? Gledam deka te nema na predavanja. Si se sapushtil!";
console.log(textStats(primer_text));
