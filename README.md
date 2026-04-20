# 深潜模拟器 · Deep Diver Simulator

像素风潜水员养成游戏。从 Open Water 起步，下潜到世界级传奇。

每一次下潜都是一次选择。气量、NDL、暗流、能见度、鲁莽值—物理约束推着你做每一个决定。

## 玩法

- 输入潜水员姓名
- 选择流派（探索派 / 影像派 / 技术派）
- 每一"潜"是一次事件：选择你的应对方式
- 不同选择影响：潜龄、精力、储蓄、口碑、鲁莽
- 每几潜触发一次证书考试（OW → AOW → Rescue → DM → Instructor → Tec 50）
- 结局由你的积累决定
- 游戏结束后可下载**战绩图**（带二维码，可分享朋友圈）

## 技术栈

- 纯 HTML / CSS / JS 单文件，无构建
- Cloudflare Workers (assets) 部署
- GitHub Actions 自动 CI/CD
- 绑定自定义域名 `divinggame.ainovalife.com`
