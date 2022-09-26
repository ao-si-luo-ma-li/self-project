<template>
  <div class="test-rd">
    <img :src="img1" alt="" srcset="" />
    <img :src="img2" alt="" srcset="" />
    <img :src="img3" alt="" srcset="" />
  </div>
</template>
<script>
export default {
  name: 'artRD',
  data: () => {
    return {
      img1: require('../../assets/images/testOR/cs1.jpg'),
      img2: require('../../assets/images/testOR/cs2.jpg'),
      img3: require('../../assets/images/testOR/cs3.jpg'),
    };
  },
};
</script>
<style lang="scss" scoped>
.test-rd {
  font-size: 0;
}
</style>
