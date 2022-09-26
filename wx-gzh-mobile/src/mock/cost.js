export const cost = {
  wangwen: {
    feeTitle: '网络文化经营许可证',
    type: ['音乐娱乐类', '动漫类'],
    subType: ['申请', '续办', '更新 (续办/变更)'],
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺网站',
            fee: 3000,
          },
          {
            name: '缺社保',
            fee: 10000,
          },
          {
            name: '缺音频',
            fee: 10000,
          },
        ],
      },
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺网站',
            fee: 3000,
          },
          {
            name: '缺社保',
            fee: 20000,
          },
          {
            name: '缺动漫作品',
            fee: 20000,
          },
        ],
      },
    ],
  },
  dianxin: {
    feeTitle: '电信业务增值许可证',
    type: ['ICP互联网信息服务类', 'EDI在线数据交易类', 'SP呼叫中心'],
    subType: ['申请', '续办', '变更'],
    table: [
      {
        subTypeCost: [50000, 12000, 8000],
        multiCost: [
          {
            name: '缺网站',
            fee: 3000,
          },
          {
            name: '缺社保',
            fee: 10000,
          },
        ],
        otherSingleCost: [
          {
            name: '有外资成分10%内',
            fee: 20000,
          },
          {
            name: '有外资成分50%内',
            fee: 400000,
          },
        ],
      },
      {
        subTypeCost: [60000, 12000, 8000],
        multiCost: [
          {
            name: '缺网站',
            fee: 3000,
          },
          {
            name: '缺社保',
            fee: 10000,
          },
        ],
        otherSingleCost: [
          {
            name: '有外资成分10%内',
            fee: 20000,
          },
          {
            name: '有外资成分50%内',
            fee: 400000,
          },
        ],
      },
      {
        subTypeCost: [30000, 8000, 3000],
      },
    ],
  },
  guangbo: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作'],
    subType: ['申请', '续办', '变更'],
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  yanchu: {
    feeTitle: '营业性演出许可证',
    type: ['营业性演出许可证办理'],
    subType: ['申请', '续办', '变更'],
    table: [
      {
        subTypeCost: [80000, 3000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
    remark: `
      <div style="font-size: 12px;line-height: 20px; text-align:left;">
        <p style="color: red"><b>注意事项：</b></p>
        <p><b>1、办好演出许可证后，只能聘请内籍的人</b></p>
        <p><b>2、如果要聘请外籍演员，必须等2年后，2年后才能聘请外籍</b></p>
        <p><b>3、如果注册自贸区，办理许可证可以直接聘请外籍演员</b></p>
      </div>
    `,
  },
  ww_yanchu: {
    feeTitle: '网络文化经营许可证',
    type: ['《网络文化经营许可证》-演出剧(节)目、表演'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_wangwen/ww_yanchu.png'),
    table: [
      {
        subTypeCost: [100000, 10000],
        multiCost: [
          {
            name: '无外资证明处理',
            fee: 20000,
          },
          {
            name: '直播类文案配套服务',
            fee: 100000,
          },
        ],
      },
    ],
  },
  ww_dongman: {
    feeTitle: '网络文化经营许可证',
    type: ['动漫类'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_wangwen/ww_dongman.png'),
    table: [
      {
        subTypeCost: [10000, 4000],
        multiCost: [
          {
            name: '无外资证明处理',
            fee: 20000,
          },
          {
            name: '动漫作品及网站配套服务',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_yinyue: {
    feeTitle: '网络文化经营许可证',
    type: ['音乐娱乐类'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_wangwen/ww_yinyue.png'),
    table: [
      {
        subTypeCost: [10000, 4000],
        multiCost: [
          {
            name: '无外资证明处理',
            fee: 20000,
          },
          {
            name: '音乐作品及网站配套服务',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbbj: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作 - 北京'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    table: [
      {
        subTypeCost: [10000, 4000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbsh: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作 - 上海'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    table: [
      {
        subTypeCost: [10000, 4000],
        multiCost: [
          {
            name: '无外资证明处理',
            fee: 20000,
          },
          {
            name: '视频作品及学历配套服务',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbdy: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电影备案'],
    subType: ['申请', '续办', '变更'],
    imgTitle: require('@/assets/images/guangbo/gb_dianyin.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbds: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视剧备案'],
    subType: ['申请', '续办', '变更'],
    imgTitle: require('@/assets/images/guangbo/gb_dianshi.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_yinyan: {
    feeTitle: '营业性演出许可证',
    type: ['营业性演出许可证'],
    subType: ['申请', '变更'],
    imgTitle: require('@/assets/images/guangbo/gb_yinyan.png'),
    table: [
      {
        subTypeCost: [10000, 4000],
        multiCost: [
          {
            name: '3枚经纪人挂靠1年',
            fee: 50000,
          },
          {
            name: '外国人演出备案',
            fee: 50000,
          },
        ],
      },
    ],
  },
  ww_b1_idc: {
    feeTitle: '互联网数据中心业务(简称IDC)',
    type: ['北京', '上海'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b1/b1_idc.png'),
    table: [
      {
        subTypeCost: [30000, 3000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [50000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
  ww_b1_isp: {
    feeTitle: '互联网接入服务业务(简称ISP)',
    type: ['单一地区', '全国跨地域(2个城市+)'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b1/b1_isp.png'),
    table: [
      {
        subTypeCost: [30000, 3000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [50000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
  ww_b1_cdn: {
    feeTitle: '内容分发网络业务(简称CDN)',
    type: ['北京', '上海'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b1/b1_cdn.png'),
    table: [
      {
        subTypeCost: [30000, 3000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [50000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
  ww_b1_ipvpn: {
    feeTitle: '国内互联网虚拟专用网业务(简称IP-VPN)',
    type: ['北京', '上海'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b1/b1_vpn.png'),
    table: [
      {
        subTypeCost: [30000, 3000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [50000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
  ww_b2_sp: {
    feeTitle: 'SP-信息服务',
    type: ['北京', '上海'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b2/b2_sp.png'),
    table: [
      {
        subTypeCost: [30000, 3000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [50000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
  ww_b2_hujiao: {
    feeTitle: '呼叫中心业务',
    type: ['上海', '全国'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b2/b2_hujiao.png'),
    table: [
      {
        subTypeCost: [80000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [160000, 5000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
  ww_b2_icp: {
    feeTitle: 'ICP-信息服务-仅限互联网服务',
    type: ['北京', '上海'],
    adType: ['内资', '外资(<10%)', '外资(>10%)'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b2/b2_icp.png'),
    table: [
      {
        subTypeCost: [30000, 80000, 200000, 3000, 3000, 3000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [50000, 80000, 200000, 5000, 8000, 8000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
  ww_b2_edi: {
    feeTitle: 'EDI-在线数据处理与交易处理业务',
    type: ['北京', '上海'],
    adType: ['内资', '外资(<10%)', '外资(>10%)'],
    subType: ['申请', '更新 (续办/变更)'],
    imgTitle: require('@/assets/images/simp_dianxin/b2/b2_edi.png'),
    table: [
      {
        subTypeCost: [30000, 80000, 200000, 3000, 3000, 3000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
      {
        subTypeCost: [40000, 80000, 200000, 5000, 8000, 8000],
        multiCost: [
          {
            name: '股权结构超过5层以上',
            fee: 10000,
          },
          {
            name: '缺网站',
            fee: 3000,
          },
        ],
      },
    ],
  },
};
// export const cost = {
//   wangwen: {
//     type: ['网络文化经营许可证-音乐娱乐/动漫'],
//     subType: ['申请', '变更', '续办'],
//     table: [
//       [
//         {
//           project: '新办申请',
//           fee1: '¥ 15000.00',
//           fee2: '¥ 13500.00'
//         },
//         {
//           project: '缺少音频/动漫材料',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ],
//       [
//         {
//           project: '网文变更',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: '网文续办',
//           fee1: '¥ 15000.00',
//           fee2: '¥ 13500.00'
//         },
//         {
//           project: '缺少音频/动漫材料',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ]
//     ]
//   },
//   dianxin: {
//     type: ['ICP互联网信息服务类', 'EDI在线数据交易类', 'SP呼叫中心'],
//     subType: ['申请', '变更', '续办'],
//     table: [
//       [
//         {
//           project: 'ICP申请',
//           fee1: '¥ 50000.00',
//           fee2: '¥ 45000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: 'ICP变更',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ],
//       [
//         {
//           project: 'ICP续办',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: 'EDI申请',
//           fee1: '¥ 60000.00',
//           fee2: '¥ 54000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: 'EDI变更',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ],
//       [
//         {
//           project: 'EDI续办',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ]
//     ]
//   },
//   guangbo: {
//     type: ['电视广播节目制作许可证'],
//     subType: ['申请', '变更', '续办'],
//     table: [
//       [
//         {
//           project: '许可证申请',
//           fee1: '¥ 18000.00',
//           fee2: '¥ 16200.00'
//         },
//         {
//           project: '缺少学历',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少视频',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: '许可证变更',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: '许可证续办',
//           fee1: '¥ 18000.00',
//           fee2: '¥ 16200.00'
//         },
//         {
//           project: '缺少学历',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少视频',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ]
//     ]
//   }
// }

/**
 * 文网文费用列表
 */
export const isWenWangWen = [
  'ww_yanchu',
  'ww_dongman',
  'ww_yinyue',
  'ww_yinyan',
  'ww_gbbj',
  'ww_gbsh',
];
