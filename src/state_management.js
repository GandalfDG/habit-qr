import Dexie from 'dexie'

export class TaskDB {
    constructor(version_number) {
        this.db = new Dexie("TaskDB")
        this.db.version(1).stores({TaskLocations: 'location_name'})
    }

    async create_location(location_object) {
        await this.db.TaskLocations.put(location_object)
    }

    async retrieve_location(location_name) {
        return await this.db.TaskLocations.get(location_name)
    }

    async update_location(location_object) {
        await this.db.TaskLocations.put(location_object)
    }
}

