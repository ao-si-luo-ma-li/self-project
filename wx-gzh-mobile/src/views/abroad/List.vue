<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../components/ApplyList'
export default {
  name: 'abroad-list',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/abroad_yt.png'), title: 'Youtobe平台植入', price: '3000.00起', path: ''},
        {icon: require('@/assets/images/abroad_fb.png'), title: 'FB&INS海外媒体推广', price: '3000.00起', path: ''},
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