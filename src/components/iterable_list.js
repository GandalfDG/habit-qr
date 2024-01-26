export class IterableListComponent extends HTMLElement {
    constructor(list) {
        super()
        this.list = list
    }

    connectedCallback() {
        // get the template and store it for later
        this.template = this.querySelector('template').content
        this.shadow = this.attachShadow({mode: "open"})
        this.list_container = null
        this.initialize_list()
        this.update_list([{hello: "hi"}, {hello: "foo"}])
    }

    initialize_list() {
        this.shadow.innerHTML = ''
        const ul_element = document.createElement('ul')
        const ul_node = this.shadow.appendChild(ul_element)
        this.list_container = ul_node
    }

    update_list(list) {
        this.initialize_list()
        list.forEach((element) => this.create_list_item_node(element))
    }

    create_list_item_node(item) {
        const item_node = this.template.cloneNode(true)
        const li_element =  document.createElement('li')
        for (const key of Object.keys(item)) {
            const data_element = item_node.querySelector('[data-key="'.concat(key, '"]'))
            if(data_element) {
                data_element.textContent = item[key]
            }
        }
        li_element.appendChild(item_node)
        this.list_container.appendChild(li_element)
    }
}