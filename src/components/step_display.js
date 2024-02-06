import step_display_template from './step_display.html?raw'

export class StepDisplayComponent extends HTMLElement {
    static template_id = 'step-display-template'

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: "open" })
        const element = document.createElement('div')
        element.innerHTML = step_display_template
        this.shadow.appendChild(element)

    }

}