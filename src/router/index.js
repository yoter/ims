import VueRouter from 'vue-router'
import project from '../components/system/project/index.vue'
import organization from '../components/system/organization/index.vue'
import user from '../components/system/user/index.vue'
import role from '../components/system/role/index.vue'
import menus from '../components/system/permissions/menu.vue'
import item from '../components/system/permissions/item.vue'
import resource from '../components/system/permissions/resource.vue'
import operation from '../components/system/permissions/operation.vue'
import view from '../components/system/view/index.vue'
import subsys from '../components/system/subsys/index.vue'

const routes = [
    {
        path: '/subsys', component: subsys
    },
    {
        path: '/view', component: view
    },
    {
        path: '/project', component: project
    },
    {
        path: '/organization', component: organization
    },
    {
        path: '/user', component: user
    },
    {
        path: '/role', component: role
    },
    {
        path: '/menu', component: menus
    },
    {
        path: '/item', component: item
    },
    {
        path: '/resource', component: resource
    },
    {
        path: '/operation', component: operation
    },
    {
        path: '/', component: project
    }
];


export default new VueRouter({
    routes
});
