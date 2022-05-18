function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //clear the deposit Input
  inputField.value = "";
  return amountValue;
}
function updateTotalField(totalField, depositAmount) {
  const totalElement = document.getElementById(totalField);

  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + depositAmount;
}
function updatebalance(depositAmount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();

  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - depositAmount;
  }
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get the amount deposited
    const depositAmount = getInputValue("deposit-input");

    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updatebalance(depositAmount, true);
    }
  });

//Handel withdraw event button

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
      updateTotalField("withdraw-total", newWithdrawAmount);
      updatebalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
      window.alert("wrong Input");
    }
  });
