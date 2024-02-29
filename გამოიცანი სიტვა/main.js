// 3)	გამოიცანი სიტყვა (თამაში)
//     a.	განსაზღვრეთ მასივში რამდენიმე შემთხვევითი სიტყვა.
//     b.	ამ მასივიდან აარჩიეთ შემთხვევითი სიტყვა, რომელიც იქნება გამოსაცნობი.
//     c.	მომხარებელს გამოვუტანოთ შეტყობინება, თუ რამდენი სიმბოლო არის ასაკრეფი (მაგ: 4 სიმბოლო უნდა გამოვიდეს ესე -> _ _ _ _).
//     d.	თითოეულ სიმბოლოს შემოტანაზე, უნდა გამოვუტანოთ შეტყობინება, არის თუ არა სიტყვაში ეს კონკრეტული ასო, თუ არის გამოვაჩინოთ სადაც არის დამთხვევა, ხოლო თუ არ არის გამოვიტანოთ მცდელობების რაოდენობა.
//     e.	თამაში გრძელდება მანამ სანამ არ ამოეწურება მცდელობების რაოდენობა (შეგიძლიათ კოდში განსაზღვროთ ან შემოატანინოთ) ან უსასრულოდ.

const wordArr = [`ავტომობილი`, `ფურცელი`, `ადამიანი`, `ცხოველი`];
console.log(wordArr);
const randomElement = wordArr[Math.floor(Math.random() * wordArr.length)];

const guessWord = [];
for (let i = 0; i < randomElement.length; i++) {
  guessWord.push(`_`);
}
console.log(...guessWord);

let numberOfTries = Number(prompt(`შეიყვანეთ ცდების რაოდენობა`));
console.log(`ცდების რაოდენობაა ${numberOfTries}`);
for (let i = 1; i <= numberOfTries;) {
  let letter = prompt(`შეიყვანეთ ასო-ბგერა`);

  for (let j = 0; j < randomElement.length; j++) {
    if (randomElement[j] === letter) {
      console.log(`შეიცავს (${letter}) - ს, გააგრძელე ცდა`);
      guessWord[j] = letter;
    }
  }

  if (randomElement.indexOf(letter) === -1) {
    console.log(`არ შეიცავს (${letter}) - ს, დაგრჩა ${numberOfTries - i} ცდა`);
            i++;
  }

  console.log(...guessWord);

  if ( i > numberOfTries) {
    console.log(` გამოსაცნობი სიტყვა - ${randomElement}`);
  }
}

// for (let i = numberOfTries -1; i >= 0; i--){
//     console.log (`ცდების რაოდენობაა ${i}`)
// }
