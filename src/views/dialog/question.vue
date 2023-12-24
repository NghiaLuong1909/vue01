<template>
    <div class="questionDialog">
        <div class="contentQuestionDialog">
            <div class="question">
                <img src="../../assets/question-48.png" alt="">
                <div class="content">
                    <p>Ban co chac chan muon xoa nhan vien nay khong?</p>
                </div>
            </div>
            <div class="answerBtn">
                <button class="btnNo" @click="closeQuestionDialog">Khong</button>
                <button class="btnYes">Xoa</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuestionDialog",
    methods: {
        closeQuestionDialog(){
            this.$emit('closeQuestionDialog')
        }
    },
    emits: [
        'closeQuestionDialog'
    ]
}
</script>

<style scoped>
.questionDialog{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
	align-items: center;
	justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
}
.contentQuestionDialog{
    position: relative;
    width: 450px;
    height: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    overflow: hidden;
    animation: showQuestionDialog ease 0.3s;
}
@keyframes showQuestionDialog{
    from{
        top: -200px;
        opacity: 0.7;
    }
    to{
        top: 0;
        opacity: 1;
    }
}
.question{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
}
.content{
    font-size: 18px;
}
.answerBtn{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.btnNo,
.btnYes{
    font-size: 16px;
    width: 70px;
    height: 36px;
}
</style>