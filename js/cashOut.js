// cash out section
document
  .getElementById('cash-out-btn')
  .addEventListener('click', function (event) {
    event.preventDefault()
    const cashOut = document.getElementById('cash-out-amaount').value
    const cashOutPIN = document.getElementById('cash-out-pin').value
    const balance = document.getElementById('balance').innerText
    if (cashOutPIN === '1234') {
      const cashOutNumber = parseFloat(cashOut)
      const balanceNumber = parseFloat(balance)
      const newBalance = balanceNumber - cashOutNumber
      document.getElementById('balance').innerText = newBalance
    } else {
      alert('Cash out money failed, please try agin')
    }
    // console.log('cash out btn clicked')
  })
