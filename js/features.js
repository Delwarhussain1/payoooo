document
  .getElementById('add-mony-show-btn')
  .addEventListener('click', function () {
    console.log('add money button add')
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
  })
document
  .getElementById('cash-out-show-btn')
  .addEventListener('click', function () {
    console.log('cash button asche')
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
  })
