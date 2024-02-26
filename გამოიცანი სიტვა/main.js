// 3)	გამოიცანი სიტყვა (თამაში)
//     a.	განსაზღვრეთ მასივში რამდენიმე შემთხვევითი სიტყვა.
//     b.	ამ მასივიდან აარჩიეთ შემთხვევითი სიტყვა, რომელიც იქნება გამოსაცნობი.
//     c.	მომხარებელს გამოვუტანოთ შეტყობინება, თუ რამდენი სიმბოლო არის ასაკრეფი (მაგ: 4 სიმბოლო უნდა გამოვიდეს ესე -> _ _ _ _).
//     d.	თითოეულ სიმბოლოს შემოტანაზე, უნდა გამოვუტანოთ შეტყობინება, არის თუ არა სიტყვაში ეს კონკრეტული ასო, თუ არის გამოვაჩინოთ სადაც არის დამთხვევა, ხოლო თუ არ არის გამოვიტანოთ მცდელობების რაოდენობა.
//     e.	თამაში გრძელდება მანამ სანამ არ ამოეწურება მცდელობების რაოდენობა (შეგიძლიათ კოდში განსაზღვროთ ან შემოატანინოთ) ან უსასრულოდ.

const wordArr = [`ავტომობილი`, `ფურცელი`, `ადამიანი`, `ცხოველი`];
console.log(wordArr);
const randomElement = wordArr[Math.floor(Math.random() * wordArr.length)];
console.log(` გამოსაცნობი სიტყვა - ${randomElement}`);

const guessWord = [];
for (let i = 0; i < randomElement.length; i++) {
  guessWord.push(`_`);
}
console.log(...guessWord);

let numberOfTries = Number(prompt(`შეიყვანეთ ცდების რაოდენობა`));
console.log(`ცდების რაოდენობაა ${numberOfTries}`);
for (let i = 1; i <= numberOfTries; i++) {
  let letter = prompt(`შეიყვანეთ ასო-ბგერა`);

  for (let i = 0; i < randomElement.length; i++) {
    if (randomElement[i] === letter) {
      console.log(`შეიცავს (${letter}) - ს, გააგრძელე ცდა`);
      guessWord[i] = letter;
    }
  }

  if (randomElement.indexOf(letter) === -1) {
    console.log(`არ შეიცავს (${letter}) - ს, კიდევ სცადე`);
  }

  console.log(...guessWord);
}

// for (let i = numberOfTries -1; i >= 0; i--){
//     console.log (`ცდების რაოდენობაა ${i}`)
// }
