import {SiteHeader} from './components/site_header.js'
import { IterableListComponent } from './components/iterable_list.js'
import {TaskDB} from './state_management.js'

export const task_db = new TaskDB(4)

customElements.define("site-header", SiteHeader)
customElements.define("iterable-list", IterableListComponent)
