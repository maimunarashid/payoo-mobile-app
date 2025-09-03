// add money button
const validPin = 1234
document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    if (accountNumber < 11) {
        alert("Please enter 11 digit account number!!")
        return;
    }
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("add-pin").value)
    if (pin != validPin) {
        alert("Please enter 4 digit pin number!!")
        return;
    }
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
})

// withdraw money button

document.getElementById("withdraw-btn").addEventListener('click', function (e) {
    e.preventDefault()
    
    const amount = parseInt(document.getElementById("withdraw-amount").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    const totalNewAvailableBalance =availableBalance - amount
    document.getElementById("available-balance").innerText = totalNewAvailableBalance


})