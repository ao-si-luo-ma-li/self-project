<template>
  <div class="apply-tip">
    <div class="title">
      <template v-if="title">
        <div v-html="title" style="font-size: 2rem"></div>
      </template>
      <slot name="title" v-else></slot>
    </div>
    <div v-if="subTitle" class="subTitle" v-html="subTitle"></div>
    <div class="content-warp">
      <div class="sub-title">
        <p>您仅需要提供以下材料</p>
        <div class="bg-text">
          <div class="line-red"></div>
          <div class="line-blue"></div>
        </div>
      </div>
      <div class="content">
        <div class="bg-line">
          <div class="line-red"></div>
          <div class="line-blue"></div>
        </div>
        <div class="preMark" v-html="preMark"></div>
        <ol>
          <li v-for="tip in tips" :key="tip">
            <div class="b-line" :class="{'onlyLine': !tip.sLine}" v-html="tip.bLine"></div>
            <div class="s-line" v-html="tip.sLine"></div>
          </li>
        </ol>
        <div class="remark" v-html="remark"></div>
        <p class="sum-up">剩下的事情就交给我们处理啦！</p>
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
    tipDetail: Object
  },
  mounted() {
    // console.log(this.tipDetail)
  },
  computed: {
    tips() {
      return this.tipDetail ? this.tipDetail.tips : [];
    },
    remark() {
      return this.tipDetail ? this.tipDetail.remark : '';
    },
    preMark() {
      return this.tipDetail ? this.tipDetail.preMark : '';
    },
    title() {
      return this.tipDetail ? this.tipDetail.title : '';
    },
    subTitle() {
      return this.tipDetail ? this.tipDetail.subTitle : '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.apply-tip {
  font-family: 'hdjxyt';
  background: #fff;
  padding: 1px 0;
}
.title {
  display: inline-block;
  position: relative;
  font-size: toRem(80px);
  line-height: toRem(80px);
  padding: 0 toRem(230px) 0 toRem(100px);
  color: $clMain;
  margin: toRem(40px) 0 toRem(90px);
  letter-spacing: -2px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: toRem(100px);
    height: 100%;
    background: url('../assets/images/bg_title.png') no-repeat;
    background-position: 0 0;
    background-size: cover;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    width: toRem(220px);
    height: 100%;
    background: url('../assets/images/bg_title.png') no-repeat;
    background-position: toRem(-410px) 0;
    background-size: cover;
  }
}
.subTitle {
  margin-top: toRem(-70px);
  margin-bottom: toRem(90px);
  font-size: toRem(36px);
  font-weight: bold;
  line-height: 1;
  color: $clMain;
}
.content-warp {
  position: relative;
  padding: 0 toRem(10px) toRem(50px);
  .content {
    position: relative;
    padding: toRem(50px) toRem(50px) toRem(35px);
  }
  .sub-title {
    position: absolute;
    top: toRem(-35px);
    left: toRem(60px);
    width: toRem(450px);
    text-align: center;
    p {
      font-size: toRem(40px);
      color: #fff;
      position: relative;
      height: toRem(70px);
      line-height: toRem(70px);
      z-index: 4;
    }
    .line-blue,
    .line-red {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transform: skewX(-15deg);
      background: $clMain;
    }
    .line-red {
      top: toRem(8px);
      left: toRem(6px);
      background: #e71712;
    }
  }
  .bg-line {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    .line-blue,
    .line-red {
      position: absolute;
      width: calc(100% - (10px));
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
      top: 10px;
      left: 10px;
      border-color: #e71712;
    }
  }
  ol {
    margin: toRem(50px) 0 toRem(50px) toRem(50px);
    line-height: 1;
    counter-reset: li;
    li {
      position: relative;
      text-align: center;
      background: #e8f2f6;
      margin-bottom: toRem(50px);
      border-left: toRem(4px) solid $clMain;
      &:nth-child(-n+2) {
        &::before {
          color: #dc9861!important;
        }
      }
      &::after {
        content: '';
        position: absolute;
        right: 100%;
        bottom: toRem(-10px);
        margin-right: toRem(5px);
        width: toRem(45px);
        border-bottom: toRem(4px) solid #e71712;
      }
      &::before {
        content: counter(li);
        counter-increment: li;
        position: absolute;
        right: 100%;
        width: toRem(50px);
        text-align: center;
        font-size: toRem(70px);
        color: $clMain;
        font-weight: bold;
      }
    }
    .b-line {
      font-size: toRem(44px);
      font-style: italic;
      font-weight: bold;
      &.onlyLine {
        height: toRem(72px);
        line-height: toRem(72px);
      }
    }
    .s-line {
      font-weight: bold;
      font-size: toRem(30px);
    }
  }
  .sum-up {
    font-size: toRem(40px);
    text-align: center;
  }
}
.preMark, 
.remark {
  margin: toRem(20px) 0;
}
</style>

