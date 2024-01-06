import { Link, Outlet, useLocation } from 'umi';
import {
    Button,
    ConfigProvider,
    Layout,
    Menu,
    MenuProps,
    Space,
    Image,
    message,
    Affix,
    Typography,
    theme,
    Select,
    Flex,
    Upload, QRCode
} from 'antd';
import FooterBar from "@/components/index/footerBar";
import {SiGitea, SiGithub} from "react-icons/si";
import React, {useEffect, useState} from "react";
import {jxerThemes,themeSelect} from "@/config";
import logo from '@/assets/logo.png'
import {
    CompassTwoTone,
    CopyTwoTone,
    CustomerServiceTwoTone,
    HomeTwoTone,
    QuestionCircleTwoTone,
    VideoCameraTwoTone
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { useToken } = theme;

const App : React.FC = () => {
    const themes = jxerThemes;
    const [theme, setTheme] = useState(themes[0].theme);
    const [selectValue, setSelectValue] = useState('changg');
    // 获取pathname
    const {pathname} = useLocation();
    const {token} = useToken();
    const [menuSelect, setMenuSelect] = useState('index');

    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia("only screen and (max-width: 760px)").matches);

    useEffect(() => {
        const handler = () => setIsMobile(window.matchMedia("only screen and (max-width: 760px)").matches);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    useEffect(() => {
        // 在小屏幕上自动折叠
        // setCollapsed(isMobile);
        if (isMobile && !pathname.includes("jx3api")) {
            message['info']("推荐切换到电脑端或者电脑模式体验完整功能", 2)
        }
    }, [isMobile]);

    useEffect(() => {
        const storedThemeKey = localStorage.getItem("defaultTheme");
        if (storedThemeKey) {
            const foundObject = themes.find(item => item.key === storedThemeKey);
            if (foundObject) {
                setTheme(foundObject.theme);
                setSelectValue(storedThemeKey); // 更新Select的值
            } else {
                // 如果没有找到匹配的主题，则使用默认主题
                setTheme(themes[0].theme);
            }
        }
    }, [themes]);
    let options = themeSelect;
    let menuItem = [
        {
            key: "index",
            label: "首页",
            // @ts-ignore
            icon: <HomeTwoTone twoToneColor={theme.token.colorPrimary}/>
        },
        {
            key: "jx3search",
            label: "剑三查询",
            // @ts-ignore
            icon: <CompassTwoTone twoToneColor={theme.token.colorPrimary}/>
        },
        {
            key: "music",
            label: "音乐",
            // @ts-ignore
            icon: <CustomerServiceTwoTone twoToneColor={theme.token.colorPrimary}/>
        },
        {
            key: "video",
            label: "视频",
            // @ts-ignore
            icon: <VideoCameraTwoTone twoToneColor={theme.token.colorPrimary}/>
        },
        {
            key: "blog",
            label: "博客",
            // @ts-ignore
            icon: <CopyTwoTone twoToneColor={theme.token.colorPrimary}/>
        },
        {
            key: "help",
            label: "帮助",
            // @ts-ignore
            icon: <QuestionCircleTwoTone twoToneColor={theme.token.colorPrimary}/>
        }
    ]
    const location = useLocation();
    let buttonStyle = {paddingLeft: 7, paddingRight: 7};
    let iconStyle = {marginTop: 1, fontSize: 18};

    function themeChanged(value: any, option: any) {
        const foundObject: any = jxerThemes.find(item => item.key === value) || jxerThemes[0];
        localStorage.setItem("defaultTheme", value);
        setTheme(foundObject.theme);
        setSelectValue(value); // 更新Select的值
    }

    const onClick: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case "index":
                break;
            case "jx3search":
                message["info"]("即将到来", 2);
                setMenuSelect("index");
                break;
            case "music":
                message["info"]("即将到来", 2);
                setMenuSelect("index");
                break;
            case "video":
                message["info"]("即将到来", 2);
                setMenuSelect("index");
                break;
            case "blog":
                message["info"]("即将到来", 2);
                setMenuSelect("index");
                break;
            case "help":
                message["info"]("即将到来", 2);
                setMenuSelect("index");
                break;
        }
        // setMenuSelect(e.key);
    };

    //链接包含jx3api就渲染这个
    if (pathname.includes('jx3api')) {
        return (
            <Layout>
                <Content>
                    <Outlet />
                </Content>
                {/* 脚注（必带！） */}
                <Footer style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '120px',
                    paddingTop: '0',
                    paddingRight: '5px',
                }}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                        <Typography.Text style={{ marginBottom: 0, alignSelf: 'flex-end' }}>
                            Pigeon Universal
                        </Typography.Text>
                        <Typography.Text style={{ marginTop: 0, alignSelf: 'flex-start' }}>
                            Design by 飞龙在天 渡清欢
                        </Typography.Text>
                    </div>
                    <QRCode value={'https://www.muyz.xyz'} size={80} bordered={false} style={{ marginLeft: '5px', marginTop: '30px' }}/>
                </Footer>
            </Layout>
        );
    }

    // 宽屏显示元素
    let desktopScreen = <Space align={'center'} size={100}>
        <div className={'logo'} style={{marginLeft: 30}}>
            <Image
                width={70}
                height={50}
                src={logo}
            />
        </div>
        <div style={{ marginLeft: 'auto' }}>
            <Menu
                mode={'horizontal'}
                selectedKeys={[menuSelect]}
                items={menuItem}
                onClick={onClick}
                inlineCollapsed={collapsed}
            />
        </div>
    </Space>;

    let inOutButton = <Flex justify={'end'} gap={'small'} style={{marginLeft:'auto'}}>
        <Button>
            导出
        </Button>
        <Upload>
            <Button>
                导入
            </Button>
        </Upload>
    </Flex>;

    return (
        <ConfigProvider
            // @ts-ignore
            theme={theme}>
            <Layout>
                <Affix>
                    <Header style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                        {isMobile ? null: desktopScreen}
                        {inOutButton}
                        <Flex justify={'start'} gap={'small'} style={{marginLeft: 'auto'}}>
                            <Select value={selectValue} options={options} style={{width: 100}}
                                    onChange={(value, option) => themeChanged(value, option)} defaultValue={'changg'}/>
                            <Button style={buttonStyle} href={'https://github.com/pigeonmuyz'}><SiGithub
                                style={iconStyle}/></Button>
                            {/*<Button style={buttonStyle} ><SiGitea style={iconStyle}/></Button>*/}
                        </Flex>
                    </Header>
                </Affix>
                <Content style={{marginLeft: 10, marginRight: 10, marginTop: 20}}>
                    <Outlet/>
                </Content>
                <Footer>
                    <FooterBar/>
                </Footer>
            </Layout>
        </ConfigProvider>
    );
}

export default App;
