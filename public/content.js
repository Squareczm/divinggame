// ==================== 像素艺术 SVG ====================
const PIXELS = {
  logo: `<svg width="120" height="54" viewBox="0 0 60 27" xmlns="http://www.w3.org/2000/svg">
    <g fill="#ffd485">
      <rect x="6"  y="6"  width="2" height="2"/><rect x="8"  y="4"  width="2" height="2"/>
      <rect x="10" y="4"  width="2" height="2"/><rect x="12" y="6"  width="2" height="2"/>
      <rect x="14" y="8"  width="2" height="2"/><rect x="14" y="10" width="2" height="2"/>
      <rect x="14" y="12" width="2" height="2"/><rect x="12" y="14" width="2" height="2"/>
      <rect x="10" y="16" width="2" height="2"/><rect x="8"  y="16" width="2" height="2"/>
      <rect x="6"  y="14" width="2" height="2"/><rect x="4"  y="12" width="2" height="2"/>
      <rect x="4"  y="10" width="2" height="2"/><rect x="4"  y="8"  width="2" height="2"/>
    </g>
    <g fill="#f5c46b">
      <rect x="24" y="10" width="4" height="2"/><rect x="28" y="8"  width="4" height="2"/>
      <rect x="32" y="10" width="4" height="2"/><rect x="36" y="12" width="4" height="2"/>
      <rect x="40" y="10" width="4" height="2"/><rect x="44" y="8"  width="4" height="2"/>
      <rect x="48" y="10" width="4" height="2"/><rect x="52" y="12" width="4" height="4"/>
    </g>
    <g fill="#80d4c0">
      <rect x="0"  y="22" width="60" height="1"/>
      <rect x="22" y="20" width="2" height="2"/><rect x="38" y="20" width="2" height="2"/>
    </g>
  </svg>`,
  shark: `<svg width="72" height="28" viewBox="0 0 36 14" xmlns="http://www.w3.org/2000/svg"><g fill="#a3b8cc">
    <rect x="2" y="6" width="2" height="2"/><rect x="4" y="5" width="2" height="4"/>
    <rect x="6" y="4" width="16" height="6"/><rect x="10" y="2" width="4" height="2"/>
    <rect x="22" y="5" width="4" height="4"/><rect x="26" y="4" width="2" height="6"/>
    <rect x="28" y="3" width="2" height="3"/><rect x="28" y="8" width="2" height="3"/>
    <rect x="20" y="10" width="2" height="2"/></g>
    <g fill="#0e2238"><rect x="8" y="6" width="1" height="1"/></g></svg>`,
  turtle: `<svg width="56" height="36" viewBox="0 0 28 18" xmlns="http://www.w3.org/2000/svg"><g fill="#80d4c0">
    <rect x="4" y="5" width="16" height="8"/><rect x="6" y="3" width="12" height="12"/>
    <rect x="8" y="2" width="8" height="14"/><rect x="20" y="6" width="2" height="6"/>
    <rect x="22" y="7" width="2" height="4"/><rect x="2" y="8" width="2" height="2"/>
    <rect x="2" y="12" width="2" height="2"/><rect x="18" y="2" width="2" height="2"/>
    <rect x="18" y="14" width="2" height="2"/></g>
    <g fill="#7a8ea8"><rect x="10" y="5" width="2" height="2"/><rect x="14" y="5" width="2" height="2"/>
    <rect x="10" y="9" width="2" height="2"/><rect x="14" y="9" width="2" height="2"/>
    <rect x="12" y="7" width="2" height="2"/></g></svg>`,
  manta: `<svg width="80" height="28" viewBox="0 0 40 14" xmlns="http://www.w3.org/2000/svg"><g fill="#e6eef5">
    <rect x="16" y="4" width="8" height="4"/><rect x="18" y="2" width="4" height="2"/>
    <rect x="10" y="6" width="6" height="4"/><rect x="6" y="8" width="4" height="2"/>
    <rect x="2" y="10" width="4" height="1"/><rect x="24" y="6" width="6" height="4"/>
    <rect x="30" y="8" width="4" height="2"/><rect x="34" y="10" width="4" height="1"/>
    <rect x="20" y="8" width="2" height="6"/></g>
    <g fill="#0e2238"><rect x="18" y="5" width="1" height="1"/><rect x="21" y="5" width="1" height="1"/></g></svg>`,
  octopus: `<svg width="48" height="40" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg"><g fill="#b892d4">
    <rect x="8" y="2" width="8" height="6"/><rect x="6" y="4" width="12" height="4"/>
    <rect x="4" y="8" width="4" height="2"/><rect x="8" y="8" width="2" height="4"/>
    <rect x="10" y="8" width="2" height="6"/><rect x="12" y="8" width="2" height="4"/>
    <rect x="14" y="8" width="2" height="6"/><rect x="16" y="8" width="4" height="2"/>
    <rect x="6" y="10" width="2" height="4"/><rect x="16" y="10" width="2" height="4"/>
    <rect x="2" y="10" width="2" height="2"/><rect x="20" y="10" width="2" height="2"/></g>
    <g fill="#0e2238"><rect x="10" y="4" width="1" height="1"/><rect x="13" y="4" width="1" height="1"/></g></svg>`,
  jelly: `<svg width="40" height="44" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg"><g fill="#ffd485">
    <rect x="6" y="2" width="8" height="2"/><rect x="4" y="4" width="12" height="6"/>
    <rect x="2" y="6" width="16" height="2"/></g>
    <g fill="#e6eef5"><rect x="4" y="10" width="2" height="4"/><rect x="8" y="10" width="2" height="8"/>
    <rect x="12" y="10" width="2" height="6"/><rect x="16" y="10" width="2" height="4"/>
    <rect x="6" y="12" width="2" height="6"/><rect x="10" y="12" width="2" height="8"/>
    <rect x="14" y="12" width="2" height="4"/></g></svg>`,
  coral: `<svg width="64" height="32" viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg"><g fill="#ff7d7d">
    <rect x="4" y="10" width="4" height="6"/><rect x="2" y="12" width="8" height="4"/>
    <rect x="6" y="6" width="2" height="4"/><rect x="4" y="4" width="2" height="2"/>
    <rect x="8" y="4" width="2" height="2"/></g>
    <g fill="#b892d4"><rect x="14" y="8" width="6" height="8"/><rect x="12" y="10" width="10" height="4"/>
    <rect x="16" y="4" width="2" height="4"/><rect x="14" y="2" width="2" height="2"/>
    <rect x="18" y="2" width="2" height="2"/></g>
    <g fill="#ff9d5c"><rect x="24" y="12" width="6" height="4"/><rect x="26" y="8" width="2" height="4"/>
    <rect x="28" y="6" width="2" height="4"/></g></svg>`,
  fish_school: `<svg width="80" height="32" viewBox="0 0 40 16" xmlns="http://www.w3.org/2000/svg"><g fill="#ff9d5c">
    <rect x="2" y="4" width="4" height="2"/><rect x="6" y="3" width="2" height="4"/><rect x="0" y="4" width="2" height="1"/>
    <rect x="10" y="10" width="4" height="2"/><rect x="14" y="9" width="2" height="4"/><rect x="8" y="10" width="2" height="1"/>
    <rect x="20" y="6" width="4" height="2"/><rect x="24" y="5" width="2" height="4"/><rect x="18" y="6" width="2" height="1"/>
    <rect x="28" y="12" width="4" height="2"/><rect x="32" y="11" width="2" height="4"/><rect x="26" y="12" width="2" height="1"/>
    <rect x="14" y="2" width="4" height="2"/><rect x="18" y="1" width="2" height="4"/><rect x="12" y="2" width="2" height="1"/>
    <rect x="32" y="4" width="4" height="2"/><rect x="36" y="3" width="2" height="4"/><rect x="30" y="4" width="2" height="1"/>
  </g></svg>`,
  wreck: `<svg width="80" height="40" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg"><g fill="#5a7a9a">
    <rect x="2" y="12" width="36" height="6"/><rect x="6" y="10" width="28" height="2"/>
    <rect x="10" y="8" width="20" height="2"/><rect x="14" y="6" width="6" height="2"/>
    <rect x="20" y="4" width="2" height="4"/></g>
    <g fill="#80d4c0"><rect x="4" y="10" width="2" height="2"/><rect x="36" y="10" width="2" height="2"/>
    <rect x="16" y="12" width="2" height="2"/><rect x="26" y="12" width="2" height="2"/></g>
    <g fill="#0e2238"><rect x="12" y="13" width="2" height="3"/><rect x="18" y="13" width="2" height="3"/>
    <rect x="24" y="13" width="2" height="3"/><rect x="30" y="13" width="2" height="3"/></g></svg>`,
  hammerhead: `<svg width="80" height="30" viewBox="0 0 40 15" xmlns="http://www.w3.org/2000/svg"><g fill="#7a8ea8">
    <rect x="2" y="5" width="4" height="6"/><rect x="0" y="3" width="2" height="4"/>
    <rect x="0" y="9" width="2" height="4"/><rect x="6" y="6" width="18" height="4"/>
    <rect x="12" y="4" width="4" height="2"/><rect x="24" y="7" width="4" height="2"/>
    <rect x="28" y="6" width="2" height="4"/><rect x="30" y="5" width="2" height="3"/>
    <rect x="30" y="8" width="2" height="3"/><rect x="22" y="10" width="2" height="2"/></g>
    <g fill="#0e2238"><rect x="1" y="4" width="1" height="1"/><rect x="1" y="10" width="1" height="1"/></g></svg>`,
  diver: `<svg width="44" height="48" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg"><g fill="#ffd485">
    <rect x="8" y="2" width="6" height="4"/><rect x="6" y="4" width="10" height="6"/>
    <rect x="10" y="10" width="6" height="8"/><rect x="4" y="10" width="6" height="4"/>
    <rect x="2" y="10" width="2" height="2"/></g>
    <g fill="#f5c46b"><rect x="16" y="4" width="4" height="6"/><rect x="18" y="10" width="2" height="4"/>
    <rect x="10" y="18" width="2" height="4"/><rect x="14" y="18" width="2" height="4"/>
    <rect x="8" y="22" width="6" height="2"/><rect x="14" y="22" width="6" height="2"/></g>
    <g fill="#ff9d5c"><rect x="8" y="4" width="6" height="2"/></g>
    <g fill="#0e2238"><rect x="9" y="5" width="1" height="1"/><rect x="12" y="5" width="1" height="1"/></g></svg>`,
  bubbleart: `<svg width="24" height="32" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><g fill="#e6eef5">
    <rect x="4" y="14" width="2" height="2"/><rect x="8" y="10" width="2" height="2"/>
    <rect x="2" y="6" width="3" height="3"/><rect x="7" y="2" width="4" height="4"/></g></svg>`,
  warning: `<svg width="40" height="36" viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"><g fill="#ff7d7d">
    <rect x="9" y="2" width="2" height="2"/><rect x="8" y="4" width="4" height="2"/>
    <rect x="7" y="6" width="6" height="2"/><rect x="6" y="8" width="8" height="2"/>
    <rect x="5" y="10" width="10" height="2"/><rect x="4" y="12" width="12" height="2"/>
    <rect x="3" y="14" width="14" height="2"/></g>
    <g fill="#0e2238"><rect x="9" y="8" width="2" height="4"/><rect x="9" y="13" width="2" height="1"/></g></svg>`,
  compass: `<svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#f5c46b">
    <rect x="6" y="2" width="8" height="2"/><rect x="4" y="4" width="12" height="2"/>
    <rect x="2" y="6" width="16" height="8"/><rect x="4" y="14" width="12" height="2"/>
    <rect x="6" y="16" width="8" height="2"/></g>
    <g fill="#ff7d7d"><rect x="9" y="5" width="2" height="5"/></g>
    <g fill="#ffd485"><rect x="9" y="10" width="2" height="5"/></g></svg>`,
  tank: `<svg width="28" height="40" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg"><g fill="#ff9d5c">
    <rect x="5" y="0" width="4" height="2"/><rect x="4" y="2" width="6" height="2"/>
    <rect x="2" y="4" width="10" height="14"/><rect x="4" y="18" width="6" height="2"/></g>
    <g fill="#0e2238"><rect x="5" y="8" width="4" height="2"/></g></svg>`,
  cenote: `<svg width="80" height="40" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg"><g fill="#1a3a52">
    <rect x="0" y="0" width="40" height="6"/><rect x="0" y="6" width="8" height="14"/>
    <rect x="8" y="8" width="4" height="12"/><rect x="32" y="6" width="8" height="14"/>
    <rect x="28" y="8" width="4" height="12"/></g>
    <g fill="#f5c46b"><rect x="12" y="6" width="16" height="2"/><rect x="12" y="8" width="2" height="2"/>
    <rect x="26" y="8" width="2" height="2"/></g>
    <g fill="#ffd485"><rect x="18" y="12" width="4" height="4"/></g></svg>`,
  whale: `<svg width="96" height="30" viewBox="0 0 48 15" xmlns="http://www.w3.org/2000/svg"><g fill="#5a7a9a">
    <rect x="4" y="4" width="32" height="7"/><rect x="2" y="5" width="2" height="5"/>
    <rect x="0" y="6" width="2" height="3"/><rect x="36" y="5" width="4" height="5"/>
    <rect x="40" y="4" width="4" height="3"/><rect x="44" y="3" width="2" height="3"/>
    <rect x="40" y="8" width="4" height="3"/><rect x="44" y="10" width="2" height="3"/>
    <rect x="18" y="11" width="8" height="2"/><rect x="22" y="13" width="2" height="2"/>
    <rect x="10" y="2" width="2" height="2"/></g>
    <g fill="#ffd485"><rect x="10" y="0" width="1" height="2"/><rect x="11" y="1" width="1" height="1"/></g>
    <g fill="#0e2238"><rect x="6" y="6" width="1" height="1"/></g></svg>`,
  ice: `<svg width="60" height="40" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><g fill="#ffd485">
    <rect x="0" y="0" width="30" height="4"/><rect x="2" y="4" width="4" height="2"/>
    <rect x="10" y="4" width="6" height="2"/><rect x="20" y="4" width="4" height="2"/></g>
    <g fill="#e6eef5"><rect x="4" y="6" width="2" height="2"/><rect x="12" y="6" width="2" height="4"/>
    <rect x="22" y="6" width="2" height="2"/></g>
    <g fill="#f5c46b"><rect x="0" y="12" width="30" height="8"/></g></svg>`,
  nudibranch: `<svg width="56" height="24" viewBox="0 0 28 12" xmlns="http://www.w3.org/2000/svg"><g fill="#b892d4">
    <rect x="2" y="6" width="24" height="4"/><rect x="4" y="4" width="20" height="2"/>
    <rect x="6" y="2" width="4" height="2"/><rect x="12" y="2" width="4" height="2"/>
    <rect x="18" y="2" width="4" height="2"/></g>
    <g fill="#ff9d5c"><rect x="6" y="0" width="2" height="2"/><rect x="14" y="0" width="2" height="2"/>
    <rect x="20" y="0" width="2" height="2"/></g>
    <g fill="#80d4c0"><rect x="0" y="6" width="2" height="4"/><rect x="26" y="6" width="2" height="4"/></g></svg>`,
};


