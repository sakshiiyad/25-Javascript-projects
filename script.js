const input = document.querySelector("input");
const btn = document.querySelector("button");
const newnotedetails = document.querySelector("#newnotedetails");
const savebtn = document.querySelector("#save");
const deletebtn = document.querySelector("#discard");
const titleinp = document.querySelector("#title");
const notebody = document.querySelector("#notebody");
const cardscon = document.querySelector("#cards-con");

btn.addEventListener("click", function () {
  console.log("btn clicked");
  newnotedetails.classList.add("active");
});
let notes = [];


savebtn.addEventListener("click", function () {
  let titleval = titleinp.value;
  let noteval = notebody.value;
  // console.log(titleval);
  // console.log(noteval);

if(editableid!==null){
  const note=notes.find(n=>n.id==editableid);
  if(!noteval){
    console.log("error");
    editableid=null;
    return;
  }
  note.titleval=titleval;
  note.noteval=noteval;
   editableid=null;
   savebtn.textContent="save"
}
  notes.push({
    id: Date.now(),
    titleval,
    noteval,
  });
  console.log(notes);
  renderCards();
  clearInputs();
 
});

function renderCards() {
    cardscon.innerHTML="";
  notes.forEach((note) => {
    const notecard = document.createElement("div");
    const cardtitle = document.createElement("h3");
    const notecontent = document.createElement("p");
    const hr = document.createElement("hr");
    const editbtn = document.createElement("button");
const deletecardbtn = document.createElement("button");
    notecard.classList.add("cardstyle");

    cardtitle.textContent = `${note.titleval}`;
    notecontent.textContent = `${note.noteval}`;
    editbtn.textContent = `edit`;
    deletecardbtn.textContent = `delete`;

    notecard.append(cardtitle, notecontent, hr, editbtn, deletecardbtn);

    cardscon.appendChild(notecard);

    editbtn.addEventListener("click",function(){
    // console.log(note.id);
    editable(note.id)
})
  });
  
}
let editableid=null;
function clearInputs(){
    titleinp.value="";
    notebody.value="";
}
function editable(id){
  const note=notes.find(n=>n.id===id);
  if(!note) return;
  console.log(note);
  editableid=id;
  titleinp.value=note.titleval;
  notebody.value=note.noteval;

  newnotedetails.classList.add("active");
  savebtn.textContent="update";

    
}