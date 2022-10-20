
let addElement = document.querySelector('.addItem').querySelector('i')
addElement.addEventListener('click', ()=>{
    let category = document.getElementById('category').value
    let taskText = document.getElementsByTagName('input')[0].value
    console.log(category)
    console.log(taskText)
    // create a new task
    let color = 'lightskyblue'
    if(category=='work'){
        color = 'lightskyblue'
    }else if(category=='life'){
        color = 'yellow'
    }else{
        color='aquamarine'
    }
    console.log(color)
    let cssStyle = "background-color:" + color +";"
    document.getElementsByClassName('todo')[0].innerHTML +=
        `<div class="todoItem" style=${cssStyle} >
            <p>${taskText}</p> 
            <div class="todo-btns">
                <i class="bi bi-check2-square"></i>
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-file-earmark-x"></i>
            </div>
        </div>`
})