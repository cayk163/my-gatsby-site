import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
  {
    text: "im.bi 个人网站，表达个人对世界看法，价值观，记录生活的碎碎念！",
    url: "http://www.im.bi/",
    badge: true,
    description:
      "关于我们推荐空间关于我们推荐空间小吃培训关于我们 与射阳华讯软件公司达成合作协议《被困在末日的我成了一辆车》陪女打麻将（2002~至今的）门《价值》—— 张磊（创业者长期投资的故事）得力条码打印机DL-886BW驱动下载、兼容WinXp操作系统的驱动用手机、智能交换机和无线路由器、运行维护网络VLAN交换机、企业级路由器设置（一个拔号进虚拟专用网络的路由设置）《神奈氚冲浪里》漫画寻找互联网业务合作伙伴白宫网站撤了让访客提诉求入口，我更觉得可以主动找到更多的回应诉求的地方查看XP系统电脑拨号ADSL的密码少年人的鉴戒去马家荡玩，心理总结《唐宫夜宴》《你好，李焕英》别具一格，耳目一新！快鼠 享受智能语音的快感DRG第一轮分组结果反馈工作通知PDF（摘录部分，寻找懂DRG的朋友）国泰君安大智慧 行情浏览工具 寻找合作伙伴黑鲨装机大师 重装WINDOWS系统 支持在线安装 U 盘启动每天提高一点点（颈项痛的神奇的梦）良心网站 提供文档下载的网站，可以免费下载到 DS1700ii + 完整的手册！对保安打死外卖员悲剧的三重反思(副标题：对保安我有好感，但不喜欢仗势欺人的保安)痛惜！中国冰川探险第一人西藏冒险王意外离世融通马恩经典缺乏安全感的孩子，很可能有一个受害者思维的母亲自卑心是怎样把下一代教育成持续贫穷的？《父亲》观后感im.bi 国外域名正式启用15分钟彻底读懂中本聪比特币白皮书网络加密货币投资知识培训、资讯提前知道阜宁双宇，向贫困教会捐资。个体零售店，进销存，电脑小票出票软件励志人生 打造坚实双宇网络公司和送餐外卖公司合作，开发匹配到附近已拥有小程序的餐饮店阜宁双宇运作的项目，与我们合作的企业需知销售人员绩效管理，员工绩效考核软件，欢迎广大企事业单位免费试用与餐饮管理公司合作创立小吃培训学校网站阜宁双宇开始研究将",
    color: "#663399",
  },
  {
    text: "「CloudBase Webify 提供网站托管服务」",
    url: "https://webify.cloudbase.net/",
    badge: true,
    description:
      "Web应用托管 新建应用 my-gatsby-site Gatsby.js 静态网站托管 构建命令： npm run build 输出目录： public	public应用构建后，构建产物所在的目录（目录下通常会包含一个 index.html 文件，即网站首页）。目录内的所有文件将会发布至 Webify 安装命令：npm install",
    color: "#663399",
  },
  {
    text: "「Powered by CloudBase Webify」",
    url: "https://webify.cloudbase.net/",
    badge: true,
    description:
      "Web应用托管 新建应用 my-gatsby-site Gatsby.js 静态网站托管 构建命令： npm run build 输出目录： public	public应用构建后，构建产物所在的目录（目录下通常会包含一个 index.html 文件，即网站首页）。目录内的所有文件将会发布至 Webify 安装命令：npm install",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
