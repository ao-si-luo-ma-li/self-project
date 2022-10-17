// import Vue from 'vue'
import Router from 'vue-router';
import WechatTitle from 'vue-wechat-title';

// Vue.use(Router)
// Vue.use(WechatTitle)

/*以下为路由中需要的组件*/

// const QualifyList = () => import('@/views/game/qualify/List')
import QualifyList from '@/views/game/qualify/List';
import QualifyList_1 from '@/views/game/qualify/List_1';
import QualifyList_1_1 from '@/views/game/qualify/List_1_1';
import QualifyList_2 from '@/views/game/qualify/List_2';
import QualifyList_3 from '@/views/game/qualify/List_3';
import QualifyList_4 from '@/views/game/qualify/List_4';
import QualifyList_5 from '@/views/game/qualify/List_5';
import QualifyList_5_5 from '@/views/game/qualify/List_5_5';
import QualifyList_6 from '@/views/game/qualify/List_6';

import DIYList from '@/views/diy//List';
import AbroadList from '@/views/abroad//List';
import TradeList from '@/views/trade//List';
import CommunityList from '@/views/community/List';
import AccountingList from '@/views/accounting/List';
import ApplyTip from '@/views/tpl/ApplyTip';
import ApplyType from '@/views/tpl//ApplyType';
import ApplyCost from '@/views/tpl//ApplyCost';
import TradeDetail from '@/views/trade/Detail';
import Partner from '@/views/partner/List';

import ClassifyList from '@/views/tpl/ClassifyList';
import SimpClassifyList from '@/views/tpl/SimpClassifyList';
import SimpBusinessList from '@/views/tpl/SimpBusinessList';
import SimpDocList from '@/views/tpl/SimpDocList';
import SimpQualifyList_4 from '@/views/game/qualify/SimpList_4';
import BusinessList from '@/views/tpl/BusinessList';
import DocList from '@/views/tpl/DocList';
import CostList from '@/views/tpl/CostList';
import SimpCostList from '@/views/tpl/SimpCostList';
import DyApplyList from '@/views/game/qualify/DyApplyList';

// gift 页面
import GiftList from '@/views/gift//List';
import GF_holiday from '@/views/gift/GF_holiday';
import GF_move from '@/views/gift/GF_move';
import GF_school from '@/views/gift/GF_school';
import Contract from '@/views/contract/view';

import QualifyArtRd from '@/views/rd/artRD';
import QualifyTestRd from '@/views/rd/testRD';
import Blank from '@/views/blank';

