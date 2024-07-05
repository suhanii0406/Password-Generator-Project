const passwordbox = document.getElementById("box");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*(){}[]<>?/\+-*~=";
const numbers = "0123456789";
const allchars = uppercase + lowercase + numbers + symbols ;

function createpw(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]

    while(length > password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)]
    }
    passwordbox.value = password;
}
function copypw(){
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value);
}
