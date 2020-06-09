"use strict";

let mission = 3000;
let income = 'фриланс';
let money = +prompt('Ваш месячный доход?', 0);
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt ('Введите обязательную статью расходов');
let amount1 = parseInt(prompt ('Во сколько это обойдется?', 0) );
let expenses2 = prompt ('Введите обязательную статью расходов');
let amount2 = parseInt(prompt ('Во сколько это обойдется?', 0) );


function getExpensesMonth() {
    let sum = amount1 + amount2;

    return sum;
   
}

let expensesMonth = getExpensesMonth();

function getAccumulatedMonth () {

let result = money - expensesMonth;

return result;

}

let accumulatatedMonth = getAccumulatedMonth ();

function getTargetMonth() {
   
   let period = mission / accumulatatedMonth;

   return period;
}

let budgetDay = accumulatatedMonth / 30;

function getStatusIncome() {
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

}

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(getExpensesMonth());
console.log(addExpenses);
console.log(getTargetMonth());
console.log('Ваш дневной бюджет ' + budgetDay);

getStatusIncome();