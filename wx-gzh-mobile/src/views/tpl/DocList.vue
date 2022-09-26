<template>
  <doc-list :docDetail="docDetail" :tip="tip"></doc-list>
</template>

<script>
import DocList from '../../components/DocList';
import { docDetail } from '../../mock/tips';
export default {
  name: 'intro',
  data() {
    return {
      docDetail: '',
      title: '新版许可证说明详情',
      tip: '',
    };
  },
  beforeMount() {
    this.tip = this.$route.params.tip;
    this.docDetail = docDetail[this.$route.params.tip];
    this.title = this.$route.params.title || this.title;
  },
  components: {
    DocList,
  },
};
</script>
