<template>
  <div style="padding: 1px 0;">
    <div class="sch-title">
      <span class="title">择校资料</span>
      <span class="range">(仅限于上海市内 幼、小、初)</span>
    </div>
    <img :src="imgSrc" :alt="title">
    <div class="sch-content">
      <div class="necss">必填信息</div>
      <p>孩子姓名/性别/出生年月日/身份证号码</p>
      <p>孩子是否上海户口</p>
      <p>若不是上海户口父亲是否达标120分</p>
      <p>若不是上海户口母亲是否达标120分</p>
      <p>孩子户口所在地址</p>
      <p>孩子户口地址是否是父母名下产权房</p>
      <p>父亲户口地址</p>
      <p>母亲户口地址</p>
      <p>父亲姓名及工作</p>
      <p>母亲姓名及工作</p>
      <p>目前XX区幼儿园/小学及年级（选择幼儿者不必填写）</p>
      <div class="spl-line"></div>
      <p>目标学校</p>
      <p>（三个备案，按优先级别排列）</p>
      <p>父亲姓名及工作</p>
      <p>母亲姓名及工作</p>
      <p>孩子特长/获奖情况/补习情况</p>
      <p>最近一次期中或者期末考试各科成绩</p>
    </div>
    <div class="sch-contact">
      <div class="inner">
        <a href="/dist/static/files/gf_school.docx" target="_blank" class="download">
          <img :src="downSrc" alt="">
          <p>点击下载模版</p>
        </a>
        <div>
          <p>请结合上述信息编辑孩子简历</p>
          <p>（不得少于三页）</p>
          <p>用word形式发送我的邮箱</p>
          <p>diva@k-joys</p>
          <p>并标记 XX 择校信息</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'gf_holiday',
    data() {
      return {
        title: '节日定制',
        imgSrc: require('../../assets/images/gift/school.jpg'),
        downSrc: require('../../assets/images/down.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/libs/const.scss';
.sch-title {
  padding: 0 toRem(10px);
  margin: toRem(15px) toRem(8px);
  width: toRem(596px);
  font-weight: bold;
  border: 1px solid $clMainA;
  color: $clMainA;
  .title {
    font-size: toRem(50px);
  }
  .range {
    font-size: toRem(26px);
  }
  .title, .range {
    display: inline-block;
    vertical-align: baseline;
  }
}
.sch-content {
  margin: toRem(50px) toRem(35px) toRem(30px);
  padding-bottom: toRem(40px);
  text-align: center;
  border: 1px solid $clMainA;
  .necss {
    margin: toRem(-35px) auto toRem(24px);
    width: toRem(184px);
    color: #fff;
    font-size: toRem(40px);
    font-weight: bold;
    height: toRem(70px);
    line-height: toRem(70px);
    background: $clMainA;
  }
  p {
    font-weight: bold;
    font-size: toRem(26px);
    padding: toRem(4px) 0;
  }
  .spl-line {
    position: relative;
    margin: toRem(20px) toRem(35px);
    border-bottom: 1px solid $clMainA;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: toRem(-10px);
      margin-left: toRem(-10px);
      width: toRem(20px);
      height: toRem(20px);
      transform: rotate(45deg);
      background: $clMainA;
    }
  }
}
.sch-contact {
  position: relative;
  padding: toRem(40px) 0;
  margin: 0 toRem(138px);
  text-align: center;
  font-weight: bold;
  border: 1px solid $clMainA;
  .inner {
    position: relative;
    z-index: 5;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -5%;
    margin-top: toRem(-127px);
    width: 110%;
    height: toRem(255px);
    z-index: 1;
    background: #fff;
  }
  img {
    display: block;
    margin: 0 auto;
    width: toRem(114px);
  }
  .download {
    display: block;
    font-size: toRem(28px);
    margin: toRem(10px) auto toRem(20px);
  }
  p {
    font-size: toRem(26px);
    padding: toRem(5px) 0;
  }
}
</style>
