<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList.vue';
export default {
  name: 'qualify-list-3',
  data() {
    return {
      qualifylist: [
        {
          icon: require('@/assets/images/guangbo/gb_bj.png'),
          title: '广播节目制作许可证-北京',
          price: '',
          path: '/simp-classify-list/gbbj',
        },
        {
          icon: require('@/assets/images/guangbo/gb_sh.png'),
          title: '广播节目制作许可证-上海',
          price: '',
          path: '/simp-classify-list/gbsh',
        },
      ],
    };
  },
  components: {
    ApplyList,
  },
  mounted() {
    // console.log(this);
  },
};
</script>
