const HexBtn=document.querySelector(".hex-btn");
const hexColorValue=document.querySelector(".hex-color-value");
const hexColorContainer=document.querySelector(".hex-color-container");
const rgbbtn=document.querySelector(".rgb-btn")
const rgbColorValue=document.querySelector(".rgb-color-value");
const inputrangeRed=document.querySelector("#red")
const inputrangeGreen=document.querySelector("#green")
const inputrangeBlue=document.querySelector("#blue")
const rgbcolorContainer=document.querySelector(".rgb-color-container")
const copyhexcolorbtn=document.querySelector(".hex-copy-color")
const copyrgbcolorbtn=document.querySelector(".rgb-copy-color")


HexBtn.addEventListener("click",()=>{
    let hexcolorop="";
    let characterset="0123456789ABCDEF";

    let charactersetlength=characterset.length;
    for(let i=0;i<6;i++){
        hexcolorop+=characterset.charAt(Math.floor(Math.random()*charactersetlength));

    }
    console.log(hexcolorop);
    hexColorValue.textContent=`#${hexcolorop}`
    hexColorContainer.style.backgroundColor=`#${hexcolorop}`;
    HexBtn.style.color=`#${hexcolorop}`;
})
rgbbtn.addEventListener("click",()=>{
    let red=inputrangeRed.value;
    let green=inputrangeGreen.value;
    let blue=inputrangeBlue.value;
    console.log(red,green,blue);
    rgbColorValue.textContent=`rgb(${red},${green},${blue})`;
    rgbcolorContainer.style.backgroundColor=`rgb(${red},${green},${blue})`;

    rgbbtn.style.color=`rgb(${red},${green},${blue})`;



})

function copyhexcolor(){
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert("copied to the clipboard " + hexColorValue.textContent);
}
copyhexcolorbtn.addEventListener("click",copyhexcolor)

function copyrgbcolor(){
    navigator.clipboard.writeText(rgbColorValue.textContent);
    alert("copied to the clipboard "+rgbColorValue.textContent);
}
copyrgbcolorbtn.addEventListener("click",copyrgbcolor)