function validatePassword(){
    passString = document.querySelector("#password").value;
    const regex = ["(?=.*[A-Z])", "(?=.*[a-z])", "(?=.*[0-9])", "([@ | $ | % | !])", 
                    "Uppercase Letter Missing", "Lowercase Letter Missing", "Number Missing", "Special Character Missing"];

    console.log(passString);
    for (let i=0; i<regex.length/2; i++){
        if (passString.match(regex[i]) === null) {
            console.log(passString.match(regex[i]));
            alert(regex[i+4]);
            return;
        }
    }

    alert("Password Accepted!");
}