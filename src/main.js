import {SiteHeader} from './components/site_header.js'
import { IterableListComponent } from './components/iterable_list.js'
import { StepDisplayComponent } from './components/step_display.js'
import {TaskDB} from './state_management.js'

export const task_db = new TaskDB(4)

customElements.define("site-header", SiteHeader)
customElements.define("iterable-list", IterableListComponent)
customElements.define("step-display", StepDisplayComponent)
