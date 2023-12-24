import { createRouter, createWebHistory } from "vue-router";
import employeeDetail from '@/views/employee/employeeDetail.vue';

const routerDetail = [
    {path: '/employeeDetail', name: "employeeDetailRouter", component: employeeDetail}
]

const employeeDetail = createRouter({
    history: createWebHistory(),
    routes: routerDetail
})

export default employeeDetail;