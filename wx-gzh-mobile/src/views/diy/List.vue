<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../components/ApplyList'
export default {
  name: 'diy-list',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/diy_1.png'), title: '棋牌游戏成品参考', price: '30000.00起', path: ''},
        {icon: require('@/assets/images/diy_2.png'), title: '其他（先提需求）', price: '', path: ''},
      ]
    }
  },
  components: {
    ApplyList
  },
  mounted() {
    // console.log(this);
  }
}
</script>