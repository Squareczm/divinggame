// ==================== UI 辅助 ====================
function drawPixel(key) {
  if (!PIXELS[key]) return '';
  return `<div class="pixel-art">${PIXELS[key]}</div>`;
}

function seedBubbles(n) {
  const box = document.getElementById('bubbles');
  if (!box) return;
  box.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    b.style.left = (Math.random() * 98) + '%';
    b.style.animationDuration = (5 + Math.random() * 8) + 's';
    b.style.animationDelay = (Math.random() * 8) + 's';
    b.style.width = (2 + Math.random() * 4) + 'px';
    b.style.height = b.style.width;
    box.appendChild(b);
  }
}

// ==================== 游戏状态 ====================
const state = {
  screen: 'title',
  archetype: null,
  hp: 100, maxHp: 100,
  exp: 0, money: 0,
  connections: 0,   // 口碑
  reckless: 0,      // 鲁莽（= xiuxian的摸鱼位，但含义相反）
  cert: 0,          // 证书等级索引
  day: 1,           // 潜次
  seenEvents: [], queuedEvents: [],
  items: [], flags: {},
  currentEvent: null,
  selectedChoice: 0, menuIndex: 0,
  phase: 'choose',
  resultText: '',
  ending: null,
  totalChoices: 0,
  // 每一潜的临时上下文
  divCtx: { site: '诗巴丹 Sipadan', depth: 18, gas: 180, ndl: 35, temp: 27, buddy: 'OK' },
  // 结算页子状态：'view' 正常查看 / 'confirm_exit' 退出二次确认
  endingPhase: 'view',
};

// ==================== 潜点 helper ====================
function rollSite() {
  const s = SITES[Math.floor(Math.random() * SITES.length)];
  const d = Math.round(s.depth[0] + Math.random() * (s.depth[1] - s.depth[0]));
  const t = Math.round(s.temp[0] + Math.random() * (s.temp[1] - s.temp[0]));
  return {
    site: s.name,
    flavor: s.flavor,
    depth: d,
    gas: 200,
    ndl: Math.max(5, Math.round(80 - d * 1.8)),
    temp: t,
    buddy: 'OK',
  };
}

// ==================== 趣味数据计算 ====================
function computeDiverBadge(st) {
  const f = st.flags || {};
  const labels = [];
  if (f.whale_encounter)  labels.push({ w: 9, t: '鲸歌亲历者' });
  if (f.saved_life)       labels.push({ w: 9, t: '水下救世主' });
  if (f.cave_certified)   labels.push({ w: 8, t: '洞穴里不迷路的那种' });
  if (f.deep_expert)      labels.push({ w: 8, t: '深蓝深度控' });
  if (f.has_pro_cam && f.advocate) labels.push({ w: 9, t: '镜头背后的温柔者' });
  if (f.has_pro_cam)      labels.push({ w: 7, t: '封面摄影师候选' });
  if (f.night_expert)     labels.push({ w: 7, t: '黑夜里比白天还精神' });
  if (f.current_skilled)  labels.push({ w: 6, t: '挂钩流老炮' });
  if (f.public_speaker)   labels.push({ w: 5, t: '讲台比船头熟' });
  if (f.crisis_leader)    labels.push({ w: 8, t: '危机当值领航员' });
  if (f.advocate)         labels.push({ w: 6, t: '珊瑚的朋友' });
  if (f.has_student)      labels.push({ w: 6, t: '教学型潜水员' });
  if (f.dcs_survivor)     labels.push({ w: 8, t: 'DCS 劫后余生派' });
  if (f.whistleblower)    labels.push({ w: 7, t: '行业较真人' });
  if (f.rescue_complete)  labels.push({ w: 7, t: 'Rescue 认证活口' });
  if (f.shop_owner)       labels.push({ w: 7, t: '有自己潜店的潜水员' });
  if (f.mentor_legacy)    labels.push({ w: 8, t: '有传人的老潜手' });
  if ((st.reckless || 0) >= 60) labels.push({ w: 5, t: '潜水圈莽夫' });
  if ((st.reckless || 0) <= 8 && (st.exp || 0) >= 200) labels.push({ w: 6, t: '教科书式潜水员' });
  if ((st.connections || 0) >= 80) labels.push({ w: 6, t: '船上人缘之神' });
  if ((st.money || 0) >= 200) labels.push({ w: 5, t: '水下不差钱' });
  if ((st.hp || 0) <= 30 && (st.day || 0) >= 50) labels.push({ w: 6, t: '残血也要下水' });
  if (labels.length === 0) labels.push({ w: 3, t: '刚下过几瓶的新手' });
  labels.sort((a,b) => b.w - a.w);
  return labels[0].t;
}

function computeDiveStats(st) {
  const avgDepth = 16;
  const totalMeters = (st.day || 0) * avgDepth * 2;
  const tanks = Math.max(1, st.day || 0);
  const m3 = Math.round(tanks * 2400 / 1000);
  const totalMinutes = (st.day || 0) * 40;
  const hours = Math.floor(totalMinutes / 60);
  const minaretCount = (totalMeters / 468).toFixed(1);
  return { totalMeters, tanks, m3, hours, minaretCount };
}

function computeFunFacts(st) {
  const s = computeDiveStats(st);
  const f = st.flags || {};
  const facts = [];
  facts.push(`潜了 <b>${s.tanks}</b> 瓶气，总共吞吐 <b>${s.m3}</b> 立方米空气 —— 够把小型卧室灌满。`);
  facts.push(`水下累计 <b>${s.hours}</b> 小时，相当于看完 <b>${Math.max(1, Math.floor(s.hours/3))}</b> 部电影的时间。`);
  facts.push(`累计下潜深度 <b>${s.totalMeters}</b> 米，倒过来叠起来是 <b>${s.minaretCount}</b> 座东方明珠。`);
  if (f.met_shark && f.whale_encounter) {
    facts.push(`鲨鱼和鲸你都见过，海洋 VIP 客户名单你在上面。`);
  } else if (f.met_shark) {
    facts.push(`你和鲨鱼打过照面，没吹牛，很不像朋友圈潜水员。`);
  } else if (f.whale_encounter) {
    facts.push(`你听过鲸歌现场。这种福气，海洋亲自安排。`);
  }
  if ((st.items || []).length >= 3) {
    facts.push(`你带回了 <b>${st.items.length}</b> 件纪念物，每一件都在讲一段故事。`);
  }
  return facts.slice(0, 3);
}

