<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList'
export default {
  name: 'qualify-list-1',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/zhuce.png'), title: '申请须知', price: '', path: '/apply-tip/game'},
        {icon: require('@/assets/images/apply.png'), title: '如何申请',price: '', path: '/apply-type/game'},
        {icon: require('@/assets/images/wangwen.png'), title: '预估费用',price: '', path: '/qualify-list-1-1'},
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