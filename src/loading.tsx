import { Spin } from 'antd';
import React from 'react';

const PageLoading: React.FC = () => {
    return (
        <div style={{ paddingTop: 100, textAlign: 'center' }}>
            <Spin tip="加载中..." size="large" />
        </div>
    );
};

export default PageLoading;