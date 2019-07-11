function totalPrice () {
    let basePrice = parseInt(document.getElementById("basePrice").value)
    let docFee = parseInt(document.getElementById("docFee").value)
    let taxRate = parseInt(document.getElementById("taxRate").value)
    let registration = parseFloat(document.getElementById("registration").value)
    let rebates = parseInt(document.getElementById("rebates").value)
    let misc = parseInt(document.getElementById("misc").value)
    let result = (((basePrice + docFee - rebates + misc) * (1 + (taxRate/100))) + registration).toFixed(2)
    console.log(`
        Base Price: $${basePrice}
        Doc Fee: $${docFee}
        Tax Rate: ${taxRate}%
        Registration: $${registration.toFixed(2)}
        Rebates: $${rebates}
        Miscellaneous: $${misc}
        Total Price: $${result} `)
    document.getElementById("result").innerHTML = `<br>
        Base Price: $${basePrice}<br>
        Doc Fee: $${docFee}<br>
        Tax Rate: ${taxRate}%<br>
        Registration: $${registration.toFixed(2)}<br>
        Rebates: $${rebates}<br>
        Miscellaneous: $${misc}<br>
        Total Price: $${result}`
}

const input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});


