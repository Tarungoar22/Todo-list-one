let userName = document.getElementById('userName')
let text = document.querySelector('.textadd');

function AddBtn () {
   if(userName.value == ""){
    alert("fill you task")
   }else{
    let newEle= document.createElement("li");
    newEle.innerHTML= `${userName.value} <button class="edit btn btn-warning btn-sm ms-2">Edit</button> <button class="remove btn btn-danger btn-sm ms-2">Remove</button>` ;
    text.appendChild(newEle)
    userName.value = ""    ;// input text empty
    let removeBtn = newEle.querySelector(".remove");
    removeBtn.addEventListener("click", function() {
        newEle.remove();
    });

    let editbtn = newEle.querySelector(".edit");
    editbtn.addEventListener("click", function(){
        
    });


   }
}