
let checkBtn= document.getElementById("checkValue")
let body = document.getElementById("body")


checkBtn.addEventListener('click',function(e){

    if(checkBtn.checked){
       body.classList.remove("white-theam")
       body.classList.add("black-theam")
    }else{
       body.classList.remove("black-theam")
       body.classList.add("white-theam")
    }
})

// audio handling.....

let bgMusice = document.querySelector("#bgMusice")
let soundbtn = document.querySelector("#sound")

window.addEventListener("load",()=>{
  bgMusice.play()
})

let flag=0

soundbtn.addEventListener("click",()=>{
     if(flag==0){
       soundbtn.innerHTML=`<i class="ri-volume-mute-fill"></i>`
       bgMusice.pause()
       flag=1
     }else if(flag==1){
      soundbtn.innerHTML=`<i class="ri-volume-up-fill"></i>`
      bgMusice.play()
      flag=0
     }
})




