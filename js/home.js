document
  .getElementById('input-add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const addMoney = document.getElementById('input-add-amount').value
    const addMoneyPIN = document.getElementById('input-pin').value
    const balance = document.getElementById('balance').innerText
    if (addMoneyPIN === '1234') {
      const addMoneyNumber = parseFloat(addMoney)
      const balanceNumber = parseFloat(balance)
      const newBalance = addMoneyNumber + balanceNumber
      // console.log(newBalance)
      document.getElementById('balance').innerText = newBalance
    } else {
      alert('add money failed, please try agin')
    }
    // console.log(addMoney, addMoneyPIN)
  })