function computeAchievements(st) {
  const f = st.flags || {};
  const items = st.items || [];
  const list = [];
  if (f.kept_calm)       list.push('紧急冷静');
  if (f.rescued_diver)   list.push('救援即本能');
  if (f.saved_life)      list.push('递头救一命');
  if (f.rescue_complete) list.push('Rescue 证书');
  if (f.night_expert)    list.push('夜潜之眼');
  if (f.current_skilled) list.push('流中老兵');
  if (f.cave_certified)  list.push('洞潜合格');
  if (f.deep_expert)     list.push('深蓝深度控');
  if (f.whale_encounter) list.push('鲸歌亲历');
  if (f.met_shark)       list.push('鲨影同行');
  if (f.has_pro_cam)     list.push('杂志上刊');
  if (f.has_student)     list.push('带徒成功');
  if (f.mentor_legacy)   list.push('师道传人');
  if (f.good_dm)         list.push('合格 DM');
  if (f.great_dm)        list.push('顶级 DM');
  if (f.crisis_leader)   list.push('危机领航');
  if (f.advocate)        list.push('海洋代言');
  if (f.conservationist) list.push('海洋清洁');
  if (f.dcs_survivor)    list.push('DCS 余生');
  if (f.shop_owner)      list.push('潜店老板');
  if (f.came_back)       list.push('回国带队');
  if (f.founder_path)    list.push('自立山门');
  if (items.includes('诗巴丹勋章'))  list.push('诗巴丹勋章');
  if (items.includes('板块交界纪念')) list.push('板块交界');
  if (items.includes('DAN 会员卡'))   list.push('DAN 会员');
  if (items.includes('魔鬼鱼刻印'))   list.push('魔鬼鱼之友');
  return list.slice(0, 10);
}

// ==================== 引擎 ====================

function applyArchetypeMods() {
  const a = ARCHETYPES[state.archetype];
  if (!a) return;
  const m = a.startMods || {};
  Object.keys(m).forEach(k => { state[k] = (state[k] || 0) + m[k]; });
}

function nextCert() {
  if (state.cert < CERTS.length - 1) {
    const next = CERTS[state.cert + 1];
    if (state.exp >= next.exp) return true;
  }
  return false;
}

function checkEnding() {
  if (state.hp <= 0) return 'burnout';
  if (state.reckless >= 100) return 'reckless';
  if (state.flags.shop_owner && state.money >= 150 && state.exp >= 400) return 'founder';
  if (state.money >= 250) return 'rich';
  if (state.cert >= CERTS.length - 1 && state.exp >= 1800) return 'ascend';
  if (state.flags.has_pro_cam && state.flags.advocate === undefined && state.exp >= 600 && state.money >= 150) return 'photographer';
  if (state.flags.advocate && state.flags.conservationist && state.connections >= 80) return 'conservationist';
  if (state.flags.mentor_legacy && state.connections >= 90) return 'teacher';
  if (state.day >= 180 && state.hp >= 80 && state.connections >= 50 && state.reckless < 40) return 'sage';
  if (state.day >= 260) return 'exile';
  return null;
}

function eventAvailable(e) {
  if (state.seenEvents.includes(e.id) && state.seenEvents.length < EVENTS.length * 0.7) return false;
  if (e.cert) {
    if (e.cert.min !== undefined && state.cert < e.cert.min) return false;
    if (e.cert.max !== undefined && state.cert > e.cert.max) return false;
  }
  if (e.requires) {
    for (const flag of e.requires) if (!state.flags[flag]) return false;
  }
  return true;
}

function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function withShuffledChoices(e) {
  return Object.assign({}, e, { choices: shuffleArr(e.choices) });
}

function pickEvent() {
  if (state.queuedEvents.length > 0) {
    const id = state.queuedEvents.shift();
    const e = EVENTS.find(x => x.id === id);
    if (e) return withShuffledChoices(e);
  }
  const available = EVENTS.filter(eventAvailable);
  const base = available.length === 0
    ? EVENTS[Math.floor(Math.random() * EVENTS.length)]
    : available[Math.floor(Math.random() * available.length)];
  return withShuffledChoices(base);
}

function pickExam() {
  const idx = Math.min(state.cert, CERT_EXAMS.length - 1);
  return CERT_EXAMS[idx];
}

function getMult(key, fallback = 1) {
  const a = ARCHETYPES[state.archetype];
  if (!a) return fallback;
  if (key === 'exp' && a.expMult) return a.expMult;
  if (key === 'hp' && a.hpMult) return a.hpMult;
  if (key === 'money' && a.moneyMult) return a.moneyMult;
  return fallback;
}

function applyEffects(effects) {
  const lines = [];
  if (effects.exp) {
    const v = effects.exp > 0 ? Math.round(effects.exp * getMult('exp')) : effects.exp;
    state.exp = Math.max(0, state.exp + v);
    lines.push(v > 0 ? `<span class="gain">瓶 +${v}</span>` : `<span class="lose">瓶 ${v}</span>`);
  }
  if (effects.hp) {
    const v = effects.hp > 0 ? Math.round(effects.hp * getMult('hp')) : effects.hp;
    state.hp = Math.min(state.maxHp, Math.max(0, state.hp + v));
    lines.push(v > 0 ? `<span class="gain">精力 +${v}</span>` : `<span class="lose">精力 ${v}</span>`);
  }
  if (effects.money) {
    const v = effects.money > 0 ? Math.round(effects.money * getMult('money')) : effects.money;
    state.money = Math.max(0, state.money + v);
    lines.push(v > 0 ? `<span class="gain">储蓄 +${v}</span>` : `<span class="lose">储蓄 ${v}</span>`);
  }
  if (effects.connections) {
    state.connections = Math.max(0, state.connections + effects.connections);
    lines.push(effects.connections > 0 ? `<span class="gain">口碑 +${effects.connections}</span>` : `<span class="lose">口碑 ${effects.connections}</span>`);
  }
  if (effects.reckless) {
    state.reckless += effects.reckless;
    lines.push(`<span class="reckless">鲁莽 +${effects.reckless}</span>`);
  }
  return lines.join('  ');
}

// ==================== 渲染 ====================

function renderStats() {
  return `<div class="stats-bar">
    <span>HP ${state.hp}/${state.maxHp}</span>
    <span>瓶 ${state.exp}</span>
    <span>$ ${state.money}</span>
    <span>口碑 ${state.connections}</span>
  </div>`;
}

function renderDiveHUD() {
  const d = state.divCtx;
  const gasClass = d.gas < 50 ? 'danger' : d.gas < 100 ? 'warn' : 'good';
  const ndlClass = d.ndl < 5 ? 'danger' : d.ndl < 15 ? 'warn' : 'good';
  const depthClass = d.depth >= 30 ? 'warn' : '';
  const gasBar = renderBar(d.gas, 200, 8);
  return `<div class="dive-hud">
    <span><span class="label">D</span> <span class="val ${depthClass}">${d.depth}m</span></span>
    <span><span class="label">BT</span> <span class="val">${String(Math.floor(state.day/10)).padStart(2,'0')}:${String((state.day*7)%60).padStart(2,'0')}</span></span>
    <span><span class="label">GAS</span> <span class="val ${gasClass}">${gasBar} ${d.gas}bar</span></span>
    <span><span class="label">NDL</span> <span class="val ${ndlClass}">${d.ndl}m</span></span>
    <span><span class="label">TEMP</span> <span class="val">${d.temp}&#176;C</span></span>
    <span><span class="label">BUD</span> <span class="val good">${d.buddy}</span></span>
  </div>`;
}

