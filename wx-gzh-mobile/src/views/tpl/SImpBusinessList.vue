<template>
  <simp-business-list :businessDetial="businessDetial"></simp-business-list>
</template>

<script>
import SimpBusinessList from '../../components/SimpBusinessList.vue';
import { businessDetial } from '../../mock/tips';
export default {
  name: 'intro',
  data() {
    return {
      businessDetial: '',
      title: '新版许可证说明详情',
    };
  },
  beforeMount() {
    this.businessDetial = businessDetial[this.$route.params.tip];
    this.title = this.$route.params.title || this.title;
  },
  components: {
    SimpBusinessList,
  },
};
</script>
