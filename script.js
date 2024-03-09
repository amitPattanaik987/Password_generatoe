const passwordbox=document.getElementById('password');
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const symbol="!@#$%^&*()_+|}{[]\:'<>,.?/`~-*"
const number="1234567890"
const allchar=uppercase+lowercase+symbol+number;

function createpass(){
    let password="";
    password=password+uppercase[Math.floor(Math.random()*uppercase.length)];
    password=password+lowercase[Math.floor(Math.random()*lowercase.length)];
    password=password+symbol[Math.floor(Math.random()*symbol.length)];
    password=password+number[Math.floor(Math.random()*number.length)];

    while (length>password.length) {
        password=password+allchar[Math.floor(Math.random()*allchar.length)];
    }
    passwordbox.value=password;
}

function copypass() {
    passwordbox.select();
    document.execCommand("copy");
}

function reset() {
    passwordbox.value=""
}