document
  .getElementById('input-add-money-btn')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const addMoney = document.getElementById('input-add-amount').value
    const addMoneyPIN = document.getElementById('input-pin').value
    console.log(addMoney, addMoneyPIN)
  })
