<template>
  <div class="tab-classify-list">
    <!-- 这里是两个tab需要显示的不同bg ------ start ------ -->
    <div
      :style="`display: ${tabList[0].title === activeTitle ? 'block' : 'none'}`"
    >
      <img :src="pngbg1" class="pngbg" alt="" />
    </div>
    <div
      :style="`display: ${tabList[1].title === activeTitle ? 'block' : 'none'}`"
    >
      <img :src="pngbg2" class="pngbg" alt="" />
    </div>
    <div class="common_bg">
      <div class="img-wrap">
        <div class="tab-title_wrap">
          <div
            v-for="(tabItem, index) in tabList"
            :key="tabItem.title"
            :class="
              `fee-item-style tab-title_${index} ${
                activeTitle === tabItem.title ? 'active' : ''
              }`
            "
            v-on:click="() => toggleTab(tabItem, index)"
            v-html="tabItem.title"
          ></div>
        </div>
        <!-- 这里是两个tab需要显示的不同bg  ------ end ------ -->
        <div v-for="tabItem in tabList" :key="tabItem.title">
          <div
            :style="
              `display: ${
                tabItem.title === activeTitle ? 'block' : 'none'
              };overflow: hidden;`
            "
          >
            <router-link
              :to="item.path"
              v-for="item in tabItem.list"
              :key="item.title"
              v-on:click="() => toggleItem(item)"
            >
              <div
                :class="
                  `tab-item flex-box ${
                    activeItem === item.title ? 'active' : ''
                  }`
                "
                v-html="item.title"
              ></div>
            </router-link>
          </div>
        </div>
        <img v-show="activeIndex === 0" :src="dianxin_b1_info" />
      </div>
    </div>
    <!-- 这里是两个tab需要显示的不同bg  ------ end ------ -->
  </div>
</template>

<script>
export default {
  name: 'tabClassifylist',
  props: ['tabList'],
  data() {
    return {
      pngbg1: require('../assets/images/simp_bg/dianxin_bb_01.png'),
      pngbg2: require('../assets/images/simp_bg/dianxin_bb_02.png'),
      dianxin_b1_info: require('../assets/images/simp_bg/dianxin_b1_info.png'),
      activeTitle: '',
      activeItem: '',
    };
  },
  mounted() {
    console.log('+++++++++++++++', this.tabList);
    this.activeTitle = this.tabList[0].title;
    this.activeIndex = 0;
  },
  methods: {
    toggleTab(tabItem, tabIndex) {
      this.activeTitle = tabItem.title;
      this.activeIndex = tabIndex;
    },
    toggleItem(item) {
      console.log('item', item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.tab-classify-list {
  min-height: 100vh;

  .common_bg {
    padding-top: 20px;
    padding-bottom: 30px;
    background: url('../assets/images/simp_bg/common_bg.png');
    background-size: cover;
  }

  .pngbg {
    width: 100%;
  }

  .tab-title_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .fee-item-style {
    position: relative;
    margin: 0 toRem(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.2;
    flex: 1;
    height: toRem(34px * 2);
    font-size: toRem(24px);
    padding: 0 3px;
    color: #333;
    text-align: left;
    font-weight: bold;
    text-align: center;
    z-index: 8;

    &:first-child {
      &::after {
        left: -2px;
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #fff;
      border-radius: toRem(100px);
      border: 1px solid #333;
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 3px;
      left: 2px;
      background: #ffd553;
      border-radius: toRem(100px);
      border: 1px solid #333;
      z-index: -2;
    }

    &.active {
      color: #fff;

      &::before {
        background: #ffd553;
        border-color: #333;
      }
      &::after {
        background: #fff;
        border-color: #333;
      }
    }
  }

  .img-wrap {
    position: relative;
    margin: 0 toRem(15px * 2);
    padding: toRem(20px * 2);
    border-radius: 7px;
    background: #fff;
    z-index: 5;

    .tab-item {
      height: toRem(40px * 2);
      background: #f8f6f6;
      font-size: toRem(13px * 2);
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: toRem(18px * 2);
      color: #333;
      font-weight: bold;
    }
  }
}
</style>
