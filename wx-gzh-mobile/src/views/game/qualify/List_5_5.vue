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
          icon: require('@/assets/images/guangbo/gb_dy.png'),
          title: '电影备案',
          price: '',
          path: '/classify-list/gbdy',
        },
        {
          icon: require('@/assets/images/guangbo/gb_ds.png'),
          title: '电视备案',
          price: '',
          path: '/classify-list/gbds',
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
