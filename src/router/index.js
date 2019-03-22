import VueRouter from 'vue-router'
import project from '../page/management/project/index.vue'
import organization from '../page/management/organization/index.vue'
import user from '../page/management/user/index.vue'
import role from '../page/management/role/index.vue'
import menus from '../page/management/permissions/menu.vue'
import item from '../page/management/permissions/item.vue'
import resource from '../page/management/permissions/resource.vue'
import operation from '../page/management/permissions/operation.vue'
import view from '../page/management/view/index.vue'
import view_detail from '../page/management/view/detail.vue'
import subsys from '../page/management/subsys/index.vue'
import classification from '../page/management/asset/classification/index.vue'
import asset from '../page/management/asset/index.vue'
import attribute from '../page/management/asset/attribute/index.vue'
import variable from '../page/management/asset/variable/index.vue'
import value from '../page/management/asset/variable/value/index.vue'
import state from '../page/management/asset/variable/state/index.vue'
import ctrl from '../page/management/asset/variable/ctrl/index.vue'
import v from '../page/management/v/index.vue'
import t1 from '../page/management/v/template/index.vue'
import management from '../page/management/index.vue'
import index from '../page/index.vue'
import component from '../page/management/component/index.vue'


const routes = [
    {
        path: '/management',
        component: management,
        children: [
            {
                path: 'v',
                component: v
            },
            {
                name: 't1',
                path: 'v/t1',
                component: t1
            },
            {
                path: 'component',
                component: component
            },
            {
                path: 'classification', component: classification
            },
            {
                path: 'asset', component: asset
            },
            {
                path: 'attribute', component: attribute
            },
            {
                path: 'variable', component: variable
            },
            {
                path: 'value', component: value
            },
            {
                path: 'state', component: state
            },
            {
                path: 'ctrl', component: ctrl
            },
            {
                path: 'subsys', component: subsys
            },
            {
                path: 'view', component: view
            },
            {
                name: 'vd', path: '/view/:id', component: view_detail
            },
            {
                path: 'project', component: project
            },
            {
                path: 'organization', component: organization
            },
            {
                path: 'user', component: user
            },
            {
                path: 'role', component: role
            },
            {
                path: 'menu', component: menus
            },
            {
                path: 'item', component: item
            },
            {
                path: 'resource', component: resource
            },
            {
                path: 'operation', component: operation
            }
        ]
    },
    {
        path: '/',
        component: index,
        children: [
            {
                path: 'project',
                component: project
            }
        ]
    }
];


export default new VueRouter({
    routes
});
