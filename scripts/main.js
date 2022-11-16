ccNumber = document.querySelector('#cc-number')
ccNumberView = document.querySelector('.cc-number-view')
ccFlag = document.querySelector('.cc-flag')

ccNumber.addEventListener('input', handleCcNumber)
function handleCcNumber () {
    ccNumberView.innerHTML = ccNumber.value == "" ? "1234 5678 9012 3456" : ccNumber.value

}

ccName = document.querySelector('#cc-name')
nameView = document.querySelector('.name-view h5')

ccName.addEventListener('input', handleCcName)
function handleCcName () {
    nameView.textContent = (ccName.value == "") ? "Nome Completo" : ccName.value
}

ccExpiration = document.querySelector('#cc-expiration')
expirationView = document.querySelector('.expiration-view h5')

ccExpiration.addEventListener('input', handleCcExpiration)
function handleCcExpiration () {
    expirationView.textContent = (ccExpiration.value == "") ? "02/30" : ccExpiration.value
}

ccCvc = document.querySelector('#cc-cvc')
cvcView = document.querySelector('.cvc-view h5')

ccCvc.addEventListener('input', handleCcCvc)
function handleCcCvc () {
    cvcView.textContent = (ccCvc.value == "") ? "230" : ccCvc.value
}