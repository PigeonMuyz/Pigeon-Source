// 书签控制
import {HiOutlineLibrary} from "react-icons/hi";
import {SiAntdesign, SiGitea, SiGithub, SiReddit, SiRedis, SiTraefikproxy, SiWindows95} from "react-icons/si";
import {TbBrandOnedrive, TbJson} from "react-icons/tb";
import {BsCupHot} from "react-icons/bs";
import {MdOndemandVideo} from "react-icons/md";
import {FaRegImages, FaStackOverflow} from "react-icons/fa6";
import {IoLogoOctocat} from "react-icons/io5";
import {FaBookReader} from "react-icons/fa";

export const starfolder = [
    {
        title: "Pigeon Universal",
        type: "pigeonUni",
        urls: [
            {
                title: "Pigeon Git",
                comments: "Pigeon自建的代码仓库",
                icon: <SiGitea style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "China",
                        url: "http://api.muyz.xyz:65525"
                    },
                    {
                        country: "Tokyo",
                        url: "https://coding.muyz.xyz"
                    },
                    {
                        country: "default",
                        url: "http://pigeon-server-developer:65535",
                    }
                ]
            },
            {
                title: "Pigeon Drive",
                comments: "自建网盘，提供WebDav服务",
                icon: <TbBrandOnedrive style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "China",
                        url: "http://api.muyz.xyz:26666"
                    },
                    {
                        country: "Tokyo",
                        url: "https://pan.muyz.xyz"
                    },
                    {
                        country: "default",
                        url: "http://pigeon-fileserver:5244"
                    }
                ]
            },
            {
                title: "Pigeon Library",
                comments: "Pigeon图书馆，收录需提交",
                icon: <HiOutlineLibrary style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "China",
                        url: "http://api.muyz.xyz:65527"
                    },
                    {
                        country: "Tokyo",
                        url: "https://book.muyz.xyz"
                    },
                    {
                        country: "default",
                        url: "http://pigeon-server-web:65534"
                    }
                ]
            },
            {
                title: "Pigeon Git",
                comments: "Pigeon自建的代码仓库",
                icon: "",
                urls:[
                    {
                        country: "China",
                        url: "http://api.muyz.xyz:65525"
                    },
                    {
                        country: "Tokyo",
                        url: "https://coding.muyz.xyz"
                    }
                ]
            },
            {
                title: "Pigeon Comic",
                comments: "鸽子漫画，收录需提交",
                icon: <FaBookReader style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "China",
                        url: "http://api.muyz.xyz:65525"
                    },
                    {
                        country: "Tokyo",
                        url: "https://comic.muyz.xyz"
                    },
                    {
                        country: "default",
                        url: "http://pigeon-server-developer:65531"
                    }
                ]
            },
            {
                title: "Redis Manager",
                comments: "内部Redis网页管理端",
                icon: <SiRedis style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "http://pigeon-server-developer:8089"
                    }
                ]
            },
            {
                title: "Pigeon 图床",
                comments: "服务各项子服务的图床",
                icon: <FaRegImages style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "http://pigeon-server-developer:40027"
                    }
                ]
            },
        ]
    },
    {
        title: "Coderの最爱",
        type: "codersfavorite",
        urls: [
            {
                title: "Github",
                comments: "全球最大的Git仓库之一",
                icon: <SiGithub style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://github.com"
                    },
                ]
            },
            {
                title: "GHProxy（中国镜像）",
                comments: "别问为什么要镜像，问就是别问",
                icon: <SiTraefikproxy style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://mirror.ghproxy.com"
                    },
                ]
            },
            {
                title: "StackOverflow",
                comments: "全球最大的技术问题讨论站之一",
                icon: <FaStackOverflow style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://stackoverflow.com"
                    },
                ]
            },
            {
                title: "Reddit",
                comments: "全球最大的论坛之一",
                icon: <SiReddit style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://www.reddit.com"
                    },
                ]
            },
            {
                title: "BeJson",
                comments: "在线格式化&校验JSON",
                icon: <TbJson style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://www.bejson.com"
                    },
                ]
            },
            {
                title: "Ant Design",
                comments: "阿里对外开放的组件库",
                icon: <SiAntdesign style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "china",
                        url: "https://ant-design.antgroup.com"
                    },
                    {
                        country: "default",
                        url: "https://ant.design"
                    }
                ]
            }
        ]
    },
    {
        title: "影视",
        type: "videos",
        urls: [
            {
                title: "哔滴影视",
                comments: "运营超三年的老牌网站",
                icon: <MdOndemandVideo style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://bdys.me"
                    },
                ]
            },
            {
                title: "茶杯狐",
                comments: "资源较少但也不是不能用",
                icon: <BsCupHot style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://cupfox.app"
                    },
                ]
            },
            {
                title: "BT之家",
                comments: "中文BT论坛，堪比rarbg",
                icon: "",
                urls:[
                    {
                        country: "default",
                        url: "https://btbtt15.com"
                    },
                ]
            },
        ]
    },
    {
        title: "软件资源",
        type: "softwares",
        urls: [
            {
                title: "果核剥壳",
                comments: "稳定的高质量软件站",
                icon: "",
                urls:[
                    {
                        country: "default",
                        url: "https://ghxi.com"
                    },
                ]
            },
            {
                title: "佛系软件",
                comments: "好用但需要夸克或者百度会员",
                icon: "",
                urls:[
                    {
                        country: "default",
                        url: "https://foxirj.com"
                    },
                ]
            },
            {
                title: "远景论坛",
                comments: "中文高质量技术论坛(不开放注册)",
                icon: "",
                urls:[
                    {
                        country: "default",
                        url: "https://bbs.pcbeta.com"
                    },
                ]
            },
            {
                title: "MSDN，I tell you",
                comments: "下载原版Windows镜像站",
                icon: <SiWindows95 style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://next.itellyou.cn"
                    },
                ]
            },
        ]
    },
    {
        title: "小工具",
        type: "usefultools",
        urls: [
            {
                title: "白描OCR",
                comments: "免费高质量的图片转文字",
                icon: <IoLogoOctocat style={{ fontSize: 40 }}/>,
                urls:[
                    {
                        country: "default",
                        url: "https://web.baimiaoapp.com"
                    },
                ]
            },
        ]
    },
];

