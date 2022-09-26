<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../components/ApplyList'
export default {
  name: 'community-list',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/community_1.png'), title: '指定查名称', price: '4000.00起', path: ''},
        {icon: require('@/assets/images/community_2.png'), title: '去除黑名单', price: '4000.00起', path: ''},
        {icon: require('@/assets/images/community_3.png'), title: '加急出照/归档', price: '4000.00起', path: ''},
        {icon: require('@/assets/images/community_4.png'), title: '特殊营业范围增加', price: '4000.00起', path: ''},
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