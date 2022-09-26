<template>
  <div class="tab-classify-list">
    <img :src="png1" class="png1" alt="" />
    <img :src="png10" class="png10" alt="" />
    <!-- 这里是两个tab需要显示的不同bg ------ start ------ -->
    <div
      :style="`display: ${tabList[0].title === activeTitle ? 'block' : 'none'}`"
    >
      <img :src="png3" class="png3" alt="" />
      <img :src="png4" class="png4" alt="" />
      <img :src="png5" class="png5" alt="" />
      <img :src="png6" class="png6" alt="" />
    </div>
    <div
      :style="`display: ${tabList[1].title === activeTitle ? 'block' : 'none'}`"
    >
      <img :src="png12" class="png12" alt="" />
      <img :src="png13" class="png13" alt="" />
      <img :src="png15" class="png15" alt="" />
      <img :src="png16" class="png16" alt="" />
    </div>
    <!-- 这里是两个tab需要显示的不同bg  ------ end ------ -->
    <div class="img-wrap">
      <div class="tab-title_wrap">
        <div
          v-for="(tabItem, index) in tabList"
          :key="tabItem.title"
          :class="
            `tab-title tab-title_${index} ${
              activeTitle === tabItem.title ? 'active' : ''
            }`
          "
          v-on:click="() => toggleTab(tabItem)"
          v-html="tabItem.title"
        ></div>
      </div>
      <div class="tab-item_wrap">
        <div class="tab-item_inner">
          <!-- 这里是两个tab需要显示的不同bg ------ start ------ -->
          <div
            :style="
              `display: ${tabList[0].title === activeTitle ? 'block' : 'none'}`
            "
          >
            <img :src="png9" class="png9" alt="" />
          </div>
          <div
            :style="
              `display: ${tabList[1].title === activeTitle ? 'block' : 'none'}`
            "
          >
            <img :src="png11" class="png11" alt="" />
          </div>
          <!-- 这里是两个tab需要显示的不同bg  ------ end ------ -->
          <div v-for="tabItem in tabList" :key="tabItem.title">
            <div
              :style="
                `display: ${tabItem.title === activeTitle ? 'block' : 'none'}`
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabClassifylist',
  props: ['tabList'],
  data() {
    return {
      png1: require('@/assets/images/tabClassifylist/1.png'),
      png3: require('@/assets/images/tabClassifylist/3.png'),
      png4: require('@/assets/images/tabClassifylist/4.png'),
      png5: require('@/assets/images/tabClassifylist/5.png'),
      png6: require('@/assets/images/tabClassifylist/6.png'),
      png9: require('@/assets/images/tabClassifylist/9.png'),
      png10: require('@/assets/images/tabClassifylist/10.jpg'),
      png11: require('@/assets/images/tabClassifylist/11.png'),
      png12: require('@/assets/images/tabClassifylist/12.png'),
      png13: require('@/assets/images/tabClassifylist/13.png'),
      png14: require('@/assets/images/tabClassifylist/14.png'),
      png15: require('@/assets/images/tabClassifylist/15.png'),
      png16: require('@/assets/images/tabClassifylist/16.png'),
      activeTitle: '',
      activeItem: '',
    };
  },
  mounted() {
    console.log('+++++++++++++++', this.tabList);
    this.activeTitle = this.tabList[0].title;
  },
  methods: {
    toggleTab(tabItem) {
      this.activeTitle = tabItem.title;
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
  background: #8fb5fd;

  .img-wrap {
    padding-top: toRem(170px * 2);
    position: relative;
    z-index: 1;

    .tab-title_wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      .tab-title {
        padding-top: toRem(7px * 2);
        width: 50%;
        height: toRem(45px * 2);
        color: toRem(14px * 2);
        color: #333;
        text-align: center;
        box-sizing: border-box;
        background-size: contain;
        background-repeat: no-repeat;

        &_0 {
          background-image: url('../assets/images/tabClassifyList/tab_left.png');
          &.active {
            background-image: url('../assets/images/tabClassifyList/tab_left_active.png');
          }
        }

        &_1 {
          background-image: url('../assets/images/tabClassifyList/tab_right.png');
          &.active {
            background-image: url('../assets/images/tabClassifyList/tab_right_active.png');
          }
        }
      }
    }

    .tab-item_wrap {
      padding-top: toRem(10px * 2);
      width: 100%;
      height: toRem(500px * 2);
      background: url('../assets/images/tabClassifyList/7.jpg') no-repeat center;
      background-size: cover;

      .tab-item_inner {
        position: relative;
        padding-top: toRem(20px * 2);
        width: 100%;
        height: toRem(450px * 2);
        background: url('../assets/images/tabClassifyList/8.png') no-repeat
          center;
        background-size: cover;
      }

      .tab-item {
        display: flex;
        justify-content: center;
        margin: 0 auto toRem(6px * 2);
        padding: toRem(13px * 2) 0 toRem(20px * 2);
        width: toRem(304px * 2);
        font-size: toRem(14px * 2);
        color: #333;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../assets/images/tabClassifyList/tab_item.png);
        box-sizing: border-box;

        &.active {
          background-image: url(../assets/images/tabClassifyList/tab_item_active.png);
        }
      }
    }
  }

  .png1 {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .png3 {
    position: absolute;
    width: toRem(128px * 2);
    height: toRem(137px * 2);
    left: 0;
    top: toRem(29px * 2);
  }

  .png4 {
    position: absolute;
    width: toRem(89px * 2);
    height: toRem(53px * 2);
    top: toRem(107px * 2);
    right: toRem(27px * 2);
  }

  .png5 {
    position: absolute;
    width: toRem(46px * 2);
    height: toRem(22px * 2);
    top: toRem(142px * 2);
    left: toRem(22px * 2);
  }

  .png6 {
    position: absolute;
    width: toRem(84px * 2);
    height: toRem(84px * 2);
    top: toRem(79px * 2);
    left: toRem(62px * 2);
  }

  .png9 {
    position: absolute;
    width: toRem(79px * 2);
    height: toRem(111px * 2);
    bottom: toRem(26px * 2);
    left: toRem(42px * 2);
  }

  .png10 {
    position: absolute;
    width: toRem(61px * 2);
    height: toRem(61px * 2);
    top: toRem(48px * 2);
    left: toRem(177px * 2);
    border-radius: 16px;
  }

  .png11 {
    position: absolute;
    width: toRem(130px * 2);
    height: toRem(91px * 2);
    bottom: toRem(11px * 2);
    left: toRem(24px * 2);
  }

  .png12 {
    position: absolute;
    width: toRem(69px * 2);
    height: toRem(53px * 2);
    top: toRem(5px * 2);
    left: 0;
  }

  .png13 {
    position: absolute;
    width: toRem(94px * 2);
    height: toRem(55px * 2);
    top: toRem(120px * 2);
    left: toRem(35px * 2);
  }

  .png15 {
    position: absolute;
    width: toRem(94px * 2);
    height: toRem(124px * 2);
    top: toRem(11px * 2);
    left: toRem(33px * 2);
  }

  .png16 {
    position: absolute;
    width: toRem(61px * 2);
    height: toRem(82px * 2);
    top: toRem(87px * 2);
    right: toRem(9px * 2);
  }
}
</style>
