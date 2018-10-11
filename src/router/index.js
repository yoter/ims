import VueRouter from 'vue-router'
import project from '../components/project/index.vue'
import organization from '../components/organization/index.vue'
import user from '../components/user/index.vue'
import role from '../components/role/index.vue'
import menus from '../components/permissions/menu.vue'
import item from '../components/permissions/item.vue'
import resource from '../components/permissions/resource.vue'
import operation from '../components/permissions/operation.vue'



const routes = [
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
