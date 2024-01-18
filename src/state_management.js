const task_db = window.indexedDB.open("TaskDB", 3)

task_db.onerror = (event) => {

}

task_db.onsuccess = (event) => {

}

const taskData = [
    {task_location: "timbuktu"},
    {task_location: "your mom's house"}
]

task_db.onupgradeneeded = (event) => {
    const db = event.target.result
    const task_objectstore = db.createObjectStore("tasks", {keyPath: "task_location"})

    task_objectstore.transaction.oncomplete = (event) => {
        const taskObjectStore = db.transaction
    }
}