

let closeBtn = document.querySelector("#close-menu img")
let menuPage = document.querySelector("#menu-bar")
let openBtn = document.querySelector("#right span img")
let checkBtn= document.getElementById("checkValue")
let body = document.getElementById("body")

/// editor paeg elements
  let textarea = document.querySelector("#txt1")
  let textarea2 = document.querySelector("#txt2")
  let textarea3 = document.querySelector("#txt3")

// footer element acces... 
let pages = document.querySelectorAll("#pages a")
let mobNo = document.querySelectorAll("#mob a")

    pages.forEach(page=>{page.style.color='black'})
    mobNo.forEach(no=>{no.style.color='black'})



openBtn.addEventListener('click',()=>{
 menuPage.style.right=`0px`
})

closeBtn.addEventListener('click',()=>{
    menuPage.style.right=`-100vw`
   })


checkBtn.addEventListener('click',function(e){

    if(checkBtn.checked){
       body.classList.remove("white-theam")
       body.classList.add("black-theam")
      
       pages.forEach(page=>{page.style.color='white'})
       mobNo.forEach(no=>{no.style.color='white'})
       //editor elements...
       textarea.style.backgroundColor='black'
       textarea2.style.backgroundColor="black"
       textarea3.style.backgroundColor="black"

       // footer elements

    }else{
       body.classList.remove("black-theam")
       body.classList.add("white-theam")
 
       pages.forEach(page=>{page.style.color='black'})
       mobNo.forEach(no=>{no.style.color='black'})


       textarea.style.backgroundColor='white'
       textarea2.style.backgroundColor="white"
       textarea3.style.backgroundColor="white"

    }
})


let dashboardLink = document.querySelector("#dashbordLink a")
let openPageUrl = window.location.href


dashboardLink.addEventListener("click",()=>{
  
     if(localStorage.getItem('logedInUser')){
           
           if(openPageUrl.includes("pages")){
             dashboardLink.setAttribute('href','./dashboard.html')
           }else{
            dashboardLink.setAttribute('href','./pages/dashboard.html')
           }

     }else{
          alert("please login to get your dashboard...")
     }

})
  