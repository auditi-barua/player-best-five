function cost_calculate(){
  const income = parseInt(document.getElementById('income-field').value);
  const food_cost = parseInt(document.getElementById('food-field').value);
  const rent_cost = parseInt(document.getElementById('rent-field').value);
  const clothes_cost = parseInt(document.getElementById('clothes-field').value);
  const total_expenses = document.getElementById('expenses-field');
  const balance = document.getElementById('balance-field');
  const total_cost = food_cost + rent_cost + clothes_cost ;
  const remaining_balance = income-total_cost;
  if(income > 1){
    total_expenses.innerText = total_cost;
    balance.innerText = remaining_balance;
  }
  else{
    alert('enter number in input');
  }
}
function saving_amount(){
  const balance = parseInt(document.getElementById('balance-field').innerText);
  const saving_persent = parseInt(document.getElementById('save-input').value);
  const saving_amount_show = document.getElementById('saving_amount');
  const remaining_amount = document.getElementById('remaining-amount');
  const saving_amount = balance * saving_persent;
  const save_money = saving_amount / 100;
  const remaining_balance = balance - saving_amount;

  saving_amount_show.innerText = saving_amount;
  remaining_amount.innerText = remaining_balance;
}
  document.getElementById('btn-calculate').addEventListener('click', function(){
    cost_calculate()
  })
 document.getElementById('btn-save').addEventListener('click',function(){
  saving_amount();
});