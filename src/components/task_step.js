import task_step_template from './task_step.html?raw'

export class TaskStep extends HTMLElement {
    constructor() {
        super()
        const template = document.createElement('template')
        template.innerHTML = task_step_template
        const shadowRoot = this.attachShadow({mode: "open"})
        shadowRoot.appendChild(template.content)
    }
}