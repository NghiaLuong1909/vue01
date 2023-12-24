<template>
    <div class="modal">
        <div class="container">
            <div class="header_modal">
                <div class="header_left">
                    <h2>Thong tin nhan vien</h2>
                    <div class="check1">
                        <input type="checkbox">La khach hang
                    </div>
                    <div class="check2">
                        <input type="checkbox">La nha cung cap
                    </div>
                </div>
                <div class="header_right">
                    <img src="../../assets/close-48.png" alt="" class="img_close" @click="btnClose">
                </div>
            </div>

            <div class="content_modal">
                <div class="content_modal_top">
                    <div class="content_modal_left">
                        <div class="line1_left">
                            <div class="employeeId">
                                <h3>Ma<span style="color: red;">*</span> </h3>
                                <input type="text">
                            </div>
                            <div class="fullName">
                                <h3>Ten<span style="color: red;">*</span> </h3>
                                <input type="text">
                            </div>
                        </div>
                        <div class="department">
                            <h3>Don vi<span style="color: red;">*</span> </h3>
                            <select name="" id="">
                                <option value="">ABC</option>
                                <option value="">DEF</option>
                            </select>
                        </div>
                        <div class="locationInDepartment">
                            <h3>Chuc danh<span style="color: red;">*</span> </h3>
                            <input type="text">
                        </div>
                    </div>
                    <div class="content_modal_right">
                        <div class="line1_right">
                            <div class="birthDay">
                                <h3>Ngay sinh<span style="color: red;">*</span> </h3>
                                <input type="date">
                            </div>
                            <div class="nameGender">
                                <h3>Gioi tinh<span style="color: red;">*</span> </h3>
                                <div class="list_radio">
                                    <div class="male">
                                        <input type="radio">Nam
                                    </div>
                                    <div class="female">
                                        <input type="radio">Nu
                                    </div>
                                    <div class="orther">
                                        <input type="radio">Khac
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="accountNumber">
                            <h3>So tai khoan<span style="color: red;">*</span> </h3>
                            <input type="text">
                        </div>
                        <div class="phoneNumber">
                            <h3>So dien thoai<span style="color: red;">*</span> </h3>
                            <input type="text">
                        </div>
                    </div>
                </div>
                
                <div class="content_modal_bottom">
                    <div class="address">
                        <h3>Dia chi<span style="color: red;">*</span> </h3>
                        <input type="text">
                    </div>
                </div>
            </div>

            <div class="footer_modal">
                <div class="cancelBtn">
                    <button class="cancel">Huy</button>
                </div>
                <div class="store_addBtn">
                    <button class="store">Cat</button>
                    <button class="store_add">Cat va Them</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployeeDetail",
    methods: {
        btnClose(){
            this.$emit('closeForm', true)
        }
    },
    emits: [
        'closeForm'
    ]
}
</script>

<style scoped>
/* CSS Header */
.modal{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
    display: flex;
	align-items: center;
	justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none; */
}
.container{
    position: relative;
    width: 800px;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    overflow: hidden;
    animation: showForm ease 0.3s;
}
@keyframes showForm{
    from{
        top: -200px;
        opacity: 0.7;
    }
    to{
        top: 0;
        opacity: 1;
    }
}
.header_modal{
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    /* padding: 12px; */
}
.header_left{
    display: flex;
    align-items: center;
    padding-left: 16px;
}
.header_left h2{
    color: #000;
    font-size: 24px;
}
.header_left h2{
    padding-bottom: 4px;
}
.description_checkbox{
    margin-bottom: 4px;
}
.check1 , 
.check2 {
    margin-left: 16px;
    display: flex;
}
.header_right{
    position: absolute;
    top: 8px;
    right: 8px;
}
.header_right img{
    width: 28px;
    height: 28px;
    cursor: pointer;
}
.img_question{
    padding-right: 4px;
}
/* CSS Content */

/* Content left */
.content_modal{
    padding: 0 24px 24px 16px;
}
.content_modal_top{
    display: flex;
    padding-bottom: 16px;
}
.content_modal_left{
    width: 50%;
}
.content_modal_left h3{
    margin: 8px 0 4px 0;
}
.line1_left{
    display: flex;
}
.employeeId{
    width: 40%;
}
.employeeId input{
    width: 90%;
    outline: none;
    font-size: 20px;
}
.fullName{
    width: 55%;
}
.fullName input{
    width: 100%;
    outline: none;
    font-size: 20px;
}
.department,
.locationInDepartment{
    width: 95%;
}
.department select{
    width: 100%;
    outline: none;
    font-size: 23px;
}.locationInDepartment input{
    width: 100%;
    outline: none;
    font-size: 20px;
}

/* Content right */
.content_modal_right{
    width: 50%;
    
}
.line1_right{
    display: flex;
}
.content_modal_right h3{
    margin: 8px 0 4px 0;
}
.birthDay{
    width: 50%;
}
.birthDay input{
    width: 90%;
    outline: none;
    font-size: 20px;
}
.nameGender{
    width: 55%;
}
.list_radio{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.accountNumber input,
.phoneNumber input{
    width: 100%;
    outline: none;
    font-size: 20px;
}
.content_modal_bottom h3{
    margin: 8px 0 4px 0;
}
.address{
    width: 100%;
}
.address input{
    width: 100%;
    outline: none;
    font-size: 20px;
}

/* Footer */
.footer_modal{
    display: flex;
    justify-content: space-between;
    /* padding: 16px; */
    width: calc(100% - 32px);
    margin: 0 auto;
    padding: 16px 0;
    border-top: 1px solid #ccc;
}
.cancel,
.store{
    font-size: 16px;
    border-radius: 4px;
    border: none;
    background-color: #ccc;
    width: 60px;
    height: 36px;
}
.store_add{
    font-size: 16px;
    border-radius: 4px;
    border: none;
    background-color: rgb(67, 255, 67);
    color: #ffffff;
    min-width: 120px;
    height: 36px;
    margin-left: 4px;
}


</style>