function renderBar(val, max, width) {
  const filled = Math.max(0, Math.min(width, Math.round((val / max) * width)));
  return '[' + '#'.repeat(filled) + '.'.repeat(width - filled) + ']';
}

function renderTitle() {
  return `
    <div class="title-art">
      ${PIXELS.logo}
      <div style="font-size:11px; color:#7a8ea8">= = = = = = = =</div>
      <div class="big">深 潜 模 拟 器</div>
      <div style="font-size:12px; margin:4px 0;color:#a3b8cc">DEEP DIVER SIMULATOR</div>
      <div style="font-size:11px; color:#7a8ea8">= = = = = = = =</div>
      <div style="margin-top:14px; font-size:12px; line-height:1.9">
        从 Open Water 起步<br>
        下潜到传奇之境<br><br>
        <span style="color:#f5c46b">瓶数</span> 决定证书进阶<br>
        <span style="color:#f5c46b">精力</span> 归零则暂别蓝色<br>
        <span style="color:#f5c46b">鲁莽</span> 爆表则身葬深海<br>
        <span style="color:#f5c46b">储蓄</span> 够多可自立门派<br>
        <span style="color:#f5c46b">口碑</span> 决定升证难度
      </div>
      <div class="prompt" style="margin-top:14px">[ 按 A 或 OK 开始 ]</div>
    </div>`;
}

function renderNameInput() {
  const name = (state.username || '').replace(/"/g, '&quot;');
  return `
    <div class="title-art" style="margin-top:10px">
      ${drawPixel('diver')}
      <div style="font-size:13px; color:#f5c46b; margin-top:8px; letter-spacing:3px">报 到 登 记</div>
      <div style="font-size:10px; color:#8a6a32; margin:6px 0; letter-spacing:2px">= = = = = = = =</div>
      <div style="font-size:12px; color:#a3b8cc; margin-bottom:10px; line-height:1.7">
        潜水员，你叫什么？<br>
        <span style="font-size:10px; color:#7a8ea8">（会印在你的战绩图上）</span>
      </div>
      <div class="name-input-wrap">
        <input id="name-text" type="text" inputmode="text" autocomplete="off"
               autocorrect="off" autocapitalize="off" spellcheck="false"
               maxlength="10" placeholder="输入你的名字"
               value="${name}"
               oninput="onNameInput(this)"
               onkeydown="onNameKey(event)" />
      </div>
      <div style="font-size:10px; color:#7a8ea8; margin-top:6px; letter-spacing:1px">
        或点一个快捷：
      </div>
      <div class="quick-names">
        <span class="quick-name" onclick="pickName('Nemo')">Nemo</span>
        <span class="quick-name" onclick="pickName('蓝鲸')">蓝鲸</span>
        <span class="quick-name" onclick="pickName('James')">James</span>
        <span class="quick-name" onclick="pickName('小潜')">小潜</span>
        <span class="quick-name" onclick="pickName('海王')">海王</span>
      </div>
      <div class="prompt" style="margin-top:10px">[ 输入后按 A / OK / ENTER ]</div>
    </div>`;
}

function onNameInput(el) {
  state.username = (el.value || '').slice(0, 10);
}
function onNameKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    e.stopPropagation();
    goToArchetype();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    e.stopPropagation();
    state.screen = 'title';
    render();
  }
  e.stopPropagation();
}

function renderArchetype() {
  const ids = Object.keys(ARCHETYPES);
  let html = `<div class="scene-title" style="font-size:14px; margin-top:8px">选 择 你 的 流 派</div>`;
  html += `<div class="divider">= = = = = = = =</div>`;
  html += `<div style="font-size:11px; color:#7a8ea8; text-align:center; margin-bottom:10px">DIVER: ${state.username || '匿名潜水员'}</div>`;
  ids.forEach((id, i) => {
    const a = ARCHETYPES[id];
    const sel = i === state.menuIndex ? 'selected' : '';
    const arrow = i === state.menuIndex ? '&#9654; ' : '  ';
    html += `<div class="choice ${sel}" style="padding:6px 8px;margin:4px 0" onclick="selectArchetype(${i})">
      <div><span class="key">${arrow}</span><span style="font-size:14px">${a.name}</span></div>
      <div style="font-size:11px;padding-left:20px;margin-top:2px;line-height:1.4;color:${i === state.menuIndex ? '#003344' : '#7a8ea8'}">${a.flavor}</div>
      <div style="font-size:11px;padding-left:20px;line-height:1.4;color:${i === state.menuIndex ? '#003344' : '#7a8ea8'}">${a.desc}</div>
    </div>`;
  });
  html += `<div class="prompt">[ 方向键切换 &middot; A 确认 ]</div>`;
  return html;
}

function renderEvent() {
  const e = state.currentEvent;
  const r = CERTS[state.cert];
  let html = renderStats();
  html += renderDiveHUD();
  html += `<div style="font-size:10px;color:#7a8ea8;margin-bottom:6px;display:flex;justify-content:space-between;letter-spacing:1px">
    <span>${r.name} &middot; ${r.title}</span>
    <span>${ARCHETYPES[state.archetype].name} &middot; 第${state.day}潜</span>
  </div>`;
  html += `<div style="font-size:10px;color:#f5c46b;text-align:center;margin:2px 0">@ ${state.divCtx.site} &middot; ${state.divCtx.flavor || ''}</div>`;
  html += `<div class="scene-title">${e.title}</div>`;
  if (e.creature) html += drawPixel(e.creature);
  html += `<div class="scene-flavor">${e.flavor}</div>`;
  html += `<div class="narrative">${e.text}</div>`;
  html += `<div class="divider">- - - - - -</div>`;

  if (state.phase === 'choose') {
    e.choices.forEach((c, i) => {
      const sel = i === state.selectedChoice ? '&#9654; ' : '  ';
      html += `<div class="choice ${i === state.selectedChoice ? 'selected' : ''}" onclick="selectChoice(${i})">
        <span class="key">${sel}</span>${String.fromCharCode(65 + i)}. ${c.text}
      </div>`;
    });
    html += `<div class="prompt">[ A/OK 确认 &middot; 方向键切换 ]</div>`;
  } else {
    const c = e.choices[state.selectedChoice];
    html += `<div class="result-text">${c.result}</div>`;
    html += `<div class="result-text">${state.resultText}</div>`;
    if (c.item) {
      html += `<div class="result-text"><span class="item">&#9679; 获得: ${c.item}</span></div>`;
    }
    if (state.phase === 'cert_up') {
      const nc = CERTS[state.cert];
      html += `<div class="cert-up">*** 升证！${nc.name}（${nc.title}）***</div>`;
    }
    html += `<div class="prompt">[ 按 A 继续 ]</div>`;
  }

  return html;
}

