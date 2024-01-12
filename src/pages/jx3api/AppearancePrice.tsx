import React, {useEffect, useState} from 'react';
import { Flex, Card, Image, Table, Typography } from 'antd';
import { useSearchParams } from 'umi';
import {netAxios} from '@/utils/NetAxios';

// 推荐宽度800

/**
 * 外观物价组件
 */
const AppearancePrice: React.FC = () => {
    // 调用UMI API获取路由中的值
    const [searchParams, setSearchParams] = useSearchParams();
    // 初始化网络请求对象
    const net = new netAxios();
    const keyword = searchParams.get('keyword');
    const [originalData,setOriginalData] = useState([])
    const [tableSource,setTableSource] = useState([])
    useEffect(() => {
        getAppearancePriceData();
    }, []);

    const saleSelect = ["出售","收购","想出","想收","成交","正出","公示"]
    const sourceSelect = ["多多","WBL","废牛","小黑","贴吧","万宝楼"]

    // 异步获取招募数据
    async function getAppearancePriceData() {
        let appearancePrice = await net.get(`/api/appearance/price?name=${keyword}`);
        setOriginalData(appearancePrice.data);
        // 筛选出你需要的数据
        let clothesData = appearancePrice.data.data.flat();
        // @ts-ignore
        let filteredData = clothesData.filter(item =>
            ["出售","正出","收购","想出","想收"].includes(saleSelect[item.sales-1])
        );
        setTableSource(filteredData);
    }

    //表头
    const columns = [
        {
            title: '服务器',
            dataIndex: 'server',
            key: 'server',
            align: 'center',
        },
        {
            title: '价格',
            dataIndex: 'value',
            key: 'value',
            align: 'center',
        },
        {
            title: '状态',
            dataIndex: 'sales',
            key: 'sales',
            align: 'center',
            render: (sales:any) => {
                return(
                    <>{saleSelect[sales-1]}</>
                );
            }
        },
        {
            title: '来源',
            dataIndex: 'source',
            key: 'source',
            align: 'center',
            render: (source:any) => {
                return (
                    <>{sourceSelect[source-1]}</>
                );
            }
        },
        {
            title: '数据收录日期',
            dataIndex: 'datetime',
            key: 'datetime',
            align: 'center',
        },
    ];
    //假设下面的data=返回来的data
    // @ts-ignore
    const { name, alias, view, date, row } = originalData;
    return (
        <div>
            <Flex style={{ justifyContent: 'center' }}>
                <Card style={{ marginLeft: '5px', marginRight: '5px', marginTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            height={280}
                            width={480}
                            src={view}
                            // fallback="查无此图"
                            preview={false}
                        />
                        <div style={{ textAlign: 'center', marginLeft: '20px' }}>
                            <Typography.Text>{name}({alias})</Typography.Text>
                            {/* <p>{desc}</p> */}
                            <p>{date}发售，发售价{row}</p>
                        </div>
                    </div>
                </Card>
            </Flex>
            <Table
                style={{ marginLeft: 15, marginRight: 15, marginTop: 5 }}
                dataSource={tableSource}
                // @ts-ignore
                columns={columns}
                pagination={false}
                bordered={true}
            />
        </div>
    );

}
export default AppearancePrice;