const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: {
        name: 'qualify-list',
      },
    },
    {
      path: '/qualify-list',
      component: QualifyList,
      name: 'qualify-list',
      meta: {
        title: '业务入口',
      },
    },
    {
      path: '/qualify-list-1',
      component: QualifyList_1,
      name: 'qualify-list-1',
      meta: {
        title: '游戏运营公司的注册',
      },
    },
    {
      path: '/qualify-list-1-1',
      component: QualifyList_1_1,
      name: 'qualify-list-1-1',
      meta: {
        title: '游戏运营公司的注册',
      },
    },
    {
      path: '/qualify-list-2',
      component: QualifyList_2,
      name: 'qualify-list-2',
      meta: {
        title: '著作权&版号',
      },
    },
    {
      path: '/qualify-list-3',
      component: QualifyList_3,
      name: 'qualify-list-3',
      meta: {
        title: '文广类资质',
      },
    },
    {
      path: '/qualify-list-4',
      component: SimpQualifyList_4,
      name: 'qualify-list-4',
      meta: {
        title: '电信增值业务经营许可证(ICP)',
      },
    },
    {
      path: '/qualify-list-5',
      component: QualifyList_5,
      name: 'qualify-list-5',
      meta: {
        title: '电视广播许可证',
      },
    },
    {
      path: '/qualify-list-5_5',
      component: QualifyList_5_5,
      name: 'qualify-list-5_5',
      meta: {
        title: '电影电视剧备案',
      },
    },
    {
      path: '/qualify-list-6',
      component: QualifyList_6,
      name: 'qualify-list-6',
      meta: {
        title: '营业性演出许可证',
      },
    },
    {
      path: '/diy-list',
      component: DIYList,
      name: 'diy-list',
      meta: {
        title: '游戏DIY定制',
      },
    },
    {
      path: '/abroad-list',
      component: AbroadList,
      name: 'abroad-list',
      meta: {
        title: '游戏海外运营',
      },
    },
    {
      path: '/trade-list',
      component: TradeList,
      name: 'trade-list',
      meta: {
        title: '游戏全殼交易',
      },
    },
    {
      path: '/community-list',
      component: CommunityList,
      name: 'community-list',
      meta: {
        title: '工商疑难处理',
      },
    },
    {
      path: '/accounting-list',
      component: AccountingList,
      name: 'accounting-list',
      meta: {
        title: '代理记账服务',
      },
    },
    {
      path: '/gift-list',
      component: GiftList,
      name: 'gift-list',
      meta: {
        title: '鲜花礼品服务',
      },
    },
    {
      path: '/simp-classify-list/:tip/:title?',
      component: SimpClassifyList,
      name: 'simp-classify-list',
      meta: {
        title: '业务明细',
      },
    },
    {
      path: '/simp-business-list/:tip/:title?',
      component: SimpBusinessList,
      name: 'simp-business-list',
      meta: {
        title: '业务说明',
      },
    },
    {
      path: '/simp-doc-list/:tip/:title?',
      component: SimpDocList,
      name: 'simp-doc-list',
      meta: {
        title: '材料明细',
      },
    },
    {
      path: '/classify-list/:tip/:title?',
      component: ClassifyList,
      name: 'classify-list',
      meta: {
        title: '业务列表',
      },
    },
    {
      path: '/business-list/:tip/:title?',
      component: BusinessList,
      name: 'business-list',
      meta: {
        title: '业务说明',
      },
    },
    {
      path: '/doc-list/:tip/:title?',
      component: DocList,
      name: 'doc-list',
      meta: {
        title: '材料明细',
      },
    },
    {
      path: '/cost-list/:cost',
      component: CostList,
      name: 'cost-list',
      meta: {
        title: '费用预估',
      },
    },
    {
      path: '/simp-cost-list/:cost',
      component: SimpCostList,
      name: 'simp-cost-list',
      meta: {
        title: '费用预估',
      },
    },
    {
      path: '/apply-tip/:tip/:title?',
      component: ApplyTip,
      name: 'apply-tip',
      meta: {
        title: '申请须知',
      },
    },
    {
      path: '/apply-type/:type',
      component: ApplyType,
      name: 'apply-type',
      meta: {
        title: '如何申请',
      },
    },
    {
      path: '/apply-cost/:cost',
      component: ApplyCost,
      name: 'apply-cost',
      meta: {
        title: '费用预估',
      },
    },
    {
      path: '/trade-detail/:comp',
      component: TradeDetail,
      name: 'trade-detail',
      meta: {
        title: '公司证书预览',
      },
    },
    {
      path: '/partner',
      component: Partner,
      name: 'partner',
      meta: {
        title: '我的客户',
      },
    },
    {
      path: '/gf-holiday',
      component: GF_holiday,
      name: 'gf_holiday',
      meta: {
        title: '节日定制',
      },
    },
    {
      path: '/gf-move',
      component: GF_move,
      name: 'gf_move',
      meta: {
        title: '开业/乔迁祝贺',
      },
    },
    {
      path: '/gf-school',
      component: GF_school,
      name: 'gf_school',
      meta: {
        title: '择校资料',
      },
    },
    {
      path: '/contract',
      component: Contract,
      name: 'contract',
      meta: {
        title: '合同下载',
      },
    },
    {
      path: '/dy-apply-list/:tip?',
      component: DyApplyList,
      name: 'dy-apply-list',
      meta: {
        title: '业务列表',
      },
    },
    {
      path: '/qualify-art-rd',
      component: QualifyArtRd,
      name: 'art-rd',
      meta: {
        title: '美术外包',
      },
    },
    {
      path: '/qualify-test-rd',
      component: QualifyTestRd,
      name: 'test-rd',
      meta: {
        title: '测试外包',
      },
    },
    {
      path: '/blank',
      component: Blank,
      name: 'blank',
      meta: {
        title: '即将跳转',
      },
    },
  ],
});

export default router;
