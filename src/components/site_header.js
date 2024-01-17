import site_header_template from './site_header.html?raw'

export class SiteHeader extends HTMLElement {
    constructor() {
        super()
        const template = document.createElement('template')
        template.innerHTML = site_header_template
        const shadowRoot = this.attachShadow({mode: "open"})
        shadowRoot.appendChild(template.content)
    }
}