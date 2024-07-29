const feedbacks  = []
//declare array to add feedback\
function Loadfromloacalstorage()
{
    const allfeedback = JSON.parse(localStorage.getItem('allfeedback'))
    if(allfeedback)
    {
        feedbacks.push(...allfeedback)
    }
   
}
Loadfromloacalstorage()
function loadFeedbacks()
{
    localStorage.setItem("allfeedback",JSON.stringify(feedbacks));
    const feedbackContaoiner = document.getElementById('feedback_con')
    feedbackContaoiner.innerHTML='';
    for(const feedback of feedbacks )  
    {
        feedbackContaoiner.innerHTML +=
        `<div class= "parent_con"> 
        <div class="feedbacks_con">
        <div class="feedback_item">${feedback}</div>
        <img src= "./../images/Placement_Images/icon-5359553.png" class
        ="feedback_img">
        </div>
        </div>`
       
        
    }
    
    
}
loadFeedbacks();


//function to addd

function addfeedback()
{
    const addfeedbackelement = document.getElementById('input_feedback');
    const feed = addfeedbackelement.value;
    if(!feed)
    {
        alert('Please Enter your Valuable Feedback First ')
        return;
    }
    feedbacks.push(feed);
    loadFeedbacks();
    addfeedbackelement.value= "";


}
