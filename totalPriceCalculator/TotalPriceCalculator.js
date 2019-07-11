function totalPrice () {
    let basePrice = parseInt(document.getElementById("basePrice").value)
    let docFee = parseInt(document.getElementById("docFee").value)
    let taxRate = parseInt(document.getElementById("taxRate").value)
    let registration = parseFloat(document.getElementById("registration").value)
    let rebates = parseInt(document.getElementById("rebates").value)
    let misc = parseInt(document.getElementById("misc").value)
    let payoff = parseInt(document.getElementById("payoff").value)
    let tradeValue = parseInt(document.getElementById("tradeValue").value)
    let downPayment = parseInt(document.getElementById("downPayment").value)
    let result = (((basePrice + docFee + misc - tradeValue + payoff) * (1 + (taxRate/100))) - rebates - downPayment + registration).toFixed(2)
    
    document.getElementById("result").innerHTML = `<br>
        Total Price: $${result}`    
}

const input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function monthlyPaymentCalc () {
  let principal = parseFloat(document.getElementById("principal").value)
  let interestRate = parseFloat(document.getElementById("interestRate").value)
  let monthlyInterest = (interestRate/100)/12
  let term = parseInt(document.getElementById("term").value)
  let x = Math.pow(1 + monthlyInterest, term)
  let monthlyPayment = ((principal * x * monthlyInterest)/(x - 1)).toFixed(2)

// compute the monthly payment figure
// var x = Math.pow(1 + interest, payments); //Math.pow computes powers
// var monthly = (principal*x*interest)/(x-1);

  document.getElementById("monthlyPayment").innerHTML = `<br>
        Monthly Payment: $${monthlyPayment}`
}


