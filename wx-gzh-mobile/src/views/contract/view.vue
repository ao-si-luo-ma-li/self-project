<template>
  <div class="apply-type">
    <!-- <div class="title">
      日常下载
    </div>
    <div class="content-warp">
      <div class="content">
        <div class="bg-line">
          <div class="line-red"></div>
          <div class="line-blue"></div>
        </div>
        <div class="look-for">
          <a href="/dist/static/files/custom.docx" target="_blank"><p class="bold"><span class="pointer"></span>客户意向表</p></a>
          <a href="/dist/static/files/necessary.doc" target="_blank"><p class="bold"><span class="pointer"></span>撰写所需信息</p></a>
          <a href="/dist/static/files/contract.docx" target="_blank"><p class="bold"><span class="pointer"></span>合同范本</p></a>
          <p>diva@k-joys.com</p>
          <img src="../../assets/images/down.png" alt="">
          <p>请点击上面链接</p>
        </div>
      </div>
    </div> -->
    <img src="../../assets/images/daliyDown.png" alt="" class="new-down">
    <a href="/dist/static/files/custom.docx" target="_blank" class="intention"></a>
    <a href="/dist/static/files/contract.docx" target="_blank" class="contract-copy"></a>
  </div>
</template>

<script>
export default {
  name: 'contract',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/libs/const.scss';
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
  background: url('../../assets/images/bg_title.png') no-repeat;
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
      &.bold {
        font-size: toRem(44px);
        font-weight: bold;
      }
    }
    img {
      width: toRem(350px);
      margin-top: toRem(50px);
    }
    a {
      display: block;
      position: relative;
      color: #000;
      font-size: toRem(30px);
      margin-top: toRem(16px);
      z-index: 8;
    }
  }
}
.pointer {
  display: inline-block;
  vertical-align: text-bottom;
  width: toRem(60px);
  height: toRem(60px);
  background: url('../../assets/images/pointer.png') no-repeat center;
  background-size: contain;
}
.new-down {
  width: 100%;
  height: 100%;
}
.intention, .contract-copy {
  position: absolute;
  width: toRem(524px);
  height: toRem(90px);
  top: toRem(318px);
  left: toRem(114px);
  z-index: 6;
}
.contract-copy {
  top: toRem(476px);
}
</style>