function renderExam() {
  const t = state.currentEvent;
  const r = CERTS[state.cert];
  let html = renderStats();
  html += `<div style="font-size:10px;color:#7a8ea8;margin-bottom:6px;display:flex;justify-content:space-between;letter-spacing:1px">
    <span>${r.name} &middot; ${r.title}</span>
    <span>${ARCHETYPES[state.archetype].name} &middot; 第${state.day}潜</span>
  </div>`;
  html += drawPixel('diver');
  html += `<div class="scene-title" style="font-size:15px; color:#ffd485">${t.title}</div>`;
  html += `<div class="narrative">${t.text}</div>`;

  if (state.phase === 'choose') {
    const rate = calcExamSuccess(t);
    const level = rate >= 0.75 ? '胜券在握' : rate >= 0.55 ? '七成把握' : rate >= 0.35 ? '胜负参半' : rate >= 0.2 ? '凶多吉少' : '九死一生';
    html += `<div class="battle-stats">心境自评: <span style="color:#ffd485">${level}</span></div>`;
    html += `<div class="choice ${state.selectedChoice === 0 ? 'selected' : ''}" onclick="selectChoice(0)"><span class="key">${state.selectedChoice === 0 ? '&#9654; ' : '  '}</span>A. 上考场</div>`;
    html += `<div class="choice ${state.selectedChoice === 1 ? 'selected' : ''}" onclick="selectChoice(1)"><span class="key">${state.selectedChoice === 1 ? '&#9654; ' : '  '}</span>B. 暂缓，多沉淀几潜</div>`;
    html += `<div class="prompt">[ 选择你的节奏 ]</div>`;
  } else {
    html += `<div class="result-text">${state.resultText}</div>`;
    if (state.phase === 'cert_up') {
      const nc = CERTS[state.cert];
      html += `<div class="cert-up">*** 升证！${nc.name}（${nc.title}）***</div>`;
    }
    html += `<div class="prompt">[ 按 A 继续 ]</div>`;
  }
  return html;
}

function calcExamSuccess(t) {
  const nextExp = CERTS[state.cert + 1]?.exp || 2500;
  const base = (state.exp / nextExp) * 0.5;
  const connBonus = state.connections * 0.003;
  const hpBonus = (state.hp / state.maxHp) * 0.15;
  const recklessPenalty = state.reckless * 0.002;
  const flagBonus =
    (state.flags.rescued_diver ? 0.05 : 0) +
    (state.flags.saved_life ? 0.05 : 0) +
    (state.flags.good_dm ? 0.04 : 0) +
    (state.flags.kept_calm ? 0.03 : 0) +
    (state.flags.crisis_leader ? 0.05 : 0);
  return Math.max(0.15, Math.min(0.95, base + connBonus + hpBonus - recklessPenalty + flagBonus));
}

function renderEnding() {
  const e = ENDINGS[state.ending];
  const r = CERTS[state.cert];
  const badge = computeDiverBadge(state);
  const facts = computeFunFacts(state);
  const achievements = computeAchievements(state);

  // 退出二次确认覆盖层
  if (state.endingPhase === 'confirm_exit') {
    return `<div class="ending-wrap" style="text-align:center">
      <div style="height:60px"></div>
      ${drawPixel('warning')}
      <div class="ending-title" style="font-size:16px;margin-top:10px">确 定 要 离 开 吗</div>
      <div class="scene-flavor">你的这段潜水旅程将清零</div>
      <div class="divider">~ ~ ~ ~ ~ ~</div>
      <div style="font-size:13px;color:#a3b8cc;line-height:1.8;margin:14px 20px">
        你还没下载战绩图吗？<br>
        这张图带你这一生的瓶数和徽章，<br>
        发出去还能让朋友扫码一起玩。
      </div>
      <div style="margin:18px 0 10px">
        <div style="display:inline-block;padding:6px 16px;margin:4px;border:2px solid #f5c46b;background:rgba(245,196,107,0.1);color:#ffd485;font-size:13px;letter-spacing:2px">
          A · 确 认 离 开，重 新 开 始
        </div>
      </div>
      <div style="margin:8px 0">
        <div style="display:inline-block;padding:6px 16px;margin:4px;border:2px solid #80d4c0;background:rgba(128,212,192,0.1);color:#80d4c0;font-size:13px;letter-spacing:2px">
          B · 再 看 一 眼 战 绩
        </div>
      </div>
      <div class="prompt">[ A 确认 &middot; B 取消 ]</div>
    </div>`;
  }

  // 默认视图
  let html = `<div class="ending-wrap">
    <div class="ending-title">${e.title}</div>
    <div class="scene-flavor">${e.subtitle}</div>
    <div class="divider">~ ~ ~ ~ ~ ~ ~ ~ ~</div>
    ${drawPixel('diver')}
    <div class="diver-name-line">${state.username || '匿名潜水员'}</div>
    <div style="text-align:center;font-size:11px;color:#a3b8cc;margin-top:-2px;letter-spacing:2px">
      ${ARCHETYPES[state.archetype].name} &middot; ${r.name}
    </div>
    <div class="fun-title">&#x2605; ${badge} &#x2605;</div>
    <div class="data-grid">
      <div class="data-cell"><span class="data-label">BOTTLES 瓶 数</span><span class="data-value">${state.exp}</span></div>
      <div class="data-cell"><span class="data-label">DIVES 下 潜</span><span class="data-value">${state.day}</span></div>
      <div class="data-cell"><span class="data-label">SAVINGS 储 蓄</span><span class="data-value">${state.money}</span></div>
      <div class="data-cell"><span class="data-label">REP 口 碑</span><span class="data-value">${state.connections}</span></div>
      <div class="data-cell"><span class="data-label">HP 精 力</span><span class="data-value">${state.hp}</span></div>
      <div class="data-cell"><span class="data-label">RECKLESS 鲁 莽</span><span class="data-value">${state.reckless}</span></div>
    </div>`;

  facts.forEach(f => { html += `<div class="fun-fact">${f}</div>`; });

  if (achievements.length > 0) {
    html += `<div style="font-size:10px;color:#7a8ea8;margin:8px 0 2px;letter-spacing:2px;text-align:center">- - 解 锁 徽 章 - -</div>`;
    html += `<div class="achievement-row">`;
    achievements.forEach(a => { html += `<span class="achievement">${a}</span>`; });
    html += `</div>`;
  }

  html += `<div class="ending-frame" style="margin-top:8px">
    <div style="font-size:11.5px;line-height:1.55;color:#e6eef5">${e.text}</div>
  </div>`;

  if (e.quip) {
    html += `<div class="quip">${e.quip}</div>`;
  }

  // 明显的下载区块
  html += `<div class="download-zone">
    <div class="download-zone-hint">&#9733; 下 载 战 绩 图 &#9733;</div>
    <button class="share-btn" onclick="generateShareCard()" id="share-btn">
      按 A 键 &nbsp;·&nbsp; 下 载
    </button>
    <div class="share-hint">1080×1440 海报 · 带二维码 · 发朋友圈/小红书</div>
  </div>`;

  html += `<div class="ab-hint">
    <span class="ab-hint-a">A · 下载图</span>
    <span class="ab-hint-b">B · 退出重开</span>
  </div>`;
  html += `</div>`;

  return html;
}

