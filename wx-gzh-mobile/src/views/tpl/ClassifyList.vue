<template>
  <classify-list :classifyDetial="classifyDetial" :tip="tip"></classify-list>
</template>

<script>
import ClassifyList from '../../components/ClassifyList.vue';
import { classifyDetial } from '../../mock/tips';
export default {
  name: 'intro',
  data() {
    return {
      classifyDetial: '',
      title: '新版许可证说明详情',
      tip: '',
    };
  },
  beforeMount() {
    this.tip = this.$route.params.tip;
    this.classifyDetial = classifyDetial[this.$route.params.tip];
    this.title = this.$route.params.title || this.title;
  },
  components: {
    ClassifyList,
  },
};
</script>
