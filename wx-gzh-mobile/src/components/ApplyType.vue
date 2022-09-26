<template>
  <div class="apply-type">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content-warp">
      <div class="content">
        <div class="bg-line">
          <div class="line-red"></div>
          <div class="line-blue"></div>
        </div>
        <div class="look-for">
          <p>您需填写如下信息</p>
          <p>发送邮件给到我们即可</p>
          <p>邮箱地址</p>
          <p>diva@k-joys.com</p>
          <a :href="qualifyLink" target="_blank" v-if="qualifyLink">
            <img src="../assets/images/down.png" alt="">
            <p>点击下载</p>
          </a>
          <img src="../assets/images/down.png" alt="" v-else>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    qualifyLink: String
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.apply-type {
  font-family: 'hdjxyt';
  background: #fff;
}
.title {
  display: inline-block;
  padding: 0 toRem(200px) 0 toRem(100px);
  font-size: toRem(80px);
  line-height: 1;
  color: $clMain;
  background: url('../assets/images/bg_title.png') no-repeat;
  background-size: contain;
  margin: toRem(40px) 0 toRem(90px);
  letter-spacing: -2px;
}
.content-warp {
  position: relative;
  padding: 0 toRem(10px) toRem(50px);
  .content {
    position: relative;
    padding: toRem(80px) toRem(50px) toRem(55px);
  }
  .bg-line {
    position: absolute;
    left: 10px;
    top: 0;
    width: 100%;
    height:100%;
    .line-blue,
    .line-red {
      position: absolute;
      width: calc(100% - (40px));
      height: 100%;
      border-width: toRem(4px);
      border-style: solid;
      border-radius: toRem(16px);
    }
    .line-blue {
      top: 0;
      border-color: $clMain;
    }
    .line-red {
      top: 20px;
      left: 20px;
      border-color: #e71712;
    }
  }
  .look-for {
    font-size: toRem(40px);
    text-align: center;
    p {
      margin-bottom: toRem(30px);
    }
    img {
      width: toRem(350px);
      margin-top: toRem(50px);
    }
  }
}
[href] {
  position: relative;
  z-index: 6;
}
</style>

