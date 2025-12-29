const inp=document.querySelector('input');
const btn=document.getElementById('btn');
const profile=document.getElementById("profile-container")
let img=document.createElement('img')
let username=document.createElement('h3')
let Name=document.createElement('p')
let Bio=document.createElement('p')
let followers=document.createElement('p')
let following=document.createElement('p')
let repo=document.createElement('p')
let githubprofile=document.createElement('p')
btn.addEventListener('click',async function(e){
    let val=inp.value;
    console.log(val);
    if(!val){
        alert("please provide valid username")
        return;
    }
    //api call
 const res=  await fetch(`https://api.github.com/users/${val}`)
 const result= await res.json();
if(result.message=="Not Found"){
    profile.innerHTML=`<p>user not found</p>`;
    return;
}
 console.log(result);

 img.src=result.avatar_url;
 username.textContent=`@${result.login}`;
 Name.textContent=result.name?`Name:${result.name}`:`not available`;
 Bio.textContent= result.bio?`Bio:${result.bio}`:`bio is not available`;
 followers.textContent=`followers:${result.followers}`
 following.textContent=`following:${result.following}`
 repo.textContent=`public Repos:${result.public_repos}`;
 githubprofile.innerHTML=`<a href="${result.html_url}" target="_blank">View GitHub Profile</a>`;

profile.innerHTML="";
profile.appendChild(img)
profile.appendChild(username)
profile.appendChild(Name)
profile.appendChild(Bio)
profile.appendChild(followers)
profile.appendChild(following)
profile.appendChild(repo)
profile.appendChild(githubprofile)
    
   
    

})

img.classList.add('img')