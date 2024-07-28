
let user = JSON.parse(localStorage.getItem("logedInUser"))
let courses = JSON.parse(localStorage.getItem("cartItems"))

let settingBtn = document.querySelector("#setting")
let close = document.querySelector("#close")
let page = document.querySelector("#setting-page")

 settingBtn.addEventListener("click",(e)=>{
 e.preventDefault()
     page.style.display="block"
 })

 close.addEventListener("click",(e)=>{
    e.preventDefault()
        page.style.display="none"
})

//functions calls
console.log(courses)
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
