<template>
  <simp-doc-list :docDetail="docDetail"></simp-doc-list>
</template>

<script>
import SimpDocList from '../../components/SimpDocList.vue';
import { docDetail } from '../../mock/tips';
export default {
  name: 'intro',
  data() {
    return {
      docDetail: '',
      title: '新版许可证说明详情',
    };
  },
  beforeMount() {
    this.docDetail = docDetail[this.$route.params.tip];
    this.title = this.$route.params.title || this.title;
  },
  components: {
    SimpDocList,
  },
};
</script>
