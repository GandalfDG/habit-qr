const qr_code = document.getElementById('qr-code')
const create_task_button = document.getElementById('create-task-button')
const task_modal = document.getElementById('task-modal')

create_task_button.onclick = () => {
    task_modal.classList.add('is-active')
}

qr_code.setAttribute('value', window.location)