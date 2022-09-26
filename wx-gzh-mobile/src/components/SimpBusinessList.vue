<template>
  <div :class="`simp-classify-list ${isWW ? 'ww' : ''}`">
    <div class="img-top-wrap">
      <img :src="businessDetial.title" alt="" srcset="" class="png-title" />
      <img :src="simpRitleRightBg" alt="" srcset="" class="simpRitleRightBg" />
    </div>
    <div class="img-middle-wrap">
      <div class="action-list">
        <img :src="action1" alt="" srcset="" class="action action-1" />
      </div>

      <div class="content">
        <div v-html="businessDetial.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { isWenWangWen } from '../mock/cost';
export default {
  name: 'classlist',
  props: ['businessDetial'],
  data() {
    return {
      simpRitleRightBg: require('@/assets/images/simpClassifylist/simp-title-right-bg.png'),
      action1: require('@/assets/images/simpClassifylist/action-1.png'),
      isWW: false,
    };
  },
  mounted() {
    this.isWW =
      isWenWangWen
        .map(wwSrc => wwSrc.split('_')[1])
        .findIndex(wwSrc => location.href.includes(wwSrc)) > -1;
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.simp-classify-list {
  min-height: 100vh;
  overflow: hidden;
  background: url('../assets/images/simp_bg/simp-bg.png') repeat;
  background-size: contain;

  .img-top-wrap {
    padding: 16px 0;
    margin: 20px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    border-radius: 8px;

    .png-title {
      width: toRem(218px * 2);
    }

    .simpRitleRightBg {
      height: toRem(100px * 2);
      margin-left: toRem(-42px);
    }
  }

  .img-middle-wrap {
    margin: 20px 15px;
    padding: toRem(20px * 2) toRem(18px * 2) toRem(40px * 2);
    background: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .action-list {
      margin-top: toRem(12px);
      width: toRem(180px * 2);

      .action {
        width: toRem(174px * 2);
        margin-bottom: toRem(10px * 2);
      }
    }
  }

  .content {
    margin-top: 10px;
    background: #edecfe;
    padding: 20px;
    font-size: 12px;
    border-radius: 8px;
    color: #000;
    line-height: 24px;
    font-weight: bold;
  }
}

.simp-classify-list.ww {
  background: url('../assets/images/simp_bg/ww-simp-bg.jpg') repeat;
  background-size: contain;
}
</style>
