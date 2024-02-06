import Dexie from 'dexie'

export class TaskDB {
    constructor(version_number) {
        this.db = new Dexie("TaskDB")
        this.db.version(2).stores({TaskLocations: '++id, location_name', 
                                   Tasks: '++id, name, location_id'})
    }

    async create_location(location_object) {
        await this.db.TaskLocations.put(location_object)
    }

    async retrieve_location(location_name) {
        return await this.db.TaskLocations.where('location_name').equals(location_name).first()
    }

    async update_location(location_object) {
        await this.db.TaskLocations.put(location_object)
    }

    async get_all_locations() {
        return await this.db.TaskLocations.toArray()
    }

    async get_task(task_id) {
        return await this.db.Tasks.get(task_id)
    }
}