// ==================== 等级（证书）====================
const CERTS = [
  { name: 'Open Water',      title: '初级潜水员',    exp: 0    },
  { name: 'Advanced OW',     title: '进阶潜水员',    exp: 80   },
  { name: 'Rescue Diver',    title: '救援潜水员',    exp: 220  },
  { name: 'Divemaster',      title: '潜导',          exp: 420  },
  { name: 'Instructor',      title: '潜水教练',      exp: 700  },
  { name: 'Tec 50',          title: '技术潜水员',    exp: 1100 },
  { name: '传奇',            title: '世界级潜水员',  exp: 1700 },
];


// ==================== 流派 ====================
const ARCHETYPES = {
  explorer: {
    name: '探索派',
    flavor: '"下一个潜点永远比上一个深"',
    desc: '爱追远方和新潜点，瓶数涨得快。',
    startMods: { exp: 10 },
    expMult: 1.2,
  },
  photographer: {
    name: '影像派',
    flavor: '"别动，那只裸鳃刚张开"',
    desc: '水下摄影热爱者，口碑与储蓄涨得快。',
    startMods: { connections: 10, money: 10 },
    moneyMult: 1.25,
  },
  technical: {
    name: '技术派',
    flavor: '"深度不是问题，气量分配才是"',
    desc: '冷水/深潜/洞穴偏好，精力更稳、事故更少。',
    startMods: { maxHp: 30, hp: 30 },
    hpMult: 1.5,
  },
};

// ==================== 潜点库 ====================
const SITES = [
  { name: '深圳大鹏',       flavor: '能见度两米、水母满天',      depth: [8, 15],  temp: [22, 26] },
  { name: '三亚亚龙湾',     flavor: '国内起步站，海底微缩版热带',  depth: [10, 18], temp: [26, 28] },
  { name: '东山岛 福建',    flavor: '国内老牌潜点，凉流冰爽',      depth: [12, 22], temp: [20, 24] },
  { name: '菲律宾 Moalboal', flavor: '沙丁鱼风暴，银河在身下',     depth: [10, 20], temp: [27, 29] },
  { name: '菲律宾 Anilao',   flavor: '微距天堂，每一米都有故事',    depth: [8, 20],  temp: [26, 28] },
  { name: '马来西亚 Sipadan', flavor: '海龟与梭鱼风暴的殿堂',      depth: [12, 30], temp: [27, 29] },
  { name: '马尔代夫 北环礁', flavor: '魔鬼鱼在洗澡点排队',         depth: [10, 28], temp: [27, 30] },
  { name: '印尼 Komodo',     flavor: '巨型生物 + 世界级流',        depth: [15, 35], temp: [23, 28] },
  { name: '印尼 Raja Ampat', flavor: '全球珊瑚多样性之冠',         depth: [10, 25], temp: [27, 29] },
  { name: '印尼 Lembeh',     flavor: '泥地里都是怪奇小生物',        depth: [5, 22],  temp: [25, 28] },
  { name: '帕劳 Blue Corner', flavor: '挂钩流潜，鲨鱼在头顶排队',   depth: [18, 30], temp: [27, 29] },
  { name: '埃及 红海 SS Thistlegorm', flavor: '二战沉船，弹药与摩托', depth: [18, 32], temp: [22, 26] },
  { name: '冰岛 Silfra',     flavor: '两大陆板块之间，水凉如刀',    depth: [6, 18],  temp: [2, 4]   },
  { name: '墨西哥 Cenote',   flavor: '天坑洞潜，上下都是宇宙',     depth: [8, 25],  temp: [24, 26] },
  { name: '加拉帕戈斯',     flavor: '锤头鲨巨阵，旱季必去',        depth: [15, 35], temp: [19, 23] },
  { name: '日本 与那国',     flavor: '冬天的槌头鲨与水下遗迹',      depth: [20, 35], temp: [20, 24] },
  { name: '汤加 Ha\'apai',   flavor: '夏末和座头鲸一起漂浮',        depth: [3, 15],  temp: [24, 26] },
  { name: '澳洲 大堡礁',     flavor: '大珊瑚礁退化中的最后繁华',    depth: [8, 22],  temp: [24, 27] },
  { name: '西沙 中国',       flavor: '蓝得不真实的海，鲨鱼回来了',  depth: [12, 28], temp: [26, 29] },
  { name: '墨西哥 Socorro',  flavor: '远洋大物：虎鲸、鲸鲨、锤头', depth: [20, 35], temp: [22, 27] },
];

