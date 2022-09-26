<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList'
export default {
  name: 'qualify-list-5',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/apply.png'), title: '申请须知', price: '', path: '/apply-tip/yanchu'},
        {icon: require('@/assets/images/fee.png'), title: '预估费用',price: '', path: '/apply-cost/yanchu'},
      ]
    }
  },
  components: {
    ApplyList
  }
}
</script>