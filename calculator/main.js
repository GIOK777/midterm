//  1)	კალკულატორი
//      a.	ორ ოპერანდს შორის სხვადასხვა არითმეტიკული მოქმედებები (+, -, *, /, %, **)
//      b.	რიცხვების ვალიდირება
//      c.	შედეგის წარმატებით გამოტანა, სწორი ინპუტების შემთხვევაშიjavasc

debugger
let num1 = prompt("შეიყვანეთ პირველი რიცხვი");
while (isNaN(num1) || num1 === null || num1 === "") {
  alert("მონაცემი არასწორია, შეიყვანეთ რიცხვი");
  num1 = prompt("შეიყვანეთ პირველი რიცხვი");
};
let operation = prompt("რომელი ოპერაციის განხორციელება გსურთ (+,-,*,/,%,**)");
  while (operation !== `+` && operation !== `-` && operation !== `*` && operation !== `/` && operation !== `%` && operation !== `**`) {
  alert(`ოპერატორი არასწორია, სცადეთ თავიდან (+,-,*,/,%,**)`);
  operation = prompt("რომელი ოპერაციის განხორციელება გსურთ (+,-,*,/,%,**)");
  };
let num2 = prompt("შეიყვანეთ მეორე რიცხვი");
while (isNaN(num2) || num2 === null || num1 === "") {
  alert("მონაცემი არასწორია, შეიყვანეთ რიცხვი");
  num2 = prompt("შეიყვანეთ მეორე რიცხვი");
};
let result;
num1 = Number(num1);
num2 = Number(num2);
switch (operation) {
  case "+":
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;
  case "-":
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case "*":
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;
  case "/":
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
    break;
  case "%":
    result = num1 % num2;
    console.log(`${num1} % ${num2} = ${result}`);
    break;

  case "**":
    result = num1 ** num2;
    console.log(`${num1} ** ${num2} = ${result}`);
    break;
  default:
    alert(`ოპერატორი არასწორია, სცადეთ თავიდან (+,-,*,/,%,**)`);
}
