// 导航栏数据
export const getMenuList = () => {
    return [
        {
            name: "首页",
            href: "/",
            innerList: []
        },
        {
            name: "关于我们",
            href: "/about",
            innerList: [
                {
                    name: "公司简介",
                    href: "/companyProfile"
                },
                {
                    name: "联系我们",
                    href: "/contactUs"
                }
            ]
        },
        {
            name: "产品中心",
            href: "/goodsCenter",
            innerList: []
        },
        {
            name: "应用案例",
            href: "/applicationCases",
            innerList: []
        },
        {
            name: "新闻中心",
            href: "/newsCenter",
            innerList: []
        }
    ]
}
// 主页轮播图数据
export const getHomeBannerList = () => {
    return [{
        id: 0,
        imgUrl: "/static/img/AD0I5Z_5CRACGAAgluqn6AUo4OmdHzD6DjigBg1.jpg"
    }, {
        id: 1,
        imgUrl: "/static/img/AD0I5Z_5CRACGAAgluqn6AUo4OmdHzD6DjigBg2.jpg"
    }]
}
// 网站底部模块数据
export const getFooterMenu = () => {
    return {
        top: [{
            title: "客服QQ：",
            msg: "1105149059"
        },
            {
                title: "联系电话：",
                msg: "086-17865937390"
            },
            {
                title: "联系邮箱：",
                msg: "15506531157@163.com"
            }
        ],
        bottom: {
            itemTop: "©2019 网站模板-化工涂料 版权所有",
            itemBottom: "凡科建站提供技术支持\n |\n 管理登录"
        }
    }
}
// 关于我们下方模块数据
export const getAboutBottomList = () => {
    return [
        {
            id: 0,
            imgUrl: "/static/img/AD0I5Z_5CRAEGAAgnuqn6AUo5vfqoQQwZzhn.png.webp",
            title: "绿色环保",
            context: "以绿色环保涂料为主线，减少研发生产对环境的污染"
        }, {
            id: 1,
            imgUrl: "/static/img/AD0I5Z_5CRAEGAAgn_qn6AUoru_mATBlOGM.png.webp",
            title: "色彩稠度一致",
            context: "引进国外先进技术，解决不同批次的产品，产生色差、粘稠度不一致等问题"
        }, {
            id: 2,
            imgUrl: "/static/img/AD0I5Z_5CRAEGAAgn_qn6AUo9Z60lwEwXzhf.png.webp",
            title: "更新优化",
            context: "经验丰富的专业艺术漆研发队伍，每六个月研发一款新产品"
        }, {
            id: 3,
            imgUrl: "/static/img/AD0I5Z_5CRAEGAAgoeqn6AUoyYuu9QYwYzhk.png.webp",
            title: "产品定制",
            context: "为客户提供更贴 心更精准的产品定制，以满足不同客户不同的需求"
        },
    ]
}
// 案例展示内部轮播数据
export const getCaseShowBanner = () => {
    return [
        {
            id: 0,
            imgUrl: "/static/img/AD0I5Z_5CRACGAAgtvSn6AUorq343wUwvAU4kAM.jpg.webp"
        }, {
            id: 1,
            imgUrl: "/static/img/AD0I5Z_5CRACGAAgt-Sn6AUokMCUETC8BTiQAw.jpg.webp"
        }, {
            id: 2,
            imgUrl: "/static/img/AD0I5Z_5CRACGAAgt-Sn6AUow_ml8QIwvAU4kAM.jpg.webp"
        }
    ]
}
// 案例展示内部列表数据
export const getCaseShowList = () => {
    return [
        {
            id: 0,
            imgUrl: "/static/img/AD0I5Z_5CRAEGAAglOqn6AUoiKyT4QEwlgM4lgM.png.webp",
            title: "个性化艺术效果",
            msg: "主打产品干粉壁材是几种天然的材料通过创新工艺制造而成。可根据客户要求通过喷涂、辊涂、刮涂，进行个性化艺术造型处理，装饰效果与墙纸媲美。"
        }, {
            id: 1,
            imgUrl: "/static/img/AD0I5Z_5CRAEGAAglOqn6AUo6rXmowQwlQM4lgM.png.webp",
            title: "净化空气",
            msg: "产品本身做到有害物质外、通过苛刻的技术创新，分解甲醛，增加负离子含量，通过不断积累，每立方米空气中负离子净增加达93万个。"
        }, {
            id: 2,
            imgUrl: "/static/img/AD0I5Z_5CRAEGAAgleqn6AUokdyOwAIwlQM4lgM.png.webp",
            title: "优异环保和物理性能",
            msg: "产品特点是环保，是一款“零甲醛、零VOC、零有害物质”的环保型产品。同时耐擦洗及防霉等性能指标远超传统涂料、墙纸、硅藻泥的标准。"
        }
    ]
}
// 主页新闻模块数据
export const getHomeNewsList = () => {
    return [
        {
            id: 0,
            imgUrl: "/static/img/AD0I5Z_5CRACGAAg_-qr6AUon57ptwQwvQY4sAQ!700x700.jpg.webp",
            title: "中国涂料工业协会等发起绿色发展引导基金",
            date: "2019-06-19",
            context: "　　中国涂料工业协会与濮阳市人民政府“中涂合众涂料产业绿色发展(濮阳)引导基金合作签约仪式”26号在东莞举行。",
            tag: "企业动态",
            url: ""
        }, {
            id: 1,
            imgUrl: "/static/img/AD0I5Z_5CRACGAAg-Pqr6AUoqLOUqAEwvAY4sQQ!700x700.jpg.webp",
            title: "对不起！涂料产品也要开始涨价了！",
            date: "2019-06-19",
            context: "   进入10月份以来，有不少涂料企业开始承受不住原材料不断上涨的成本压力，陆续宣布对产品价格进行调整。",
            tag: "企业动态",
            url: ""
        }, {
            id: 2,
            imgUrl: "/static/img/AD0I5Z_5CRACGAAg-Pqr6AUoiP6AggQwvAY4sAQ!700x700.jpg.webp",
            title: "1-7月全国规模以上化工企业利润总额同比增长13.2%",
            date: "2019-06-19",
            context: "   1-7月份，全国规模以上工业企业实现利润总额35235.9亿元，同比增长6.9%，增速比1-6月份加快0.7个百分点。",
            tag: "企业动态",
            url: ""
        },
    ]
}
// 主页合作方logo数据
export const getHomeCompanyList = () => {
    return [
        {
            id: 0,
            imgUrl: "/static/img/footer1.png.webp"
        }, {
            id: 1,
            imgUrl: "/static/img/footer2.png.webp"
        }, {
            id: 2,
            imgUrl: "/static/img/footer3.png.webp"
        }, {
            id: 3,
            imgUrl: "/static/img/footer4.png.webp"
        }, {
            id: 4,
            imgUrl: "/static/img/footer5.png.webp"
        }, {
            id: 5,
            imgUrl: "/static/img/footer6.png.webp"
        }
    ]
}
// 企业实力数据
export const getOurNumberList = () => {
    return [
        {
            id: 0,
            top: "204",
            bottom: "环保涂料产品",
            topEnd: ""
        }, {
            id: 1,
            top: "1500",
            bottom: "生产研发基地面积",
            topEnd: "平方"
        }, {
            id: 2,
            top: "3000+",
            bottom: "合作加盟企业",
            topEnd: ""
        }, {
            id: 3,
            top: "50+",
            bottom: "专业研发人才",
            topEnd: ""
        },
    ]
}
// 联系我们表单规范数据
export const getFormList = () => {
    return [
        {
            id: 0,
            label: "姓名",
            name: "nikeName",
            placeholder: "请输入您的姓名",
            rules: [{required: true, message: '姓名不能为空！！！'}]
        }, {
            id: 1,
            label: "公司名称",
            name: "corporateName",
            placeholder: "请输入您的公司名称",
            rules: [{required: true, message: '公司名称不能为空！！！'}]
        }, {
            id: 2,
            label: "联系电话",
            name: "phone",
            placeholder: "请输入您的电话",
            rules: [{required: true, message: '联系电话不能为空！！！'}]
        }, {
            id: 3,
            label: "联系邮箱",
            name: "email",
            placeholder: "请输入您的邮箱地址",
            rules: [{required: true, message: '联系邮箱不能为空！！！'}]
        }, {
            id: 4,
            label: "留言",
            name: "message",
            placeholder: "请输入您的详细需求",
            rules: [{required: true, message: '留言不能为空！！！'}]
        }
    ]
}
// 产品展示数据
export const getProductList = () => {
    return [
        {
            id: 0,
            imgUrl: "/static/img/productI1.jpg",
            name: "进口金奖内墙面漆"
        }, {
            id: 1,
            imgUrl: "/static/img/productI2.jpg.webp",
            name: "进口外墙哑光面漆"
        }, {
            id: 2,
            imgUrl: "/static/img/productI3.jpg.webp",
            name: "净味色彩环保进口涂料"
        }, {
            id: 3,
            imgUrl: "/static/img/productI4.jpg.webp",
            name: "净味色彩环保涂料面漆"
        }, {
            id: 4,
            imgUrl: "/static/img/productI5.jpg.webp",
            name: "零VOC环保涂料底漆"
        }, {
            id: 5,
            imgUrl: "/static/img/productI6.jpg.webp",
            name: "零VOC抗菌环保涂料面漆"
        }, {
            id: 6,
            imgUrl: "/static/img/productI7.jpg.webp",
            name: "墙面涂料单桶"
        }, {
            id: 7,
            imgUrl: "/static/img/productI8.jpg.webp",
            name: "淳净内墙墙面乳胶漆"
        },
    ]
}
// 新闻中心下方列表数据
export const getNewBottomList = () => {
    return [
        {
            id: 0,
            title: "全球光学涂料产业 前景看好增速明显",
            msg: "市场研究机构Market Intel Reports日前发布一项研究报告显示,受汽车业、医疗业、军工业等领...",
            tag: "行业资讯",
            date: "2019-06-19"
        }, {
            id: 1,
            title: "艺术涂料行业瞄准中产消费市场",
            msg: "有业内人士指出，中国涂料市场已经开始饱和，内生增长的空间日益有限。因此，未来市场的主要增长不再依赖于扩张渗透，...",
            tag: "行业资讯",
            date: "2019-06-19"
        }, {
            id: 2,
            title: "装饰行业环保标准出台能终结家装污染吗？",
            msg: "购房、装修、入住，在健康意识不断被强化的当下，如何家装更环保、健康则成了人们关注的焦点问题之一。3月...",
            tag: "行业资讯",
            date: "2019-06-19"
        },
    ]
}