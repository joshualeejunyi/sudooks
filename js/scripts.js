function checkNum() {
    var elm = document.getElementById("number-input");
    var correcto = document.getElementById("correcto");
    
    if (elm.value == 456929) {
        elm.style.display = "none";
        correcto.style.color = "lawngreen";        
        var message = "Correct!<br>456929";
        correcto.innerHTML = message;
        
        var submitbtn = document.getElementById("submitbtn")
        submitbtn.style.display = "none";
    } else {
        var message = "Wrong! Try again!";
        correcto.style.color = "red";
        correcto.innerHTML = message;
    }
}