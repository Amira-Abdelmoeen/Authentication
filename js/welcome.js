
var user = JSON.parse(localStorage.getItem("User"))

document.getElementById("welcome").innerHTML+= " " + user.name


function logOut(){
    localStorage.removeItem("User")
    
    // window.location.href="/index.html"
}

