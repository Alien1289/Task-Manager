// javascript code goes here
let input = ""
document.getElementsByClassName("todo-input")[0].addEventListener('input', function(e){
    input = document.getElementsByClassName("todo-input")[0].value
})

document.getElementsByClassName("todo-button")[0].addEventListener("click", function(e){
    e.preventDefault()
    if (input !== ""){
        let newElement = document.createElement("div")
        newElement.setAttribute("class", "div-addOn")

        let listItem = document.createElement("li")
        listItem.setAttribute("class", 'todo-item')
        listItem.innerText = input

        let completeButton = document.createElement("button")
        completeButton.setAttribute('class', 'complete-btn')
        completeButton.innerText = "Completed"

        let deleteButton = document.createElement("button")
        deleteButton.setAttribute('class', 'trash-btn')
        deleteButton.innerText = "Deleted"

        newElement.appendChild(listItem)
        newElement.appendChild(completeButton)
        newElement.appendChild(deleteButton)

        document.getElementsByClassName("todo-list")[0].appendChild(newElement)

        completeFunctionality(listItem, completeButton)
        deleteFunctionality(newElement, deleteButton)

    }
    
})



function completeFunctionality(listItem, completeButton){

    completeButton.addEventListener("click", function(e){
        if (listItem.style.textDecoration === ""){
            listItem.style.textDecoration = "line-through"
        }else{
            listItem.style.textDecoration = ""
        }               
    })
}

function deleteFunctionality(newElement, deleteButton){
    deleteButton.addEventListener('click', function(e){
        newElement.remove()
    })
}