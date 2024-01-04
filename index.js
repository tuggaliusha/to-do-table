let form=document.getElementById("form")
console.log(form);
let inputName =document.getElementById("inputname")
console.log(inputName);
let btn = document.getElementById("btn")
console.log(btn);
let inputId=document.getElementById("inputid")
console.log(inputId);
let table =document.getElementById("table")
console.log(table);
form.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.innerHTML =="submit"){
        console.log(e.target);
        table.innerHTML +=`
        <tr>
        <td>${inputName.value}</td>
        <td>${inputId.value}</td>
        <td> <button>update</button></td>
        <td><button>delete</button></td>
    </tr>
        `
        inputName.value=""
        inputId.value=""
    }else if(e.target.innerHTML=="delete"){
        console.log(e.target);
      const row=  e.target.parentElement.parentElement;
      row.classList.add("deleted-row");

        

    }else if(e.target.innerHTML=="update"){
        console.log(e.target);
        inputName.value=""
        inputId.value=""
        e.target.parentElement.previousElementSibling.textContent = inputName.value;
        e.target.innerHTML = "update"; 
    }
    

})