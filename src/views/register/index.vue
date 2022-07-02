<template>
  <div class="reg-container">
    <div class="reg-box">
      <div class="title-box">ss</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-register"
}
</script>

<style lang="less">
.reg-container {
  background: url("@/assets/img/login-bg.svg") center;
  background-size: cover;
  height: 100%;

  .reg-box {
    width: 400px;
    height: 335px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    box-sizing: border-box;

    .title-box {
      height: 60px;
      //   background: url("../../assets/images/login_title.png") center no-repeat;
    }

    .btn-reg {
      width: 100%;
    }
  }
}
</style>
