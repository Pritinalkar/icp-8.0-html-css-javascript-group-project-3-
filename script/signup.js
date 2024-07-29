


let userdetails=[]


//getting user info and validate it...
function savee() {
    let name = document.getElementById('_userName').value
    let surname = document.getElementById('_userName1').value
    let age = document.getElementById('_userAge').value
    let phone = document.getElementById('_userPhone').value
    let email = document.getElementById('_userEmail').value
    let pass = document.getElementById('_userPass').value
    let e = document.getElementById("_userGender");
    let gender = e.options[e.selectedIndex].text;

       if(phone.length < 10 || phone.length >10){

          validate("please enter valid number 😞",2000)

       }else if(parseInt(age) < 0  || parseInt(age) > 100 ){

        validate("please enter valid age 😞",3000)

       }else if(parseInt(age) <= 12){

        validate("age should grater than 12 😞",4000)

       }else if(pass.length < 8){
           
        validate("password should grater than 8 😞",5000)

       }else if(surname.length==0 || name.length == 0 || email.length==0){

        validate("please fill full all information 😞",6000) 

       }else{
        validate("yehh! signup successfully 🎉 now you are login",7000) 
        saveUser({name,surname,age,phone,email,pass,gender})
         name=""
         surname=""
         age=""
         phone=""
         email=""
         pass=""
       }
       
}

document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())

//send the validation notification...
function validate(error, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = error
    setTimeout(function () {
        notification.style.display = "none"
    }, time)
}


//save the user....
function saveUser(userInfo) {
    let user = {
        name: userInfo.name,
        gender: userInfo.gender,
        age: userInfo.age,
        phone: userInfo.phone,
        email: userInfo.email,
        pass: userInfo.pass,
        surname: userInfo.surname
    };

    userdetails.push(user)
    localStorage.setItem("user", JSON.stringify(userdetails));
      let inputs = document.querySelectorAll("form input")
          inputs.forEach((input)=>{
             input.value=""
          })
     let btn = document.querySelector("#btn")
         btn.value=`SIGN UP`
          window.location.assign("./login.html")
}


