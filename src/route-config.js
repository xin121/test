import form from './components/form.vue'
import table from './components/table.vue'
import c from './components/c.vue'
export default [
	{path: '/', component: form},
    {path: '/form', component: form},
    {path: '/table:id', component: table},
    {path: '/c', component: c}
]