// ==================== 事件库 ====================
const EVENTS = [
  // ========== OW 新手阶段 (cert 0) ==========
  {
    id: 'first_dive', cert: { max: 0 },
    title: '-- 初次入水 --', creature: 'diver', flavor: '"你的第一次下潜"',
    text: '第一次在开放水域下潜。面镜起雾，教练在3米处等你。你的耳压还没平衡，右耳开始刺痛。',
    choices: [
      { text: '立刻上升1米，捏鼻鼓气，慢慢重来', effects: { exp: 12, hp: 5 }, result: '你慢下来。耳朵通了。你记住了这个节奏：身体比课本慢，但身体不会骗人。', tag: '+12瓶 +5精力' },
      { text: '咬牙继续下潜，以为能扛过去', effects: { exp: 5, hp: -15, reckless: 10 }, result: '你下到6米才发现右耳出血。教练把你拉回水面。第一课往往是最贵的一课。', tag: '+5瓶 -15精力 +10鲁莽' },
      { text: '做个停止手势，示意教练先等等', effects: { exp: 15, connections: 8 }, result: '教练点头，等你平衡好了才继续。他后来在日志上写：这个同学很懂节奏。沟通也是潜水技能。', tag: '+15瓶 +8口碑' },
    ]
  },
  {
    id: 'gear_check', cert: { max: 1 },
    title: '-- 水面装备检查 --', creature: 'tank', flavor: '"BWRAF, do you recall?"',
    text: '你和潜伴在船尾做下水前的装备检查。你伸手要摸他的调节器，发现他的备用二级头被管线缠住了。',
    choices: [
      { text: '帮他理顺，慢慢来', effects: { exp: 10, connections: 10 }, result: '两分钟解决了问题。下水后他和你配合比之前顺了一倍。信任是水下最值钱的事。', tag: '+10瓶 +10口碑' },
      { text: '"差不多就行了，下去再说"', effects: { exp: -5, reckless: 15, hp: -5 }, result: '水下他的备用头挂在腰挂上完全够不着。想想如果有人需要备用气源。你学到"差不多"不是一个潜水词汇。', tag: '-5瓶 +15鲁莽' },
      { text: '打断整个 team 重新走一遍 BWRAF', effects: { exp: 15, connections: 5 }, result: '船上的资深潜水员看了你一眼。认真的新人比放水的老手更被信任。流程不是仪式，是肌肉记忆。', tag: '+15瓶 +5口碑' },
    ]
  },
  {
    id: 'buoyancy_1', cert: { max: 1 },
    title: '-- 浮力失衡 --', creature: 'coral', flavor: '"珊瑚不会再生"',
    text: '你的中性浮力还没掌握。一个不小心脚蹼带起了沙，教练指了指你脚下2厘米处的鹿角珊瑚：再低10厘米你就是那颗珊瑚这辈子最后一个故事。',
    choices: [
      { text: '深吸一口气让BCD微充气，悬浮起来', effects: { exp: 15, hp: 5 }, result: '你稳稳地悬停在距礁石30厘米处。教练比了个完美的OK。中性浮力不是技术，是姿态。', tag: '+15瓶' },
      { text: '慌张乱踢水，想往上游', effects: { exp: 5, hp: -10, reckless: 10 }, result: '你踢断了两根鹿角。珊瑚生长需要几十年。新手的每一脚都在记账。', tag: '-10精力 +10鲁莽' },
      { text: '屏息，慢慢横向游离', effects: { exp: 20, hp: -5 }, result: '屏息上浮有气压伤风险，但你保持了低频节奏。教练说："你至少知道别踹珊瑚。下次换个更安全的方式。"', tag: '+20瓶 -5精力' },
    ]
  },
  {
    id: 'sac_rate', cert: { max: 1 },
    title: '-- 气量陷阱 --', creature: 'tank', flavor: '"你怎么这么费气"',
    text: '整个小组都还剩130bar，你已经到90bar。这是你连续第三次比组里消耗快30%。教练问你：你紧张吗。',
    choices: [
      { text: '承认：是有点', effects: { exp: 15, connections: 5, hp: 5 }, result: '教练教你一个技巧：下潜前先让自己在水面漂2分钟，平静呼吸，再下。两次潜之后你的 SAC 降了15%。情绪是最大的气量敌人。', tag: '+15瓶' },
      { text: '"没啊，我就是活动量大"', effects: { exp: -5, reckless: 5 }, result: '教练笑笑没说话。第二潜你还是先上。气量骗不了人。', tag: '+5鲁莽' },
      { text: '要求换个小一点的瓶', effects: { exp: 10, money: -10 }, result: '你租了个10L铝瓶。问题是瓶子本身不能让你不紧张。你需要的是心态，不是装备。', tag: '+10瓶 -10储蓄' },
    ]
  },
  {
    id: 'first_fish', cert: { max: 1 },
    title: '-- 初见游鱼 --', creature: 'fish_school', flavor: '"一整群黄尾鲷"',
    text: '下潜到12米，一群黄尾鲷从你面前缓缓游过。至少两百条，金黄色的墙移动在蓝色背景里。你屏住呼吸。',
    choices: [
      { text: '保持静止，让鱼群包围你', effects: { exp: 20, hp: 15, connections: 5 }, result: '三分钟里你被鱼墙包围。回到船上你说不出话。这一刻是之前所有装备、考试、理论的答案。', tag: '+20瓶 +15精力' },
      { text: '游过去拍照', effects: { exp: 5, hp: -5 }, result: '鱼群瞬间散开。你拍了一张模糊的尾巴特写。海洋的礼物不接受强取。', tag: '+5瓶 -5精力' },
      { text: '追着它们游，想跟上', effects: { exp: -5, hp: -15, reckless: 5 }, result: '你追了30秒发现气量掉了20bar，离潜伴已经50米。鱼群消失了，你只收获了自己的喘息。', tag: '-15精力 +5鲁莽' },
    ]
  },
  {
    id: 'fogged_mask', cert: { max: 1 },
    title: '-- 面镜起雾 --', creature: 'bubbleart', flavor: '"什么都看不见"',
    text: '下潜到8米面镜完全起雾了。你能感觉到水温和鱼群，但看不清教练的手势。教练抓住你的手。',
    choices: [
      { text: '做面镜清理：往面镜灌水再排水', effects: { exp: 20, hp: 5 }, result: '你一气呵成。教练比了个大拇指。这个小动作在OW课上练过20次，今天第一次在真场景用上。', tag: '+20瓶' },
      { text: '紧张抓住教练不松手', effects: { exp: 5, connections: -5, hp: -10 }, result: '教练把你送回水面。没什么好说的，你还需要更多次练习面镜清理。', tag: '-10精力 -5口碑' },
      { text: '摘下面镜试着直接睁眼', effects: { exp: -5, hp: -15, reckless: 15 }, result: '盐水直接灌进眼睛。你慌了。教练把你拖回水面。摘面镜在陆地练100次，在水下只能在心里有完全把握时做。', tag: '-15精力 +15鲁莽' },
    ]
  },
  {
    id: 'ow_theory', cert: { max: 1 },
    title: '-- OW 理论题 --', creature: 'compass', flavor: '"按规则画三角"',
    text: '一道考题让你卡住了：深度30米，停留20分钟，之后升到12米需要几分钟的安全停留。你手里有减压表但太紧张算不清楚。',
    choices: [
      { text: '深呼吸，慢慢查表走流程', effects: { exp: 20, hp: -5 }, result: '你用了8分钟查完，答案正确。教练说："水下紧急情况的时候，你能多慢都行，但要对。"', tag: '+20瓶' },
      { text: '瞄一眼邻座的答案', effects: { exp: -10, reckless: 10 }, result: '你考过了但心里知道那一刻开始，你对自己的判断力打了一个折。这不是考试的事。', tag: '-10瓶 +10鲁莽' },
      { text: '举手问教练这道题怎么想', effects: { exp: 15, connections: 10 }, result: '教练讲了5分钟，把整个减压逻辑串了一遍。你发现考试是次要的，你真的懂了。', tag: '+15瓶 +10口碑' },
    ]
  },

  // ========== AOW 进阶阶段 (cert 1-2) ==========
  {
    id: 'first_night', cert: { min: 1 },
    title: '-- 夜潜首航 --', creature: 'octopus', flavor: '"手电光圈外的一切是黑的"',
    text: '你的第一次夜潜。18米下，手电照向一块礁石，一只椰子章鱼正从一个玻璃瓶里慢慢抽出三条腕足，皮肤色斑随节奏变换。',
    choices: [
      { text: '关掉手电，让眼睛适应微光', effects: { exp: 25, hp: 10, connections: 5 }, result: '你看到水里飘散的生物荧光点点。章鱼继续它的表演。夜潜让你学会另一种"看"：不是照亮，是等。', tag: '+25瓶 +10精力', item: '夜潜日志' },
      { text: '用手电直照它，仔细拍', effects: { exp: 5, hp: -5 }, result: '它立刻躲回瓶子里。夜潜的不成文规则：强光直照会惊扰夜行生物。你又学了一条。', tag: '+5瓶' },
      { text: '用红光或手电侧光打', effects: { exp: 30, connections: 10 }, result: '你用侧光看了它完整5分钟的伪装切换秀。三年老潜水员也没见过这么完整的一次。信息比胶片更宝贵。', tag: '+30瓶 +10口碑', flag: 'night_expert' },
    ]
  },
  {
    id: 'deep_30m', cert: { min: 1 },
    title: '-- 30米深潜 --', creature: 'diver', flavor: '"第一次摸到AOW上限"',
    text: '你第一次下到30米。周围颜色褪到灰蓝，头脑有点迷糊。教练打了"OK？"手势。',
    choices: [
      { text: '检查气量与NDL，认真回OK', effects: { exp: 25, hp: 5 }, result: '你瞄了一眼表：150bar，NDL 12分钟。你回了稳稳的OK。深潜不是证明勇气，是证明自律。', tag: '+25瓶' },
      { text: '感觉没事，继续往下好奇地看', effects: { exp: 10, hp: -20, reckless: 20 }, result: '你下到34米才发现NDL只剩3分钟。勉强赶回来时做了紧张的安全停留。氮醉最坏的地方是：你不知道自己正在氮醉。', tag: '+20鲁莽 -20精力' },
      { text: '打手势示意要上升一点', effects: { exp: 20, connections: 5 }, result: '教练跟你上到25米稳住。他后来说："会主动上升的新人比愿意硬撑的新人安全十倍。"', tag: '+20瓶' },
    ]
  },
  {
    id: 'navigation', cert: { min: 1 },
    title: '-- 罗盘迷踪 --', creature: 'compass', flavor: '"船在哪边来着"',
    text: '返航时间到了。你试图按自然导航找船，发现你记的参照物是块珊瑚——这片礁石上至少有三十块同款珊瑚。',
    choices: [
      { text: '拿出罗盘，按下潜时记的方位返回', effects: { exp: 25, connections: 5 }, result: '你照罗盘走了120度方向，7分钟后看到锚链。方向感可以训练，但罗盘不会撒谎。', tag: '+25瓶' },
      { text: '升到5米用SMB（水面浮标）标记', effects: { exp: 20, hp: -5 }, result: '你升到5米放了 SMB，船长看到了开船过来接你。主动通报比撑面子重要。', tag: '+20瓶' },
      { text: '凭感觉游，赌一把', effects: { exp: 5, hp: -20, reckless: 20 }, result: '你游了15分钟才看到船，气快用完，水面上船长脸铁青。感觉在陌生水域是个不靠谱的向导。', tag: '-20精力 +20鲁莽' },
    ]
  },
  {
    id: 'current_hook', cert: { min: 1 },
    title: '-- 挂钩流潜 --', creature: 'hammerhead', flavor: '"帕劳 Blue Corner"',
    text: 'Blue Corner 的流比预报强。潜导示意大家下沉到25米挂钩。你的挂钩抛出去三次没挂稳。流把你往蓝水外吹。',
    choices: [
      { text: '弃钩，紧贴礁石边壁缓慢蹬回来', effects: { exp: 30, hp: -15 }, result: '你贴着礁壁10米一截一截爬回去，最后在潜导身侧挂稳了。十分钟后一群锤头鲨从上方扫过。你和潜导对视了一下，没说话，都笑了。', tag: '+30瓶 -15精力', flag: 'current_skilled' },
      { text: '冷静收杆，再抛一次，更低', effects: { exp: 20, hp: -5 }, result: '第四次终于挂上一块凸起的老珊瑚基座。你喘得像只漏气的皮球，但稳住了。', tag: '+20瓶' },
      { text: '充气BCD上升取消潜水', effects: { exp: 5, connections: -5 }, result: '你回到船上。船长说"流太急确实可以放弃"，但你看着其他人陆续上来兴奋地讲锤头鲨的时候，心里有点复杂。', tag: '-5口碑' },
    ]
  },
  {
    id: 'manta_ray', cert: { min: 1 },
    title: '-- 魔鬼鱼驾临 --', creature: 'manta', flavor: '"一张悬空的黑毯"',
    text: '马尔代夫 Hanifaru Bay 洗澡点，一只翼展4米的魔鬼鱼从头顶经过。你僵住了。它又转了一圈回来，似乎在打量你。',
    choices: [
      { text: '屏住呼吸，保持静止', effects: { exp: 35, hp: 20, connections: 10 }, result: '它在你上方1.5米悬停了15秒。它的眼睛和你对视。那一刻你知道为什么有人把潜水当修行。', tag: '+35瓶 +20精力 +10口碑', item: '魔鬼鱼刻印' },
      { text: '伸手想轻轻触碰', effects: { exp: -10, reckless: 15, connections: -10 }, result: '它加速离开，再也没回来。潜导在船上严肃批评了你。海洋生物不是宠物。', tag: '+15鲁莽 -10口碑' },
      { text: '拍连拍', effects: { exp: 15, money: 5 }, result: '你拍到了一张它侧面的好片。后来卖给了杂志，但你一直记得那个瞬间你错过了看它眼睛的机会。', tag: '+15瓶 +5储蓄' },
    ]
  },
  {
    id: 'shark_first', cert: { min: 1 },
    title: '-- 鲨鱼初见 --', creature: 'shark', flavor: '"心跳比气泡还响"',
    text: '礁鲨从你右侧5米处滑过。3米长，肌肉线条清晰可见。你所有关于鲨鱼的知识都挤到你脑袋最前排，打架。',
    choices: [
      { text: '保持低位，慢慢观察', effects: { exp: 30, hp: 10 }, result: '它游了一个圈，看了你一眼，消失在蓝里。礁鲨对人类基本无视。你认识的第一条鲨鱼让你丢掉了一辈子的新闻塑造的恐惧。', tag: '+30瓶 +10精力', flag: 'met_shark' },
      { text: '退后游离', effects: { exp: 10 }, result: '它对你也没兴趣。你回到船上才发现手一直紧握着刀柄。人类的直觉在水下不总是靠谱。', tag: '+10瓶' },
      { text: '拿出相机想拍个特写', effects: { exp: 15, hp: -5, reckless: 10 }, result: '它绕了过来看你，但你闪光灯开得太亮，它瞬间加速离开。鲨鱼不怕人，怕你的反应。', tag: '+10鲁莽' },
    ]
  },
  {
    id: 'freeflow', cert: { min: 1 },
    title: '-- 二级头自由流 --', creature: 'warning', flavor: '"气泡像瀑布一样"',
    text: '20米深，你的主二级头突然自由流，气像喷泉一样全部往外喷。你还剩大约110bar。',
    choices: [
      { text: '切换到备用二级头，维持正常呼吸', effects: { exp: 30, hp: -5 }, result: '你切到备用后平静地示意潜伴，两人一起慢慢上升做安全停留。AOW课上练过的场景第一次真的用上。', tag: '+30瓶', flag: 'kept_calm' },
      { text: '摇潜伴示意共享气源', effects: { exp: 25, connections: 10 }, result: '潜伴立刻递来备用头。两人抱着慢慢上升。水下的求助不丢人，迟疑才是。', tag: '+25瓶 +10口碑' },
      { text: '慌张往上冲', effects: { exp: 5, hp: -30, reckless: 25 }, result: '你违反了每分钟18米的上升速度。水面后你耳鸣一整天。紧急上升是绝对最后选项，不是反射动作。', tag: '-30精力 +25鲁莽' },
    ]
  },
  {
    id: 'thermocline', cert: { min: 1 },
    title: '-- 温跃层 --', creature: 'jelly', flavor: '"水忽然变成果冻"',
    text: '下潜到18米，水温骤降6度。身体一紧，你的湿衣根本不够。眼前开始漂一团团月水母。',
    choices: [
      { text: '慢慢适应，继续下潜', effects: { exp: 20, hp: -10 }, result: '温度让你清醒，月水母在你周围慢慢漂。你看到了一个温度之下的另一个世界。冷是入场费。', tag: '+20瓶 -10精力' },
      { text: '上升回温水层', effects: { exp: 10, hp: 5 }, result: '你回到浅水。那次你错过了温跃层以下的风光，但你知道了自己装备的极限。没事，下次带厚的。', tag: '+10瓶' },
      { text: '伸手触碰月水母', effects: { exp: 5, hp: -20, reckless: 10 }, result: '触须划过你手背，一道红痕浮起。月水母毒性轻微但真不舒服。海洋生物看起来漂亮的，很多不欢迎触摸。', tag: '-20精力 +10鲁莽' },
    ]
  },
  {
    id: 'wreck_peek', cert: { min: 1 },
    title: '-- 沉船之缘 --', creature: 'wreck', flavor: '"SS Thistlegorm"',
    text: '红海二战沉船，完整保留着一船摩托和弹药。潜导说：只外部观察，不进入，AOW资格不含沉船穿透。',
    choices: [
      { text: '尊重规则，环绕外部拍摄', effects: { exp: 25, connections: 5 }, result: '船舷长着海扇和小海葵，锈迹斑斑的甲板上有一辆倾斜的摩托。你拍了一辈子难忘的侧影。', tag: '+25瓶' },
      { text: '偷偷往船舱里游一小段', effects: { exp: 15, hp: -10, reckless: 20, connections: -5 }, result: '你在一个通道里找到了一堆靴子，但光线暗了回头时有点慌。潜导没看见，但你知道自己做了什么。', tag: '+20鲁莽 -5口碑' },
      { text: '约潜导报名专门的沉船课程', effects: { exp: 10, money: -20 }, result: '你花200刀报了Wreck Specialty，两天后合法地进入了船舱。规则是给不会违规的人用的。', tag: '-20储蓄', item: '沉船专长证书' },
    ]
  },
  {
    id: 'pee_moment', cert: { min: 1 },
    title: '-- 水下尿意 --', creature: 'bubbleart', flavor: '"所有潜水员的秘密"',
    text: '25米下你突然尿急。冷水作怪，身体反应真实到让你分神。你知道这是所有潜水员都要面对的时刻。',
    choices: [
      { text: '就地解决，继续欣赏潜点', effects: { exp: 15, hp: 5 }, result: '温暖的小感觉。你假装非常专注地看着一块海绵。没人知道，大家都这样。人类终于可以原谅自己一件事。', tag: '+15瓶' },
      { text: '憋着，赶紧上浮', effects: { exp: 5, hp: -10, reckless: 5 }, result: '你升得太快，耳压倒灌。憋尿带来的紧张让你动作变形。潜水员的身体诚实得很。', tag: '-10精力' },
      { text: '示意潜伴提前结束', effects: { exp: 10, connections: -5 }, result: '潜伴很困惑，以为你出事了。回船上你尴尬地解释。下次不要再憋着了。', tag: '+10瓶 -5口碑' },
    ]
  },
  {
    id: 'buddy_separate', cert: { min: 1 },
    title: '-- 潜伴走失 --', creature: 'warning', flavor: '"身后空了"',
    text: '你回头发现潜伴不见了。能见度15米，但他刚才还在。你看了下表：22米，已在底部15分钟。',
    choices: [
      { text: '原地环绕搜寻1分钟后上升', effects: { exp: 25, connections: 10 }, result: '标准程序：水下找1分钟，找不到就上浮。你到水面才发现他的SMB飘在80米外。你们微笑拍了下掌。', tag: '+25瓶 +10口碑' },
      { text: '沿方向一路找过去', effects: { exp: 10, hp: -15, reckless: 15 }, result: '你游了8分钟没找到，气量告急。回水面才发现他已经在船上等你20分钟了。擅自脱队比走丢更危险。', tag: '+15鲁莽' },
      { text: '立刻上浮等水面', effects: { exp: 15, connections: 5 }, result: '水面集合比水下干着急靠谱。你们在水面花了10分钟重新对齐节奏。', tag: '+15瓶' },
    ]
  },
  {
    id: 'nudibranch_find', cert: { min: 1 },
    title: '-- 微距秘境 --', creature: 'nudibranch', flavor: '"一只 Pikachu 裸鳃"',
    text: '菲律宾 Anilao，14米深度。你在一块海绵上发现了一只手指甲盖大的 Pikachu 裸鳃——黄身黑耳，清晰得像动画里走出来。',
    choices: [
      { text: '慢下来，微距构图3分钟', effects: { exp: 30, connections: 10, money: 5 }, result: '你拍到了完美的正面照。潜导在船上感叹："这种运气，别人来十次都遇不到。"', tag: '+30瓶 +10口碑', item: 'Pikachu 裸鳃原图' },
      { text: '拍两张就继续游', effects: { exp: 15 }, result: '你拍了两张模糊的照片，继续找下一个主角。微距潜水的节奏你还没找到。', tag: '+15瓶' },
      { text: '招呼潜伴过来一起看', effects: { exp: 25, connections: 15 }, result: '潜伴举起他的摄影灯帮你补光。两人合作拍出了一张杂志级的片子。独乐乐不如众乐乐。', tag: '+25瓶 +15口碑' },
    ]
  },

  // ========== Rescue 阶段 (cert 2-3) ==========
  {
    id: 'panicked_diver', cert: { min: 2 },
    title: '-- 惊恐潜伴 --', creature: 'diver', flavor: '"他的眼睛变圆了"',
    text: '水下18米，一个刚结婚没多久来度蜜月的新手潜水员朝你游来，面镜进水，手势混乱，呼吸急促。典型惊恐前兆。',
    choices: [
      { text: '握住他BCD，保持眼神接触，让他先稳住呼吸', effects: { exp: 30, hp: -10, connections: 15 }, result: '你用"放慢呼吸"的手势连续做了十秒。他的眼神慢慢聚焦。你一起慢慢上升做安全停留。他老婆在船上哭着谢你。', tag: '+30瓶 +15口碑', flag: 'rescued_diver' },
      { text: '立刻带他紧急上升', effects: { exp: 15, hp: -15, reckless: 15 }, result: '你违反了上升速度，他上水面后耳压受损。紧急上升在真正紧急时才启动，他当时还没到那个点。', tag: '+15鲁莽 -15精力' },
      { text: '示意其他潜导来处理', effects: { exp: 10, connections: -5 }, result: '潜导赶过来时他已经冷静下来。但你错过了一次把课堂学的救援真用上的机会。', tag: '+10瓶 -5口碑' },
    ]
  },
  {
    id: 'rescue_course', cert: { min: 2 },
    title: '-- 救援课地狱日 --', creature: 'warning', flavor: '"最累的一天"',
    text: 'Rescue Diver 课最后一天。教练让你从水面拖一个"无反应"的潜伴50米到船边，上船前给他人工呼吸。连续三次。你的手臂在抖。',
    choices: [
      { text: '咬牙完成三次', effects: { exp: 40, hp: -35, connections: 10 }, result: '第三次你差点憋不住哭。教练说了一句让你记一辈子的话："救援的本质不是勇敢，是明知道很难但你还是去做。"', tag: '+40瓶 -35精力', item: 'Rescue 证书', flag: 'rescue_complete' },
      { text: '第二次后提出改日再试', effects: { exp: 15, hp: 10, connections: -10 }, result: '教练同意了但你知道自己没把关过去。第二天你重来，但那一下的"放弃"你记了很久。', tag: '+15瓶' },
      { text: '假装做完但偷懒几个动作', effects: { exp: 5, reckless: 20, connections: -20 }, result: '教练一眼看穿了你。他说："真的救援不会给你第二次机会。"你被延期。那天晚上你在民宿楼顶看了很久海。', tag: '+20鲁莽 -20口碑' },
    ]
  },
  {
    id: 'out_of_air', cert: { min: 2 },
    title: '-- 无气危机 --', creature: 'tank', flavor: '"你瞄了眼表：0bar"',
    text: '潜伴突然猛力抓你的手臂——他的气量表显示0bar，二级头完全没压力。他面色青白。你还有90bar。',
    choices: [
      { text: '递他备用二级头，维持节奏慢慢上升', effects: { exp: 35, hp: -5, connections: 20 }, result: '你们一起做了完整的安全停留。水面他一直感谢你。他忘了看表，你没忘。救援技术和救援本能是两回事。', tag: '+35瓶 +20口碑', flag: 'saved_life' },
      { text: '带他一起冲水面，来不及了', effects: { exp: 15, hp: -25, reckless: 20 }, result: '两个人上得太快，他出现了DCS前兆。你们被送进高压舱。他没事，但那一夜你没睡。', tag: '-25精力 +20鲁莽' },
      { text: '自己把备用递给他，自己屏息上升', effects: { exp: 20, hp: -30 }, result: '你屏息上升有气胸风险。勉强到水面，你们都活着但你身体付了代价。双人共气是正规操作，英雄主义在水下是负资产。', tag: '-30精力' },
    ]
  },
  {
    id: 'stuck_fishing_line', cert: { min: 2 },
    title: '-- 缠绕之劫 --', creature: 'warning', flavor: '"渔网和鱼线"',
    text: '你在礁石边被一段废弃渔线缠住了脚蹼。你越动缠得越紧。气还剩120bar。',
    choices: [
      { text: '不动，抽出潜水刀慢慢切', effects: { exp: 30, hp: -5 }, result: '三分钟精准切割后你自由了。潜水刀不是武器，是你带上去的那个"还有办法"。', tag: '+30瓶', item: '割过渔线的刀' },
      { text: '使劲挣扎想踢脱', effects: { exp: 5, hp: -25, reckless: 20 }, result: '越挣扎渔线越勒。最后潜伴赶来帮你割开，你气量也已经70bar。挣扎是水下最差的策略。', tag: '-25精力 +20鲁莽' },
      { text: '示意潜伴过来帮忙', effects: { exp: 25, connections: 10 }, result: '潜伴过来冷静地帮你割。你记下了一个教训：求助比硬扛强。', tag: '+25瓶 +10口碑' },
    ]
  },
  {
    id: 'cold_end', cert: { min: 2 },
    title: '-- 冷水冲击 --', creature: 'ice', flavor: '"冰岛 Silfra"',
    text: '冰岛 Silfra，水温2度。你穿着干衣，结果连接点漏水，冷水从颈口灌进去。还有20分钟潜程。',
    choices: [
      { text: '示意结束潜水，安全上来', effects: { exp: 15, hp: -10, money: -10 }, result: '你放弃了这次潜水。回到岸上老板帮你换了新干衣，但你错过了两大陆板块间的那个通道。健康第一。', tag: '-10精力 -10储蓄' },
      { text: '咬牙坚持走完既定路线', effects: { exp: 25, hp: -30, reckless: 15 }, result: '你坚持走完了，看到了那条让人说不出话的通道。回到岸上你发烧了三天。风景有代价。', tag: '+25瓶 -30精力 +15鲁莽' },
      { text: '切短路线只看核心段', effects: { exp: 25, hp: -15, connections: 10 }, result: '潜导调整了路线，你看到了最经典的15米通道。折中是成年人的技能。', tag: '+25瓶 +10口碑', item: '板块交界纪念' },
    ]
  },
  {
    id: 'boat_ascent', cert: { min: 2 },
    title: '-- 水面惊浪 --', creature: 'diver', flavor: '"船在10米外起伏"',
    text: '出水时海浪从一米涨到两米。船来接你时摆动幅度很大，接梯子的时候有被砸到头的风险。',
    choices: [
      { text: '在水面漂浮，等船靠稳再上', effects: { exp: 20, hp: -5, connections: 5 }, result: '你等了两分钟，船长找到角度靠过来。你稳稳上船。不着急的水面比着急的船梯安全。', tag: '+20瓶' },
      { text: '奋力游过去抓住梯子', effects: { exp: 10, hp: -20, reckless: 15 }, result: '你被浪推得撞了一下船体，肩膀撞青。惯性和运气不是同一件事。', tag: '-20精力 +15鲁莽' },
      { text: '扔出SMB让船找你，然后等', effects: { exp: 25 }, result: '船长看到SMB调整了角度。流程是给有用的事准备的工具。', tag: '+25瓶' },
    ]
  },
  {
    id: 'ndl_pressure', cert: { min: 2 },
    title: '-- NDL警告 --', creature: 'warning', flavor: '"电脑表闪红"',
    text: '你下到28米，NDL剩2分钟就要掉进减压模式。但眼前10米处，一群锤头鲨正在从远处游来。',
    choices: [
      { text: '立刻上升到20米，从上方观察', effects: { exp: 30, connections: 10 }, result: '你往上升8米，刚好看到整个锤头鲨群的迁徙路径。20米看锤头鲨比28米更震撼。规则不会毁掉好风景。', tag: '+30瓶 +10口碑' },
      { text: '赌一把多留30秒再走', effects: { exp: 15, hp: -10, reckless: 20 }, result: '你留了40秒，NDL归零需要做3分钟减压停留。气量勉强够。锤头鲨的确震撼，但代价你已经付过一次了。', tag: '+20鲁莽' },
      { text: '冷静上升，即使错过', effects: { exp: 20, hp: 5 }, result: '你准时上升。锤头鲨已经走远，但你还活着完整。在深处的克制比在浅处的胆大更重要。', tag: '+20瓶' },
    ]
  },

  // ========== Divemaster 阶段 (cert 3-4) ==========
  {
    id: 'dm_course', cert: { min: 2 },
    title: '-- 潜导实习 --', creature: 'diver', flavor: '"你负责带这四个人"',
    text: '你第一次以DM身份带队。四个客人，背景各异：一个老潜手，一个新AOW，一个刚考完OW的大学生，一个只潜过两次的伴侣客人。流有点大。',
    choices: [
      { text: '重新安排route，保护最弱的那个', effects: { exp: 30, connections: 15 }, result: '你把深度降到18米，路径改到背流侧。大家都潜到了，客人开心，潜店老板点点头。DM首要不是展示，是保证每个人都能上来。', tag: '+30瓶 +15口碑', flag: 'good_dm' },
      { text: '按原计划走，让弱者自己跟上', effects: { exp: 10, connections: -10, hp: -10 }, result: '那个伴侣客人气用到60bar就脱队紧张了，你回头救援。老潜水员看了你一眼，没说话。你知道你做错了。', tag: '-10口碑' },
      { text: '水面先给所有人讲清楚应急信号', effects: { exp: 25, connections: 10 }, result: '水面5分钟brief换来水下零情况。客人评价你是"讲得最清楚的那个潜导"。DM的一半工作在水面。', tag: '+25瓶 +10口碑' },
    ]
  },
  {
    id: 'dive_guide_tip', cert: { min: 3 },
    title: '-- 潜导小费 --', creature: 'coral', flavor: '"小费文化"',
    text: '一个欧美客人潜完给你塞了一张100美元。这是你这周的第二笔小费，加起来比你的工资还多。旁边中国客人看着有些别扭。',
    choices: [
      { text: '收下，告诉他感谢并说明文化差异', effects: { exp: 15, money: 40, connections: 10 }, result: '你自然地接过，并在休息时跟中国客人聊了下潜水小费的行业惯例。坦诚比回避舒服。', tag: '+40储蓄 +10口碑' },
      { text: '婉拒不收', effects: { exp: 5, money: 0, connections: 5 }, result: '他有些尴尬。潜店老板事后跟你说："小费是对服务的认可，不是施舍。你那么做对我们整个店不是好事。"', tag: '+5口碑' },
      { text: '收下但对中国客人说"这是外国习俗"', effects: { exp: 10, money: 40, connections: -5 }, result: '话说得有点生硬。不是所有外国的都不适用国内。你后来反思这句话让场合变尴尬了。', tag: '+40储蓄 -5口碑' },
    ]
  },
  {
    id: 'greenhorn_diver', cert: { min: 3 },
    title: '-- 新手下沉失控 --', creature: 'diver', flavor: '"配重过重"',
    text: '带的一个新OW客人下潜时直接砸到24米深的沙底，扬起大片沙云。你能看到她的配重过重，而且她显然慌了。',
    choices: [
      { text: '立刻下去抓住她，帮她充BCD恢复浮力', effects: { exp: 30, connections: 15, hp: -10 }, result: '你冲下去，拽她回到正常深度，示意她慢慢呼吸。她上水后哭了半小时然后谢了你一小时。你知道你救了她这辈子的潜水爱好。', tag: '+30瓶 +15口碑', flag: 'great_dm' },
      { text: '先示意其他人原地等，再下去救', effects: { exp: 35, connections: 20 }, result: '你保持了整组的秩序，救援动作干净利落。这是"领导力"和"技术"的结合。', tag: '+35瓶 +20口碑' },
      { text: '示意她自己用BCD上浮', effects: { exp: 5, connections: -15, hp: -15 }, result: '她太慌根本不会操作。最后潜导过来帮你处理。你没有抓到领队的第一要义：判断客人能不能自救。', tag: '-15口碑' },
    ]
  },
  {
    id: 'boat_politics', cert: { min: 3 },
    title: '-- 潜店派系 --', creature: 'coral', flavor: '"老派 vs 新派"',
    text: '潜店老板和二哥（dm头）因为招新DM的标准吵了起来。老板想要快，二哥坚持质量。两人都在背地里拉你站队。',
    choices: [
      { text: '只关注手上客人，不掺和', effects: { exp: 15, connections: 0 }, result: '你保持中立做好本职。半年后你成为两边都愿意配合的那个人。水下可以分两组，店里不能分两派。', tag: '+15瓶' },
      { text: '站老板，帮他面试快速招人', effects: { exp: 10, money: 10, connections: -10 }, result: '老板夸你"会办事"，但二哥从此不带你跑好的潜点。短期甜头，长期代价。', tag: '-10口碑' },
      { text: '私下找二哥聊，建议一个折中方案', effects: { exp: 25, connections: 15 }, result: '你提出让二哥把关技术、老板管市场。二哥愣了一下然后去找老板谈。三个月后店里气氛好多了。', tag: '+25瓶 +15口碑' },
    ]
  },
  {
    id: 'photo_gig', cert: { min: 2 },
    title: '-- 摄影委托 --', creature: 'octopus', flavor: '"一个外国杂志联系你"',
    text: '一个海洋杂志希望你帮他们拍一期关于 Lembeh 怪奇小生物的专题。预算不高，但能上刊。',
    choices: [
      { text: '接下，全力准备两周', effects: { exp: 35, money: 30, hp: -20, connections: 15 }, result: '你带了两个微距镜头苦拍两周。选出了12张精品。杂志给你署了名。你在圈里开始有名字了。', tag: '+35瓶 +30储蓄 +15口碑', item: '杂志首作', flag: 'has_pro_cam' },
      { text: '要求提高稿费，否则不接', effects: { exp: 5, money: -5, connections: -5 }, result: '他们换了其他人。你以为"议价"是专业，但有时第一步就是交稿。', tag: '-5口碑' },
      { text: '接下但只做部分，平衡工作生活', effects: { exp: 20, money: 15, hp: -10 }, result: '你交了8张，杂志用了4张。名字上刊了。节奏稳。这比一次拼光所有体力可持续。', tag: '+20瓶 +15储蓄' },
    ]
  },
  {
    id: 'student_progress', cert: { min: 3 },
    title: '-- 带徒授课 --', creature: 'diver', flavor: '"她第一次独立完成所有技能"',
    text: '你带的一个OW学员今天完成了全部技能。她是个35岁的HR，怕水，前三天几乎每次都崩溃哭。今天她一次性过了。',
    choices: [
      { text: '给她一个真正有分量的祝贺', effects: { exp: 25, connections: 20, hp: 10 }, result: '你说了：我见过的学员里最怕水的是你，最努力的也是你。她眼圈红了。教学让你知道自己真的会了。', tag: '+25瓶 +20口碑', item: '学生的感谢卡', flag: 'has_student' },
      { text: '平淡地说"下一步"', effects: { exp: 10 }, result: '她有点失落但也习惯了。后来她换了个教练考了AOW。你可能永远不知道自己错过了什么。', tag: '+10瓶' },
      { text: '请她和另外几个学员一起吃个庆功晚餐', effects: { exp: 30, money: -15, connections: 25 }, result: '那顿饭大家聊到凌晨。她说这是她成年后最重要的一件事。五年后她带着自己的学员回来找你。教学的回流最长也最深。', tag: '+30瓶 +25口碑' },
    ]
  },

  // ========== Instructor & 技术潜水 (cert 4+) ==========
  {
    id: 'instructor_exam', cert: { min: 4 },
    title: '-- 教练考核 --', creature: 'diver', flavor: '"IE 四天连考"',
    text: 'IE 第三天的教学评估。考官在水下假装学员故意做错动作。你必须在水下识别并纠正他。',
    choices: [
      { text: '冷静观察，精准纠正一个关键错误', effects: { exp: 40, connections: 15 }, result: '你只纠正了最危险的那个动作，没有瞎挑刺。考官水面后说："你能看出哪个最重要，这就是教练了。"', tag: '+40瓶 +15口碑' },
      { text: '把他所有错误都纠正一遍', effects: { exp: 20, hp: -10, connections: -5 }, result: '你看起来手忙脚乱。考官评价："新教练最爱管的太多。优先级是教学的核心。"', tag: '+20瓶' },
      { text: '示意他上浮，在水面纠正', effects: { exp: 30, connections: 5 }, result: '稳妥做法。水上讲解更清楚。考官通过。你不是最亮眼的但是最稳的。', tag: '+30瓶 +5口碑' },
    ]
  },
  {
    id: 'deep_50m', cert: { min: 5 },
    title: '-- 50米深潜 --', creature: 'diver', flavor: '"Tec课实战"',
    text: '你做Tec 50训练潜，背双瓶+两个减压瓶。50米深度，周围颜色全灰。你能听到自己心跳和调节器的共振。',
    choices: [
      { text: '专注Plan流程，按减压表执行', effects: { exp: 45, hp: -15, connections: 15 }, result: '你完整做完了三段减压停留，总潜时70分钟。上水后整个人被洗礼了一遍。技术潜水不是冒险，是精确。', tag: '+45瓶 +15口碑', flag: 'deep_expert' },
      { text: '多往下看一眼，记住这个深度的感觉', effects: { exp: 25, hp: -25, reckless: 15 }, result: '你下到53米，回来时减压表略微混乱。教练没说什么，但你自己心里有数。技术的另一面是克制。', tag: '+15鲁莽' },
      { text: '中途上升，觉得身体不对', effects: { exp: 20, hp: 10, connections: 5 }, result: '你在45米决定上升，做完减压。后来才知道你血氧可能确实不稳定。能听见身体的信号是最底层的技术。', tag: '+20瓶' },
    ]
  },
  {
    id: 'cave_first', cert: { min: 5 },
    title: '-- 初入洞穴 --', creature: 'cenote', flavor: '"墨西哥 Cenote Dos Ojos"',
    text: 'Cenote 洞穴潜。你跟的是洞潜教练，两个人一条guideline。在黑暗里你手电的光圈就是你的世界。',
    choices: [
      { text: '手不离主线，严格遵守Thirds规则', effects: { exp: 40, hp: -10, connections: 15 }, result: '你没碰过主线，gas分配严格1/3。教练水面点头："洞潜不是勇敢的游戏，是纪律的游戏。"', tag: '+40瓶 +15口碑', flag: 'cave_certified' },
      { text: '好奇想看一眼侧支通道', effects: { exp: 10, hp: -20, reckless: 30 }, result: '你偏离主线不到3米发现又回不去了。教练拉你回来。洞穴里3米的误差就是永远的误差。', tag: '+30鲁莽 -20精力' },
      { text: '中途感觉不舒服立即回头', effects: { exp: 30, hp: 5 }, result: '你选择退出。教练夸你："洞潜员的金牌不是进去过多深，是知道什么时候出来。"', tag: '+30瓶' },
    ]
  },
  {
    id: 'decompression', cert: { min: 5 },
    title: '-- 减压停留 --', creature: 'diver', flavor: '"挂在9米线上25分钟"',
    text: '深潜后你必须在9米挂线做25分钟减压。流还不小，你觉得脚踝酸，面镜里的计时器走得像蜗牛。',
    choices: [
      { text: '耐住，做呼吸节奏练习', effects: { exp: 35, hp: 5 }, result: '你把25分钟当冥想。出水时身体反而更放松。减压停留教你的不是算表，是等。', tag: '+35瓶' },
      { text: '偷偷上升一两米减轻流的影响', effects: { exp: 10, hp: -20, reckless: 25 }, result: '你上升两米，减压模型被打乱。出水后膝盖有点麻。DCS 从来不讲"差一点"。', tag: '+25鲁莽 -20精力' },
      { text: '改用放射状漂浮，减少阻力', effects: { exp: 30 }, result: '你放平身体让流带着你在等距原地漂浮。聪明比硬扛重要。', tag: '+30瓶' },
    ]
  },

  // ========== 通用事件（跨阶段）==========
  {
    id: 'dive_insurance', cert: { min: 1 },
    title: '-- 保险这回事 --', creature: 'warning', flavor: '"DAN 会员费"',
    text: '朋友介绍了DAN（潜水者警报网络）的保险。一年300块，包括高压舱费用。你想想最近连续潜几次都没事。',
    choices: [
      { text: '果断续费买一年', effects: { exp: 10, money: -20, hp: 5 }, result: '你买了。没用上。但那种"万一有事有人兜"的心安，本身就是装备的一部分。', tag: '-20储蓄', item: 'DAN 会员卡' },
      { text: '不买，省下的钱买支好手电', effects: { exp: 5, money: 0, reckless: 5 }, result: '手电确实好用。但你没想过，一次DCS高压舱费用是一万。', tag: '+5鲁莽' },
      { text: '先买半年体验', effects: { exp: 5, money: -10 }, result: '你买了半年。想着到期看情况续。这是潜水生涯的第一笔"保险意识支出"。', tag: '-10储蓄' },
    ]
  },
  {
    id: 'flight_too_soon', cert: { min: 1 },
    title: '-- 潜后飞机 --', creature: 'warning', flavor: '"最后一潜后 12 小时"',
    text: '你刚潜完三天最后一潜，12小时后的航班已订。按规范应该24小时后飞。改签费500块。',
    choices: [
      { text: '改签24小时后的航班', effects: { exp: 15, money: -20, hp: 10 }, result: '你在潜店多住了一天，喝了水写了日志。下一班飞机平稳。500块买一份身体的保险。', tag: '-20储蓄' },
      { text: '坚持按原班走', effects: { exp: 5, hp: -25, reckless: 25 }, result: '飞机爬升时你感觉耳朵不对，落地后头疼了三天。规范不是吓唬人的。', tag: '-25精力 +25鲁莽' },
      { text: '只做浅潜最后一天', effects: { exp: 10, money: -5 }, result: '你把最后一天改成浮潜。机上身体没事。折中有时候是最聪明的工程。', tag: '+10瓶' },
    ]
  },
  {
    id: 'gear_upgrade', cert: { min: 1 },
    title: '-- 装备升级 --', creature: 'tank', flavor: '"新调节器入手"',
    text: '你用了两年的入门款调节器开始漏气。换新的有两个选择：中端Mares £400，或者Top端Scubapro £900。',
    choices: [
      { text: '上Scubapro顶配，一步到位', effects: { exp: 10, money: -50, connections: 5 }, result: '你在真刀真枪的冷水潜点才发现这钱没白花。装备是你和水的唯一介质。', tag: '-50储蓄', item: 'Scubapro MK25' },
      { text: '中端够用，剩下的钱去潜下个潜点', effects: { exp: 20, money: -20 }, result: '你买了Mares，剩下的钱去了帕劳。经历比装备更便宜，也更贵。', tag: '+20瓶 -20储蓄' },
      { text: '闲鱼二手顶配Scubapro', effects: { exp: 15, money: -30, reckless: 10 }, result: '你500块搞到顶配，但调节器在第三次潜水时出状况。二手装备的省是借的，迟早要还。', tag: '+10鲁莽' },
    ]
  },
  {
    id: 'diving_couple', cert: { min: 1 },
    title: '-- 潜水恋情 --', creature: 'turtle', flavor: '"她看鱼比看你仔细"',
    text: '潜店里有个女孩总和你一起潜。你发现你喜欢她，她好像也喜欢你。但你们都住不同城市。',
    choices: [
      { text: '开诚布公约她以后一起潜', effects: { exp: 20, connections: 15, money: -10 }, result: '她也想。你们约好了半年一次长途潜行。水下能默契配合的人，地上多半也能。', tag: '+15口碑 -10储蓄', item: '共潜合照' },
      { text: '只做潜水搭子，别想太多', effects: { exp: 10, connections: 5 }, result: '两年后你们还是潜水搭子，但谁都知道如果那天你说了点什么，生活可能长别的样子。', tag: '+10瓶' },
      { text: '强行表白，推进关系', effects: { exp: 5, connections: -5 }, result: '她答应了但一个月后分手。潜水的节奏和恋爱的节奏不是一回事。', tag: '+5瓶 -5口碑' },
    ]
  },
  {
    id: 'instructor_ethics', cert: { min: 2 },
    title: '-- 教练作弊 --', creature: 'warning', flavor: '"你发现了"',
    text: '你认识的一个教练为了多收学员，让完全没达标的人过了OW考试。学员已经开始约着自由潜去真正深的潜点。',
    choices: [
      { text: '直接找PADI机构举报', effects: { exp: 25, connections: -15, hp: -10 }, result: '调查开始。那个教练被停权。圈里有人骂你多管闲事。但三个月后那学员没出事。有些正义要付代价。', tag: '+25瓶 -15口碑', flag: 'whistleblower' },
      { text: '私下找他谈，让他给学员补课', effects: { exp: 20, connections: 10 }, result: '他接受了。学员重新补训。事情没闹大，但两人各自心里清楚。', tag: '+20瓶 +10口碑' },
      { text: '装作不知道，这不关我事', effects: { exp: 0, reckless: 15 }, result: '三个月后那学员在自由潜时出了事。消息传来那晚你没睡。不说出来的代价可能是别人的命。', tag: '+15鲁莽' },
    ]
  },
  {
    id: 'marine_cleanup', cert: { min: 1 },
    title: '-- 海底清理 --', creature: 'warning', flavor: '"渔网一块儿"',
    text: '潜店组织海洋清理，志愿者。一整天把一片礁石上缠绕多年的废弃渔网清理干净。你本来约了客人赚钱的一天。',
    choices: [
      { text: '推掉客人，去清理', effects: { exp: 20, connections: 20, money: -30, hp: -15 }, result: '一天下来你清理了两百米渔网，救出三只海龟。你赚了不到一半的钱，得到了很难用灵石衡量的东西。', tag: '+20瓶 +20口碑 -30储蓄', item: '海龟纪念照', flag: 'conservationist' },
      { text: '挣钱要紧，继续带客人', effects: { exp: 15, money: 30 }, result: '你赚到了那天的钱。但晚上朋友圈看志愿者们的照片，心里空了一块。', tag: '+15瓶 +30储蓄' },
      { text: '上午清理，下午带客人', effects: { exp: 25, money: 10, connections: 15 }, result: '一天折半。你把客人也劝说去捡了半小时垃圾。带潜和保护不矛盾。', tag: '+25瓶 +15口碑 +10储蓄' },
    ]
  },
  {
    id: 'whale_song', cert: { min: 2 },
    title: '-- 座头鲸歌 --', creature: 'whale', flavor: '"汤加八月"',
    text: '汤加，你和一只母座头鲸与她的幼崽漂浮在8米深度。母鲸唱歌，你身体都在震动。幼鲸游过来离你2米停下，眼睛看着你。',
    choices: [
      { text: '保持完全静止，让它们决定距离', effects: { exp: 50, hp: 30, connections: 10 }, result: '母鲸唱了20分钟。幼鲸绕着你慢慢游了三圈。你没拍照，只是看着。有些瞬间是用来活过的，不是拍下的。', tag: '+50瓶 +30精力', item: '鲸歌记忆', flag: 'whale_encounter' },
      { text: '轻轻后退一点', effects: { exp: 30, connections: 5 }, result: '幼鲸跟上你，母鲸隔着几米观察。你退一步反而让她们更信任你。', tag: '+30瓶' },
      { text: '拿出相机抓拍', effects: { exp: 20, money: 20, connections: -5 }, result: '你拍到了好照片。但母鲸感到威胁把幼鲸带走了。后来你把相机收了一整天。', tag: '+20储蓄 -5口碑' },
    ]
  },
  {
    id: 'sipadan_permit', cert: { min: 2 },
    title: '-- 诗巴丹抽签 --', creature: 'turtle', flavor: '"120张，你抢到了"',
    text: '诗巴丹每天只发120张潜水证。你排了一年终于抽到三天。结果朋友有事临时想转让你的一天。',
    choices: [
      { text: '坚决自己用完三天', effects: { exp: 40, hp: -15, connections: 5 }, result: '三天里你看完了所有经典点：海狼风暴、海龟飘墓、锤头鲨群。值回你抢了一年的所有念想。', tag: '+40瓶', item: '诗巴丹勋章' },
      { text: '让一天给朋友', effects: { exp: 30, connections: 25 }, result: '朋友感激到吃饭抢着付钱。你两天看了最核心风光。人情有时候比天数值。', tag: '+30瓶 +25口碑' },
      { text: '转让一天换钱', effects: { exp: 25, money: 40, connections: -10 }, result: '你转了一天赚了400刀。剩下两天好好潜了，但朋友圈里没人恭喜你，大家知道你转卖证书。', tag: '+25瓶 +40储蓄 -10口碑' },
    ]
  },
  {
    id: 'dangerous_creature', cert: { min: 2 },
    title: '-- 蓝环章鱼 --', creature: 'octopus', flavor: '"一秒钟的判断"',
    text: '沙地上一只蓝色圆环在小生物背上亮起来——是蓝环章鱼，剧毒无解药。它距你左手腕10厘米。',
    choices: [
      { text: '极慢收回手，慢慢后退', effects: { exp: 35, hp: 5, connections: 10 }, result: '你每个动作像在做慢镜头。它没出击。后来你在网上查到：蓝环很少攻击，但不触发的前提是你不触发它。', tag: '+35瓶 +10口碑' },
      { text: '猛退', effects: { exp: 10, hp: -10 }, result: '猛退带起沙子，它防御性闪烁。你离得够远没事，但慢动作比快反应安全。', tag: '+10瓶 -10精力' },
      { text: '想把它赶走用的是指棍', effects: { exp: 0, hp: -40, reckless: 40 }, result: '它咬了你的手腕内侧。你距船还有300米。那一天你差点没回来。你从此知道敬畏这个词不是情绪。', tag: '-40精力 +40鲁莽' },
    ]
  },
  {
    id: 'body_health', cert: { min: 2 },
    title: '-- 耳部体检 --', creature: 'warning', flavor: '"耳朵好像不太对"',
    text: '你注意到最近两个月你右耳有轻微持续耳鸣。一查Google 差点把自己吓死。',
    choices: [
      { text: '立刻停潜，去耳鼻喉科专科检查', effects: { exp: 15, money: -30, hp: 20 }, result: '医生说是早期炎症，按时吃药三周就好。你停了一个月潜水但保住了未来五十年。听身体的信号，别听网页。', tag: '-30储蓄 +20精力', item: '耳科处方' },
      { text: '继续潜，吃点感冒药顶着', effects: { exp: 10, hp: -30, reckless: 25 }, result: '三个月后右耳听力下降20%。你开始后悔那时候的拖。身体的信号不会自己消失。', tag: '-30精力 +25鲁莽' },
      { text: '减少深度到8米以下继续潜', effects: { exp: 10, hp: -5 }, result: '你做了两个月浅潜。耳鸣没消除也没恶化。但你心里那道梗一直在。拖延不是解决。', tag: '+10瓶' },
    ]
  },
  {
    id: 'family_pressure', cert: { min: 2 },
    title: '-- 家人反对 --', creature: 'warning', flavor: '"妈妈的电话"',
    text: '你妈在电话里哭：你要再这么往深了潜我跟你爸晚上都睡不好。她发来一堆潜水事故新闻。',
    choices: [
      { text: '回家一趟，带她看你的装备和潜水日志', effects: { exp: 10, connections: 15, hp: 10 }, result: '她摸你的BCD，翻你的日志。她没说完全理解，但她说："你做这件事的时候眼睛是亮的。"她后来不再打那些电话。', tag: '+15口碑 +10精力', item: '妈妈的BCD合照' },
      { text: '答应她减少频率', effects: { exp: 5, hp: 5 }, result: '你说"下个月不去了"，其实去了。她后来发现，你们的关系有了一道隐形的裂痕。', tag: '+5瓶' },
      { text: '跟她解释安全数据', effects: { exp: 10, connections: 5, hp: -5 }, result: '你发了PADI的事故率对比。她没看。她要的不是数据，是你坐在她旁边。', tag: '+10瓶' },
    ]
  },
  {
    id: 'open_shop', cert: { min: 4 },
    title: '-- 开店之念 --', creature: 'wreck', flavor: '"东山岛的一间店面"',
    text: '朋友找你合伙开潜店。他出资40万，你出15万+技术，五五分。位置在东山岛，三年回本预估。',
    choices: [
      { text: '合伙入股', effects: { exp: 30, money: -80, connections: 20, hp: -15 }, result: '你半年后搬到东山岛，两年店里开始盈利。你第一次"为自己的水"工作。', tag: '+30瓶 -80储蓄 +20口碑', flag: 'shop_owner' },
      { text: '拒绝，继续做自由教练', effects: { exp: 15, money: 10, connections: 5 }, result: '你保住了自由，也错过了那个财务台阶。稳定有稳定的代价。', tag: '+15瓶' },
      { text: '做小股东，只出小钱不参与经营', effects: { exp: 20, money: -30, connections: 10 }, result: '你投了15万不操心日常。五年后每年分红3万。小股东是中年人的聪明。', tag: '-30储蓄' },
    ]
  },
  {
    id: 'night_boat_ride', cert: { min: 2 },
    title: '-- 归航夜谈 --', creature: 'diver', flavor: '"船头摇晃的两小时"',
    text: '印尼潜完四潜回潜店的船上，两小时夜路。船头全黑，只有机油味和星空。和一个老潜水员并肩坐着。',
    choices: [
      { text: '听他讲故事，不打断', effects: { exp: 25, hp: 15, connections: 15 }, result: '他讲了三个潜水员是怎么死的，讲得很平静。他说："每一次活着回来都不是理所当然。"你记了一辈子。', tag: '+25瓶 +15口碑', item: '老潜水员的烟' },
      { text: '拿出手机看微信', effects: { exp: 5, hp: 5 }, result: '两小时过去了。你看了200条消息，错过了一次真正的对话。', tag: '+5瓶' },
      { text: '主动聊自己潜水的故事', effects: { exp: 15, connections: 10 }, result: '你们轮流讲。他夸你年纪轻轻经历不错。但你知道他的故事你才讲了一半。', tag: '+15瓶 +10口碑' },
    ]
  },
  {
    id: 'chinese_guide_shortage', cert: { min: 3 },
    title: '-- 回国带队 --', creature: 'diver', flavor: '"中文潜导缺口"',
    text: '国内潜水市场井喷，但合格的中文DM稀缺。一个潜水机构邀你回国带队，年薪30万，比海外高30%，但潜点一般。',
    choices: [
      { text: '回国带队一年', effects: { exp: 25, money: 50, hp: -10, connections: 20 }, result: '你一年带了400个中国潜水员入门。自己的潜水量少了但你看到一批新潜水员慢慢长出来。这是另一种满足。', tag: '+50储蓄 +20口碑', flag: 'came_back' },
      { text: '继续海外，拒绝', effects: { exp: 20, money: 10 }, result: '你留在了海外。职业潜水员的黄金岁月多潜就是多赚。', tag: '+20瓶 +10储蓄' },
      { text: '折中：假期回国带几周', effects: { exp: 15, money: 15, connections: 10 }, result: '你每年两次回国带高阶工作坊。保持海外节奏也不丢国内脉络。', tag: '+15瓶 +15储蓄' },
    ]
  },
  {
    id: 'bad_students', cert: { min: 3 },
    title: '-- 不合格学员 --', creature: 'warning', flavor: '"他真的不应该下水"',
    text: '一个报了OW的学员体能和心理素质都明显达不到。你如果让他过，他有很大概率在未来某次真潜水里出事。',
    choices: [
      { text: '直接告诉他不能通过，退费', effects: { exp: 25, money: -30, connections: 10, hp: -10 }, result: '他很愤怒，投诉了你。但半年后他感谢你让他知道自己不适合。你的饭碗没丢，你的signature值钱。', tag: '-30储蓄 +10口碑' },
      { text: '让他通过，反正不是你带他以后的潜', effects: { exp: 5, money: 20, reckless: 25 }, result: '你签了他的证。那天晚上你睡不着。教练的签名是一份终身责任。', tag: '+20储蓄 +25鲁莽' },
      { text: '让他重修并推荐更适合的 course 比如浮潜', effects: { exp: 30, connections: 15 }, result: '他最后选了浮潜课。你们变成朋友。有时候拒绝是最大的帮助。', tag: '+30瓶 +15口碑' },
    ]
  },
  {
    id: 'technology_debate', cert: { min: 2 },
    title: '-- AI 装备 --', creature: 'compass', flavor: '"带AI的潜水电脑"',
    text: '新出了一款AI潜水电脑，号称能预测你的风险实时警告。潜店群里吵成两派：传统派说不要过度依赖算法，新派说不用就是抗拒科技。',
    choices: [
      { text: '买来试试，但不放弃基本功', effects: { exp: 25, money: -30 }, result: '你用了半年，AI警告准确性60%，但它提醒了你两次你自己会忽略的深度偏移。科技是工具，判断是你自己。', tag: '+25瓶 -30储蓄', item: 'AI 潜水电脑' },
      { text: '完全不用，相信自己和潜水表', effects: { exp: 10, money: 0 }, result: '你保留了老派的自觉性。几年后你发现AI潜水员和你潜水的下一代真的不太一样了。', tag: '+10瓶' },
      { text: '完全依赖AI提醒', effects: { exp: 5, hp: -15, reckless: 15 }, result: '一次AI故障你没看表差点超NDL。技术让人懒，而水下不允许你懒。', tag: '+15鲁莽' },
    ]
  },
  {
    id: 'rest_cycle', cert: { min: 2 },
    title: '-- 强制休整 --', creature: 'warning', flavor: '"连续六天四潜"',
    text: '你已经连续潜六天，每天四潜。身体开始累，昨晚半夜醒来还流了鼻血。明天还有三潜的团。',
    choices: [
      { text: '跟老板请假一天休息', effects: { exp: 10, money: -30, hp: 30 }, result: '老板不开心但让你休了一天。你在民宿躺了一整天，喝水补电解质。那天之后再潜你状态回来了。', tag: '-30储蓄 +30精力' },
      { text: '硬扛完这一轮', effects: { exp: 20, hp: -35, reckless: 20 }, result: '第三天你下到18米突然头晕。被潜伴带上水面。身体累积的债一次算清。你休了三周。', tag: '+20瓶 -35精力 +20鲁莽' },
      { text: '只带浅潜，深潜让同事代', effects: { exp: 15, money: -10, connections: 5 }, result: '你和另一个DM分工。折中有效。', tag: '+15瓶 +5口碑' },
    ]
  },
  {
    id: 'conservation_call', cert: { min: 3 },
    title: '-- 海洋NGO邀请 --', creature: 'coral', flavor: '"你愿意代言吗"',
    text: '一个海洋保护组织邀请你做代言。无偿但会上新闻。话题是珊瑚白化。',
    choices: [
      { text: '接受，认真学习珊瑚科学后再发声', effects: { exp: 30, connections: 25, hp: -10 }, result: '你花了两周读了8篇论文。上电视说的话都经得起科学推敲。你的潜水员身份里多了一层"公民科学家"。', tag: '+30瓶 +25口碑', flag: 'advocate' },
      { text: '接受但念现成稿子', effects: { exp: 10, connections: 10 }, result: '你上了新闻但没给人留下印象。浮于表面的公益是假公益。', tag: '+10瓶 +10口碑' },
      { text: '婉拒，继续埋头潜', effects: { exp: 10 }, result: '你保持了专业距离。但一年后你潜到一片全白的珊瑚礁，心里想起那个电话。', tag: '+10瓶' },
    ]
  },
  {
    id: 'lost_gear', cert: { min: 1 },
    title: '-- 水下丢东西 --', creature: 'bubbleart', flavor: '"GoPro 飘走了"',
    text: '你的GoPro从配重架上松开，漂向12米下的深蓝色。里面有你这三年最好的视频。气量还有90bar。',
    choices: [
      { text: '冷静追，但不超出NDL和深度底线', effects: { exp: 20, hp: -10 }, result: '你追到18米抓住了它。没超NDL，没超深度。但你告诉自己下次绑紧一点。', tag: '+20瓶' },
      { text: '不追了，装备没有命重要', effects: { exp: 15, money: -40 }, result: '你损失了两千块装备和三年视频。但你记住了：水下任何东西都没有自己的命重要。', tag: '-40储蓄' },
      { text: '追到底，哪怕超深度', effects: { exp: -10, hp: -30, reckless: 30 }, result: '你追到28米还没抓到。回来时你NDL超了，做了5分钟减压。装备找回来了，但代价是你身体。', tag: '-30精力 +30鲁莽' },
    ]
  },
  {
    id: 'dcs_close_call', cert: { min: 2 },
    title: '-- DCS 阴影 --', creature: 'warning', flavor: '"膝盖有点麻"',
    text: '潜完回酒店你发现膝盖有点麻，手腕也酸。不确定是DCS还是累的。你在一个偏远岛上，高压舱要飞到大岛。',
    choices: [
      { text: '立刻联系DAN，准备紧急后送', effects: { exp: 25, money: -30, hp: -10 }, result: '医生评估后你飞到大岛。高压舱治疗后完全恢复。DAN保险走了。你知道潜水员迟早要面对一次这种决定。', tag: '-30储蓄', flag: 'dcs_survivor' },
      { text: '喝水躺一晚看看', effects: { exp: 5, hp: -35, reckless: 25 }, result: '第二天麻木范围扩大了。你被紧急后送，恢复花了半年。DCS的每一小时都是代价。', tag: '-35精力 +25鲁莽' },
      { text: '呼100%纯氧观察两小时', effects: { exp: 25, hp: 10 }, result: '两小时纯氧后症状消失。你还是飞到大岛做了检查，保险起见。知道什么时候升级行动是智慧。', tag: '+25瓶' },
    ]
  },
  {
    id: 'social_media_pressure', cert: { min: 2 },
    title: '-- 小红书潜水网红 --', creature: 'diver', flavor: '"摆拍 Shot"',
    text: '你的一个同事在小红书发了一张做出危险动作的摆拍照，涨粉5k。粉丝留言都是"求教程"。你知道那个动作没那么容易重现。',
    choices: [
      { text: '在评论里技术科普，讲清楚风险', effects: { exp: 20, connections: 10 }, result: '你的长评论被底下500+点赞，成为置顶。同事没删照片但评论区理性了很多。专业的责任是说话。', tag: '+20瓶 +10口碑' },
      { text: '私下提醒他', effects: { exp: 15, connections: 5 }, result: '他接受了，以后发帖会加风险提示。当面话比公开杠更有效。', tag: '+15瓶 +5口碑' },
      { text: '跟风拍一张自己的版本', effects: { exp: 5, reckless: 20, money: 10 }, result: '你涨了一千粉。但三个月后一个模仿者出了事。你那张图你后来自己删了。', tag: '+10储蓄 +20鲁莽' },
    ]
  },
  {
    id: 'sardine_storm', cert: { min: 1 },
    title: '-- 沙丁鱼风暴 --', creature: 'fish_school', flavor: '"Moalboal 的银河"',
    text: '你漂浮在12米深度，一条由数百万条沙丁鱼组成的风暴在你周围旋转。光透过它们打出流动的纹理。你忘记呼吸了。',
    choices: [
      { text: '被动悬浮，让自己成为风暴的一部分', effects: { exp: 40, hp: 25, connections: 10 }, result: '它们绕着你形成了一个甜甜圈，持续了将近四分钟。你的所有疲惫都被洗过了一遍。', tag: '+40瓶 +25精力', item: '沙丁鱼风暴照片' },
      { text: '追着鱼群游向深处', effects: { exp: 15, hp: -10 }, result: '你追了20米发现鱼群散开了。追逐是海洋的禁忌。等待才是邀请。', tag: '+15瓶' },
      { text: '跟潜伴互相拍摄合影', effects: { exp: 30, connections: 15, money: 10 }, result: '你们拍到了被鱼群包围的潜伴剪影。那张照片后来是你们的结婚纪念日礼物。', tag: '+30瓶 +15口碑' },
    ]
  },
  {
    id: 'dm_apprentice', cert: { min: 4 },
    title: '-- 自己带出的DM --', creature: 'diver', flavor: '"她毕业了"',
    text: '你带的实习DM今天拿到了卡。她从一个连下水都怕的游客变成了能独立带团的潜导。她说要请你吃饭。',
    choices: [
      { text: '欣然答应，认真庆祝这个时刻', effects: { exp: 30, connections: 25, hp: 10 }, result: '她在饭桌上说"没有你就没有我今天"。你说"你走的每一步都是你自己走的，我只是比你早两年在同一条路上"。', tag: '+30瓶 +25口碑', flag: 'mentor_legacy', item: '学生写的谢师卡' },
      { text: '推说忙，下次再聚', effects: { exp: 5, connections: -10 }, result: '她有点失望。你后来意识到，她想感谢的那顿饭可能比你以为的重要。', tag: '-10口碑' },
      { text: '告诉她下一步该做什么', effects: { exp: 25, connections: 15 }, result: '你简短分享了自己走过的坑。她记了满满一页笔记。指点是最好的庆祝。', tag: '+25瓶 +15口碑' },
    ]
  },
  {
    id: 'wreck_ghost', cert: { min: 3 },
    title: '-- 沉船深处 --', creature: 'wreck', flavor: '"60米下的日本军舰"',
    text: '你有机会潜一艘60米深的二战沉船。这是你做Tec认证的人生机会。但天气预报说当天有不稳定流。',
    choices: [
      { text: '如约下潜，严格按plan做', effects: { exp: 45, hp: -20, connections: 15 }, result: '流确实乱，但你们小组完美配合。你在船尾看到了满是珊瑚的日军炮塔，那是历史和海的和解。', tag: '+45瓶 -20精力 +15口碑', item: '沉船深潜纪念' },
      { text: '推迟到下次', effects: { exp: 15, money: -20 }, result: '你错过了那次机会，因为那位教练三个月后搬家再也不在这个岛。有些船只经过一次。', tag: '-20储蓄' },
      { text: '下到40米看外部轮廓', effects: { exp: 30, hp: -10 }, result: '你没冒险下到60米。但你看到了船的大部分。勇气不是唯一的答案，判断是。', tag: '+30瓶' },
    ]
  },
  {
    id: 'guide_injured', cert: { min: 3 },
    title: '-- 潜导受伤 --', creature: 'warning', flavor: '"主导游抽筋了"',
    text: '带团潜到最深处，主潜导突然腿抽筋无法自由游动。5个客人看着你。水深22米。',
    choices: [
      { text: '立刻接管领队职责，有序安全上升', effects: { exp: 40, connections: 25, hp: -10 }, result: '你示意慢慢上升做安全停留。5个客人全部安全上船。潜导后来跟老板说："以后这种团给她带。"', tag: '+40瓶 +25口碑', flag: 'crisis_leader' },
      { text: '先救潜导，让客人们自己上升', effects: { exp: 15, connections: -15, reckless: 15 }, result: '两个客人上得太快，一个出了鼻血，另一个惊恐症状。潜导救了，客人没救好。', tag: '+15鲁莽 -15口碑' },
      { text: '让客人等，自己处理潜导，打手势求援', effects: { exp: 35, connections: 15 }, result: '你同时兼顾。潜导稳定后大家一起上。不完美但没出大事。', tag: '+35瓶 +15口碑' },
    ]
  },
  {
    id: 'first_free_dive', cert: { min: 2 },
    title: '-- 自由潜尝试 --', creature: 'bubbleart', flavor: '"没有气瓶的世界"',
    text: '朋友推荐你体验自由潜（闭气）。你第一次下到12米只用一口气。感觉和水肺完全不同。',
    choices: [
      { text: '认真学自由潜作为补充训练', effects: { exp: 25, hp: 20, money: -20 }, result: '自由潜改变了你对呼吸的理解。回到水肺你气量又省了20%。两种潜水是一体两面。', tag: '+25瓶 +20精力', item: '自由潜卡' },
      { text: '玩一次就算，不深入', effects: { exp: 10, hp: 5 }, result: '你只尝了一口。回归熟悉的水肺。不是每次新尝试都要变成新专长。', tag: '+10瓶' },
      { text: '直接挑战20米深度', effects: { exp: 5, hp: -30, reckless: 30 }, result: '你12米就black-out了，被人从水面拉起。自由潜不是勇气游戏，是身体控制游戏。', tag: '-30精力 +30鲁莽' },
    ]
  },
];

