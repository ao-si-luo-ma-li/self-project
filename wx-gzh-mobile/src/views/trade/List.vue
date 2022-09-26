<template>
  <apply-list :list="qualifylist"></apply-list>
</template>

<script>
import ApplyList from '../../components/ApplyList'
export default {
  name: 'trade-list',
  data() {
    return {
      qualifylist: [
        {icon: require('@/assets/images/fee.png'), title: '上海如虎网络科技有限公司（市区）', price: '23万', path: '', remark: ''},
        {icon: require('@/assets/images/fee.png'), title: '上海允悦文化传播有限公司（市区）', price: '23万', path: '', remark: `<img src=${require('@/assets/images/sold_out.png')} style="position: absolute; right: 10px;" alt="">`},
        {icon: require('@/assets/images/fee.png'), title: '上海蛤蜊文化传播有限公司（郊区）', price: '18万', path: '', remark: `<img src=${require('@/assets/images/sold_out.png')} style="position: absolute; right: 10px;" alt="">`},
        {icon: require('@/assets/images/fee.png'), title: '上海月薇网络科技有限公司（郊区）', price: '18万', path: '', remark: `<img src=${require('@/assets/images/sold_out.png')} style="position: absolute; right: 10px;" alt="">`},
        {icon: require('@/assets/images/fee.png'), title: '上海普勋网络科技有限公司（市区）', price: '23万', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '上海援轩网络科技有限公司（市区）<br/>制造中', price: '预订价<br/>14万', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '上海讯踪文化传播有限公司（市区）<br/>制造中', price: '预订价<br/>14万', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '上海橘彩网络科技有限公司（市区）<br/>制造中', price: '预订价<br/>14万', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '上海越柳网络科技有限公司（郊区）<br/>制造中', price: '预订价<br/>14万', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '上海酷幻网络科技有限公司（代客户转）', price: '可议价<br/>14万', path: ''},
        {icon: require('@/assets/images/fee.png'), title: '北京金游网络科技有限公司（代客户转）', price: '可议价<br/>25万', path: ''},
      ]
    }
  },
  components: {
    ApplyList
  },
  mounted() {
    // console.log(this);
  }
}
</script>