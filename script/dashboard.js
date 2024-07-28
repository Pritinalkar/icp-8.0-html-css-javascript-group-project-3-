
let user = JSON.parse(localStorage.getItem("logedInUser"))
let courses = JSON.parse(localStorage.getItem("cartItems"))
let settingBtn = document.querySelector("#setting")
let close = document.querySelector("#close")
let page = document.querySelector("#setting-page")
let UpdateDiv = document.querySelector("#update")

//console.log(user)

 settingBtn.addEventListener("click",(e)=>{
 e.preventDefault()
     page.style.display="block"
 })

 close.addEventListener("click",(e)=>{
    e.preventDefault()
        page.style.display="none"
})




//functions calls
//console.log(courses)
setInfo(user)


let instructur = ["priti", "neha", "mansi", "vaishnavi", "samkisha", "ruchi", "sarthak", "rupesh", "mahesh", "tanmay"]

createCards(courses)

function setInfo() {
    document.querySelector(".name").innerText = `hey ${user.name}`
    document.querySelector(".email").innerText = `${user.email}`
    let profilepic = document.querySelector("#profile img")
    profilepic.src = user.gender == "Male" ? "../images/male.svg" : "../images/female.svg"
}

function createCards(courses) {

    let createCouses = ""
    if (courses == null) {
        createCouses = `<h3>noting to show here , <u><a style="color:#117958" href="../pages/course.html">buy now</a></u>.</h3>`
    } else {

        courses.forEach((course) => {

            createCouses += `<div class="course">
                    <span><i class="ri-live-fill"></i> ${course.name}</span>
                    <span><i class="ri-calendar-fill"></i>buy on ${course.dateAdded}</span>
                    <span><i class="ri-price-tag-3-fill"></i>price ${course.price}</span>
                    <span><i class="ri-check-double-line"></i>Teacher:${instructur[Math.floor(Math.random() * 10)]}</span>
                    <a href="../pages/video.html">see lectures</a>
                </div>`
        });

    }

    document.querySelector("#course-container").innerHTML = createCouses

}


function chnaegInfo(action){
     UpdateDiv.style.display="flex"
       if(action== "password"){
         UpdateDiv.innerHTML=`

              <input type="text" placeholder="enter your old pass word" id="old">
              <input type="text" placeholder="enter the new password" id="new">
              <p>when you chnage password next time login with new password.</p>
              <button onclick="updatePass()">update</button>`

       }else if(action=="delete"){
        UpdateDiv.innerHTML=`

        <input type="email" placeholder="enter your email" id="old">
        <input type="password" placeholder="enter your password" id="new">
        <p><input type="checkbox" name="" id="chk"><label for="chk">i understand the action</label></p>
        <button onclick="deleteUser()">delete</button>`

       }
}




function updatePass(){

let oldValue = document.querySelector("#old").value
let newValue = document.querySelector("#new").value
  
   if(oldValue==user.pass){
    
       let users=JSON.parse(localStorage.getItem('user'))

         if(newValue.length <8){
              notification("password length should grater than 8",2000)
         }else{
            user.pass=newValue
            users.push(user)
            localStorage.setItem('user',JSON.stringify(users))
            localStorage.setItem('user',JSON.stringify(users.splice(users.length-1,1)))
            notification("password change successfully...",3000)
            page.style.display="none"
         }
     
   }else{
    notification("wrong password...",2000)
   }

}



function deleteUser(){
 
let email = document.querySelector("#old").value
let pass = document.querySelector("#new").value
let checkdel = document.querySelector("#chk").checked

 console.log(user,"hii")

   if(email==user.email && pass==user.pass && checkdel){
      
     let users = JSON.parse(localStorage.getItem('user'))

       users.forEach((foundedUsers,index)=>{
             if(foundedUsers.email==user.email && foundedUsers.pass==user.pass){
                
                  users.splice(index,1)
                  localStorage.setItem('user',JSON.stringify(users))
                  localStorage.removeItem('cartItems')
                  localStorage.removeItem('logedInUser')
                  page.style.display="none"
                  notification("deleting account...",3000)
                  window.location.assign('../index.html')
             }else{
                notification("your password has been changed login again...",2000)
                page.style.display="none"
             }
       })
    
   }else{
      notification("please check the details...",2000)
   }
    
}


function logOutUser(){
     document.querySelector("#logOut").addEventListener("click",()=>{
        localStorage.removeItem('logedInUser')
        notification("logout suessfully...",2000)
        console.log("hiii")
     })
}
logOutUser()




function notification(error, time) {
    let notification = document.querySelector('.notification')
    notification.style.display = "block"
    notification.innerText = error
    setTimeout(function () {
        notification.style.display = "none"
    }, time)
}


//setuser name tittle.....

 document.querySelector('title').innerText=`${user.name} | Dashboard |codeX `