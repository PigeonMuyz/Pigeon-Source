import React, {useState} from 'react';
import {Select, Button, Flex, Image, Menu, Space, MenuProps, message, ConfigProvider} from "antd";
import { SiGithub, SiGitea } from "react-icons/si";
import {
    CompassTwoTone,
    CopyTwoTone,
    CustomerServiceTwoTone,
    HomeTwoTone,
    QuestionCircleTwoTone,
    VideoCameraTwoTone
} from "@ant-design/icons";
import {useLocation} from "@@/exports";

const headerTitleBar = () => {
    let menuItem = [
        {
            key: "index",
            label: "首页",
            icon: <HomeTwoTone />
        },
        {
            key: "jx3search",
            label: "剑三查询",
            icon: <CompassTwoTone />
        },
        {
            key: "music",
            label: "音乐",
            icon: <CustomerServiceTwoTone />
        },
        {
            key: "video",
            label: "视频",
            icon: <VideoCameraTwoTone />
        },
        {
            key: "blog",
            label: "博客",
            icon: <CopyTwoTone />
        },
        {
            key: "help",
            label: "帮助",
            icon: <QuestionCircleTwoTone />
        }
    ]
    const [menuSelect, setMenuSelect] = useState('index');
    const location = useLocation();
    const onClick: MenuProps['onClick'] = (e) => {
        switch (e.key){
            case "index":
                break;
            case "jx3search":
                message["info"]("即将到来",2);
                setMenuSelect("index");
                break;
            case "music":
                message["info"]("即将到来",2);
                setMenuSelect("index");
                break;
            case "video":
                message["info"]("即将到来",2);
                setMenuSelect("index");
                break;
            case "blog":
                message["info"]("即将到来",2);
                setMenuSelect("index");
                break;
            case "help":
                message["info"]("即将到来",2);
                setMenuSelect("index");
                break;
        }
        // setMenuSelect(e.key);
    };
    return (
        <div>
            <Space align={'center'} size={100}>
                <div className={'logo'} >
                    <Image
                        width={150}
                        height={50}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                <Menu
                    mode={'horizontal'}
                    selectedKeys={[menuSelect]}
                    items={menuItem}
                    onClick={onClick}
                />
            </Space>
        </div>
    );
};

export default headerTitleBar;
