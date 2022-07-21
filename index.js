var links = document.querySelectorAll('.tabs-list li a');
var items = document.querySelectorAll('.tabs-list li');
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault() ;
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        var tabId = this.querySelector("a").getAttribute("href") ;
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
        this.classList.add("active");
    }  
} 
const form = document.getElementById("addform");
const itemList=document.getElementById("items");
//+누르면 form창 나오기
window.addEventListener('load',function(){
    var showForm= document.getElementById("plus");
    showForm.onclick=show;
});
function show(){
    form.style.display='block';
}

//form으로 item 추가 및 삭제
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById("item").value;
    var li = document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(`💛 ${newItem} `));
    form.reset();
    
    var deleteButton=document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode("삭제"));
    li.appendChild(deleteButton);
    itemList.appendChild(li);
}

form.addEventListener("submit",addItem);
itemList.addEventListener("click", removeItem);

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
      if (confirm("삭제하시겠습니까?")) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
}