function updateButtonLabels() {
  const la = document.getElementById('btn-a-label');
  const lb = document.getElementById('btn-b-label');
  if (!la || !lb) return;
  if (state.screen === 'ending') {
    if (state.endingPhase === 'confirm_exit') {
      la.textContent = 'A 确认';
      lb.textContent = 'B 取消';
    } else {
      la.textContent = 'A 下载';
      lb.textContent = 'B 退出';
    }
  } else if (state.screen === 'title') {
    la.textContent = 'A 开始';
    lb.textContent = 'B 返回';
  } else if (state.screen === 'name') {
    la.textContent = 'A 继续';
    lb.textContent = 'B 返回';
  } else {
    la.textContent = 'A 确认';
    lb.textContent = 'B 返回';
  }
}

function render() {
  const screen = document.getElementById('screen-content');
  let html = '';
  switch (state.screen) {
    case 'title':     html = renderTitle(); break;
    case 'name':      html = renderNameInput(); break;
    case 'archetype': html = renderArchetype(); break;
    case 'event':     html = renderEvent(); break;
    case 'exam':      html = renderExam(); break;
    case 'ending':    html = renderEnding(); break;
  }
  screen.innerHTML = html;
  screen.scrollTop = 0;
  updateButtonLabels();
  // 姓名输入页：自动聚焦，方便手机弹键盘
  if (state.screen === 'name') {
    setTimeout(() => {
      const el = document.getElementById('name-text');
      if (el) { el.focus(); try { el.setSelectionRange(el.value.length, el.value.length); } catch (e) {} }
    }, 50);
  }
}

function selectChoice(i) {
  if (state.phase !== 'choose') return;
  state.selectedChoice = i;
  render();
}

function selectArchetype(i) {
  state.menuIndex = i;
  render();
}

function pickName(n) {
  state.username = n;
  render();
  setTimeout(() => {
    const el = document.getElementById('name-text');
    if (el) el.focus();
  }, 60);
}

function goToName() {
  state.screen = 'name';
  state.username = state.username || '';
  state.menuIndex = 0;
  render();
}

function goToArchetype() {
  if (!state.username || state.username.trim().length === 0) {
    state.username = '匿名潜水员';
  }
  state.username = state.username.slice(0, 10).trim();
  state.screen = 'archetype';
  state.menuIndex = 0;
  render();
}

function startGame() {
  const ids = Object.keys(ARCHETYPES);
  const archetype = ids[state.menuIndex];
  const name = state.username;
  Object.assign(state, {
    screen: 'event',
    archetype,
    username: name,
    hp: 100, maxHp: 100,
    exp: 0, money: 0,
    connections: 0, reckless: 0,
    cert: 0, day: 0,
    seenEvents: [], queuedEvents: [],
    items: [], flags: {},
    currentEvent: null,
    selectedChoice: 0, menuIndex: 0, phase: 'choose',
    resultText: '', ending: null, totalChoices: 0,
    divCtx: rollSite(),
  });
  applyArchetypeMods();
  nextDive();
}

function nextDive() {
  state.day++;
  // 每3-5潜换一次潜点
  if (state.day === 1 || Math.random() < 0.25) {
    state.divCtx = rollSite();
  } else {
    // 小幅度调整深度/气量
    state.divCtx.gas = Math.max(60, Math.round(180 + (Math.random() - 0.5) * 40));
    state.divCtx.ndl = Math.max(3, Math.round(state.divCtx.ndl + (Math.random() - 0.3) * 6));
  }

  const ending = checkEnding();
  if (ending) {
    state.ending = ending;
    state.screen = 'ending';
    state.endingPhase = 'view';
    render();
    return;
  }

  if (nextCert() && state.day > 3) {
    const t = pickExam();
    state.currentEvent = t;
    state.screen = 'exam';
    state.phase = 'choose';
    state.selectedChoice = 0;
    render();
    return;
  }

  const e = pickEvent();
  state.currentEvent = e;
  if (!state.seenEvents.includes(e.id)) state.seenEvents.push(e.id);
  state.screen = 'event';
  state.phase = 'choose';
  state.selectedChoice = 0;
  render();
}

function confirmChoice() {
  if (state.screen === 'title')     { goToName(); return; }
  if (state.screen === 'name')      { goToArchetype(); return; }
  if (state.screen === 'archetype') { startGame(); return; }
  if (state.screen === 'ending') {
    // A 键：下载战绩图（默认视图），或确认重开（确认视图）
    if (state.endingPhase === 'confirm_exit') { resetGame(); return; }
    generateShareCard();
    return;
  }

  if (state.phase !== 'choose') {
    nextDive();
    return;
  }

  state.totalChoices++;
  const e = state.currentEvent;

  if (state.screen === 'exam') {
    const successRate = calcExamSuccess(e);
    if (state.selectedChoice === 0) {
      if (Math.random() < successRate) {
        state.cert++;
        state.maxHp += 20;
        state.hp = Math.min(state.maxHp, state.hp + 30);
        state.resultText = `<span class="gain">${e.successText}</span>`;
        state.phase = 'cert_up';
      } else {
        state.hp = Math.max(0, state.hp - 20);
        state.exp = Math.max(0, state.exp - 30);
        state.resultText = `<span class="lose">${e.failText}</span>`;
        state.phase = 'result';
      }
    } else {
      state.resultText = '你选择先打磨自己，等更好的时机。';
      state.phase = 'result';
    }
    render();
    return;
  }

  const c = e.choices[state.selectedChoice];
  state.resultText = applyEffects(c.effects);
  if (c.item) state.items.push(c.item);
  if (c.flag) state.flags[c.flag] = true;
  if (c.next) state.queuedEvents.push(c.next);

  state.phase = 'result';
  render();
}

function resetGame() {
  const keepName = state.username;
  Object.assign(state, {
    screen: 'title',
    archetype: null,
    hp: 100, maxHp: 100,
    exp: 0, money: 0,
    connections: 0, reckless: 0,
    cert: 0, day: 1,
    seenEvents: [], queuedEvents: [],
    items: [], flags: {},
    currentEvent: null, selectedChoice: 0, menuIndex: 0,
    phase: 'choose', resultText: '', ending: null, totalChoices: 0,
    divCtx: { site: '诗巴丹 Sipadan', depth: 18, gas: 180, ndl: 35, temp: 27, buddy: 'OK' },
    username: keepName,
    endingPhase: 'view',
  });
  render();
}

