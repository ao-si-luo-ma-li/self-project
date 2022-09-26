<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList'
export default {
  name: 'qualify-list-1-1',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/fee.png'), title: '普通地址注册', price: '3000.00起', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '自贸区地址注册',price: '20000.00起', path: ''},
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