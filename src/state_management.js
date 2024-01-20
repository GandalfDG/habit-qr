export class TaskDB {
    constructor(version_number) {
        const db_request = window.indexedDB.open("TaskDB", version_number)

        db_request.onupgradeneeded = (event) => {
            this.db = event.target.result
            const object_store = this.db.createObjectStore("TaskLocations", {keyPath: "location_name"})
            object_store.oncomplete = (event) => {
                return
            }
        }
    }

    create_location(location_object) {
        const transaction = this.db.transaction("TaskLocations", "readwrite")
        const object_store = transaction.objectStore("TaskLocations")
        const request = object_store.add(location_object)
        request.onsuccess = (event) => {
            return
        }
    }
}
