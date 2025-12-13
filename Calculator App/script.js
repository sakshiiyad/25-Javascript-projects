const screen = document.querySelector("#screen");
const no = document.querySelectorAll(".no");
console.log(no[0].textContent);
const plus = document.querySelector(".plus");
const sub = document.querySelector(".sub");
const divi = document.querySelector(".divi");
const multi = document.querySelector(".multi");
const equal = document.querySelector(".equal");
const mod = document.querySelector(".mod");
const clear = document.querySelector("#clear");



let currInput = "";
let currval = 0;
let operator = null;
no.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    console.log(e.target.textContent);

    let val = e.target.textContent;
    currInput += val;
    screen.classList.add("active");
    screen.textContent = currInput;
    // display(currInput);
  })
);

function display(currInput) {
  console.log(currInput);
  screen.textContent = currInput;
}

//operation function

//1.Addition

function calculate(a,b,op){
    if(op==="+")return a+b;
    if(op==="-")return a-b;
    if(op==="*")return a*b;
    if(op==="/"){
        if(b==0){
            alert("invalid operation")
            return a;
        }
        return a/b;
    }
    if(op==="%"){
         if(b==0){
            alert("invalid operation")
            return a;
        }
    }return a%b;
}

function handleoperator(op) {
    if(currInput==="" && operator===null){
        operator=op;
        return;
    }
  if (currInput === "") return;
  if (operator !== null) {
     
      currval =calculate(currval,Number(currInput),operator);
  }
    else {
      currval = Number(currInput);
    }
    operator=op;
    currInput="";
    screen.textContent=currval;
    console.log(currval);
  }



plus.addEventListener("click",function(){
    handleoperator("+")
})
sub.addEventListener("click",function(){
    handleoperator("-") 
    
})
multi.addEventListener("click",function(){
    handleoperator("*");
})
divi.addEventListener("click",function(){
    handleoperator("/");
})
mod.addEventListener("click",function(){
    handleoperator("%");
})
equal.addEventListener("click",function(){
    if(operator===null || currInput==="") return;
        
        currval=calculate(currval,Number(currInput),operator);
    
    
    
    operator=null;
    currInput="";
    screen.textContent=currval;
})
clear.addEventListener("click",function(){
    currInput="";
    currval=0;
    operator=null;
    screen.textContent="";
})

