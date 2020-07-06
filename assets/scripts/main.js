let
    tasks       = document.getElementById('tasks'),
    close       = document.getElementById('iconClose'),
    btnComplite = document.getElementById('btnComplite')
    
let visibleTask = document.getElementById('visibleTask')
let nowTask
let listTasks   = document.getElementsByClassName('task')

document.addEventListener("DOMContentLoaded", ready)

function ready() {
    tasks       = document.getElementById('tasks'),
    close       = document.getElementById('iconClose'),
    btnComplite = document.getElementById('btnComplite')
    visibleTask = document.getElementById('visibleTask')
}

tasks.addEventListener('click', e => {
    
    let name, description
    let open = false

    if(e.target.classList[0] == "task__name") {
        nowTask = e.target.parentElement
        name        = e.target.innerText
        description = e.target.nextElementSibling.innerText
        open = true 
    }
    if (e.target.classList[0] == "task") {
        nowTask = e.target
        name        = e.target.children[0].innerText
        description = e.target.children[1].innerText
        open = true
    }

    if(open) {
        let nameVT        = document.getElementById('nameVisTask')
        let descriptionVT = document.getElementById('descVisTask')

        nameVT.innerText        = name
        descriptionVT.innerText = description

        visibleTask.style.display = 'block'
    }
})

close.addEventListener('click', e => {
    visibleTask.style.display = 'none'
})

visibleTask.addEventListener('click', e => {
    if(e.target.id == "visibleTask") visibleTask.style.display = 'none'
})

btnComplite.addEventListener('click', e => {
    nowTask.classList.remove('active-task')
    nowTask.classList.add('complite-task')
    visibleTask.style.display = 'none'
    
    for(let i = 0; i < listTasks.length; i++) {
        if(listTasks[i] === nowTask) {
            sendIdCompliteTask(i)
            break
        }
    }
})


function sendIdCompliteTask(id) {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/complite", true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(`id=${id}`)
}


