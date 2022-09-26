<template>
  <div>
    <img :src="imgSrc" :alt="title">
  </div>
</template>
<script>
  export default {
    name: 'gf_move',
    data() {
      return {
        title: '开业/乔迁祝贺',
        imgSrc: require('../../assets/images/gift/move.jpg')
      }
    }
  }
</script>
