import {task_db} from './main.js'
import { Task, TaskLocation } from './tasks.js'


const location_list = document.querySelector('iterable-list')
location_list.set_customizations((li_element, item) => {
    const task_location_object = new TaskLocation
    Object.assign(task_location_object, item)
    const link_element = li_element.querySelector('a')
    link_element.setAttribute('href', `${task_location_object.generate_url()}`)
})

let promise = task_db.get_all_locations()
promise.then((result) => {
    location_list.update_list(result)
})

