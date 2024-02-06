import { Step } from './tasks.js'

const task_query = new URLSearchParams(document.location.search)
const task_id = location_query.get("task")
const step_list = document.querySelector('iterable-list')


let promise = task_db.get_task(task_id)