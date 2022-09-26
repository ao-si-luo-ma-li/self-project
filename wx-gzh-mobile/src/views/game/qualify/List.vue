<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../../components/ApplyList';
export default {
  name: 'qualify-list',
  data() {
    return {
      qualifylist: [
        {
          icon: require('@/assets/images/zhuce.png'),
          title: '游戏运营公司注册',
          price: '',
          path: '/qualify-list-1',
        },
        {
          icon: require('@/assets/images/apply.png'),
          title: '著作权+版号申请',
          price: '',
          path: '/qualify-list-2',
        },
        {
          icon: require('@/assets/images/wangwen.png'),
          title: '网络文化经营许可证<br/>音乐娱乐产品/动漫产品',
          price: '',
          path: '/qualify-list-3',
        },
        {
          icon: require('@/assets/images/guangbo.png'),
          title: '电视广播节目制作许可证',
          price: '',
          path: '/qualify-list-5',
        },
        {
          icon: require('@/assets/images/yanchu.png'),
          title: '营业性演出许可证',
          price: '',
          path: '/qualify-list-6',
        },
        {
          icon: require('@/assets/images/ICPEDI.png'),
          title:
            '电信业务增值许可证<br/>(ICP互联信息服务/EDI在线数据交易/SP呼叫中心)',
          price: '',
          path: '/qualify-list-4',
        },
        {
          icon: require('@/assets/images/abroad_yt.png'),
          title: '美术外包业务',
          path: '/qualify-art-rd',
        },
        {
          icon: require('@/assets/images/abroad_fb.png'),
          title: '测试外包业务',
          path: '/qualify-test-rd',
        },
        {
          icon: require('@/assets/images/abroad_yt.png'),
          title: 'Youtube平台植入',
          price: '3000.00起',
          path: '',
        },
        {
          icon: require('@/assets/images/abroad_fb.png'),
          title: 'FB&INS海外媒体推广',
          price: '3000.00起',
          path: '',
        },
      ],
    };
  },
  components: {
    ApplyList,
  },
};
</script>
