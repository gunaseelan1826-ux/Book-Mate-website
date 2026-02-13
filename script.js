let add=document.querySelector(".over");
let addpop=document.querySelector(".pop");
let btn=document.getElementById("pop-btn")
btn.addEventListener("click", function()
    {
    add.style.display="block";
    addpop.style.display="block";
   }

);
let cons=document.querySelector(".c");
let namebk=document.getElementById("name");
let poetbk=document.getElementById("poet");
let bk=document.getElementById("text-box")
let bookadd=document.querySelector(".addbook");
bookadd.addEventListener("click",function(event){
    event.preventDefault();
    let div=document.createElement("div");
    div.setAttribute("class","container");
    div.innerHTML=`<h1>${namebk.value}</h1>
     <h4>${poetbk.value}</h4>
        <p>${bk.value}</p>
        <button class="btn"onclick="deletebk(event)">Delete</button>`
    cons.append(div);
    add.style.display="none";
    addpop.style.display="none";
    
})
let cancelpop=document.querySelector(".cancel");
cancelpop.addEventListener("click",function(event){
    event.preventDefault();
    add.style.display="none";
    addpop.style.display="none";
})
function deletebk(event){
    event.target.parentElement.remove()
}
