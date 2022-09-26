<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList.vue';
import qualifylist from '../../../mock/qualifylist.js';
export default {
  name: 'dy-apply-list',
  data() {
    return {
      qualifylist: [],
      tip: '',
    };
  },
  components: {
    ApplyList,
  },
  mounted() {
    this.tip = this.$route.params.tip;
    this.qualifylist = qualifylist[this.$route.params.tip];

    console.log('this.qualifylist', this.qualifylist);
  },
};
</script>