function handleInput(key) {
  if (state.screen === 'name') {
    if (key === 'a' || key === 'ok') { goToArchetype(); return; }
    return;
  }
  switch (key) {
    case 'a':
    case 'ok':
      if (state.screen === 'title')     { goToName(); return; }
      if (state.screen === 'archetype') { startGame(); return; }
      confirmChoice();
      break;
    case 'b':
      if (state.screen === 'archetype') { state.screen = 'name'; render(); }
      else if (state.screen === 'name') { state.screen = 'title'; render(); }
      else if (state.screen === 'ending') {
        if (state.endingPhase === 'confirm_exit') {
          state.endingPhase = 'view';
        } else {
          state.endingPhase = 'confirm_exit';
        }
        render();
      }
      break;
    case 'up':
    case 'left':
      if (state.screen === 'archetype') {
        state.menuIndex = Math.max(0, state.menuIndex - 1);
        render();
      } else if (state.phase === 'choose') {
        state.selectedChoice = Math.max(0, state.selectedChoice - 1);
        render();
      }
      break;
    case 'down':
    case 'right':
      if (state.screen === 'archetype') {
        const max = Object.keys(ARCHETYPES).length - 1;
        state.menuIndex = Math.min(max, state.menuIndex + 1);
        render();
      } else if (state.phase === 'choose' && state.currentEvent) {
        const max = state.screen === 'exam' ? 1 : (state.currentEvent.choices?.length || 2) - 1;
        state.selectedChoice = Math.min(max, state.selectedChoice + 1);
        render();
      }
      break;
  }
}

// ==================== 键盘事件（非姓名页）====================
document.addEventListener('keydown', (e) => {
  // 姓名页的 input 自己处理输入事件，不走这里
  if (state.screen === 'name') return;
  switch (e.key) {
    case 'ArrowUp': case 'w': handleInput('up'); break;
    case 'ArrowDown': case 's': handleInput('down'); break;
    case 'ArrowLeft': handleInput('left'); break;
    case 'ArrowRight': handleInput('right'); break;
    case 'Enter': case ' ': case 'j': handleInput('a'); break;
    case 'Escape': case 'k': handleInput('b'); break;
    default: return;
  }
  e.preventDefault();
});

