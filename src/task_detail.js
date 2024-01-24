import { Task, Step } from './tasks.js'

const qr_code = document.getElementById('qr-code')
const create_task_button = document.getElementById('create-task-button')
const step_list = document.getElementById('step-list')
const task_modal = document.getElementById('task-modal')
const add_step_button = document.getElementById('create-task-step-button')
const save_task_button = document.getElementById('save-task-button')

let new_task = null
let task_steps = new Array()

create_task_button.onclick = () => {
    task_modal.classList.add('is-active')
}

save_task_button.onclick = () => {
    const task_name = document.getElementById('task-name-input').value
    new_task = new Task(task_name, task_steps)
    console.log(new_task)
}

add_step_button.onclick = () => {
    const step_name = document.getElementById('step-name-field').value
    const step_duration = document.getElementById('step-duration-field').value
    task_steps.push(new Step(step_name, step_duration))
    const new_step = document.createElement('task-step')
    new_step.append(document.createElement('p',step_name))
    step_list.append(new_step)
}

qr_code.setAttribute('value', window.location)