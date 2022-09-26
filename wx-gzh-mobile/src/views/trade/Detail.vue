<template>
  <div class="trade-det">
    <img :src="gameTop" alt="">
    <div v-for="path in certificate" :key="path">
      <img :src="path" alt="">
    </div>
  </div>
</template>

<script>
import {trade} from '../../mock/trade'
export default {
  name: 'trade-detail',
  data() {
    return {
      certificate: [],
      gameTop: require('../../assets/trade/game_top.jpg')
    }
  },
  mounted() {
    this.certificate = trade[this.$route.params.comp];
  }
}
</script>

