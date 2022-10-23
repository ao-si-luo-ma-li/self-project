<template>
  <div :class="`simp-classify-list ${isWW ? 'ww' : ''}`">
    <div class="img-top-wrap">
      <img :src="docDetail.title" alt="" srcset="" class="png-title" />
      <img :src="simpRitleRightBg" alt="" srcset="" class="simpRitleRightBg" />
    </div>
    <div class="img-middle-wrap">
      <div class="action-list">
        <img :src="action1" alt="" srcset="" class="action action-1" />
      </div>

      <ol class="content-text">
        <li
          v-for="item in docDetailDo.tips"
          :key="item"
          class="content-text_item"
        >
          <span v-html="item"></span>
        </li>
      </ol>

      <ol v-if="docDetailDo.tips_other" style="width: 100%">
        <li v-for="item in docDetailDo.tips_other" :key="item">
          <ol class="content-text other">
            <li
              class="content-text_item"
              v-for="in_item in item"
              :key="in_item"
            >
              <span v-html="in_item"></span>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { isWenWangWen } from '../mock/cost';
export default {
  name: 'classlist',
  props: ['docDetail'],
  data() {
    return {
      simpRitleRightBg: require('@/assets/images/simpClassifylist/simp-title-right-bg.png'),
      action1: require('@/assets/images/simpClassifylist/action-2.png'),
      docDetailDo: {},
      isWW: false,
    };
  },
  mounted() {
    this.docDetailDo = {
      ...this.docDetail,
      tips: this.docDetail.tips.map(item => item.replace(/[0-9]\./gi, '')),
    };
    console.log('this.docDetailDo', this.docDetailDo);
    this.isWW =
      isWenWangWen
        .map(wwSrc => wwSrc.split('_')[1])
        .findIndex(wwSrc => location.href.includes(wwSrc)) > -1;
    console.log('docDetailDo +++++++++++++++', this.docDetailDo);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.simp-classify-list {
  min-height: 100vh;
  background: #8fb5fd;
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

  .content-text {
    margin-top: 10px;
    background: #edecfe;
    padding: 20px;
    font-size: 12px;
    border-radius: 8px;
    color: #000;
    counter-reset: li; /* 创建一个计数器 */

    &_item {
      padding: 6px 0 6px 20px;
      position: relative;
      list-style: none; /* 清除列表默认的编码*/
      border-bottom: 1px dashed #999;
      &:last-child {
        border: none;
      }

      &::before {
        content: '0' counter(li);
        counter-increment: li;
        position: absolute;
        left: 0;
        top: 0%;
        background: #4840ee;
        height: 1.4em;
        width: 1.4em;
        line-height: 1.4em;
        margin-top: 6px;
        color: #fff;
        text-align: center;
        font-weight: bold;
        border-radius: 8px 0 8px 0;
        font-size: 12px;
        transform: scale(0.8);
      }
    }
  }
}

.simp-classify-list.ww {
  background: url('../assets/images/simp_bg/ww-simp-bg.jpg') repeat;
  background-size: contain;

  .content-text_item {
    &::before {
      background: #fa6933;
    }
  }
}
</style>
