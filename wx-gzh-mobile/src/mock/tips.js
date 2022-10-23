import { qualifyLink } from './qualifyLink';

export const tips = {
  ICP: {
    tips: [
      {
        bLine: '一家内资企业',
        sLine: '（股权结构最好不超过3层）',
      },
      {
        bLine: '一份关于企业档案',
        sLine: '的机读档案/章程',
      },
      {
        bLine: '有5位员工缴纳社保',
        sLine: '(连续缴纳三个月的证明)',
      },
      {
        bLine: '以企业的名字',
        sLine: '(购买的域名证书)',
      },
      {
        bLine: '一个像模像样的游戏官网',
      },
    ],
    remark: '',
  },
  game: {
    tips: [
      {
        bLine: '新设立的公司',
        sLine: '名字一旦通过，信息将不能再更改',
      },
      {
        bLine: '每个股东只能有',
        sLine: '一家企业申办中,不能同时新设俩家',
      },
      {
        bLine: '网报通过不办结的',
        sLine: '涉及到的股东永远无法新开公司',
      },
    ],
    remark: `
    <h3>注册后-注意事項：</h3>
    如果接到市场监督管理局打来的电话（座机），问公司地址是否在某某地方（就是执照上的地址）  
    请全部回答在   一定回答就在那个地址 。电话一定要接且保持手机畅通，如不接电话，无法联系到企业，
    企业会被列入“异常名录”的。当然最好自己有真实办公室，安心做生意。
    `,
    preMark: '<h3>注册前-注意事项:</h3>',
  },
  work: {
    tips: [
      {
        bLine: '一家内资企业',
        sLine: '（股权结构最好不超过3层）',
      },
      {
        bLine: '一份关于企业档案',
        sLine: '的机读档案/章程',
      },
      {
        bLine: '有12位员工缴纳社保',
        sLine: '(连续缴纳三个月的证明)',
      },
      {
        bLine: '以企业的名字',
        sLine: '(购买的域名证书)',
      },
      {
        bLine: '一个像模像样的游戏官网',
      },
    ],
    remark: '',
  },
  wangwen: {
    title: `<b>网文申请须知</b>`,
    tips: [
      {
        bLine: '<span style="font-size: 18px;">必须内资</span>',
        sLine: '（且需要追溯到自然人）',
      },
      {
        bLine:
          '<span style="font-size: 18px;">必须要有PC端网站与域名证书</span>',
        sLine: '',
      },
      {
        bLine: '<span style="font-size: 18px;">审批内容</span>',
        sLine:
          '<span style="font-size: 12px;">音乐10首有相关著作权证明，歌曲下面要打文字</span><br/><span style="font-size: 12px;">动漫要求2部，每部不低于300集数</span>',
      },
      {
        bLine: '<span style="font-size: 18px;">社保缴纳人数</span>',
        sLine: '（ ≥ 8 人）',
      },
    ],
    remark: `
      <div style="font-size: 12px; text-align: center; line-height: 20px">
        <p style="color: red"><b>注意：游戏类网文 不再进行 新申请/变更/续办 到期自动作废</b></p>
        <p><b>并发送max@k-joys.com做预审</b></p>
        <p><b>您的办理过程：预审合格 → 签约 → 100%下证</b></p>
      </div>
    `,
  },
  dianxin: {
    title: `<b>申请/签约前准备</b>`,
    subTitle: '（仅限内资企业，外资需电话沟通特殊处理）',
    tips: [
      {
        bLine: '企业营业执照',
        sLine: `<p style="font-size: 12px">(注册资金 ≥ 100万，营业范围需含「电信业务」此项)</p>`,
      },
      {
        bLine: '企业调档章程',
        sLine: '',
      },
      {
        bLine: '企业社保缴纳证明',
        sLine: '(当月 ≥ 3人)',
      },
      {
        bLine: '域名证书',
        sLine: '(对应本次申请的网站)',
      },
      {
        bLine: '法人、监事、股东、财务',
        sLine: '(身份证)',
      },
    ],
    remark: `
      <div style="font-size: 12px; text-align: center; line-height: 20px">
        <p style="color: red"><b>以上材料必须提供「彩色扫描」</b></p>
        <p><b>并发送max@k-joys.com做预审</b></p>
        <p><b>您的办理过程：预审合格 → 签约 → 100%下证</b></p>
      </div>
    `,
  },
  guangbo: {
    title: `<b>广播申请须知</b>`,
    tips: [
      {
        bLine: '填写申请表一份',
        sLine: '',
      },
      {
        bLine: '营业执照 + 工商调档资料',
        sLine: '彩色扫描件',
      },
      {
        bLine: '一级股东原件',
        sLine: '彩色扫描件',
      },
      {
        bLine: '演出演艺导演类 本科学历5个',
        sLine: '（且工作满2年零1日+）',
      },
      {
        bLine: '视频作品 6部',
        sLine: '（且片头片尾要有相应的字幕）',
      },
    ],
    remark: `
      <div style="font-size: 12px; text-align: center; line-height: 20px">
        <p style="color: red"><b>如果企业无法提供3、4的资料</b></p>
        <p style="color: red"><b>k-joys可以有偿提供，详细查看报价表</b></p>
        <p><b>并发送max@k-joys.com做预审</b></p>
        <p><b>您的办理过程：预审合格 → 签约 → 100%下证</b></p>
      </div>
    `,
  },
  yanchu: {
    title: `<b>营业性许可</b>`,
    tips: [
      {
        bLine: '申请主体【内资】',
        sLine: '',
      },
      {
        bLine: '执照经营范围',
        sLine: '【经营演出】【经纪业务】',
      },
      {
        bLine: '经纪人资格认证3张',
        sLine: '（未给其他公司使用）',
      },
      {
        bLine: '社保缴纳人数',
        sLine: '（大于七人）',
      },
    ],
    remark: `
      <div style="font-size: 12px; text-align: center; line-height: 20px">
        <p style="color: red"><b>以上材料必须提供「彩色扫描」</b></p>
        <p><b>并发送max@k-joys.com做预审</b></p>
        <p><b>您的办理过程：预审合格 → 签约 → 100%下证</b></p>
      </div>
    `,
  },
};

