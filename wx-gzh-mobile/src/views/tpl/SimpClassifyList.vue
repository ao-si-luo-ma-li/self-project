<template>
  <simp-classify-list
    :classifyDetial="classifyDetial"
    :tip="tip"
  ></simp-classify-list>
</template>

<script>
import SimpClassifyList from '../../components/SimpClassifyList.vue';
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
    SimpClassifyList,
  },
};
</script>
