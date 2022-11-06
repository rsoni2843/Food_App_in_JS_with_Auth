
// let login = JSON.parse(localStorage.getItem("user"))||[] ; 
// console.log(login)
// console.log(login.email)
let forms = document.getElementById("form2") ; 
forms.addEventListener("submit",function(e){
    // document.getElementById("login").innerHTML = null ;
    e.preventDefault() ; 
    // document.getElementById("login").innerHTML = null ; 
    let data = JSON.parse(localStorage.getItem("userDetails")) ; 
    // console.log(data[1].email == forms.email) ;
      
    // console.log(data[0].email == forms.email.value) ; 
    data.forEach(function(el,i){
        if(el.email === forms.email.value && el.password === forms.password.value){
            alert("Login Successful")
            window.location.href = "./index.html" ;
            localStorage.setItem("user",JSON.stringify(el)) 
            // console.log(el)
            // document.getElementById("login").innerHTML = `<a href="./index.html">${el.name}</a>`
        }else if(el.email !== forms.email.value || el.password !== forms.password.value){
            alert("EMail or Password Wrong")
        }
    })
   
 
})
