<template>
  <div :class="`simp-classify-list ${isWW ? 'ww' : ''}`">
    <div class="img-top-wrap">
      <img :src="classifyDetial.title" alt="" srcset="" class="png-title" />
      <img :src="simpRitleRightBg" alt="" srcset="" class="simpRitleRightBg" />
    </div>
    <div class="img-middle-wrap">
      <div class="action-list">
        <router-link :to="`/simp-business-list/${tip}`">
          <img
            :src="!isWW ? action1 : action1_ww"
            alt=""
            srcset=""
            class="action action-1"
          />
        </router-link>
        <router-link
          :to="`${classifyDetial.docPath || `/simp-doc-list/${tip}`}`"
        >
          <img
            :src="!isWW ? action2 : action2_ww"
            alt=""
            srcset=""
            class="action action-2"
          />
        </router-link>
        <router-link
          :to="`${classifyDetial.costPath || `/simp-cost-list/ww_${tip}`}`"
        >
          <img
            :src="!isWW ? action3 : action3_ww"
            alt=""
            srcset=""
            class="action action-3"
            v-on:click="handleCostPath"
          />
        </router-link>
      </div>
      <div class="book-list">
        <!-- [RECORD] 证书样例没有多张的可能性。以下逻辑不会出现，注释掉引入及使用的相关代码，减小打包后体积 -->
        <!-- <div v-if="isArray(classifyDetial.book)">
          <VueSlickCarousel
            :arrows="true"
            :dots="true"
            class="book-wrap"
            :draggable="draggable"
            :infinite="false"
          >
            <div
              class="book-wrap_img-wrap"
              v-for="img in classifyDetial.book"
              :key="img"
            >
              占位莫删
              <img :src="img" preview="0" alt="" srcset="" class="png-book" />
            </div>
          </VueSlickCarousel>
        </div> -->

        <div v-if="isArray(classifyDetial.book)">
          <div
            class="book-wrap_img-wrap"
            v-for="img in classifyDetial.book"
            :key="img"
          >
            占位莫删
            <img :src="img" preview="0" alt="" srcset="" class="png-book" />
          </div>
        </div>

        <div v-else class="book-wrap">
          <img
            :src="classifyDetial.book"
            preview="0"
            alt=""
            srcset=""
            class="png-book"
            v-if="classifyDetial.book"
          />
          <div v-else>暂无证书模版</div>
        </div>
      </div>

      <div class="img-bottom-wrap">
        <div class="video-title">
          <span
            >年检视频
            <img :src="videoLeft" alt="" class="video-icon left" />
            <img :src="videoRight" alt="" class="video-icon right" />
          </span>
        </div>
        <div v-if="isEDI_ICP">
          <!-- <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            data-setup="{}"
            :class="`video-wrap ${isEDI_ICP ? 'has-video' : ''}`"
          >
            <source
              src="http://www.k-joys.com/ICP%E5%B9%B4%E6%A3%80%E8%A7%86%E9%A2%912021%E7%89%88.rmvb"
              type="video/mp4"
            />
            <p class="vjs-no-js">
              暂无视频
            </p>
          </video> -->
          <div
            id="dplayer"
            :class="`video-wrap ${isEDI_ICP ? 'has-video' : ''}`"
          ></div>
        </div>
        <div v-else class="video-wrap">暂无视频</div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel';
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
// import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import { isWenWangWen } from '../mock/cost';
import { isArray } from '../utils/util';
import Hls from 'hls.js';
import DPlayer from 'dplayer';

export default {
  name: 'classlist',
  props: ['classifyDetial', 'tip'],
  data() {
    return {
      action1: require('@/assets/images/simpClassifylist/action-1.png'),
      action2: require('@/assets/images/simpClassifylist/action-2.png'),
      action3: require('@/assets/images/simpClassifylist/action-3.png'),
      action1_ww: require('@/assets/images/simpClassifylist/action-1_ww.png'),
      action2_ww: require('@/assets/images/simpClassifylist/action-2_ww.png'),
      action3_ww: require('@/assets/images/simpClassifylist/action-3_ww.png'),
      simpRitleRightBg: require('@/assets/images/simpClassifylist/simp-title-right-bg.png'),
      videoLeft: require('@/assets/images/simpClassifylist/video-left.png'),
      videoRight: require('@/assets/images/simpClassifylist/video-right.png'),
      draggable: true,
      showLianXi: false,
      isWW: false,
      isEDI_ICP: false,
    };
  },
  mounted() {
    console.log('classifyDetial', this.classifyDetial);
    setTimeout(() => {
      this.draggable = false;
      this.$previewRefresh();
    }, 100);
    this.isWW =
      isWenWangWen
        .map(wwSrc => wwSrc.split('_')[1])
        .findIndex(wwSrc => location.href.includes(wwSrc)) > -1;

    this.isEDI_ICP =
      location.href.includes('b1_') || location.href.includes('b2_');

    if (this.isEDI_ICP) {
      setTimeout(() => {
        this.dp = new DPlayer({
          container: document.getElementById('dplayer'),
          autoplay: false,
          theme: '#FADFA3',
          loop: true,
          lang: 'zh-cn',
          preload: 'auto',
          volume: 0.7,
          mutex: true,
          video: {
            url: 'http://www.k-joys.com/video/9s.m3u8',
            type: 'customHls',
            customType: {
              customHls: function(video, player) {
                const hls = new Hls();
                hls.loadSource(video.src);
                hls.attachMedia(video);
              },
            },
          },
        });

        this.dp.on('play', () => {
          console.log('play');
          this.dp.fullScreen.request('web');
        });
      }, 16);
    }
  },
  methods: {
    isArray,
    handleCostPath() {
      if (this.classifyDetial.costCb) {
        const { costCb } = this.classifyDetial;
        return costCb.apply(this);
      }
    },
    handlePriceTalk() {
      this.showLianXi = !this.showLianXi;
    },
  },
  // components: { VueSlickCarousel },
};
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.simp-classify-list {
  min-height: 100vh;
  overflow: hidden;
  background: url('../assets/images/simp_bg/simp-bg.png') repeat;
  background-size: contain;

  .img-wrap {
    position: relative;
  }

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

    .book-list {
      width: toRem(120px * 2);
    }
  }

  .img-bottom-wrap {
    width: 100%;

    .video-title {
      margin-top: 20px;
      text-align: center;

      > span {
        position: relative;
        color: #5046fc;
        font-size: 28px;
        font-weight: bold;
        display: inline-block;
        letter-spacing: 3px;
      }

      .video-icon {
        position: absolute;
        width: toRem(30px * 2);
        height: toRem(18px * 2);
        top: 50%;
        transform: translateY(-50%);

        &.left {
          right: 100%;
          margin-right: 20px;
        }

        &.right {
          left: 100%;
          margin-left: 20px;
        }
      }
    }

    .video-wrap {
      margin: 10px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #5046fc;
      border-radius: 16px;
      height: 140px;
      box-shadow: 4px 4px 1px #eee;

      &.has-video {
        border-radius: 0;
        box-shadow: none;
      }
    }
  }
}
</style>
<style lang="scss">
.simp-classify-list {
  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }

  .slick-dots li button:before {
    font-size: 12px;
  }
}

.simp-classify-list.ww {
  background: url('../assets/images/simp_bg/ww-simp-bg.jpg') repeat;
  background-size: contain;
}
</style>
