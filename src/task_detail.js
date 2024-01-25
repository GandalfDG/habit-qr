import { Task, Step } from './tasks.js'
import {task_db} from './main.js'

const qr_code = document.getElementById('qr-code')
const create_task_button = document.getElementById('create-task-button')
const step_list = document.getElementById('step-list')
const task_modal = document.getElementById('task-modal')
const add_step_button = document.getElementById('create-task-step-button')
const save_task_button = document.getElementById('save-task-button')

const step_list_item_template = document.querySelector('#step-list-item')

const location_query = new URLSearchParams(document.location.search)
const task_location_name = location_query.get("location")

let new_task = null
let task_steps = new Array()

create_task_button.onclick = () => {
    task_modal.classList.add('is-active')
}

function reset_create_form() {
    const task_name = document.getElementById('task-name-input')
    const step_name = document.getElementById('step-name-field')

    task_name.value = ""
    step_name.value = ""
    task_steps = new Array()
    step_list.querySelectorAll('li').forEach((element, key, parent) => {
        element.remove()
    })
}

save_task_button.onclick = () => {
    const task_name = document.getElementById('task-name-input').value
    new_task = new Task(task_name, task_steps)
    console.log(new_task)

    // get the task location object and append this task object to the tasks key
    let location_obj = task_db.retrieve_location(task_location_name)
    location_obj.tasks.push(new_task)
    task_db.update_location(new_task)

    task_modal.classList.remove('is-active')
    reset_create_form()
}
 
add_step_button.onclick = () => {
    const step_name = document.getElementById('step-name-field').value
    const step_duration = document.getElementById('step-duration-field').value
    task_steps.push(new Step(step_name, step_duration))
    const new_step = step_list_item_template.content.cloneNode(true)
    new_step.querySelector('p').textContent = step_duration ? step_name.concat(' ', step_duration) : step_name
    step_list.append(new_step)
}

qr_code.setAttribute('value', window.location)