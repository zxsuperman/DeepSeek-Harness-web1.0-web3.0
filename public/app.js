(() => {
  "use strict";

  const ERAS = {
    web1: {
      index: "01",
      dir: "web1.0",
      version: "1.0",
      period: "1991—2004",
      mode: "READ_ONLY",
      reading: "7 MIN",
      headline: ["信息被发布，", "用户来浏览。"],
      deck: "从超链接、门户与搜索开始，互联网第一次把公共信息放进浏览器。它开放、轻量，也仍然是一个少数人写、多数人读的世界。",
      body: [
        "回望 1991 年 8 月，蒂姆·伯纳斯-李把第一个网站放上 CERN 的服务器时，网络还是一组由文档、超链接和浏览器组成的实验。网页像电子公告板，用户点击蓝色链接，从一页走向另一页。",
        "Web 1.0 的核心动作是“发布”。内容由机构、编辑和站长集中生产，门户网站像数字报摊一样把新闻、目录和链接摆在一起。Yahoo! 的人工分类、Netscape 的浏览器、早期新浪的新闻首页，都是这个时代的标志。",
        "信息从桌面搬到了公共网络，但生产工具没有交到用户手里。普通人的角色是读者，最多在留言簿或论坛里留下几句话；访问通常是匿名的，用户不需要注册账号，平台也还没有形成持续追踪身份与关系的机制。",
        "技术上，静态 HTML、HTTP、超链接和简单表单已经够用。带宽有限，页面朴素，网站之间靠链接互相指路。搜索后来取代人工目录，成为从海量页面中找答案的新入口。",
        "商业模型围绕流量与展示广告展开。2000 年前后的互联网泡沫证明，注意力可以被规模化，但只读网页很难直接沉淀关系、交易与数据，网站之间的竞争最终变成入口之争。",
        "Web 1.0 留下的遗产是“公开可访问”：任何人都可以建立一个页面，任何人也可以链接它。权力集中在少数门户和基础设施手里，但网络仍保留着开放链接的骨架。"
      ],
      quote: "Web 1.0 把信息搬上了网，却没有把笔交给读者。",
      features: [
        ["01", "只读发布", "内容由机构、编辑与站长集中生产，用户主要沿着链接浏览。"],
        ["02", "门户与目录", "超链接、人工分类、门户首页和搜索引擎构成主要入口。"],
        ["03", "匿名访问", "没有持久账号和社交关系，身份与行为很少被平台记录。"],
        ["04", "流量广告", "商业模式围绕展示与点击，交易和关系仍大量留在线下。"]
      ],
      keyDates: [
        ["1991", "第一个网站上线"],
        ["1993", "Mosaic 浏览器发布"],
        ["1998", "Google 成立"],
        ["2000", "互联网泡沫破裂"]
      ],
      meta: [
        ["CONTENT", "机构、编辑与站长"],
        ["USER", "读者 / 浏览者"],
        ["CENTER", "门户网站"],
        ["VALUE", "信息展示与流量"],
        ["IDENTITY", "匿名访问"]
      ],
      stack: ["HTML", "HTTP", "HYPERLINK", "PORTAL"],
      products: "Yahoo! / Netscape / 新浪门户 / Geocities",
      notes: [
        "静态页面与超链接，是主要的信息组织方式。",
        "内容由少数机构生产，用户通过目录与搜索进入页面。",
        "交互停留在页面跳转与简单表单，网络是“只读”的。"
      ],
      limit: "用户只是内容消费者，无法参与内容生产与分发。",
      mapMode: "ONE-WAY",
      mapCaption: "网站发布，用户接收。信息沿超链接单向流动。"
    },
    web2: {
      index: "02",
      dir: "web2.0",
      version: "2.0",
      period: "2004—2020",
      mode: "READ_WRITE",
      reading: "8 MIN",
      headline: ["用户开始创作，", "平台负责聚合。"],
      deck: "博客、社交网络与算法信息流让每个人都成为发布者。平台不生产大多数内容，却决定了内容被谁看见、如何变现。",
      body: [
        "进入 2004 年，博客、论坛、维基和社交网络同时成熟，Web 2.0 为一场已经发生的变化命名：网络从“读”变成“读与写”。用户第一次可以大规模地发布文字、照片和视频，而不必拥有一个网站。",
        "平台成为新的基础设施。账号体系记录身份，好友关系构成社交图谱，推荐算法把海量 UGC 排序成信息流；云计算让平台可以承载近乎无限的增长，移动互联网则把它装进了每个人的口袋。",
        "价值从“网页浏览量”转向“用户生成的内容、关系和数据”。平台通常不生产大多数内容，却拥有分发、变现和制定规则的权力。创作者依赖平台触达受众，广告主依赖平台购买注意力。",
        "Web2 的开放主要表现在 API 与嵌入：内容可以被分享到站外，身份可以用第三方登录。但真正的护城河是网络效应和数据。用户可以把一条内容带走，却很难把粉丝、声誉和关系一起带走。",
        "点赞、转发、订阅和推荐成为新的语法。算法提高了信息匹配效率，也制造了回音室、流量竞争和平台依赖。平台不只是渠道，它开始决定什么值得被看见、什么可以被删除。",
        "Web2 的遗产是“参与”：普通人获得了公开发布的能力，代价是身份、数据和关系再次集中到少数平台。用户成为网络的内容生产者，却不一定成为网络的所有者。"
      ],
      quote: "Web 2.0 把笔交给了用户，却把印刷厂和发行渠道留在了平台手里。",
      features: [
        ["01", "读写参与", "用户同时是消费者和创作者，UGC 成为主要内容供给。"],
        ["02", "平台聚合", "账号、社交图谱与云服务把分散的创作汇成信息流。"],
        ["03", "算法分发", "推荐系统决定可见性，平台拥有事实上的议程设置权。"],
        ["04", "数据锁定", "内容可以带走，但粉丝、声誉、关系与数据难以迁移。"]
      ],
      keyDates: [
        ["2004", "Web 2.0 被命名 / Facebook 上线"],
        ["2005", "YouTube 上线"],
        ["2007", "iPhone 发布"],
        ["2010", "移动社交与图片分享兴起"]
      ],
      meta: [
        ["CONTENT", "用户、创作者与媒体"],
        ["USER", "参与者 / 创作者"],
        ["CENTER", "平台"],
        ["VALUE", "网络效应与平台数据"],
        ["IDENTITY", "平台账号"]
      ],
      stack: ["AJAX", "API", "ALGORITHM", "CLOUD", "MOBILE"],
      products: "Google / YouTube / 微信 / TikTok",
      notes: [
        "账号体系把用户、内容与关系沉淀在平台内部。",
        "推荐算法与云服务让 UGC 形成规模化的信息流。",
        "平台掌握分发权，也掌握数据与商业化的钥匙。"
      ],
      limit: "平台成为新的中心，数据、身份与关系被锁定在封闭生态中。",
      mapMode: "TWO-WAY",
      mapCaption: "用户创造内容，平台聚合与分发。互动与数据留在平台内部。"
    },
    web3: {
      index: "03",
      dir: "web3.0",
      version: "3.0",
      period: "2020—NOW",
      mode: "READ_WRITE_OWN",
      reading: "10 MIN",
      headline: ["身份与资产，", "开始归用户所有。"],
      deck: "钱包、智能合约与开放协议试图把身份、资产和规则从平台手中拿回来。Web3 的关键词不是“发币”，而是去中心化。",
      body: [
        "在 2014 年，以太坊联合创始人 Gavin Wood 用 Web3 描述一个更开放的网络：用户不只是在平台上读写内容，还能拥有自己的身份、资产和数据。它的思想源头可以追溯到密码朋克、比特币和开源协议运动。",
        "Web3 的核心不是代币价格，而是去中心化。身份由钱包控制，资产由私钥持有，规则由智能合约执行，网络状态由分布式节点共同验证。应用可以建立在开放协议上，而不是某家公司的服务器里。",
        "在 Web3 里，用户第一次可以把“账号”和“资产”带到不同应用之间。内容与所有权可以分离，创作者可以直接把作品、会员资格或治理权写入合约；DAO 则尝试用提案和投票把组织决策交给社区。",
        "去中心化意味着没有单一实体可以随意修改规则、冻结资产或关闭网络。它把信任从机构转移到密码学、共识和公开代码上。这并不等于绝对安全，但它改变了谁拥有最终解释权。",
        "现实中的 Web3 仍处于早期：钱包门槛、Gas 费用、跨链安全、监管不确定性和治理参与率都是问题。许多所谓 Web3 应用仍然依赖中心化前端、托管服务和基金会，去中心化往往只是一种程度。",
        "因此，判断一个 Web3 项目，不应只看是否发行代币，而应看：身份是否可自主持有、规则是否可验证、退出是否无需许可、治理是否真正分散。去中心化不是标签，而是一组可以被检验的结构。"
      ],
      quote: "Web3 的核心不是把货币搬到链上，而是把所有权、身份与规则从平台的服务器里拿出来。",
      features: [
        ["01", "自主身份", "钱包即账户，私钥控制访问；身份可以跨应用携带。"],
        ["02", "资产自持", "资产与记录在开放账本上，不因单一平台封禁而消失。"],
        ["03", "规则可验证", "智能合约公开执行，规则与状态可被任何人审计。"],
        ["04", "开放治理", "DAO 与协议治理尝试把升级和资金决策分散给社区。"]
      ],
      keyDates: [
        ["2008", "比特币白皮书发布"],
        ["2015", "以太坊主网上线"],
        ["2020", "DeFi Summer / 信标链"],
        ["2022", "以太坊合并"]
      ],
      meta: [
        ["CONTENT", "用户、社区与协议"],
        ["USER", "拥有者 / 共建者"],
        ["CENTER", "协议与网络"],
        ["VALUE", "所有权与协议激励"],
        ["IDENTITY", "钱包身份"]
      ],
      stack: ["BLOCKCHAIN", "SMART_CONTRACT", "WALLET", "DAO", "ZK"],
      products: "Ethereum / Uniswap / ENS / Mirror",
      notes: [
        "钱包成为跨应用的开放身份入口，资产由私钥控制。",
        "智能合约把规则写进代码，协议可以不由单一公司运营。",
        "用户通过持有与治理参与网络，而不只是使用产品。"
      ],
      limit: "仍处早期：性能、可用性、监管与安全都需验证；许多应用仍有中心化组件。",
      mapMode: "PEER-TO-PEER",
      mapCaption: "用户节点通过开放协议点对点连接，没有单一中心平台。",
      decentralization: {
        lede: "Web3 的核心不是把“平台”换个名字，而是让任何单一主体都无法随意改写规则、冻结资产或关闭网络。去中心化改变的是权力结构，而不只是技术栈。",
        points: [
          ["01", "无需许可", "任何人无需申请账号，即可读取、部署和退出应用。"],
          ["02", "自持身份与资产", "钱包签名取代平台登录，资产由私钥控制并跨应用携带。"],
          ["03", "规则可验证", "代码与链上状态公开可审计，不依赖某家公司自证清白。"],
          ["04", "分布式治理", "协议升级、资金使用与参数调整交给更广泛的参与者。"]
        ],
        quote: "没有单一中心可以关闭它，才是 Web3 真正区别于 Web2 的地方。",
        caveat: "但去中心化不是二元开关：节点分布、代币集中度、前端托管和治理参与率，都会决定它到底有多去中心化。"
      }
    }
  };

  const CHRONICLE = [
    {
      year: "1991",
      era: "web1",
      title: "第一个网站上线",
      text: "蒂姆·伯纳斯-李在 CERN 发布第一个公开网站，超文本从概念变成可访问的页面。",
      significance: "互联网第一次拥有“地址”和可点击的公共文档。"
    },
    {
      year: "1993",
      era: "web1",
      title: "Mosaic 浏览器发布",
      text: "图形化浏览器让图片与文字出现在同一页面，非技术用户开始进入万维网。",
      significance: "浏览体验大众化，网页真正成为媒体。"
    },
    {
      year: "1998",
      era: "web1",
      title: "Google 成立",
      text: "搜索开始取代人工目录，成为组织海量网页的新入口。",
      significance: "信息过载催生算法排序，注意力经济成形。"
    },
    {
      year: "2000",
      era: "web1",
      title: "互联网泡沫见顶",
      text: "大量只靠流量与广告的网站估值破裂，行业开始整合。",
      significance: "只读网页的商业模式暴露局限，平台化尚未到来。"
    },
    {
      year: "2001",
      era: "web2",
      title: "维基百科上线",
      text: "任何人都可以编辑的百科，展示协作生产的可能。",
      significance: "用户从读者变为共同作者，UGC 进入主流。"
    },
    {
      year: "2004",
      era: "web2",
      title: "Web 2.0 被命名 / Facebook 上线",
      text: "O'Reilly 会议提出 Web 2.0；社交网络把用户关系变成平台资产。",
      significance: "读写网络与社交图谱成为新的基础设施。"
    },
    {
      year: "2005",
      era: "web2",
      title: "YouTube 上线",
      text: "视频上传与分享降低了创作门槛，平台成为内容分发的中心。",
      significance: "UGC 规模化，平台掌握流量与广告。"
    },
    {
      year: "2007",
      era: "web2",
      title: "iPhone 发布",
      text: "移动互联网把平台装进口袋，App 与账号覆盖日常生活。",
      significance: "平台从网站变成操作系统，数据采集无处不在。"
    },
    {
      year: "2009",
      era: "web3",
      title: "比特币创世区块",
      text: "去中心化账本在无中心机构的情况下记录价值转移。",
      significance: "第一次用密码学与共识实现“无需许可的价值网络”。"
    },
    {
      year: "2013",
      era: "web3",
      title: "以太坊白皮书",
      text: "Vitalik Buterin 提出可编程区块链，智能合约成为新原语。",
      significance: "区块链从货币扩展到应用与所有权。"
    },
    {
      year: "2015",
      era: "web3",
      title: "以太坊主网上线",
      text: "智能合约与 dApp 生态开始运行，资产和规则可以写入代码。",
      significance: "Web3 从理念变成可部署的应用平台。"
    },
    {
      year: "2020",
      era: "web3",
      title: "DeFi Summer / 信标链",
      text: "开放金融协议爆发；以太坊启动权益证明信标链。",
      significance: "去中心化金融与可扩展路线同时推进。"
    },
    {
      year: "2021",
      era: "web3",
      title: "NFT 与 DAO 出圈",
      text: "数字所有权与社区治理进入大众视野，也暴露投机与治理问题。",
      significance: "“拥有”和“共治”成为主流讨论。"
    },
    {
      year: "2022",
      era: "web3",
      title: "以太坊合并",
      text: "以太坊从工作量证明切换到权益证明，能耗下降约 99.95%。",
      significance: "去中心化网络开始正面回应可持续性。"
    },
    {
      year: "2024",
      era: "web3",
      title: "Dencun 升级",
      text: "EIP-4844 降低 Layer 2 数据成本，Rollup 费用显著下降。",
      significance: "去中心化应用的可用性与成本约束被进一步缓解。"
    },
    {
      year: "NOW",
      era: "web3",
      title: "去中心化仍在进行中",
      text: "钱包体验、跨链安全、治理参与与监管仍在演进，Web3 远未定型。",
      significance: "去中心化是程度，不是完成态。"
    }
  ];

  const ORDER = ["web1", "web2", "web3"];

  const ERA_LABELS = {
    web1: "WEB 1.0 / READ",
    web2: "WEB 2.0 / READ + WRITE",
    web3: "WEB 3.0 / READ + WRITE + OWN"
  };

  const ERA_PILLS = {
    web1: "WEB 1.0",
    web2: "WEB 2.0",
    web3: "WEB 3.0"
  };

  const directoryView = document.getElementById("directory-view");
  const detailView = document.getElementById("detail-view");
  const chronicleView = document.getElementById("chronicle-view");
  const dirRows = Array.from(document.querySelectorAll(".dir-row"));
  const sideLinks = Array.from(document.querySelectorAll(".side-link"));
  const diagrams = Array.from(document.querySelectorAll(".diagram"));
  const docTitle = document.getElementById("doc-title");
  const docDir = document.getElementById("doc-dir");
  const docIndex = document.getElementById("doc-index");
  const docPeriod = document.getElementById("doc-period");
  const docMode = document.getElementById("doc-mode");
  const docVersion = document.getElementById("doc-version");
  const docSummary = document.getElementById("doc-summary");
  const docReading = document.getElementById("doc-reading");
  const docMeta = document.getElementById("doc-meta");
  const docTags = document.getElementById("doc-tags");
  const docBody = document.getElementById("doc-body");
  const docQuote = document.getElementById("doc-quote");
  const docKeydates = document.getElementById("doc-keydates");
  const docFeatures = document.getElementById("doc-features");
  const docProducts = document.getElementById("doc-products");
  const docNotes = document.getElementById("doc-notes");
  const docLimit = document.getElementById("doc-limit");
  const docDecentralization = document.getElementById("doc-decentralization");
  const docDecLede = document.getElementById("doc-dec-lede");
  const docDecPoints = document.getElementById("doc-dec-points");
  const docDecQuote = document.getElementById("doc-dec-quote");
  const docDecCaveat = document.getElementById("doc-dec-caveat");
  const mapMode = document.getElementById("map-mode");
  const mapCaption = document.getElementById("map-caption");
  const mapFigure = document.getElementById("map-figure");
  const prevDir = document.getElementById("prev-dir");
  const nextDir = document.getElementById("next-dir");
  const lastAccess = document.getElementById("last-access");
  const topPath = document.getElementById("top-path");
  const statusRoute = document.getElementById("status-route");
  const statusHint = document.getElementById("status-hint");
  const clock = document.getElementById("clock");
  const chronicleTitle = document.getElementById("chronicle-title");
  const chronicleCount = document.getElementById("chronicle-count");
  const chronicleTimeline = document.getElementById("chronicle-timeline");
  const chronologyBody = document.getElementById("chronology-body");
  const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
  const filterResult = document.getElementById("filter-result");
  const dirScene = document.getElementById("dir-scene");
  const dirPlane = document.getElementById("dir-plane");
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentEra = null;
  let lastEra = null;
  let hasRendered = false;
  let resetTilt = () => {};
  let activeChronicleFilter = "all";
  let chronicleBuilt = false;

  function routeFromHash() {
    let route = "";
    try {
      route = decodeURIComponent(window.location.hash.replace(/^#\/?/, "")).trim();
    } catch {
      return null;
    }
    if (route === "chronicle") return "chronicle";
    return ERAS[route] ? route : null;
  }

  function setView(view) {
    directoryView.hidden = view !== "directory";
    detailView.hidden = view !== "detail";
    chronicleView.hidden = view !== "chronicle";
    document.body.dataset.view = view;
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function renderDirectory(options = {}) {
    setView("directory");
    document.body.dataset.era = "index";
    currentEra = null;
    resetTilt();

    topPath.textContent = "/";
    statusRoute.textContent = "INDEX / 03 ENTRIES";
    statusHint.textContent = "ENTER: OPEN · ↑↓: MOVE";
    document.title = "WEB/EVOLUTION — 互联网权限变更史";

    sideLinks.forEach((link) => link.removeAttribute("aria-current"));
    scrollToTop();

    if (options.focus) {
      const target =
        (lastEra && document.querySelector(`.dir-row[data-era="${lastEra}"]`)) || dirRows[0];
      if (target) {
        window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
      }
    }
  }

  function fillHeadline(lines) {
    const nodes = lines.map((line) => {
      const span = document.createElement("span");
      span.textContent = line;
      return span;
    });
    docTitle.replaceChildren(...nodes);
  }

  function fillBody(paragraphs) {
    const nodes = paragraphs.map((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      return p;
    });
    docBody.replaceChildren(...nodes);
  }

  function fillMeta(rows) {
    const nodes = rows.map(([label, value]) => {
      const row = document.createElement("div");
      row.className = "meta-row";

      const dt = document.createElement("dt");
      dt.textContent = label;

      const dd = document.createElement("dd");
      dd.textContent = value;

      row.append(dt, dd);
      return row;
    });
    docMeta.replaceChildren(...nodes);
  }

  function fillTags(tags) {
    const nodes = tags.map((tag) => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = tag;
      return span;
    });
    docTags.replaceChildren(...nodes);
  }

  function fillNotes(notes) {
    const nodes = notes.map((note) => {
      const li = document.createElement("li");
      li.textContent = note;
      return li;
    });
    docNotes.replaceChildren(...nodes);
  }

  function fillKeyDates(dates) {
    const nodes = dates.map(([year, label]) => {
      const li = document.createElement("li");
      const b = document.createElement("b");
      b.textContent = year;
      const span = document.createElement("span");
      span.textContent = label;
      li.append(b, span);
      return li;
    });
    docKeydates.replaceChildren(...nodes);
  }

  function fillFeatures(features) {
    const nodes = features.map(([number, title, text]) => {
      const card = document.createElement("article");
      card.className = "feature-card";

      const index = document.createElement("b");
      index.textContent = number;

      const heading = document.createElement("h3");
      heading.textContent = title;

      const copy = document.createElement("p");
      copy.textContent = text;

      card.append(index, heading, copy);
      return card;
    });
    docFeatures.replaceChildren(...nodes);
  }

  function fillDecentralization(data) {
    if (!data) {
      docDecentralization.hidden = true;
      docDecPoints.replaceChildren();
      return;
    }

    docDecentralization.hidden = false;
    docDecLede.textContent = data.lede;
    docDecQuote.textContent = data.quote;
    docDecCaveat.textContent = data.caveat;

    const nodes = data.points.map(([number, title, text]) => {
      const card = document.createElement("div");
      card.className = "dec-card";

      const index = document.createElement("b");
      index.textContent = number;

      const heading = document.createElement("h3");
      heading.textContent = title;

      const copy = document.createElement("p");
      copy.textContent = text;

      card.append(index, heading, copy);
      return card;
    });
    docDecPoints.replaceChildren(...nodes);
  }

  function renderDetail(era, options = {}) {
    const data = ERAS[era];
    currentEra = era;
    lastEra = era;

    setView("detail");
    document.body.dataset.era = era;

    docDir.textContent = data.dir;
    docIndex.textContent = data.index;
    docPeriod.textContent = data.period;
    docMode.textContent = data.mode;
    docVersion.textContent = data.version;
    docSummary.textContent = data.deck;
    docReading.textContent = data.reading;
    docProducts.textContent = data.products;
    docLimit.textContent = data.limit;
    mapMode.textContent = data.mapMode;
    mapCaption.textContent = data.mapCaption;
    mapFigure.textContent = data.index;
    if (lastAccess) lastAccess.textContent = data.dir;

    fillHeadline(data.headline);
    fillBody(data.body);
    fillMeta(data.meta);
    fillTags(data.stack);
    fillNotes(data.notes);
    fillKeyDates(data.keyDates);
    fillFeatures(data.features);
    fillDecentralization(data.decentralization);
    docQuote.textContent = data.quote;

    diagrams.forEach((diagram) => {
      diagram.hidden = diagram.dataset.diagram !== era;
    });

    sideLinks.forEach((link) => {
      if (link.dataset.era === era) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const index = ORDER.indexOf(era);
    const prevEra = ORDER[(index + ORDER.length - 1) % ORDER.length];
    const nextEra = ORDER[(index + 1) % ORDER.length];

    prevDir.href = `#/${prevEra}`;
    prevDir.querySelector("b").textContent = ERAS[prevEra].dir;
    nextDir.href = `#/${nextEra}`;
    nextDir.querySelector("b").textContent = ERAS[nextEra].dir;

    topPath.textContent = `/eras/${data.dir}/`;
    statusRoute.textContent = `ERA REPORT / ${data.dir}`;
    statusHint.textContent = "ESC: INDEX · ←→: SWITCH";
    document.title = `${data.dir} — WEB/EVOLUTION`;

    scrollToTop();

    if (options.focus) {
      window.requestAnimationFrame(() => docTitle.focus({ preventScroll: true }));
    }
  }

  function buildChronicle() {
    if (chronicleBuilt) return;

    const timelineFragment = document.createDocumentFragment();
    const tableFragment = document.createDocumentFragment();
    const counts = { all: CHRONICLE.length, web1: 0, web2: 0, web3: 0 };

    CHRONICLE.forEach((event) => {
      counts[event.era] += 1;

      const item = document.createElement("li");
      item.className = "chron-item";
      item.dataset.era = event.era;

      const year = document.createElement("span");
      year.className = "chron-year";
      year.textContent = event.year;

      const dot = document.createElement("span");
      dot.className = "chron-dot";
      dot.setAttribute("aria-hidden", "true");

      const copy = document.createElement("div");
      copy.className = "chron-copy";

      const era = document.createElement("span");
      era.className = "chron-era";
      era.textContent = ERA_LABELS[event.era];

      const title = document.createElement("h3");
      title.textContent = event.title;

      const text = document.createElement("p");
      text.textContent = event.text;

      copy.append(era, title, text);
      item.append(year, dot, copy);
      timelineFragment.append(item);

      const row = document.createElement("tr");
      row.className = "chronology-row";
      row.dataset.era = event.era;

      const yearCell = document.createElement("td");
      yearCell.textContent = event.year;

      const eraCell = document.createElement("td");
      const pill = document.createElement("span");
      pill.className = `era-pill era-pill-${event.era}`;
      pill.textContent = ERA_PILLS[event.era];
      eraCell.append(pill);

      const eventCell = document.createElement("td");
      eventCell.textContent = event.title;

      const significanceCell = document.createElement("td");
      significanceCell.textContent = event.significance;

      row.append(yearCell, eraCell, eventCell, significanceCell);
      tableFragment.append(row);
    });

    chronicleTimeline.replaceChildren(timelineFragment);
    chronologyBody.replaceChildren(tableFragment);

    filterButtons.forEach((button) => {
      const filter = button.dataset.filter;
      const count = button.querySelector("[data-count]");
      if (count) {
        count.textContent = filter === "all" ? String(CHRONICLE.length) : String(counts[filter]);
      }
      button.addEventListener("click", () => applyChronicleFilter(filter));
    });

    if (chronicleCount) chronicleCount.textContent = String(CHRONICLE.length);
    chronicleBuilt = true;
    applyChronicleFilter("all");
  }

  function applyChronicleFilter(filter) {
    activeChronicleFilter = filter;

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    let visible = 0;
    document.querySelectorAll(".chron-item").forEach((item) => {
      const matches = filter === "all" || item.dataset.era === filter;
      item.hidden = !matches;
      if (matches) visible += 1;
    });

    document.querySelectorAll(".chronology-row").forEach((row) => {
      row.hidden = filter !== "all" && row.dataset.era !== filter;
    });

    if (filterResult) {
      filterResult.textContent = `${visible} / ${CHRONICLE.length}`;
    }
  }

  function renderChronicle(options = {}) {
    buildChronicle();
    setView("chronicle");
    document.body.dataset.era = "index";
    currentEra = null;

    topPath.textContent = "/chronicle/";
    statusRoute.textContent = `CHRONICLE / ${CHRONICLE.length} EVENTS`;
    statusHint.textContent = "FILTER: ERA · ESC: INDEX";
    document.title = "互联网纪年 — WEB/EVOLUTION";

    sideLinks.forEach((link) => link.removeAttribute("aria-current"));
    applyChronicleFilter(activeChronicleFilter === "all" ? "all" : activeChronicleFilter);
    scrollToTop();

    if (options.focus && chronicleTitle) {
      window.requestAnimationFrame(() => chronicleTitle.focus({ preventScroll: true }));
    }
  }

  function render(options = {}) {
    const route = routeFromHash();
    if (route === "chronicle") {
      renderChronicle(options);
    } else if (route) {
      renderDetail(route, options);
    } else {
      renderDirectory(options);
    }
    hasRendered = true;
  }

  function handleRouteChange() {
    if (!hasRendered) return;
    render({ focus: true });
  }

  function focusDirectoryRow(index) {
    const bounded = (index + dirRows.length) % dirRows.length;
    dirRows[bounded].focus();
  }

  dirRows.forEach((row, index) => {
    row.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          focusDirectoryRow(index + 1);
          break;
        case "ArrowUp":
          event.preventDefault();
          focusDirectoryRow(index - 1);
          break;
        case "Home":
          event.preventDefault();
          focusDirectoryRow(0);
          break;
        case "End":
          event.preventDefault();
          focusDirectoryRow(dirRows.length - 1);
          break;
        default:
          break;
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    const view = document.body.dataset.view;

    if (event.key === "Escape" && (view === "detail" || view === "chronicle")) {
      event.preventDefault();
      window.location.hash = "#/";
      return;
    }

    if (view === "detail" && currentEra && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault();
      const index = ORDER.indexOf(currentEra);
      const delta = event.key === "ArrowRight" ? 1 : -1;
      const target = ORDER[(index + delta + ORDER.length) % ORDER.length];
      window.location.hash = `#/${target}`;
    }
  });

  function updateClock() {
    if (!clock) return;
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
    clock.setAttribute("datetime", now.toISOString());
  }

  function initMatrixRain() {
    const canvas = document.getElementById("matrix-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glyphs = "01{}[]<>/\\|=+-_$#@%&*ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉREADWRITEOWN";
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let fontSize = 14;
    let columnWidth = 16;
    let drops = [];
    let speeds = [];
    let frameId = 0;
    let lastTime = 0;
    let resizeTimer = 0;

    function fillBackground() {
      ctx.fillStyle = "#040705";
      ctx.fillRect(0, 0, width, height);
    }

    function drawStatic() {
      fillBackground();
      ctx.font = `${fontSize}px "Cascadia Code", Consolas, monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < drops.length; i += 2) {
        const x = i * columnWidth;
        const startY = (i * 97) % Math.max(height, 1);
        const length = 3 + ((i * 7) % 6);

        for (let j = 0; j < length; j += 1) {
          const y = startY + j * fontSize;
          if (y > height) break;
          ctx.fillStyle = `rgba(125, 255, 166, ${0.08 + j * 0.04})`;
          ctx.fillText(glyphs[(i + j * 5) % glyphs.length], x, y);
        }
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      fontSize = width < 640 ? 12 : 14;
      columnWidth = fontSize * 1.15;

      const columns = Math.ceil(width / columnWidth);
      drops = Array.from({ length: columns }, () => Math.random() * height);
      speeds = Array.from({ length: columns }, () => 0.7 + Math.random() * 2.1);
      ctx.font = `${fontSize}px "Cascadia Code", Consolas, monospace`;
      ctx.textBaseline = "top";

      if (reduceMotionQuery.matches) {
        drawStatic();
      } else {
        fillBackground();
      }
    }

    function drawFrame(now) {
      frameId = window.requestAnimationFrame(drawFrame);
      if (document.hidden || now - lastTime < 38) return;
      lastTime = now;

      ctx.fillStyle = "rgba(4, 7, 5, 0.12)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px "Cascadia Code", Consolas, monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const x = i * columnWidth;
        const y = drops[i];
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
        const isHead = Math.random() > 0.94;

        ctx.fillStyle = isHead ? "rgba(220, 255, 224, 0.62)" : "rgba(125, 255, 166, 0.4)";
        ctx.fillText(glyph, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = 0.7 + Math.random() * 2.1;
        } else {
          drops[i] += speeds[i];
        }
      }
    }

    function start() {
      if (reduceMotionQuery.matches) {
        if (frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }
        drawStatic();
        return;
      }

      if (!frameId) frameId = window.requestAnimationFrame(drawFrame);
    }

    function handleMotionPreference() {
      if (reduceMotionQuery.matches) {
        if (frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }
        drawStatic();
      } else {
        lastTime = 0;
        resize();
        start();
      }
    }

    resize();
    start();

    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(resize, 160);
      },
      { passive: true }
    );

    if (typeof reduceMotionQuery.addEventListener === "function") {
      reduceMotionQuery.addEventListener("change", handleMotionPreference);
    }
  }

  function initDirTilt() {
    if (!dirScene || !dirPlane || reduceMotionQuery.matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const baseX = 1.2;
    const baseY = -2.4;
    let targetX = baseX;
    let targetY = baseY;
    let currentX = baseX;
    let currentY = baseY;
    let frameId = 0;

    function tick() {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      dirPlane.style.setProperty("--tilt-x", `${currentX.toFixed(2)}deg`);
      dirPlane.style.setProperty("--tilt-y", `${currentY.toFixed(2)}deg`);

      const settled = Math.abs(targetX - currentX) < 0.01 && Math.abs(targetY - currentY) < 0.01;
      frameId = settled ? 0 : window.requestAnimationFrame(tick);
    }

    function schedule() {
      if (!frameId) frameId = window.requestAnimationFrame(tick);
    }

    function moveTo(x, y) {
      targetX = x;
      targetY = y;
      schedule();
    }

    function handlePointerMove(event) {
      const rect = dirScene.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

      moveTo(baseX - (y - 0.5) * 3.4, baseY + (x - 0.5) * 5.2);
    }

    function handlePointerLeave() {
      moveTo(baseX, baseY);
    }

    dirScene.addEventListener("pointermove", handlePointerMove, { passive: true });
    dirScene.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    resetTilt = () => {
      targetX = baseX;
      targetY = baseY;
      currentX = baseX;
      currentY = baseY;
      dirPlane.style.setProperty("--tilt-x", `${baseX}deg`);
      dirPlane.style.setProperty("--tilt-y", `${baseY}deg`);
    };
  }

  updateClock();
  window.setInterval(updateClock, 1000);
  buildChronicle();
  initMatrixRain();
  initDirTilt();

  const initialRoute = routeFromHash();
  if (window.location.hash && window.location.hash !== "#/" && !initialRoute) {
    window.history.replaceState(null, "", "#/");
  }

  window.addEventListener("hashchange", handleRouteChange);
  render({ focus: false });
})();
