<template>
  <simp-tab-classify-list :tabList="qualifylist"></simp-tab-classify-list>
</template>

<script>
import SimpTabClassifyList from '../../../components/SimpTabClassifyList.vue';
export default {
  name: 'qualify-list-4',
  data() {
    return {
      qualifylist: [
        {
          title: '第一类增值电信业务(B1)',
          list: [
            {
              title: `<div >互联网数据中心业务（简称IDC)</div>`,
              path: '/simp-classify-list/b1_idc',
            },
            {
              title: '<div >内容分发网络业务（简称CDN）</div>',
              path: '/simp-classify-list/b1_cdn',
            },
            {
              title: '<div >国内互联网虚拟专用网业务（简称IP-VPN）</div>',
              path: '/simp-classify-list/b1_ipvpn',
            },
            {
              title: '<div >互联网接入服务业务（简称ISP）</div>',
              path: '/simp-classify-list/b1_isp',
            },
          ],
        },
        {
          title: '第二类增值电信业务(B2)',
          list: [
            {
              title: 'EDI-在线数据处理与交易处理业务',
              path: '/simp-classify-list/b2_edi',
            },
            {
              title: 'ICP-信息服务-仅限互联网服务',
              path: '/simp-classify-list/b2_icp',
            },
            {
              title: 'SP信息服务（不含互联网信息服务）',
              path: '/simp-classify-list/b2_sp',
            },
            {
              title: '呼叫中心（全国/上海）',
              path: '/simp-classify-list/b2_hujiao',
            },
            {
              title: '存储转发类业务',
              path: '/simp-classify-list/b2_cunchu',
            },
            {
              title: '国内多方通信服务业务',
              path: '/simp-classify-list/b2_guonei',
            },
          ],
        },
      ],
    };
  },
  components: {
    SimpTabClassifyList,
  },
};
</script>
