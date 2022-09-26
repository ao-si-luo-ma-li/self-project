<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../components/ApplyList'
export default {
  name: 'accounting-list',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/accounting_1.png'), title: '小规模纳税人', price: '1600起', path: ''},
        {icon: require('@/assets/images/accounting_2.png'), title: '一般纳税人', price: '1600起', path: ''},
        {icon: require('@/assets/images/accounting_3.png'), title: '工商疑难/代帐', price: '1600起', path: ''},
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