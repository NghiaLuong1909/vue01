<template>
    <div class="menu">
        <div class="menu-title">
            <img src="../../assets/toggle.png" alt="" class="icon_list">
            <div class="title">
                <div class="img">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <h2>KeToan</h2>
            </div>
        </div>
        <div class="menu-list">
            <router-link to="/">
                <div class="menu-list__text">
                    Trang chu
                </div>
            </router-link>

            <router-link to="">
                <div class="menu-list__text">
                    Bao cao
                </div>
            </router-link>

            <router-link to="/employeeList">
                <div class="menu-list__text">
                    Nhan vien
                </div>
            </router-link>

            <router-link to="">
                <div class="menu-list__text">
                    Cai dat
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"TheMenu",
    
    
}
</script>

<style scoped>
@import '../../css/theMenu.css';
</style>