export const classifyDetial = {
  yanchu: {
    title: require('@/assets/images/simp_wangwen/ww_yanchu.png'),
    book: require('@/assets/images/classifylist/book_yanchu.jpg'),
    video: '',
  },
  dongman: {
    title: require('@/assets/images/simp_wangwen/ww_dongman.png'),
    book: require('@/assets/images/classifylist/book.jpg'),
    video: '',
  },
  yinyue: {
    title: require('@/assets/images/simp_wangwen/ww_yinyue.png'),
    book: require('@/assets/images/classifylist/book.jpg'),
    video: '',
  },
  gbbj: {
    title: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    book: require('@/assets/images/guangbo/book_bj.png'),
    video: '',
  },
  gbsh: {
    title: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    book: require('@/assets/images/guangbo/book_sh.png'),
    video: '',
  },
  gbdy: {
    title: require('@/assets/images/guangbo/gb_dianyin.png'),
    book: require('@/assets/images/guangbo/book_dy.png'),
    video: '',
    costPath: '#',
    costCb() {
      this.showLianXi = true;
      return false;
    },
  },
  gbds: {
    title: require('@/assets/images/guangbo/gb_dianshi.png'),
    book: require('@/assets/images/guangbo/book_ds.png'),
    video: '',
    costPath: '#',
    costCb() {
      this.showLianXi = true;
      return false;
    },
  },
  yinyan: {
    title: require('@/assets/images/simp_wangwen/ww_yinyan.png'),
    book: require('@/assets/images/guangbo/book_yinyan.png'),
    video: '',
  },
  b1_idc: {
    title: require('@/assets/images/simp_dianxin/b1/b1_idc.png'),
    book: require('@/assets/images/dianxin/b1/book_b1_idc.png'),
    video: '',
  },
  b1_cdn: {
    title: require('@/assets/images/simp_dianxin/b1/b1_cdn.png'),
    book: require('@/assets/images/dianxin/b1/book_b1_cdn.jpg'),
    video: '',
  },
  b1_ipvpn: {
    title: require('@/assets/images/simp_dianxin/b1/b1_vpn.png'),
    book: require('@/assets/images/dianxin/b1/book_b1_vpn.png'),
    video: '',
  },
  b1_isp: {
    title: require('@/assets/images/simp_dianxin/b1/b1_isp.png'),
    book: require('@/assets/images/dianxin/b1/book_b1_isp.png'),
    video: '',
  },
  b2_edi: {
    title: require('@/assets/images/simp_dianxin/b2/b2_edi.png'),
    book: require('@/assets/images/dianxin/b2/book_b2_edi_1.jpg'),
    docPath: '/dy-apply-list/b2_edi',
    video: '',
  },
  b2_icp: {
    title: require('@/assets/images/simp_dianxin/b2/b2_icp.png'),
    book: require('@/assets/images/dianxin/b2/book_b2_icp_double.png'),
    docPath: '/dy-apply-list/b2_icp',
    video: '',
  },
  b2_sp: {
    title: require('@/assets/images/simp_dianxin/b2/b2_sp.png'),
    book: require('@/assets/images/dianxin/b2/book_b2_sp.png'),
    video: '',
  },
  b2_guonei: {
    title: require('@/assets/images/simp_dianxin/b2/b2_guonei.png'),
    book: require('@/assets/images/dianxin/b2/book_b2_guonei.png'),
    video: '',
    costPath: '#',
    costCb() {
      this.showLianXi = true;
      return false;
    },
  },
  b2_hujiao: {
    title: require('@/assets/images/simp_dianxin/b2/b2_hujiao.png'),
    book: require('@/assets/images/dianxin/b2/book_b2_hujiao.jpg'),
    video: '',
  },
  b2_cunchu: {
    title: require('@/assets/images/simp_dianxin/b2/b2_cunchu.png'),
    book: '',
    video: '',
    costPath: '#',
    costCb() {
      this.showLianXi = true;
      return false;
    },
  },
};

