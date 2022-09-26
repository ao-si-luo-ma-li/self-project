<template>
  <div class="apply-list">
    <router-link :to="item.path" v-for="item in list" :key="item.title">
      <div class="item flex-box">
        <div class="icon"><img :src="item.icon"></div>
        <div class="title-warp">
          <span class="title content" v-html="item.title"></span>
        </div>
        <div class="price-warp">
          <span class="price content" v-html="item.price"></span>
        </div>
        <span v-html="item.remark"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'applylist',
  props: ['list'],
  mounted() {
    // console.log(this.list)
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/libs/const.scss';
.apply-list {
  .item {
    position: relative;
    height: toRem(130px);
    font-size: toRem(24px);
    color: #000;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    .icon {
      min-width: toRem(152px);
    }
    .title-warp, .price-warp {
      white-space: nowrap;
      .content {
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        white-space: normal;
      }
      &:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 100%;
        overflow: hidden;
      }
    }
    .price {
      position: relative;
      min-width: toRem(120px);
      text-align: right;
      z-index: 3;
      &:empty {
        display: none;
      }
    }
    img {
      height: toRem(130px);
    }
  }
  .sold_out {
    position: absolute;
  }
}
</style>
