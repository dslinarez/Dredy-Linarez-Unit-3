/* Declare variables below to save the different sections (divs) of your story*/

let buttonOne=document.querySelector(".option-one");
let buttonTwo=document.querySelector(".option-two");
let optionOne=document.querySelector(".option-one-screen");
let optionTwo=document.querySelector(".option-two-screen");
let initialButtons=document.querySelector(".buttons");
let optionThree=document.querySelector(".option-two-end");
let optionFour=document.querySelector(".option-one-end");
let buttonThree=document.querySelector(".option-three");
let buttonFour=document.querySelector(".option-four");
let nextButtons=document.querySelector(".buttons3");
let title=document.querySelector(".title");
let storyOpening=document.querySelector(".story-opening");
buttonOne.onclick=function(){ 
    console.log("here");
    optionOne.style.display="block";
initialButtons.style.display="none";
    nextButtons.style.display="block";
      title.style.display="none";
    storyOpening.style.display="none";
   
};

buttonTwo.onclick=function(){
     console.log("here");
    optionTwo.style.display="block";
    initialButtons.style.display="none";
     nextButtons.style.display="block";
    title.style.display="none";
    storyOpening.style.display="none";
};

buttonThree.onclick=function(){
     console.log("here");
    optionThree.style.display="block";
    initialButtons.style.display="none";
    
};
buttonFour.onclick=function(){
     console.log("here");
    optionFour.style.display="block";
    initialButtons.style.display="none";
};