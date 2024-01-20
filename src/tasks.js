export class TaskLocation {
    constructor(location_name, tasks) {
        this.location_name = location_name
        this.tasks = tasks
    }

    generate_task_location_url() {
        const base_url = import.meta.env.BASE_URL
        return base_url.concat('task_detail.html', '?location=', this.location_name)
    }
}

class Task {
    constructor(steps) {

    }
}

