var names = document.getElementById("crtname")
var emails = document.getElementById("crtemail")
var passwords = document.getElementById("crtPassword")
var creates = document.getElementById("crt-btn")
var creates = document.getElementById("crt-btn")
var log = document.getElementById("log-btn")



creates.addEventListener("click",function(){
   const createaccountdata={
    userName:names.value,
    useremails:emails.value,
    userpass:passwords.value
   }


   localStorage.setItem("data",JSON.stringify(createaccountdata))

  
  
      window.location.href="/index.html"
  
   
       
   
})



log.addEventListener("click",function(){
    window.location.href="/index.html"
})