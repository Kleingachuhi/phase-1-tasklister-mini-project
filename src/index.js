document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form = document.querySelector('#create-task-form')
  let taskList = document.querySelector('#tasks')

let formInput = document.querySelector('#new-task-description');
formInput.value = ''
let submit = document.querySelector('#submitBtn');
form.addEventListener('submit',function(event){
  event.preventDefault()
  let newTask = document.createElement('li')
  newTask.textContent = formInput.value;
  taskList.appendChild(newTask)
} )
})