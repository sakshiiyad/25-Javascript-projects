const stars=document.querySelectorAll('.star')
const container=document.getElementById('star-rating-container');
const starrating=document.getElementById('star-rating');
console.log(stars);
let n=stars.length;
console.log(n)
let selectedIndex=-1;
for(let i=0;i<n;i++){
    stars[i].addEventListener('mouseover',function(){
        // console.log(i);
       
       
        for (let j=0;j<n;j++){
            if(j<=i){
                stars[j].classList.add('hovered');
            }
            else{
                stars[j].classList.remove('hovered');
            }
        }
        starrating.textContent=`The hover rating is ${i+1}`;
        
      

    
}
);
  stars[i].addEventListener('click',function(){
            for(let ind=0;ind<n;ind++){
                stars[ind].classList.remove('selected');
                
        }
        for(let j=0;j<=i;j++){
            stars[j].classList.add('selected');
        }
        selectedIndex=i;
    
    
        starrating.textContent=`The selected rating is ${i+1}`;
    });




    
}

container.addEventListener('mouseleave',function(){
        console.log(container);
    for(let k=0;k<n;k++){
        stars[k].classList.remove('hovered');
    }
       if (selectedIndex >= 0) {
        for (let k = 0; k < n; k++) {
            if (k <= selectedIndex) stars[k].classList.add('selected');
            else stars[k].classList.remove('selected');
        }
    }
    });

