var logsnames = document.getElementById("log-name")
var logemails = document.getElementById("log-email")
var logpasswords = document.getElementById("log-Password")
console.log(logsnames.value)
var creates = document.getElementById("crt-btn")
var log = document.getElementById("log-btn")
var localStoragedata= JSON.parse(localStorage.getItem("data"))
console.log(localStoragedata)
log.addEventListener("click",function(){
    if(localStoragedata.userName == logsnames.value ) {
        window.location.href="/Dashboard.html"
    }
    else{
        alert("create your account")
            window.location.href="/create.html"
    }
})
function call
(){
   
for(let i=0; i<arr.length; i++){
   
    if(localStoragedata.userName == logsnames.value ) {
        log.addEventListener("click",function(){
            window.location.href="/Dashboard.html"
            })
    }
    else{
        log.addEventListener("click",function(){
            alert("create your account")
            window.location.href="/create.html"
            })
    }
   }}
   creates.addEventListener("click",function(){
    window.location.href="/create.html"

    var login =true
})