const store = (obj) => localStorage.setItem('tasks', JSON.stringify(obj))
const getTasks = () => JSON.parse(localStorage.getItem('tasks'))||[]
let tasks = getTasks()


document.addEventListener('DOMContentLoaded', ()=>{

    //we define this function here because we wait for #tasks to be loaded in the DOM
    const display = (arr) => {
        document.querySelector('#tasks').innerHTML=''        
        arr.map(task => {
            const li = document.createElement('li')
            li.innerHTML = task
            li.classList.add('list-group-item')
            document.querySelector('#tasks').append(li)
        })
    }
    tasks = getTasks()
    display(tasks)

    document.querySelector('#task-form').addEventListener('submit', ()=>{
        const newTask = document.querySelector('#new-task').value
        tasks.push(newTask)
        display(tasks)
        store(tasks)
        document.querySelector('#new-task').value=''
        return false
    })
    
    document.querySelector('#clear').addEventListener('click', ()=>{
        window.localStorage.clear();
        document.querySelector('#tasks').innerHTML=''

    })
})