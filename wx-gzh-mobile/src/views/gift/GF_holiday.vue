<template>
  <div>
    <img :src="imgSrc" :alt="title">
  </div>
</template>
<script>
  export default {
    name: 'gf_holiday',
    data() {
      return {
        title: '节日定制',
        imgSrc: require('../../assets/images/gift/holiday.jpg')
      }
    }
  }
</script>
