var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var emailLogin = document.getElementById("emailLogin")
var passwordLogin = document.getElementById("passwordLogin")

var Users = []


if(localStorage.getItem("Users")!=null){
    Users = JSON.parse(localStorage.getItem("Users"))
  }

function SignUp(){

  if (validation()) {
    var users = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    }
    Users.push(users)
    localStorage.setItem("Users",JSON.stringify(Users))
    ClearForm()
    
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: ` -Name must contain at least 3 characters 
       -Email must be a valid one Ex:(name@Example.com)  
       -Password must contain at least 8 characters`,
    });
  }
 
}

// var h1element = document.querySelector("welcome")
function Login(){
  var isFound= false
  for(var i =0; i < Users.length; i++){
    if (Users[i].email==emailLogin.value && Users[i].password==passwordLogin.value){
      isFound=true
      localStorage.setItem("User",JSON.stringify(Users[i]))
      // window.location.href="/home.html"
    }
  }
  if (isFound==false) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Invalid Email or Password`,
    });
  }
 
}

// document.getElementById("welcome").innerHTML+= localStorage.getItem("User")

function ClearForm() {
    nameInput.value =""
    emailInput.value =""
    passwordInput.value =""

}


function validation(){
  var email = emailInput.value
  var name = nameInput.value
  var pass = passwordInput.value
  var nameRegExp=/^.{3,}$/
  var emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  var passRegExp =/^.{8,}$/
  return emailRegExp.test(email) && nameRegExp.test(name) && passRegExp.test(pass)
}

