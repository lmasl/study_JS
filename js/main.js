"use strict";

let mission = 3000;
let money = +prompt('Ваш месячный доход?', 0);
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt ('Введите обязательную статью расходов');
let amount1 = parseInt(prompt ('Во сколько это обойдется?', 0) );
let expenses2 = prompt ('Введите обязательную статью расходов');
let amount2 = parseInt(prompt ('Во сколько это обойдется?', 0) );
let budgetMonth = money - amount1 - amount2;

console.log('Ваш месячный бюджет:' + budgetMonth);

let period = mission / budgetMonth;
console.log('3000 Вы накопите через:' + Math.ceil(period));

let budgetDay = budgetMonth / 30;
 console.log(Math.ceil(budgetDay));

 if (budgetDay >= 1200 ) {
    console.log('У вас высокий уровень дохода');
 } 
 
 if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода')
 }

 if (budgetDay <= 600 ) {
    console.log('К сожалению, у вас уровень дохода ниже среднего');
 } 
 
 if (budgetDay <= 0 ) {
    console.log('Что-то пошло не так...');
 } 

