document.getElementById("btn-deposit").addEventListener("click", function () {


    const depositField = document.getElementById('deposit-field')


    const newdipositAmountString = depositField.value
    const newdipositAmount = parseFloat(newdipositAmountString)

    const dipositTotalElement = document.getElementById('deposit-total')
    const previousdipositTotalString = dipositTotalElement.innerText;
    const previousdipositTotal = parseFloat(previousdipositTotalString)
    const currentDepositTotal = newdipositAmount + previousdipositTotal

    dipositTotalElement.innerText = currentDepositTotal




    const blanceTotalElement = document.getElementById('balance-total')
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlance = parseFloat(previousBlanceTotalString)
    const currentBalance = newdipositAmount + previousBlance
    blanceTotalElement.innerText = currentBalance
    // step -7
    depositField.value = ''
})