export const businessDetial = {
  yanchu: {
    title: require('@/assets/images/simp_wangwen/ww_yanchu.png'),
    content: `
    视频直播网文，即申请网络文化经营许可证
    的演出剧（节）目类和表演类，做视频网站和
    直播表演类的用户（如直播网站，视频门户）
    必须办理演艺演出类网络文化经营许可证
    `,
  },
  dongman: {
    title: require('@/assets/images/simp_wangwen/ww_dongman.png'),
    content: `
    动漫产品分为动画产品和漫画产品
    提供互联网动漫产品服务，如动画、漫画作品
    包括FLASH动画、网络表情、手机动漫等
    需要办理动漫类网络文化经营许可证
    `,
  },
  yinyue: {
    title: require('@/assets/images/simp_wangwen/ww_yinyue.png'),
    content: `
    从事网络音乐活动，如音乐娱乐产品的制作
    复制、发行、进口及通过互联网提供网络音乐
    娱乐产品的浏览、使用、下载，都需要办理
    音乐娱乐类网络文化经营许可证
    `,
  },
  gbbj: {
    title: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    content: `
    设立广播电视节目制作经营机构或从事
    广播电视节目制作经营活动应当取得
    《广播电视节目制作 经营许可证》。
    即指从事微电影、专题、专栏、综艺、动画片、
    广播剧、电视剧等广播电视节目的制作和
    节目 版权的交易、代理交易等活动的行为。
    `,
  },
  gbsh: {
    title: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    content: `
    设立广播电视节目制作经营机构或从事
    广播电视节目制作经营活动应当取得
    《广播电视节目制作 经营许可证》。
    即指从事微电影、专题、专栏、综艺、动画片、
    广播剧、电视剧等广播电视节目的制作和
    节目 版权的交易、代理交易等活动的行为。
    `,
  },
  gbdy: {
    title: require('@/assets/images/guangbo/gb_dianyin.png'),
    content: `
    <div style="font-size: 1.1rem; line-height: 2rem; margin-top: -2rem">
    电影备案是电影在开拍之前要做剧本备案，
    即电影备案立项
    <br/>
    <br/>
    电影备案需要摄制单位将电影剧本送工商登记
    地省级广播电视部门备案。
    <br/>
    <br/>
    省级广播电视部门应当按照行政许可法规定的
    期限作出决定，并报广播电影电视总局。
    <br/>
    <br/>
    广电总局公布备案结果后，由省广电厅批准
    电影制作许可证，可核发《电影剧本备案单》
    的电影制作单位，其他电影制作单位核发
    《电影制作许可证（单张）》
    </div>
    `,
  },
  gbds: {
    title: require('@/assets/images/guangbo/gb_dianshi.png'),
    content: `
    <div style="font-size: 1.1rem; line-height: 1.8rem; margin-top: -3rem">
    电视剧备案用于境内电视台播出或者境内外发行
    的电视剧（含电视动画片），包括国产电视剧
    <br/>
    <br/>
    和与境外机构联合制作的电视剧
    也用于境内电视台播出的境外引进电视剧
    网剧：G字备案（也叫规划备案，拿到规划
    备案号可以开始拍），是准予拍片的意思
    <br/>
    <br/>
    V字备案就是拍片完成后，进入上海局审核，
    过程中的审核视频播放的内容，如内容涉及
    其他部门审核的，中途还需转入其他部门同意
    <br/>
    <br/>
    电视剧和网剧只能选一个来报备，申请电视剧
    就不能申请网剧，申请网剧就不能申请电视局
    报备
    </div>
    `,
  },
  yinyan: {
    title: require('@/assets/images/simp_wangwen/ww_yinyan.png'),
    content: `
    适用：演出经纪公司、直播平台
    <br/>
    （网站等其他三方平台）、经营性演出机构、
    <br/>
    经营性演出团体及个体演员等
    `,
  },
  b1_idc: {
    title: require('@/assets/images/simp_dianxin/b1/b1_idc.png'),
    content: `
    互联网数据中心（Internet Data Center）
    简称IDC，是电信部门利用已有互联网通信线路
    带宽资源，建立标准化的电信专业级机房环境，
    为企业政府提供服务器托管租用及相关增值
    等方面服务。
    `,
  },
  b1_cdn: {
    title: require('@/assets/images/simp_dianxin/b1/b1_cdn.png'),
    content: `
    CDN指利用分布在不同区域的节点服务器群组成
    流量分配管理网络平台，为用户提供内容的分
    散存储和高速缓存，并根据网络动态流量和负
    载状况，将内容分发到快速、稳定的缓存服务
    器上，提高用户内容的访问响应速度和服务的
    可用性服务。（常见网宿、蓝讯、帝联、快网
    世纪互联等公司为第三方提供的网页加速 
    下载加速 、流媒体加速、 视频加速服务等）
    `,
  },
  b1_ipvpn: {
    title: require('@/assets/images/simp_dianxin/b1/b1_vpn.png'),
    content: `
    国内互联网虚拟专用网业务（IP-VPN）是指
    经营者利用自有或租用的互联网网络资源，
    采用TCP/IP协议，为国内用户定制互联网闭合
    用户群网络的服务。互联网虚拟专用网主要
    采用IP隧道等基于TCP/IP的技术组建，并提供
    一定的安全性和保密性，专网内可实现加密的
    透明分组传送。（常见IP虚拟专用网络。
    MPLS、VPN的第三方供应商）。
    `,
  },
  b1_isp: {
    title: require('@/assets/images/simp_dianxin/b1/b1_isp.png'),
    content: `
    互联网服务提供商（Internet Service Provider）
    简称ISP，经营者：一是接入服务，即帮助用户
    接入Internet；二是导航服务，即帮助用户
    在Internet上找到所需要的信息；
    三是信息服务，即建立数据服务系统，
    收集、加工、存储信息，定期维护更新，
    并通过网络向用户提供信息内容服务。
    `,
  },
  b2_edi: {
    title: require('@/assets/images/simp_dianxin/b2/b2_edi.png'),
    content: `
    利用各种与公用通信网或互联网相连的数据与
    交易/事务处理应用平台，通过网络为用户提供
    在线交易/事务处理的。包括交易处理业务、电
    子数据交换业务、网络/电子设备数据处理业
    务。（常见 淘宝、京东、由第三方入驻的电商
    平台）
    `,
  },
  b2_icp: {
    title: require('@/assets/images/simp_dianxin/b2/b2_icp.png'),
    content: `
    ICP-信息服务-仅限互联网服务 是指通过信息采
    集、开发、处理和信息平台的建设，通过公用
    通信网或互联网向用户提供信息服务的业务
    （常见 58同城，赶集网等信息发布平台）、递
    送服务、信息搜索查询服务、信息社区平台
    等）
    `,
  },
  b2_sp: {
    title: require('@/assets/images/simp_dianxin/b2/b2_sp.png'),
    content: `
    <div style="line-height: 1.6">
    SP信息服务（不含互联网信息服务）即时交互服务指利用公用通
    信网或互联网，并通过运行在计算机、智能终
    端等的客户端软件、浏览器等，为用户提供即
    时发送和接收消息（包括文本、图片、音视
    频）、文件等信息的服务。信息即时交互服务
    包括即时通信、交互式语音服务（IVR），以及
    基于互联网的端到端双向实时话音业务（常见 
    第三方发送短信、彩信业务，比如承接XX公司
    AA短信验证码业务）
    </div>
    `,
  },
  b2_guonei: {
    title: require('@/assets/images/simp_dianxin/b2/b2_guonei.png'),
    content: `
    <div style="margin-top: -15px;">
    国内多方通信服务业务是指通过多方通信平台
    和公用通信网或互联网实现国内两点或多点之
    间实时交互式或点播式的话音、图像通信服
    务。（常见的会畅、全时、二六三等提供的多
    方电话会议服务业务和国内可视电话会议服务
    业务；好视通、康拓普无 纸化会议系统
    （Com-Meeting）提供的国内互联网会议电视
    及图像服务等。）
    </div>
    `,
  },
  b2_hujiao: {
    title: require('@/assets/images/simp_dianxin/b2/b2_hujiao.png'),
    content: `
    <div style="line-height: 1.5;margin-top:-16px">
    呼叫中心业务是指受企事业等相关单位委托，
    利用与公用通信网或互联网连接的呼叫中心系
    统和数据库技术，通过网络向用户提供有关该
    单位的业务咨询、（比如百度）信息咨询和数
    据查询等服务。户可也以通过固定电话、传
    真、移动通信终端和计算机终端等多种方式进
    入系统，访问系统的数据库，以语音、传真、
    电子邮件、短消息等方式获取有关该单位的信
    息咨询（常见英立讯、优软科技、集时通讯等
    公司提供的座席外包、服务专员出租、系统设
    备出租、 业务外包等服务）
    </div>
    `,
  },
  b2_cunchu: {
    title: require('@/assets/images/simp_dianxin/b2/b2_cunchu.png'),
    content: `
    存储转发类业务是指利用存储转发机制为用户
    提供信息发送的业务。存储转发类业务包括语
    音信箱、电子邮件、传真存储转发等业务。
    （常见 电子邮箱 语音留言信箱等）
    `,
  },
};

