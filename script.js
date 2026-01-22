let arr = [
  "I am the best",
  "Learning JavaScript every day",
  "Consistency beats talent",
  "Code, sleep, repeat",
  "Never stop improving"
];


let btn=document.querySelector("button");
let div=document.querySelector("div");

btn.addEventListener("click", function(){
     let h1=document.createElement("h1");
    btn.style.transform="translate(-50%,-50%) scale(1)";
    let x=Math.floor(Math.random()*80);
    let y=Math.floor(Math.random()*80);
    let rot=Math.floor(Math.random()*360);
    let scl=Math.floor(Math.random()*4);
    console.log(Math.random());
    let num=Math.floor(Math.random() * arr.length);
 
  h1.style.color="white";
  h1.style.position="absolute";
  h1.style.left=x+"%";
  h1.style.top=y+"%";
  h1.style.rotate=rot+"deg";
  h1.style.scale=scl;
  
  h1.innerHTML=arr[num];
  div.appendChild(h1);
    


   
})