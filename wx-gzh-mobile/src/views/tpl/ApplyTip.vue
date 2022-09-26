<template>
  <apply-tip :tipDetail="tipDetail">
    <span slot="title" :style="{fontSize: `${2 / ((title.length - 3) ** 0.2)}rem`}">{{title}}</span>
  </apply-tip>
</template>

<script>
import ApplyTip from '../../components/ApplyTip';
import {tips} from '../../mock/tips'
export default {
  name: 'intro',
  data() {
    return {
      tipDetail: '',
      title: '申请须知'
    }
  },
  beforeMount() {
    this.tipDetail = tips[this.$route.params.tip];
    this.title = this.$route.params.title || this.title;
  },
  components: {
    ApplyTip
  }
}
</script>
