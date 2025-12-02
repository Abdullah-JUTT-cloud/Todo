let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    

    item.innerText=input.value;
    
    let donebtn=document.createElement("button");
    donebtn.innerText="Done";
    donebtn.classList.add("donebtn");
    item.appendChild(donebtn);
    ul.appendChild(item);
    input.value="";
});
ul.addEventListener("click",function(e){
    if(e.target.nodeName==="BUTTON"){
        let item=e.target.parentElement;
        item.remove();
    }
    console.log("doned");
});
// let donebtns=document.querySelectorAll(".donebtn");
// for(let Dbtn of donebtns){
//     Dbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }