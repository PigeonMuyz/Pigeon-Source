import { Link, Outlet, useLocation } from 'umi';
import {Button, ConfigProvider, Layout, Menu, MenuProps, Space, Image, message, Affix, theme, Select, Flex} from 'antd';
import FooterBar from "@/components/index/footerBar";
import HeaderTitleBar from "@/components/index/headerTitleBar";
import {SiGitea, SiGithub} from "react-icons/si";
import React, {useState} from "react";
import {jxerThemes} from "@/config";

const { Header, Content, Footer } = Layout;

const App : React.FC = () => {

    const defaultLayoutStyle = { height: '97vh', width: '97vh' };
    const defaultContentStyle = {width: '97vh'};
    const theme1 = jxerThemes[0].theme;
    const theme2 ={
        // algorithm: theme.darkAlgorithm,
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
        }};
    const [theme, setTheme] = useState(theme1)
    let options=[
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
            disabled: true,
        },
        {
            value: 'wanh',
            label: '骚话紫',
            disabled: true,
        },
        {
            value: 'chuny',
            label: '咩咩蓝',
            disabled: true,
        },
        {
            value: 'shaol',
            label: '秃子黄',
            disabled: true,
        },
        {
            value: 'qixiu',
            label: '兔兔粉',
            disabled: true,
        },
        {
            value: 'wudu',
            label: '蛇哥紫',
            disabled: true,
        },
        {
            value: 'gaib',
            label: '天狗黄',
            disabled: true,
        },
        {
            value: 'lingx',
            label: '野猪红',
            disabled: true,
        },
        {
            value: 'yant',
            label: '算卦紫',
            disabled: true,
        },
        {
            value: 'yaoz',
            label: '狍子绿',
            disabled: true,
        },
        {
            value: 'tang',
            label: '熊猫蓝',
            disabled: true,
        },
        {
            value: 'cangy',
            label: '王八黄',
            disabled: false,
        },
    ];
    let buttonStyle = { paddingLeft: 7, paddingRight: 7 };
    let iconStyle = { marginTop: 1, fontSize: 18 };

    function themeChanged(value: any, option: any) {
        if (value === 'tianc'){
            setTheme(theme2);
        }else{
            setTheme(theme1)
        }
    }

    return (
        <ConfigProvider
            // @ts-ignore
            theme={theme}>
            <Layout>
                <Affix>
                    <Header style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                        <HeaderTitleBar/>
                        <Flex justify={'start'} gap={'small'} style={{ marginLeft: '40vh' }}>
                            <Select options={options} style={{ width: 100  }} onChange={(value, option) => themeChanged(value,option)} defaultValue={'changg'}/>
                            <Button style={buttonStyle} ><SiGithub style={iconStyle}/></Button>
                            <Button style={buttonStyle} ><SiGitea style={iconStyle}/></Button>
                        </Flex>
                    </Header>
                </Affix>
                <Content style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
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
