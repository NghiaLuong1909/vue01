import { createRouter, createWebHistory } from "vue-router";
import employeeList from '@/views/employee/employeeList.vue';
import Index from '@/views/Index.vue';
// import employeeDetail from '@/views/employee/employeeDetail.vue';

const routerList = [
    {path: "/employeeList", name: "employeeRouter", component: employeeList},
    {path: "/", name: "homeRouter", component: Index},
    // {path: "/employeeDetail", name: "employeeDetailRouter", component: employeeDetail}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routerList
})

export default router;