// ==================== 结算战绩图（Canvas 渲染） ====================

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function svgToDataUrl(svg) {
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

async function generateShareCard() {
  const btn = document.getElementById('share-btn');
  const origBtn = btn ? btn.innerHTML : '';
  if (btn) { btn.textContent = '生成中...'; btn.disabled = true; }

  try {
    const W = 1080, H = 2100;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const ending = ENDINGS[state.ending];
    const r = CERTS[state.cert];
    const badge = computeDiverBadge(state);
    const facts = computeFunFacts(state).map(s => s.replace(/<\/?b>/g, ''));
    const achievements = computeAchievements(state);
    const sanFont = '"PingFang SC","Microsoft YaHei","SimHei","Hiragino Sans GB",sans-serif';
    const monoFont = '"Silkscreen","Press Start 2P","Courier New",monospace';
    const M = 56; // 外边距

    // ===== 背景（干净深海渐变，不加网格和气泡）=====
    const bg = ctx.createRadialGradient(W/2, 380, 0, W/2, H/2, H * 0.85);
    bg.addColorStop(0, '#122e48');
    bg.addColorStop(0.4, '#0a1b2e');
    bg.addColorStop(1, '#020609');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // 顶部金光微晕（不影响文字）
    const tgl = ctx.createLinearGradient(0, 0, 0, 240);
    tgl.addColorStop(0, 'rgba(245,196,107,0.14)');
    tgl.addColorStop(1, 'transparent');
    ctx.fillStyle = tgl; ctx.fillRect(0, 0, W, 240);

    // ===== 像素边框（双层）=====
    function pxFrame(x, y, w, h, c1, c2, th=10) {
      ctx.fillStyle = c1;
      ctx.fillRect(x, y, w, th); ctx.fillRect(x, y, th, h);
      ctx.fillRect(x+w-th, y, th, h); ctx.fillRect(x, y+h-th, w, th);
      ctx.fillStyle = c2;
      ctx.fillRect(x+th, y+th, w-th*2, 3);
      ctx.fillRect(x+th, y+th, 3, h-th*2);
      ctx.fillRect(x+w-th-3, y+th, 3, h-th*2);
      ctx.fillRect(x+th, y+h-th-3, w-th*2, 3);
    }
    pxFrame(36, 36, W-72, H-72, '#f5c46b', '#a67d3c', 10);
    pxFrame(62, 62, W-124, H-124, '#2b4a6e', '#0a1628', 4);

    // 四角简洁饰
    [[56,56],[W-72,56],[56,H-72],[W-72,H-72]].forEach(([x,y]) => {
      ctx.fillStyle = '#f5c46b'; ctx.fillRect(x, y, 16, 16);
      ctx.fillStyle = '#ffd485'; ctx.fillRect(x+3, y+3, 4, 4);
    });

    // ===== 顶部品牌 =====
    ctx.textAlign = 'center';
    ctx.fillStyle = '#f5c46b';
    ctx.font = 'bold 26px ' + monoFont;
    ctx.fillText('OCEANLOG · DC-2026 · DIVER LICENSE', W/2, 118);

    ctx.fillStyle = '#7a8ea8';
    ctx.font = '15px ' + monoFont;
    ctx.fillText('CN  ·  CYAN DIVE COMPUTER  ·  OFFICIAL RECORD', W/2, 148);

    // 点状分隔
    ctx.fillStyle = '#8a6a32';
    for (let x = 200; x < W - 200; x += 22) ctx.fillRect(x, 170, 10, 3);

    // ===== 主标题 =====
    ctx.fillStyle = '#ffd485';
    ctx.font = 'bold 88px ' + sanFont;
    ctx.shadowColor = 'rgba(245,196,107,0.6)';
    ctx.shadowBlur = 24;
    ctx.fillText('深 潜 模 拟 器', W/2, 255);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#a3b8cc';
    ctx.font = 'bold 22px ' + monoFont;
    ctx.fillText('DEEP  DIVER  SIMULATOR', W/2, 298);

    // ===== 潜水员 + 两个主装饰（左下珊瑚、右上鱼群）=====
    const diverSvg = PIXELS.diver.replace(/width="44"/, 'width="240"').replace(/height="48"/, 'height="262"');
    try { const img = await loadImage(svgToDataUrl(diverSvg)); ctx.drawImage(img, W/2 - 120, 345, 240, 262); } catch (e) {}
    try {
      const coralImg = await loadImage(svgToDataUrl(
        PIXELS.coral.replace(/width="64"/, 'width="160"').replace(/height="32"/, 'height="80"')));
      ctx.drawImage(coralImg, 90, 530, 160, 80);
    } catch (e) {}
    try {
      const fishImg = await loadImage(svgToDataUrl(
        PIXELS.fish_school.replace(/width="80"/, 'width="190"').replace(/height="32"/, 'height="76"')));
      ctx.drawImage(fishImg, W - 280, 400, 190, 76);
    } catch (e) {}

    // ===== 结局大字 =====
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffd485';
    ctx.font = 'bold 82px ' + sanFont;
    ctx.shadowColor = 'rgba(245,196,107,0.6)';
    ctx.shadowBlur = 24;
    ctx.fillText(ending.title, W/2, 715);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#a3b8cc';
    ctx.font = '26px ' + sanFont;
    ctx.fillText(ending.subtitle.replace(/&middot;/g, '·'), W/2, 760);

    // 点状分隔
    ctx.fillStyle = '#8a6a32';
    for (let x = 260; x < W - 260; x += 22) ctx.fillRect(x, 790, 10, 3);

    // ===== DIVER 姓名 =====
    ctx.fillStyle = '#ff9d5c';
    ctx.font = 'bold 46px ' + sanFont;
    ctx.fillText('DIVER · ' + (state.username || '匿名潜水员'), W/2, 855);

    // ===== 称号 pill =====
    const badgeText = '★  ' + badge + '  ★';
    ctx.font = 'bold 26px ' + sanFont;
    const bw = Math.min(W - 180, ctx.measureText(badgeText).width + 100);
    const bx = (W - bw) / 2;
    const by = 880;
    ctx.fillStyle = 'rgba(128,212,192,0.2)';
    ctx.fillRect(bx, by, bw, 58);
    ctx.strokeStyle = '#80d4c0';
    ctx.lineWidth = 2;
    ctx.strokeRect(bx, by, bw, 58);
    ctx.fillStyle = '#80d4c0';
    [[bx,by],[bx+bw-6,by],[bx,by+52],[bx+bw-6,by+52]].forEach(([px,py]) => ctx.fillRect(px, py, 6, 6));
    ctx.fillText(badgeText, W/2, by + 40);

    // 流派 · 证书
    ctx.fillStyle = '#a3b8cc';
    ctx.font = '24px ' + sanFont;
    ctx.fillText(`${ARCHETYPES[state.archetype].name}  ·  ${r.name}  ·  ${r.title}`, W/2, 985);

    // ===== 数据网格 3×2 =====
    const stats = [
      ['瓶数 · BOTTLES', state.exp],
      ['下潜 · DIVES',   state.day],
      ['储蓄 · SAVINGS', '$' + state.money],
      ['口碑 · REP',     state.connections],
      ['精力 · HP',      state.hp],
      ['鲁莽 · WILD',    state.reckless],
    ];
    const gridCols = 3, cellW = 300, cellH = 82, gap = 14;
    const gridX = (W - cellW*gridCols - gap*(gridCols-1)) / 2;
    const gridY = 1025;
    stats.forEach((s, i) => {
      const col = i % gridCols, row = Math.floor(i / gridCols);
      const x = gridX + col * (cellW + gap);
      const y = gridY + row * (cellH + gap);
      ctx.fillStyle = 'rgba(8,18,32,0.7)';
      ctx.fillRect(x, y, cellW, cellH);
      ctx.strokeStyle = '#f5c46b';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, cellW, cellH);
      ctx.fillStyle = '#f5c46b';
      [[x,y],[x+cellW-5,y],[x,y+cellH-5],[x+cellW-5,y+cellH-5]].forEach(([px,py]) => ctx.fillRect(px,py,5,5));
      ctx.textAlign = 'left';
      ctx.fillStyle = '#7a8ea8';
      ctx.font = '15px ' + monoFont;
      ctx.fillText(s[0], x + 18, y + 28);
      ctx.fillStyle = '#ffd485';
      ctx.font = 'bold 40px ' + sanFont;
      ctx.fillText(String(s[1]), x + 18, y + 70);
    });

    let y = gridY + 2 * (cellH + gap) + 36;

    // ===== FUN FACTS =====
    ctx.textAlign = 'left';
    ctx.fillStyle = '#80d4c0';
    ctx.font = 'bold 20px ' + monoFont;
    ctx.fillText('- - -  FUN FACTS · 玄 学 数 据  - - -', gridX, y);
    y += 36;
    ctx.fillStyle = '#e6eef5';
    ctx.font = '22px ' + sanFont;
    facts.forEach(f => {
      y = wrapTextReturn(ctx, '▸ ' + f, gridX, y, W - gridX*2, 32);
      y += 12;
    });

    // ===== 解锁徽章 =====
    if (achievements.length > 0) {
      y += 18;
      ctx.fillStyle = '#b892d4';
      ctx.font = 'bold 20px ' + monoFont;
      ctx.fillText('- - -  ACHIEVEMENTS · 解 锁 徽 章  - - -', gridX, y);
      y += 32;
      ctx.font = 'bold 20px ' + sanFont;
      let px = gridX;
      const rowMaxX = gridX + (W - gridX*2);
      achievements.forEach(a => {
        const textW = ctx.measureText(a).width;
        const pw = textW + 32;
        const ph = 36;
        if (px + pw > rowMaxX) { px = gridX; y += ph + 8; }
        ctx.fillStyle = 'rgba(184,146,212,0.2)';
        ctx.fillRect(px, y, pw, ph);
        ctx.strokeStyle = '#b892d4';
        ctx.lineWidth = 2;
        ctx.strokeRect(px, y, pw, ph);
        ctx.fillStyle = '#b892d4';
        ctx.fillText(a, px + 16, y + 26);
        px += pw + 10;
      });
      y += 36;
    }

    // ===== 结局正文（外框 + 自动 wrap）=====
    y += 24;
    ctx.font = '23px ' + sanFont;
    const proseMaxW = W - gridX*2 - 40;
    const proseH = measureWrapHeight(ctx, ending.text, proseMaxW, 34);
    const proseBoxH = proseH + 40;
    ctx.fillStyle = 'rgba(245,196,107,0.06)';
    ctx.fillRect(gridX, y, W - gridX*2, proseBoxH);
    ctx.strokeStyle = 'rgba(245,196,107,0.5)';
    ctx.lineWidth = 1;
    ctx.strokeRect(gridX, y, W - gridX*2, proseBoxH);
    ctx.fillStyle = '#f5c46b';
    [[gridX,y],[gridX + W - gridX*2 - 8,y],[gridX,y + proseBoxH - 8],[gridX + W - gridX*2 - 8,y + proseBoxH - 8]].forEach(([px,py]) => ctx.fillRect(px, py, 8, 8));
    ctx.fillStyle = '#e6eef5';
    ctx.textAlign = 'left';
    wrapTextReturn(ctx, ending.text, gridX + 20, y + 34, proseMaxW, 34);
    y += proseBoxH + 26;

    // ===== 金句 =====
    if (ending.quip) {
      ctx.fillStyle = '#f5c46b';
      ctx.font = 'italic bold 28px ' + sanFont;
      ctx.textAlign = 'center';
      y = wrapTextReturn(ctx, '「 ' + ending.quip + ' 」', W/2, y + 26, W - 240, 38);
    }

    // ===== QR 区 =====
    const qrSize = 200;
    const qrX = W - qrSize - 100, qrY = H - qrSize - 170;
    // 三层金框
    ctx.fillStyle = '#f5c46b'; ctx.fillRect(qrX - 12, qrY - 12, qrSize + 24, qrSize + 24);
    ctx.fillStyle = '#a67d3c'; ctx.fillRect(qrX - 6, qrY - 6, qrSize + 12, qrSize + 12);
    ctx.fillStyle = '#ffd485'; ctx.fillRect(qrX - 3, qrY - 3, qrSize + 6, qrSize + 6);
    await drawQrCode(ctx, qrX, qrY, qrSize);
    // QR 四角金点
    ctx.fillStyle = '#f5c46b';
    [[qrX-12,qrY-12],[qrX+qrSize,qrY-12],[qrX-12,qrY+qrSize],[qrX+qrSize,qrY+qrSize]].forEach(([x,y]) => ctx.fillRect(x, y, 12, 12));

    // 扫码区文字
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffd485';
    ctx.font = 'bold 42px ' + sanFont;
    ctx.fillText('扫 码 下 水', 120, H - 280);
    ctx.fillStyle = '#a3b8cc';
    ctx.font = '24px ' + sanFont;
    ctx.fillText('你的潜水之旅从这里开始', 120, H - 242);
    ctx.fillStyle = '#80d4c0';
    ctx.font = 'bold 24px ' + monoFont;
    ctx.fillText('divinggame.ainovalife.com', 120, H - 204);
    ctx.fillStyle = '#7a8ea8';
    ctx.font = '20px ' + sanFont;
    ctx.fillText('呼吸是节奏 · 敬畏是修为', 120, H - 170);
    ctx.fillStyle = '#7a8ea8';
    ctx.font = '18px ' + sanFont;
    ctx.fillText('一次性下潜，来一把就有自己的海', 120, H - 140);

    // 底部 baseline
    ctx.textAlign = 'center';
    ctx.fillStyle = '#5a7493';
    ctx.font = '16px ' + monoFont;
    ctx.fillText('DEEPDIVE · AINOVALIFE · DIVER-CARD v2', W/2, H - 100);

    // 预览模式
    if (window.__testCardReturn) {
      document.body.innerHTML = '';
      canvas.style.cssText = 'display:block;margin:0 auto;';
      document.body.appendChild(canvas);
      document.body.style.cssText = 'background:#000;margin:0;padding:0;';
      return;
    }

    // 下载
    const link = document.createElement('a');
    link.download = `deep_diver_${(state.username || 'anon').replace(/\s/g, '_')}_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error(err);
    alert('战绩图生成失败：' + err.message);
  } finally {
    if (btn) { btn.innerHTML = origBtn || '&#9733; 下载战绩图 &#9733;'; btn.disabled = false; }
  }
}

function wrapTextReturn(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = text.split('');
  let line = '';
  let yy = y;
  for (let i = 0; i < chars.length; i++) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && line.length > 0) {
      ctx.fillText(line, x, yy);
      line = chars[i];
      yy += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) { ctx.fillText(line, x, yy); yy += lineHeight; }
  return yy;
}

function measureWrapHeight(ctx, text, maxWidth, lineHeight) {
  const chars = text.split('');
  let line = '';
  let lines = 1;
  for (let i = 0; i < chars.length; i++) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && line.length > 0) {
      lines++;
      line = chars[i];
    } else {
      line = test;
    }
  }
  return lines * lineHeight;
}

function mulberry32(seed) {
  let a = seed;
  return function() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = text.split('');
  let line = '';
  let yy = y;
  for (let i = 0; i < chars.length; i++) {
    const test = line + chars[i];
    if (ctx.measureText(test).width > maxWidth && line.length > 0) {
      ctx.fillText(line, x, yy);
      line = chars[i];
      yy += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, yy);
}

// ==================== QR Code 生成（纯实现 · 无外部依赖） ====================
// 最小版 QR code：使用开源 qrcode-generator (CDN 预加载)
async function drawQrCode(ctx, x, y, size) {
  const url = 'https://divinggame.ainovalife.com';
  // 使用 qrcode-generator（CDN）
  if (!window.qrcode) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  const qr = window.qrcode(0, 'M');
  qr.addData(url);
  qr.make();
  const count = qr.getModuleCount();
  const cellSize = Math.floor(size / count);
  const realSize = cellSize * count;
  const pad = Math.floor((size - realSize) / 2);
  // 白底
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x, y, size, size);
  // 绘制二维码
  ctx.fillStyle = '#0e2238';
  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (qr.isDark(r, c)) {
        ctx.fillRect(x + pad + c * cellSize, y + pad + r * cellSize, cellSize, cellSize);
      }
    }
  }
}

// ==================== 启动 ====================
seedBubbles(18);

// Dev hook: ?test=name|archetype|event|ending 用于开发预览各屏
(function devHook() {
  const p = new URLSearchParams(location.search);
  const t = p.get('test');
  if (!t) { render(); return; }
  if (t === 'name') { goToName(); return; }
  if (t === 'archetype') { state.username = 'Nemo'; goToArchetype(); return; }
  if (t === 'event') { state.username = 'Nemo'; state.menuIndex = 0; startGame(); return; }
  if (t === 'ending' || t === 'card') {
    state.username = p.get('name') || '小明';
    state.archetype = 'explorer';
    state.cert = 4;
    state.day = 87;
    state.exp = 650;
    state.money = 140;
    state.connections = 85;
    state.hp = 85;
    state.maxHp = 180;
    state.reckless = 12;
    state.items = ['诗巴丹勋章','夜潜日志','魔鬼鱼刻印','DAN 会员卡','沉船专长证书'];
    state.flags = { saved_life:true, night_expert:true, current_skilled:true, deep_expert:true, whale_encounter:true, met_shark:true, has_student:true, rescued_diver:true, good_dm:true, crisis_leader:true, mentor_legacy:true, kept_calm:true };
    state.ending = p.get('ending') || 'teacher';
    state.endingPhase = p.get('ep') || 'view';
    state.screen = 'ending';
    render();
    if (p.get('bottom') === '1') {
      setTimeout(() => {
        const s = document.getElementById('screen');
        if (s) s.scrollTop = s.scrollHeight;
      }, 250);
    }
    if (t === 'card') {
      // 等字体/QR库加载，再生成图
      setTimeout(async () => {
        window.__testCardReturn = true;
        await generateShareCard();
      }, 900);
    }
    return;
  }
  render();
})();
