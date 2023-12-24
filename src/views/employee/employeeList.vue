<template>
    <div class="employeeList">
        <div class="top">
            <p class="content_top">Nhan vien</p>
            <button class="button_top" @click="showForm">Them moi nhan vien</button>
        </div>
        <div class="bottom">
            <div class="search_refresh">
                <div class="search">
                    <input type="text" placeholder="Tim theo ma, ten nhan vien">
                    <img src="../../assets/search.png" alt="" class="icon_search">
                </div>
                <img src="../../assets/refresh.png" alt="" class="icon_refresh">
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Ma nhan vien</th>
                        <th>Ten nhan vien</th>
                        <th>Gioi tinh</th>
                        <th>Ngay sinh</th>
                        <th>Chuc danh</th>
                        <th>Ten don vi</th>
                        <th>So tai khoan</th>
                        <th>So dien thoai</th>
                        <th>Chuc nang</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr v-for="(item, index) in employees" :key="index">
                        <td>{{ item.MaNV }}</td>
                        <td>{{ item.HoTen }}</td>
                        <td>{{ item.GioiTinh }}</td>
                        <td>{{ item.NgaySinh }}</td>
                        <td>{{ item.ChucDanh }}</td>
                        <td>{{ item.TenDonVi }}</td>
                        <td></td>
                        <td></td>
                        <td class="option">
                            <div class="btnUpdate" @click="showForm">Sua</div>
                            <div class="">|</div>
                            <div class="btnUpdate" @click="showDialog">Xoa</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <employeeDetail v-if="isShowForm" @closeForm = 'closeForm'></employeeDetail>
    <questionDialog v-if="isShowDialog" @closeQuestionDialog="closeQuestionDialog"></questionDialog>
</template>

<script>
import employeeDetail from '@/views/employee/employeeDetail.vue';
import questionDialog from '@/views/dialog/question.vue';
export default {
    
    name: "EmployeeList",
    components: {
        employeeDetail,
        questionDialog
    },
    created() {
        //Goi API
        fetch("http://localhost:3000/employees")
        .then((res)=>res.json())
        .then((data)=>{
            this.employees = data;
        });
    },
    methods: {
        showForm(){
            this.isShowForm = true;
        },
        closeForm(close){
            this.isShowForm = false
            console.log(close)
        },
        showDialog(){
            this.isShowDialog = true;
        },
        closeQuestionDialog(){
            this.isShowDialog = false;
        }
    },
    data() {
        return {
            employees: [],
            isShowForm: false,
            isShowDialog: false
        }
    },
}
</script>

<style scoped>
.employeeList{
    position: absolute;
    top: 0;
    right: 24px;
    left: 24px;
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: calc(100% - 48px); */
    margin: 0 auto;
}
.content_top{
    font-size: 24px;
    font-weight: 700;
}
.button_top{
    border: none;
    outline: none;
    background-color: rgb(67, 255, 67);
    padding: 8px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}
.bottom{
    margin: 0 auto;
    padding: 16px 0;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
}
.search_refresh{
    display: flex;
    justify-content: end;
    padding-bottom: 16px;
    align-items: center;
}
.search{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(67, 255, 67);
    border-radius: 4px;
    padding: 2px;
}
.search>img{
    width: 28px;
    height: 28px;
}
.search input{
    border: none;
    outline: none;
    height: 20px;
    font-size: 14px;
    padding-right: 8px;
}
.icon_refresh{
    padding: 0 24px 0 4px;
    width: 28px;
    height: 28px;
}
table{
    border-collapse: collapse;
    width: calc(100% - 48px);
    margin: 0 auto;
}
tr {
    border: 1px solid black;
}
.option{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
}
.btnUpdate{
    cursor: pointer;
}
</style>