// 主题控制
export const jxerThemes = [
    {
        key: "changg",
        theme:{
            // algorithm: theme.darkAlgorithm,
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#209e9e",
                colorInfo: "#209e9e",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }}
    },
    {
        key: "tianc",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#911721",
                colorInfo: "#911721",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "pengl",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#828282",
                colorInfo: "#828282",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "wanh",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#8c1282",
                colorInfo: "#8c1282",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "chuny",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#329acf",
                colorInfo: "#329acf",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "shaol",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#cf7300",
                colorInfo: "#cf7300",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "qixiu",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#d43353",
                colorInfo: "#d43353",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "wudu",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#422599",
                colorInfo: "#422599",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "gaib",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#d96518",
                colorInfo: "#d96518",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "lingx",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#9e0d11",
                colorInfo: "#9e0d11",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "yant",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#3a0091",
                colorInfo: "#3a0091",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "yaoz",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#29a37e",
                colorInfo: "#29a37e",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "tang",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#253b94",
                colorInfo: "#253b94",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "cangy",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#800911",
                colorInfo: "#800911",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "badao",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#2b22a8",
                colorInfo: "#2b22a8",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "daoz",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#1c408a",
                colorInfo: "#1c408a",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
    {
        key: "wanling",
        theme:{
            components: {
                Layout: {
                    // bodyBg: "#ffffff",
                    headerBg: "#FFFFFF",
                    // footerBg: "#FFFFFF",
                }
            }
            ,token: {
                colorPrimary: "#d19200",
                colorInfo: "#d19200",
                borderRadius: 10,
                colorError: "#fd7d7e",
                colorSuccess: "#7adf47",
                colorWarning: "#ecbe67",
                fontSize: 15,
            }
        }
    },
];

// 主题选择器
export const themeSelect = [
    {
        value: 'changg',
        label: '鸽子绿',
        disabled: false,
    },
    {
        value: 'tianc',
        label: '二哈红',
        disabled: false,
    },
    {
        value: 'pengl',
        label: '鸟人灰',
        disabled: false,
    },
    {
        value: 'wanh',
        label: '骚话紫',
        disabled: false,
    },
    {
        value: 'chuny',
        label: '咩咩蓝',
        disabled: false,
    },
    {
        value: 'shaol',
        label: '秃子黄',
        disabled: false,
    },
    {
        value: 'qixiu',
        label: '兔兔粉',
        disabled: false,
    },
    {
        value: 'wudu',
        label: '蛇哥紫',
        disabled: false,
    },
    {
        value: 'gaib',
        label: '天狗黄',
        disabled: false,
    },
    {
        value: 'lingx',
        label: '野猪红',
        disabled: false,
    },
    {
        value: 'yant',
        label: '算卦紫',
        disabled: false,
    },
    {
        value: 'yaoz',
        label: '狍子绿',
        disabled: false,
    },
    {
        value: 'tang',
        label: '熊猫蓝',
        disabled: false,
    },
    {
        value: 'cangy',
        label: '王八红',
        disabled: false,
    },
    {
        value: 'badao',
        label: '貂皮紫',
        disabled: false,
    },
    {
        value: 'daoz',
        label: '鹦鹉蓝',
        disabled: false,
    },
    {
        value: 'wanling',
        label: '乘黄黄',
        disabled: false
    }
];