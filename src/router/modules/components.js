export const localMap = {
  /* login: require('login/index').default // 同步的方式
  login:()=> import('login/index')      // 异步的方式 */
  app: () => import('@/views/app/index'),
  menu: () => import('@/views/menu/index'),
  role: () => import('@/views/role/index'),
  admin: () => import('@/views/admin/index'),
  ad: () => import('@/views/ad/index'),
  certification: () => import('@/views/certification/index'),
  withdrawal: () => import('@/views/withdrawal/index'),
  coinWithdrawal: () => import('@/views/coinWithdrawal/index'),
  verification: () => import('@/views/verification/index'),
  whisper: () => import('@/views/tenant/whisper'),
  assist: () => import('@/views/tenant/assist'),
  renew: () => import('@/views/tenant/renew'),
  coupon: () => import('@/views/tenant/coupon'),
  identification: () => import('@/views/tenant/identification'),
  user: () => import('@/views/user/index'),
  transfer: () => import('@/views/transfer/index'),
  version: () => import('@/views/version/index'),
  zone: () => import('@/views/zone/index'),
  electric: () => import('@/views/electric/index'),
  help: () => import('@/views/help/index'),
  goods: () => import('@/views/goods/index'),
  category: () => import('@/views/goods/categoryIndex'),
  agent: () => import('@/views/agent/index'),
  newsCate: () => import('@/views/newsCate/index'),
  new: () => import('@/views/new/index'),
  message: () => import('@/views/message/index'),
  order: () => import('@/views/orders/index'),
  filLevel: () => import('@/views/filLevel/index'),
  fil: () => import('@/views/fil/index'),
  feedback: () => import('@/views/feedback/index'),
  tag: () => import('@/views/feedback/tag'),
  poster: () => import('@/views/poster/index'),
  spec: () => import('@/views/spec/index'),
  report: () => import('@/views/report/index'),
  sensitive: () => import('@/views/sensitive/index'),
  group: () => import('@/views/group/index'),
  log: () => import('@/views/log/index'),
  wallet: () => import('@/views/wallet/index'),
  sale: () => import('@/views/sale/index'),
  agreement: () => import('@/views/agreement/index'),
  ahead: () => import('@/views/ahead/index'),
  pay: () => import('@/views/configs/pay'),
  withdrawalDel: () => import('@/views/configs/withdrawalDel'),
  electricity: () => import('@/views/configs/electricity'),
  usdt: () => import('@/views/configs/usdt'),
  contact: () => import('@/views/configs/contact'),
  basics: () => import('@/views/configs/basics'),
  receivable: () => import('@/views/configs/receivable'),
  about: () => import('@/views/configs/about'),
  transformation: () => import('@/views/configs/transformation'),
  texpoint: () => import('@/views/configs/texpoint'),
  invite: () => import('@/views/configs/invite'),
  register: () => import('@/views/configs/register'),
  partner: () => import('@/views/partner/index'), // 合作商
  activities: () => import('@/views/draw/index'), // 抽签活动
  airdrop: () => import('@/views/airdrop/index'), // 空投藏品管理
  castGood: () => import('@/views/cast-good/index'), // 铸造藏品管理
  synthetic: () => import('@/views/synthetic/index'), // 合成管理
  box: () => import('@/views/box/index'), // 盲盒管理
  boxcategory: () => import('@/views/boxcategory/index'), // 盲盒分类管理
  address: () => import('@/views/configs/changeAddress'), // 合约地址
  chain: () => import('@/views/configs/onChain'), // 链上说明
  dishonest: () => import('@/views/configs/dishonest'), // 失信配置
  destroy: () => import('@/views/configs/destroy'), // 转移配置
  qcgGive: () => import('@/views/configs/qcgGive'), // 奇藏果转赠配置
  dxConfig: () => import('@/views/configs/dxConfig'), // 顶象开关配置
  gives: () => import('@/views/configs/give'), // 赠送配置
  interest: () => import('@/views/interest/index'), // 藏品权益
  interestManagement: () => import('@/views/interestManagement/index'), // 权益管理列表
  task: () => import('@/views/task/index'), // 藏豆任务管理
  helps: () => import('@/views/helps/index'), // 常见问题
  posters: () => import('@/views/poster/index'), // 分享海报
  give: () => import('@/views/give/index'), // 转赠记录
  inviteActivity: () => import('@/views/activity/invite') // 邀新活动
}
