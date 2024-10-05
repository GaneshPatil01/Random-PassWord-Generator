const password = document.querySelector('#password');

const btn = document.getElementById('btn');
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()";
const allChars = upperCase + lowerCase + number + symbol;

let randomPass = ()=>{
    let password = "";
    password += upperCase[Math.floor(Math.random() *upperCase.length)];
    password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
    password += number[Math.floor(Math.random() *number.length)];
    password += symbol[Math.floor(Math.random() *symbol.length)];

    while(length > password.length)
    {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    this.password.value = password;
};
// let copyPassWord = ()=>
//     {
//        password.select();
//        document.execCommand('copy');
    
//     }
let copyPassWord = ()=>{
    let value = password.value;
    navigator.clipboard.writeText(value);
};

btn.addEventListener('click', randomPass);
document.querySelector('img').addEventListener('click' , copyPassWord);

