import VueRouter from 'vue-router'
import project from '../components/management/project/index.vue'
import organization from '../components/management/organization/index.vue'
import user from '../components/management/user/index.vue'
import role from '../components/management/role/index.vue'
import menus from '../components/management/permissions/menu.vue'
import item from '../components/management/permissions/item.vue'
import resource from '../components/management/permissions/resource.vue'
import operation from '../components/management/permissions/operation.vue'
import view from '../components/management/view/index.vue'
import view_detail from '../components/management/view/detail.vue'
import subsys from '../components/management/subsys/index.vue'

const routes = [
    {
        path: '/subsys', component: subsys
    },
    {
        path: '/view', component: view
    },
    {
        name: 'vd', path: '/view/:id', component: view_detail
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
