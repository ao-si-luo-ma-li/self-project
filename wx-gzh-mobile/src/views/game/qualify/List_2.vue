<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList'
export default {
  name: 'qualify-list-2',
  data() {
    return {
      qualifylist: [
        // {icon: require('@/assets/images/ver-condition.png'), title: '版号申请条件', price: '', path: '/apply-tip/work'},
        {icon: require('@/assets/images/fee.png'), title: '版号申请预估费用', price: '25000.00起', path: ''},
        // {icon: require('@/assets/images/work-condition.png'), title: '著作权申请条件', price: '', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '著作权申请预估费用', price: '1000.00起', path: ''},
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