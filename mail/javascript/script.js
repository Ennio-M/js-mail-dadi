const mailList = [
    "carlovanzini@gmail.com",
    "marcgene@gmail.com",
    "guidolavespa@gmail.com",
    "homersimpson@hotmail.com",
    "paperella@boolean.com",
    "petergriffin@yahoo.com",
    "javascriptèdivertente@gmail.com"
];
console.log(mailList);
const userMail = prompt("Inserisci la tua mail");
console.log(userMail);
for(let i = 0; i < mailList.length; i++) {
    console.log(i)
    if(userMail == mailList[i]) {
        alert("Puoi entrare");
        var verify = true;
    }
}
if(!(verify)) {
    alert("Non puoi entrare")
}