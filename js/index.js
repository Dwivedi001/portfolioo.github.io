let about=document.querySelector(".about-btn");
let skill=document.querySelector(".skill-btn");
let exp=document.querySelector(".exp-btn");
let h2=document.querySelector(".h2");

about.addEventListener("click",()=>{
    let text=document.querySelector(".text");
    text.innerText="My story";
})
skill.addEventListener("click",()=>{
    let text=document.querySelector(".text");
    text.innerText=" My skill";
    let span=document.createElement("p");
    console.log(span);
   
    span.innerText="  Web developer";
    text.appendChild(span);

  
})
exp.addEventListener("click",()=>{
    let text=document.querySelector(".text");
  
    h2.style.display="none";
    let span=document.createElement("p");
    console.log(span);
   
    span.innerText=" Art & Creative Director";
    text.innerText="My Experience";
    text.appendChild(span);
});
console.log(about);