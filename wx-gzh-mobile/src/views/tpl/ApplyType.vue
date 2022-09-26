<template>
  <apply-type :qualifyLink="qualifyLink">
    <span slot="title">如何申请</span>
  </apply-type>
</template>

<script>
import ApplyType from '../../components/ApplyType'
import {qualifyLink} from '../../mock/qualifyLink'
export default {
  name: 'intro',
  data() {
    return {
      qualifyLink: ''
    }
  },
  beforeMount() {
    this.qualifyLink = qualifyLink[this.$route.params.type];
  },
  components: {
    ApplyType
  }
}
</script>
