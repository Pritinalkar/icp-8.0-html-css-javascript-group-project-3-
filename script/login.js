let users = JSON.parse( localStorage.getItem('user'))

let loginBtn = document.querySelector("#btn")

  loginBtn.addEventListener("click",()=>{
    

    
    if(users==null || users.length==0){
      validate("can't find your account ,please signup 😞",2000)
      return
    }


    let email = document.querySelector("#_userMobile").value
    let pass = document.querySelector("#_userpass").value

      users.forEach((user)=> {
           if(email == user.email && pass== user.pass){
                 validate("login successfully..🎉",2000)
                 localStorage.setItem("logedInUser",JSON.stringify(user))
                 goTodashboard()
           }else{
              validate("please check details 😞",2000)
           }
      });
  
  })

 
document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())



//send the validation notification
function validate(error, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = error
    setTimeout(function () {
        notification.style.display = "none"
    }, time)
}

function goTodashboard(){
  window.location.assign("./dashboard.html")
}
    



