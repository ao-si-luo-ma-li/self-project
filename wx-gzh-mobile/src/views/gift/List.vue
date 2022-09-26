<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../components/ApplyList'
export default {
  name: 'gift-list',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/gift_1.png'), title: '商务送礼', price: '1600.00起', path: ''},
        {icon: require('@/assets/images/gift_2.png'), title: '节日定制', price: '1600.00起', path: '/gf-holiday'},
        {icon: require('@/assets/images/gift_3.png'), title: '开业/乔迁祝贺', price: '1600.00起', path: '/gf-move'}
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