import {Flex, Spin} from 'antd';
import React from 'react';
import {LoadingOutlined} from "@ant-design/icons";

const PageLoading: React.FC = () => {
    return (
        <div style={{ width:"100%", height: "70vh", textAlign: 'center' }}>
            <Flex justify={"center"} align={"center"} style={{ height: "70vh" }}>
                <Spin indicator={<LoadingOutlined />} size="large"/>
            </Flex>
        </div>
    );
};

export default PageLoading;