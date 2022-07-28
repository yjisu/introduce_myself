let links = document.querySelectorAll('.tabs-list li a');
let items = document.querySelectorAll('.tabs-list li');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault() ;
    }
}

for (let i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        let tabId = this.querySelector("a").getAttribute("href") ;
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
        this.classList.add("active");
    }  
} 
const formTech = document.getElementById("addformTech");
const formJob = document.getElementById("addformJob");
const itemTechList=document.getElementById("itemsTech");
const itemJobList=document.getElementById("itemsJob");
const plusJobBtn = document.getElementById('plus_job');
const plusTechBtn = document.getElementById('plus_tech');
//+누르면 form창 나오기
function tech_form(){
    if(formTech.style.display!=='none')
    {
        formTech.style.display='none';
    }else{
        formTech.style.display='block';
    }
    
}
function Job_form(){
    if(formJob.style.display!=='none')
    {
        formJob.style.display='none';
    }else{
        formJob.style.display='block';
    }
}

plusTechBtn.addEventListener('click',tech_form);
plusJobBtn.addEventListener('click',Job_form);

//form으로 Techitem 추가 및 삭제
function addTechItem(e){
    e.preventDefault();
    var newItem = document.getElementById("itemTech").value;
    var li = document.createElement("li");
    li.className="list-Tech-item";
    li.appendChild(document.createTextNode(`💛 ${newItem} `));
    formTech.reset();
    
    var deleteButton=document.createElement("button");
    deleteButton.className = "Tech Delete";
    deleteButton.appendChild(document.createTextNode("삭제"));
    li.appendChild(deleteButton);
    itemTechList.appendChild(li);
}

formTech.addEventListener("submit",addTechItem);
itemTechList.addEventListener("click", removeTechItem);

function removeTechItem(e) {
    if (e.target.classList.contains("Delete")) {
      if (confirm("삭제하시겠습니까?")) {
        var li = e.target.parentElement;
        itemTechList.removeChild(li);
      }
    }
}
//form으로 Jobitem 추가 및 삭제
function addJobItem(e){
    e.preventDefault();
    var newItem = document.getElementById("itemJob").value;
    var li = document.createElement("li");
    li.className="list-Job-item";
    li.appendChild(document.createTextNode(`💚 ${newItem} `));
    formJob.reset();
    
    var deleteButton=document.createElement("button");
    deleteButton.className = "Job Delete";
    deleteButton.appendChild(document.createTextNode("삭제"));
    li.appendChild(deleteButton);
    itemJobList.appendChild(li);
}

formJob.addEventListener("submit",addJobItem);
itemJobList.addEventListener("click", removeJobItem);

function removeJobItem(e) {
    if (e.target.classList.contains("Delete")) {
      if (confirm("삭제하시겠습니까?")) {
        var li = e.target.parentElement;
        itemJobList.removeChild(li);
      }
    }
}
