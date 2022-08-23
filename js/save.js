document.getElementById('btn-save').addEventListener('click', function(){
    const incomeField = document.getElementById('income-field');
    const incomeString = incomeField.value;
    const incomeAmoumt = parseFloat(incomeString);

    const balanceField = document.getElementById('balance-field');
    const balanceString = balanceField.value;
    const balanceAmount = parseFloat(balanceString);
    console.log(balanceAmount); 

 const amountField = document.getElementById('amonut-field');
 const amountString = incomeAmoumt;
 const savingAmount = parseFloat(amountString);
 console.log(savingAmount);

 const remainingField = document.getElementById('remaining-field');
 const remainingString = balanceAmount- savingAmount;
 const remainingBalance = parseFloat(remainingString);
 console.log(remainingBalance);


});