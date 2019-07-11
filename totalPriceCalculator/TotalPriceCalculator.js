function totalPrice () {
    let basePrice = parseInt(document.getElementById("basePrice").value)
    let docFee = parseInt(document.getElementById("docFee").value)
    let taxRate = parseInt(document.getElementById("taxRate").value)
    let registration = parseFloat(document.getElementById("registration").value)
    console.log(registration)
    let result = (((basePrice + docFee) * (1 + (taxRate/100))) + docFee)
    console.log(`
        Base Price: $${basePrice}
        Doc Fee: $${docFee}
        Tax Rate: ${taxRate}%
        Registration: $${registration.toFixed(2)}
        Total Price: $${result} `)
    document.getElementById("result").innerHTML = `<br>
        Base Price: $${basePrice}<br>
        Doc Fee: $${docFee}<br>
        Tax Rate: ${taxRate}%<br>
        Registration: $${registration.toFixed(2)}<br>
        Total Price: $${result}`
}

const input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});


