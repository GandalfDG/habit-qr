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

export class Task {
    constructor(task_name, task_steps) {
        this.name = task_name
        this.steps = task_steps ? task_steps : new Array()
    }
}

export class Step {
    constructor(step_name, duration) {
        this.step_name = step_name
        this.duration = duration ? duration : null
    }
}