export const docDetail = {
  yanchu: {
    title: require('@/assets/images/simp_wangwen/ww_yanchu.png'),
    tips: [
      `
      1.100%内资企业（网络科技类）
      `,
      `
      2.营业执照副本原件
      `,
      `
      3.工商调档-公司章程
      `,
      `
      4.正常缴纳社保人数≥8人
      `,
      `
      5.网站域名登记证明-域名证书
      `,
      `
      6.股权穿透图（股权层次复杂者需要额外提供律所出具无外资证）
      `,
      `
      7.股东法人证明（自然人股东=身份证公司股东=企业执照）
      `,
      `
      8.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  dongman: {
    title: require('@/assets/images/simp_wangwen/ww_dongman.png'),
    tips: [
      `
      1.内资100%
      `,
      `
      2.在职员工≥8人的社保记录
      `,
      `
      3.动漫类连载类网站且有≥3个作品权
      `,
      `
      4.股东结构内 公司股东≥3家 需要律所开具的 企业无外资证明（30天以内
      `,
      `
      5.注册地址必须持有租赁协议及产权证明
      `,
    ],
    tips_other: [
      [
        `<p><b>续办条件：</b></p>在职员工≥8人的社保记录<br/>动漫类连载类网站且有≥3个作品权`,
      ],
      ['<p><b>全包服务：</b></p>营业执照+近一个月的章程'],
    ],
  },
  yinyue: {
    title: require('@/assets/images/simp_wangwen/ww_yinyue.png'),
    tips: [
      `
      1.内资100%
      `,
      `
      2.在职员工≥8人的社保记录
      `,
      `
      3.音乐播放类网站且有≥10个作品权
      `,
      `
      4.股东结构内 公司股东≥3家 需要律所开具的 企业无外资证明（30天以内）
      `,
      `
      5.注册地址必须持有租赁协议及产权证明
      `,
    ],
    tips_other: [
      [
        `<p><b>续办条件：</b></p>在职员工≥8人的社保记录<br/>音乐播放类网站且有≥10个作品权`,
      ],
      ['<p><b>全包服务：</b></p>营业执照+近一个月的章程'],
    ],
  },
  gbbj: {
    title: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    tips: [
      `
      1.内资100% 且执照营业范围+【广播节目制作】类描述
      `,
      `
      2.学历证明 必须有≥3人导演/编辑等相关制作节目专业 专科或以上
      `,
      `
      3.同行工作经验≥2年
      `,
      `
      4.律所开具的 企业无外资证明（30天以内）
      `,
      `
      5.公安局开具的 法人无犯罪证明（30天以内）
      `,
      `
      6.注册地址必须持有租赁协议及产权证明（浦东临港地区需要约谈）
      `,
    ],
    tips_other: [
      [`<p><b>续办条件：</b></p>每年年审正常`],
      ['<p><b>全包服务：</b></p>营业执照+近一个月的章程'],
    ],
  },
  gbsh: {
    title: require('@/assets/images/simp_wangwen/gb_guangbo.png'),
    tips: [
      `
      1.内资100% 且执照营业范围+【广播节目制作】类描述
      `,
      `
      2.学历证明 必须有≥3人导演/编辑等相关制作节目专业 专科或以上
      `,
      `
      3.同行工作经验≥2年
      `,
      `
      4.律所开具的 企业无外资证明（30天以内）
      `,
      `
      5.公安局开具的 法人无犯罪证明（30天以内）
      `,
      `
      6.注册地址必须持有租赁协议及产权证明（浦东临港地区需要约谈）
      `,
    ],
    tips_other: [
      [`<p><b>续办条件：</b></p>每年年审正常`],
      ['<p><b>全包服务：</b></p>营业执照+近一个月的章程'],
    ],
  },
  gbdy: {
    title: require('@/assets/images/guangbo/gb_dianyin.png'),
    tips: [
      `
      1.拟定的片名、拟开机时间，和结束时间；
      `,
      `
      2.拍摄方式是数字还是胶片
      `,
      `
      3.影片类别是哪一种（故事、动画、记录、科教、特种影片）；
      `,
      `
      4.题材时间现代还是历史题材
      `,
      `
      5.故事简要梗概（50-100字）
      `,
      `
      6.详细梗概（1000-2500字）
      `,
      `
      7.主创人员信息（第一出品单位公司名称、法人、电话，有无其他出品单位）
      `,
      `
      8.须提供本单位账户所在银行出具的近1个月内余额证明，且账户内实有资金数额应在所拍摄影片内实有资金数额应在所拍摄影片
      `,
      `
      9.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  gbds: {
    title: require('@/assets/images/guangbo/gb_dianshi.png'),
    tips: [
      `
      1.持有广播电视节目经营许可证
      `,
      `
      2.编剧信息
      `,
      `
      3.导演信息
      `,
      `
      4.集数信息
      `,
      `
      5.拟定的拍摄日期
      `,
      `
      6.拍摄完后拟定的制作周期
      `,
      `
      7.有无联合制机构
      `,
      `
      8.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  yinyan: {
    title: require('@/assets/images/simp_wangwen/ww_yinyan.png'),
    tips: [
      `
      1.营业执照副本,(注册资金 ≥ 100万,营业范围需含「演出经纪」此项)
      `,
      `
      2.100%内资企业（网络科技类）
      `,
      `
      3.三个经纪人证（如无需挂靠）
      `,
      `
      4.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b1_idc: {
    title: require('@/assets/images/simp_dianxin/b1/b1_idc.png'),
    tips: [
      `
      1.公司企业法人营业执照副本彩扫（经营范围增加经营电信业务）
      `,
      `
      2.法定代表人身份证原件彩扫
      `,
      `
      3.一级公司股东为自然人需提交其身份证正反面原件彩扫
      `,
      `
      4.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      5.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      6.业务范围和对应机房地址
      `,
      `
      7.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b1_cdn: {
    title: require('@/assets/images/dianxin/b1/b1_cdn.png'),
    tips: [
      `
      1.公司企业法人营业执照副本彩扫
      `,
      `
      2.一级股东身份证正反面原件彩扫自然人股东得出资额及出资比例级股东为公司，提供股东公司名称/出资额/出资比例即可。
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      5.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      6.机房详细地址写在信息表中
      `,
      `
      7.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b1_ipvpn: {
    title: require('@/assets/images/dianxin/b1/b1_vpn.png'),
    tips: [
      `
      1.公司企业法人营业执照副本彩扫（经营范围增加经营电信业务）
      `,
      `
      2.法定代表人身份证原件彩扫
      `,
      `
      3.股东信息：一级公司股东为自然人，需提交其身份证正反面原件彩扫；
      `,
      `
      4.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      5.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      6.业务范围和对应机房地址
      `,
      `
      7.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b1_isp: {
    title: require('@/assets/images/dianxin/b1/b1_isp.png'),
    tips: [
      `
      1.公司企业法人营业执照副本彩扫
      `,
      `
      2.一级股东身份证正反面原件彩扫自然人股东得出资额及出资比例级股东为公司，提供股东公司名称/出资额/出资比例即可。
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      5.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      6.机房详细地址写在信息表中
      `,
      `
      7.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_sp: {
    title: require('@/assets/images/simp_dianxin/b2/b2_sp.png'),
    tips: [
      `
      1。公司企业法人营业执照副本彩扫
      `,
      `
      2.一级股东身份证正反面原件彩扫
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      5.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      6.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_hujiao: {
    title: require('@/assets/images/simp_dianxin/b2/b2_hujiao.png'),
    tips: [
      `
      1.公司企业法人营业执照副本彩扫
      `,
      `
      2.一级股东身份证正反面原件彩扫自然人股东得出资额及出资比例级股东为公司，提供股东公司名称/出资额/出资比例即可。
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.一级公司股东身份证正反面原件彩扫及自然人股东得出资额及出资比例，一级股东为公司，提供股东公司名称/出资额/出资比例即可。
      `,
      `
      5.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      6.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      7.开展呼叫中心业务实施计划
      `,
      `
      8.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_guonei: {
    title: require('@/assets/images/simp_dianxin/b2/b2_guonei.png'),
    tips: [
      `
      1.一级股东身份证正反面原件彩扫自然人股东得出资额及出资比例级股东为公司，提供股东公司名称/出资额/出资比例即可。
      `,
      `
      2.法定代表人身份证原件彩扫
      `,
      `
      3.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      4.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      5.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_cunchu: {
    title: require('@/assets/images/simp_dianxin/b2/b2_cunchu.png'),
    tips: [
      `
      1.公司企业法人营业执照副本彩扫（经营范围增加经营电信业务）
      `,
      `
      2.法定代表人身份证原件彩扫
      `,
      `
      3.一级股东为自然人需提交身份证正反面原件彩扫
      `,
      `
      4.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      5.已获颁电信业务经营许可证原件彩扫（正文页、附页、特别规定事项、年检记录页）
      `,
      `
      6.开展传真存储转发业务，需提供的其他文件（确认办理前具体咨询）
      `,
      `
      7.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_icp_nei: {
    title: require('@/assets/images/dianxin/b2/b2_icp_nei.png'),
    tips: [
      `
      1.营业执照副本彩扫(注册资金 ≥ 100万营业范围需含「第二类增值电信业务」)
      `,
      `
      2.一级股东身份证正反面原件彩扫
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.域名证书原件彩扫
      `,
      `
      5.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      6.股权结构-包含出资比例和金额
      `,
      `
      7.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_icp_wai: {
    title: require('@/assets/images/dianxin/b2/b2_icp_wai.png'),
    tips: [
      `
      1.营业执照副本彩扫(注册资金 ≥ 100万营业范围需含「第二类增值电信业务」)
      `,
      `
      2.一级股东身份证正反面原件彩扫
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.域名证书原件彩扫
      `,
      `
      5.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      6.外方主要投资者（必须是企业法人）需提交外资大股东公司最新有效的商业登记证
      `,
      `
      7.外资大股东电信业务运营经验
      `,
      `
      8.服务器托管协议及托管商资质
      `,
      `
      9.中外方投资者情况表
      `,
      `
      10.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_icp_waiw: {
    title: require('@/assets/images/dianxin/b2/b2_icp_wai.png'),
    tips: [
      `
      1.营业执照副本彩扫(注册资金 ≥ 100万营业范围需含「第二类增值电信业务」)
      `,
      `
      2.一级股东身份证正反面原件彩扫
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.域名证书原件彩扫
      `,
      `
      5.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      6.外方主要投资者（必须是企业法人）需提交外资大股东公司最新有效的商业登记证
      `,
      `
      7.外资大股东电信业务运营经验
      `,
      `
      8.服务器托管协议及托管商资质
      `,
      `
      9.中外方投资者情况表
      `,
      `
      10.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_edi_nei: {
    title: require('@/assets/images/dianxin/b2/b2_edi_nei.png'),
    tips: [
      `
      1.营业执照副本彩扫(注册资金 ≥ 100万营业范围需含「第二类增值电信业务」)
      `,
      `
      2.一级股东身份证正反面原件彩扫
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.域名证书原件彩扫
      `,
      `
      5.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      6.股权结构-包含出资比例和金额
      `,
      `
      7.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_edi_wai: {
    title: require('@/assets/images/dianxin/b2/b2_edi_wai.png'),
    tips: [
      `
      1.营业执照副本彩扫(注册资金 ≥ 100万营业范围需含「第二类增值电信业务」)
      `,
      `
      2.一级股东身份证正反面原件彩扫
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.域名证书原件彩扫
      `,
      `
      5.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      6.外方主要投资者（必须是企业法人）需提交外资大股东公司最新有效的商业登记证
      `,
      `
      7.外资大股东电信业务运营经验
      `,
      `
      8.服务器托管协议及托管商资质
      `,
      `
      9.中外方投资者情况表
      `,
      `
      10.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
  b2_edi_waiw: {
    title: require('@/assets/images/dianxin/b2/b2_edi_wai.png'),
    tips: [
      `
      1.营业执照副本彩扫(注册资金 ≥ 100万营业范围需含「第二类增值电信业务」)
      `,
      `
      2.一级股东身份证正反面原件彩扫
      `,
      `
      3.法定代表人身份证原件彩扫
      `,
      `
      4.域名证书原件彩扫
      `,
      `
      5.三个主要管理人员社保证明原件（近期1个月）
      `,
      `
      6.外方主要投资者（必须是企业法人）需提交外资大股东公司最新有效的商业登记证
      `,
      `
      7.外资大股东电信业务运营经验
      `,
      `
      8.服务器托管协议及托管商资质
      `,
      `
      9.中外方投资者情况表
      `,
      `
      10.注册地址必须持有租赁协议及产权证明
      `,
    ],
  },
};