// ==================== 考核 / 渡劫 ====================
const CERT_EXAMS = [
  {
    id: 'exam_0',
    title: '== 考核: OW 开放水域测试 ==',
    text: '教练在4米平台上等你。今天要一次性完成：面镜清理、调节器回收、紧急共气上升、悬停一分钟。一个动作失败就得重来。',
    successText: '四个动作一气呵成。教练在水面上下划了OK。你正式成为开放水域潜水员。',
    failText: '你在悬停一分钟时气量管失控飘了上去。教练说"再来一次"，但你知道你今天心不稳。',
    threshold: 0.45,
  },
  {
    id: 'exam_1',
    title: '== 考核: AOW 深潜/导航两项 ==',
    text: '30米深潜加罗盘导航组合。一个人在陌生礁石上靠罗盘找回船锚，同时气量要用得明白。',
    successText: '你在25分钟内完成了三角形路径，气量剩70bar，精确回到锚点下方。你的AOW拿下了。',
    failText: '你迷路了10分钟，最后是靠潜伴SMB找回来的。教练说技术没问题，节奏还要练。',
    threshold: 0.5,
  },
  {
    id: 'exam_2',
    title: '== 考核: Rescue 救援模拟 ==',
    text: '最难的一场考。你要从水面把"昏迷"的120斤教练拖到50米外的岸边，上岸做人工呼吸。然后从水下摆渡一个"惊恐"潜水员到安全停留。',
    successText: '你的手一直没放开他。你哭着做完了最后的人工呼吸。教练抬头说"通过了"，然后抱了你一下。',
    failText: '你在拖拽中松手两次。教练说"明天再来"。那一晚你在海边坐了一整夜。',
    threshold: 0.55,
  },
  {
    id: 'exam_3',
    title: '== 考核: Divemaster 综合评估 ==',
    text: 'DM 考核：独立带一个四人团完成一次完整dive。水下判断+人员管理+紧急处置一次评分。',
    successText: '四个客人水面后主动给你鼓掌。老潜水员在你签证时说了句"这孩子有料"。你收到了DM的卡。',
    failText: '一个客人超了NDL你没及时发现。评估报告写着"多一年自然再来"。你收起卡封面，把报告夹进日志本。',
    threshold: 0.6,
  },
  {
    id: 'exam_4',
    title: '== 考核: IE 教练考试 ==',
    text: 'IE 四天马拉松的最后一天。考官说："假装我是完全不会游泳的新学员，把我教会独立下潜。" 你深吸一口气。',
    successText: '45分钟后他下潜到5米独立悬停。考官笑了："你让一个不会游泳的人信任了水。这就是教练。"',
    failText: '他在3米处爆了面镜慌乱。你没扶住。考官说你还需要更多学生实战。',
    threshold: 0.65,
  },
  {
    id: 'exam_5',
    title: '== 考核: Tec 50 减压潜水 ==',
    text: 'Tec 50 结业潜。45米深度 + 2段减压停留。背双瓶+两个减压瓶，任何一个环节慌就可能挂。',
    successText: '你在9米线上做完了22分钟减压。出水时手在抖，心在震。技术潜水这扇门你推开了。',
    failText: '你在减压中途气量分配混乱，不得不提前出水。教练评估"明年再来"。你默默去了健身房。',
    threshold: 0.7,
  },
];

