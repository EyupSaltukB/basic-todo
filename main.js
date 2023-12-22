const input = document.querySelector(".input")
const addBtn = document.querySelector(".add-btn")
const inputDiv = document.querySelector(".input-div")
const container = document.querySelector(".container")

// console.log(input, addBtn, inputDiv, container)


addBtnStart = () => {
    if(input.value == ""){
        alert("Form Boş Olamaz")
    } else {
        const listEl = document.createElement("li");
        listEl.innerText = input.value;
        container.appendChild(listEl);
        
        const completeBtn = document.createElement("button")
        completeBtn.classList.add("complete-btn")
        listEl.appendChild(completeBtn)
        completeBtn.innerText = "Tamamla"
        completeBtn.addEventListener("click", () => {
            completeBtn.innerText = "Tamamlandı"
        })

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn")
        listEl.appendChild(deleteBtn)
        deleteBtn.innerText = "Sil"
        deleteBtn.addEventListener("click", () => {
        container.removeChild(listEl)

        })

        input.value = ""
    }
    
}

addBtn.addEventListener("click", addBtnStart);