<template>
  <div class="classify-list">
    <div class="img-wrap">
      <img :src="docDetail.title" alt="" srcset="" class="png-title" />
      <div class="content-wrap">
        <img :src="png10" class="content-header" />
        <div class="content-text">
          <div
            v-for="item in docDetail.tips"
            :key="item"
            class="content-text_item"
          >
            <img :src="png1" alt="" srcset="" class="png-1" />
            <span v-html="item"></span>
          </div>
        </div>
        <!-- <img :src="png4" alt="" srcset="" class="png-4" /> -->
        <img :src="png2" alt="" srcset="" class="png-2" />
        <img :src="png9" alt="" srcset="" class="png-9" />
      </div>
      <img :src="png3" alt="" srcset="" class="png-3" />
      <img :src="png5" alt="" srcset="" class="png-5" />
      <img :src="png6" alt="" srcset="" class="png-6" />
      <img :src="png8" alt="" srcset="" class="png-8" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'classlist',
  props: ['docDetail'],
  data() {
    return {
      png1: require('@/assets/images/docDetail/1.png'),
      png2: require('@/assets/images/docDetail/2.png'),
      png3: require('@/assets/images/docDetail/3.png'),
      png4: require('@/assets/images/docDetail/4.png'),
      png5: require('@/assets/images/docDetail/5.jpg'),
      png6: require('@/assets/images/docDetail/6.png'),
      png8: require('@/assets/images/docDetail/8.png'),
      png9: require('@/assets/images/docDetail/9.png'),
      png10: require('@/assets/images/docDetail/10.jpg'),
    };
  },
  mounted() {
    console.log('docDetail+++++++++++++++', this.docDetail);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.classify-list {
  min-height: 100vh;
  background: #ffda00;

  .img-wrap {
    position: relative;
    overflow: hidden;
  }

  .png-1,
  .png-2,
  .png-3,
  .png-4,
  .png-5,
  .png-6,
  .png-7,
  .png-8,
  .png-9,
  .png-title,
  .content {
    position: absolute;
    z-index: 6;
  }

  .png-1 {
    width: toRem(130px);
    top: toRem(70px);
    left: toRem(40px);
  }

  .png-2 {
    width: toRem(650px);
    bottom: toRem(-90px * 2);
    left: toRem(14px);
  }

  .png-3 {
    width: toRem(100px);
    top: toRem(310px);
    left: toRem(80px);
  }

  .png-4 {
    height: 100%;
    width: toRem(650px);
    top: 0;
    left: toRem(31px * 2);
    z-index: 1;
  }

  .png-5 {
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .png-6 {
    width: toRem(400px);
    top: toRem(225px);
    left: 0;
  }

  .png-7 {
    width: toRem(70px);
    top: toRem(70px);
    right: toRem(70px);
  }

  .png-8 {
    width: toRem(135px * 2);
    top: 0;
    right: toRem(36px);
    z-index: 3;
  }

  .png-9 {
    width: toRem(110px * 2);
    bottom: toRem(-95px * 2);
    left: toRem(-31px * 2);
    z-index: 9;
  }

  .png-title {
    width: toRem(400px);
    top: toRem(23px * 2);
    left: toRem(23px * 2);
  }

  .content {
    &-wrap {
      position: relative;
      padding: toRem(70px * 2) 0 0 0;
      margin: toRem(105px * 2) toRem(31px * 2);
      left: 0;
      z-index: 2;
    }

    &-header {
      position: absolute;
      width: toRem(327px * 2);
      height: toRem(70px * 2);
      left: 0;
      right: 0;
      top: 0;
      background-size: contain;
    }

    &-text {
      min-height: 50vh;
      position: relative;
      padding: toRem(26px * 2) toRem(27px * 2) toRem(40px * 2) toRem(27px * 2);
      color: #333;
      font-size: 14px;
      z-index: 3;
      background: #fff;
      border-style: solid;
      border-color: #333;
      border-width: 0 2px 2px 2px;

      &_item {
        position: relative;
        padding: 10px 20px;
        background: #ffdc03;
        border-radius: 6px;
        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
        margin-bottom: toRem(20px);

        img {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      }
    }
  }
}
</style>
