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
          icon: require('@/assets/images/wangwen/ww_yanchu.png'),
          title: '《网络文化经营许可证》-演出剧（节）目、表演',
          price: '',
          path: '/simp-classify-list/yanchu',
        },
        {
          icon: require('@/assets/images/wangwen/ww_dongman.png'),
          title: '《网络文化经营许可证》-动漫产品',
          price: '',
          path: '/simp-classify-list/dongman',
        },
        {
          icon: require('@/assets/images/wangwen/ww_yinyue.png'),
          title: '《网络文化经营许可证》-音乐娱乐产品',
          price: '',
          path: '/simp-classify-list/yinyue',
        },
        {
          icon: require('@/assets/images/wangwen/ww_yanchu.png'),
          title: '《营业性演出许可证》',
          price: '',
          path: '/simp-classify-list/yinyan',
        },
        {
          icon: require('@/assets/images/wangwen/ww_yanchu.png'),
          title: '《广播节目制作许可证》',
          price: '',
          path: '/qualify-list-5',
        },
        {
          icon: require('@/assets/images/guangbo/gb_dy.png'),
          title: '《电影电视剧备案》',
          price: '',
          path: '/qualify-list-5_5',
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
