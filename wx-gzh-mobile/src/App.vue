<template>
  <div id="app">
  	<div class="page-body">
  		<div class="layout-content m-container">
          <!-- 路由切换时过渡效果 -->
          <transition :name="transitionName" type="transition" mode="out-in">
            <!-- 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。 -->
            <!-- <navigation> -->
              <!-- include 和 exclude 属性允许组件有条件地缓存。检查组件自身的 name 选项 -->
              <router-view v-wechat-title="$route.meta.title" img-set="/favicon.ico"></router-view>
              <keep-alive> 
                <!-- 要切换的页面 -->
              </keep-alive>
            <!-- </navigation> -->
          </transition>
          <div class="advice">
            <a href="tel:13818006978">
              <!-- 咨询电话：15901791861；13818006978 -->
              <div class="ask">
                <span class="icon"></span>
              </div>
              <p class="text">我要咨询</p>
            </a>
          </div>
  		</div>
      <!-- 以下定位组件 -->
      <!-- <get-location></get-location> -->
  	</div>
  </div>
</template>

<script>
import { storageSetter } from './utils/util.js'
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  data() {
  	return {
      transitionName: 'slide-out'
  	}
  },
  mounted() {
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = 'slide-out';
    });
    this.$navigation.on('back', (to, from) => {
      this.transitionName = 'slide-in';
    });
    // Message 全局提示
    this.$Message.config({
      top: 30,
      duration: 5
    });
  },
  methods: {
    ...mapMutations(['HACK_CREDITDOOR'])
  }
}
</script>

<style lang="scss">
@import './assets/libs/public.scss';
@import './assets/libs/reset.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: toRem(28px);
  min-height: 100vh;
  padding-bottom: toRem(110px);
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: toRem(26px) toRem(30px);
  background: #ADB8C7;
  color: #fff;
  font-size: toRem(30px);
  box-shadow: 0 toRem(2px) toRem(12px) toRem(1px) #999;
  z-index: 9;
}
.layout-content-main {
  min-height: 100vh;
  background: #F6F6F6;
  box-shadow: 0 0 16px 1px #ccc;
}
.advice {
  position: fixed;
  bottom: toRem(40px);
  right: 0;
  left: 0;
  text-align: right;
  margin: 0 toRem(50px);
  z-index: 99;
  .ask, .text {
    display: inline-block;
    vertical-align: middle;
  }
  .ask {
    width: toRem(114px);
    height: toRem(114px);
    line-height: toRem(114px);
    text-align: center;
    background: #dc9861;
    border-radius: 50%;
    .icon {
      display: inline-block;
      vertical-align: middle;
      width: toRem(90px);
      height: toRem(90px);
      background: #fff url('./assets/images/ask_icon.png') no-repeat center;
      background-size: toRem(60px);
      border-radius: 50%;
    }
  }
  .text {
    width: toRem(200px);
    text-align: center;
    font-size: toRem(40px);
    color: #fff;
    background: #dc9861;
    padding: toRem(4px) 0;
    margin-left: toRem(-20px);
    border-radius: 0 toRem(8px) toRem(8px) 0;
  }
}
/* 路由过渡效果 */
.slide-out-enter,.slide-out-leave-active {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  margin-right: 100%;
  z-index: 99;
  @include transtioned(0.3s);
}
.slide-out-enter-active,.slide-out-leave {
  margin-right: 0;
}
.slide-in-enter,.slide-in-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  margin-left: 100%;
  z-index: 99;
  @include transtioned(0.3s);
}
.slide-in-enter-active,.slide-in-leave {
  margin-left: 0;
}
</style>
