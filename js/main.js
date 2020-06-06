let money = 1000;
let income = 'фриланс';
let addExpenses = 'Аренда, такси, еда';
let deposit = new Boolean(true);
let mission = 3000;
let period = 3 ;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяца');
console.log('Цель заработать '+ mission + ' рублей');

let splitString = addExpenses.split(",");
console.log(splitString);

let budgetDay = money/30;
console.log('Ваш дневной бюджет составил:'+budgetDay);