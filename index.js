
//عمل إضافة لجوجل كروم 
let myLeads=[]
const inputEL=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
const ulEl=document.getElementById("ul-el")
const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myleads"))
if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

const tabs=[
    {url:"http://www.likid.com/"}
]
tabBtn.addEventListener("click", function(){
    console.log(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads){
    let listItems=""
    for(let i=0; i<leads.length; i++){
    //    listItems+="<li><a  target='_black' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
       listItems+=`<li>
       <a  target='_black' href='${leads[i]}'>
       ${leads[i]}</a>
       </li>`
    }
    ulEl.innerHTML=listItems
}

     deleteBtn.addEventListener("dblclick", function(){
     localStorage.clear()
     myLeads=[]
     render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    inputEL.value=""
   
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // console.log(localStorage.getItem("myLeads"))
    render(myLeads)
})