// ==================== 结局 ====================
const ENDINGS = {
  ascend: {
    title: '传 奇 潜 水 员',
    subtitle: '世界一线 &middot; 蓝色圣殿',
    text: '你完成了从OW到世界级的全部修炼。杂志编辑来采访："是什么让你留下来？"你看着窗外的海说："这片海从来没变过，是我变了。"',
    quip: '你下到的不是海底，是时间的另一端。',
  },
  burnout: {
    title: '身 体 红 灯',
    subtitle: '耳压伤 &middot; 暂别蓝色',
    text: '反复耳炎、疲劳综合症，医生建议停潜半年。你翻出装备柜，把BCD挂在墙上。潜水不是逃离，是回归。这次你要先修复自己。',
    quip: '海洋还在，你得让自己也还在。',
  },
  reckless: {
    title: '鲁 莽 殉 海',
    subtitle: '最后一潜 &middot; 永别深蓝',
    text: '鲁莽值爆表了。某一次潜水你做了谁都劝不住的决定。回来的人里没有你。你的日志停在那天，永远是14米深度、水温26度。',
    quip: '海不骗人，是你没认真听。',
  },
  rich: {
    title: '潜 店 老 板',
    subtitle: '财务自由 &middot; 自己的店',
    text: '你攒够了钱。东山岛一间小店，墙上贴满客人合影，橱窗里是你自己的装备。"以后来学潜水的年轻人，都是我的同行。"',
    quip: '赚钱的目的，是第二天还能下水。',
  },
  founder: {
    title: '自 立 门 派',
    subtitle: '自己的潜店 &middot; 自己的江湖',
    text: '你和合伙人开了自己的潜店。前半年发不出工资，第一年瘦了10斤，第二年排起了队。门口挂一块板："下水前，先把自己找回来。"',
    quip: '门派不靠招生简章，靠你下过的那些潜。',
  },
  sage: {
    title: '慢 潜 之 道',
    subtitle: '淡如水 &middot; 心境通透',
    text: '你没拿到最高证，也没开店。只是每年按自己的节奏潜几次。家里有伴，工作稳定。每次下水都还像第一次。潜水不是成就，是你和世界的一次对话。',
    quip: '没什么想证明的那一天，你才真正是潜水员。',
  },
  teacher: {
    title: '师 道 传 承',
    subtitle: '桃李满天下 &middot; 薪火相传',
    text: '你带出了几十个潜水员。他们散在全球各地的潜店、海洋保护组织、摄影圈。每年圣诞他们从各处寄明信片。"教学是最慢的潜水，也是最深的。"',
    quip: '你教会的不是潜水，是怎么在水里做自己。',
  },
  photographer: {
    title: '光 与 海',
    subtitle: '水下摄影师 &middot; 杂志签约',
    text: '你的照片登上了杂志。有人说："看你的照片像蹲在海底三天三夜才按下快门。"你说："我只是等着海洋愿意被看见的那一刻。"',
    quip: '快门按下之前，你已经等了整个潜水生涯。',
  },
  conservationist: {
    title: '海 洋 守 护',
    subtitle: '公民科学家 &middot; 珊瑚使者',
    text: '你做了十年珊瑚监测。那片最爱的礁在白化后又慢慢长回来一点。你救不了全局，但你记录了一个可以被看见的局部。真正的修行是"继续"。',
    quip: '你救不了所有珊瑚，但那块活下来的，有你的一份。',
  },
  exile: {
    title: '平 静 归 航',
    subtitle: '不轰烈 &middot; 但都记得',
    text: '你没飞升没出名。但你经历了很多：锤头鲨群扫过头顶、夜潜时的生物荧光、一只魔鬼鱼和你对视15秒、一个新学员哭着通过了OW。这些小事攒起来，就是你的潜水人生。',
    quip: '不是每个潜水员都要飞升。有的人就只想下去看看。',
  },
};

