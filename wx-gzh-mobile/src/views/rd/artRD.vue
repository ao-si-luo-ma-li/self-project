<template>
  <div class="art-rd">
    <img :src="img1" alt="" srcset="" />
    <img :src="img2" alt="" srcset="" />
    <img :src="img3" alt="" srcset="" />
    <img :src="img4" alt="" srcset="" />
    <img :src="img5" alt="" srcset="" />
  </div>
</template>
<script>
export default {
  name: 'art-rd',
  data: () => {
    return {
      img1: require('../../assets/images/artOR/1.png'),
      img2: require('../../assets/images/artOR/2.png'),
      img3: require('../../assets/images/artOR/3.png'),
      img4: require('../../assets/images/artOR/4.png'),
      img5: require('../../assets/images/artOR/5.png'),
    };
  },
};
</script>
<style lang="scss" scoped>
.art-rd {
  font-size: 0;
}
</style>
