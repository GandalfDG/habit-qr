import {TaskLocation} from './tasks.js'
import {task_db} from './main.js'

const add_task_button = document.getElementById("create-task-location-button")
const task_location_input = document.getElementById("task-location-name-input")

add_task_button.onclick = () => {
    const task_location_name = task_location_input.value

    console.log(task_location_name)
    const location_object = new TaskLocation(task_location_name, null)
    console.log(location_object)
    let promise = task_db.create_location(location_object)
    promise.then(() => {
        window.location.replace(location_object.generate_url())
    })
}