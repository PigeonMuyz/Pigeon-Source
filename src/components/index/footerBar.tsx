import React, {useEffect, useState} from 'react';
import {Flex, FloatButton, Typography, Tooltip, message,Popover,QRCode} from "antd";
import { MdOutlineExtension } from "react-icons/md";
import { SiTeamspeak, SiWechat } from "react-icons/si";
import copy from 'copy-to-clipboard';
const footerBar = () => {

    const [isMobile, setIsMobile] = useState(window.matchMedia("only screen and (max-width: 760px)").matches);

    useEffect(() => {
        const handler = () => setIsMobile(window.matchMedia("only screen and (max-width: 760px)").matches);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);
    let footerCopyright ;

    if (isMobile){
        footerCopyright = (
            <Flex vertical align={'center'} justify={'center'}>
                <Typography.Text type='secondary'>Copyright© 2023 <Typography.Link type="secondary" href='#'>PigeonUniversal</Typography.Link></Typography.Text>
                <Typography.Text type='secondary'>Design By <Typography.Link type="secondary" href='https://github.com/pigeonmuyz'>PigeonMuyz</Typography.Link></Typography.Text>
                <Typography.Text type='secondary'>开发中应用，不代表最终品质</Typography.Text>
            </Flex>
        );
    }else{
        footerCopyright = (
            <Flex vertical align={'center'} justify={'center'}>
                <Typography.Text type='secondary'>Copyright© 2020-2023 <Typography.Link type="secondary" href='#'>PigeonUniversal</Typography.Link></Typography.Text>
                <Typography.Text type='secondary'>Design By <Typography.Link type="secondary" href='https://github.com/pigeonmuyz'>PigeonMuyz</Typography.Link></Typography.Text>
                <Typography.Text type='secondary'>开发中应用，不代表最终品质</Typography.Text>
            </Flex>
        );
    }

    function handleFBGChange(open: boolean) {
        // console.log(open);
        // window.location
    }

    return (
        <div>
            {/* 此项是尾注，用不到备案号就别写 */}
            <div>
                {footerCopyright}
            </div>
            <FloatButton.Group
                trigger={'click'}
                shape="square"
                style={{right: 30}}
                onOpenChange={handleFBGChange}
                icon={<MdOutlineExtension />}
            >
                <Tooltip title={'点击复制TS地址'}>
                    <FloatButton icon={<SiTeamspeak />} onClick={() => {copy('voice.muyz.xyz');message["success"]("复制TS地址成功",2)}}/>
                </Tooltip>
                <Popover placement={'left'} content={<QRCode value={'https://u.wechat.com/EE3wZ7t8eYqfrLhlG2gTHM4'}/>}>
                    <FloatButton icon={<SiWechat />}/>
                </Popover>
                {/*<FloatButton/>*/}
                <FloatButton.BackTop visibilityHeight={400}/>
            </FloatButton.Group>
        </div>
    );
};

export default footerBar;