"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  
  
  let mission = prompt('Какую сумму Вы хотите накопить?');
  console.log('Цель накопить ' +mission+ ' рублей');
  
  let money;
  
  let addExpenses = prompt('Перечислите возможные расходы через запятую');
  console.log(addExpenses.toLowerCase().split(', '));
  
  let deposit = confirm('Есть ли у вас депозит в банке?');
  
  let expenses1, expenses2;
  
  let income;
  
  let period;
  
  
 
  let start = function () {
    do {
      money = +prompt('Ваш месячный доход?');
    } while (!isNumber(money));
  };
  
  start();
  

  console.log('Ваш месячный доход: ' +money+ ' рублей');
  
  
  let showTypeof = function(item){
    console.log (typeof item);
  };
  showTypeof(money);
  showTypeof(income);
  showTypeof(deposit);
  
  
  let getExpensesMonth = function(){
    let sum = 0;
  
    for (let i = 0; i < 2; i++) {
  
        if (i === 0) {
          expenses1 = prompt('Введите обязательную статью расходов');
        } else if (i === 1) {
          expenses2 = prompt('Введите обязательную статью расходов');
        }
  
      sum += +prompt('В какую сумму это обойдется?');
    }
    return sum;
  };
  
  let expensesAmount = getExpensesMonth();
  console.log ('Расходы за месяц: ' + expensesAmount);
  
  
  let getAccumulatedMonth = function(){
    return money - expensesAmount;
  };
  
  
  let accumulatedMonth = getAccumulatedMonth();
  
  
  period = mission / accumulatedMonth;
  console.log('Цель будет достигнута за: ' +Math.ceil(period)+ ' месяцев');
  
  
  let getTargetMonth = function(){
    return mission / accumulatedMonth;
  };

  getTargetMonth() > 0 ? console.log('Цель будет достигнута за : ', getTargetMonth() + ' месяцев') :
  console.log('Цель не будет достигнута');
  
  
  let budgetDay = accumulatedMonth / 30;
  
  
  let getStatusIncome = function(){
    if (budgetDay >= 1200){
      console.log('У Вас высокий уровень дохода');
    } else if (budgetDay >=600){
      console.log('У Вас средний уровень дохода');
    } else if (budgetDay < 600){
      console.log('К сожалению, у Вас низкий уровень дохода');
    } else if (budgetDay <= 0){
      console.log('Что-то пошло не так....');
    }
  };
  getStatusIncome();