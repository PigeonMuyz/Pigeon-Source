import React, {useEffect, useState} from 'react';
import {Image, Table} from 'antd';
import {useSearchParams} from 'umi';
import {netAxios} from '@/utils/NetAxios';
import moment from 'moment';
import {FaCoins} from "react-icons/fa6";
import zhuan from '@/assets/jinzhuan.png'
import jin from '@/assets/jin.png'
import yin from '@/assets/yin.png'

interface OriginalDataItem {
    item_IconID: number;
    item_Name: string;
    item_Price: {
        n_count: number;
        unit_price: number;
        created: string; // Assuming 'created' is a string, adjust accordingly
    }[];
}

/**
 * 交易行物价组件
 */
const ItemPrices : React.FC = () =>{
    // 提取链接中关键字
    const [searchParams, setSearchParams] = useSearchParams();
    const net = new netAxios();
    // 链接中的关键字/xxxx?keyword=*
    const keyword = searchParams.get('keyword');
    const server = searchParams.get('server');
    const [originalData,setOriginalData] = useState([])
    useEffect(() => {
        getItemPriceData();
    }, []);
    async function getItemPriceData() {
        const itemPrice = await net.get(`/gold/item?keyword=${keyword}&server=${server}`);
        setOriginalData(itemPrice.data);
    }
    // 参考数据
    const dataSource = (originalData as OriginalDataItem[]).flatMap(item =>
        item.item_Price.map(price => ({
            item_IconID: item.item_IconID,
            item_Name: item.item_Name,
            n_count: price.n_count,
            unit_price: price.unit_price,
            created: price.created
        }))
    );
    //交易行价格表头
    const columns = [
        {
            title: '',
            dataIndex: 'item_IconID',
            key: 'item_IconID',
            align: 'center',
            render: (item_IconID:any) =>{
                return(
                    <Image preview={false} src={`https://icon.jx3box.com/icon/${item_IconID}.png`}></Image>
                );
            }
        },
        {
            title: '物品名称',
            dataIndex: 'item_Name',
            key: 'item_Name',
            align: 'center',
        },
        {
            title: '数量',
            dataIndex: 'n_count',
            key: 'n_count',
            align: 'center',
        },
        {
            title: '单价',
            dataIndex: 'unit_price',
            key: 'unit_price',
            align: 'center',
            render: (unit_price: any) => {
                let z = Math.floor(unit_price / 100000000);
                let gold = Math.floor((unit_price % 100000000) / 10000);
                let silver = Math.floor((unit_price % 10000) / 100);
                return (
                    <>
                        {z > 0 && <>{z}
                            <Image preview={false} src={zhuan}></Image>
                        </>}
                        {gold > 0 && <>{gold}
                            <Image preview={false} src={jin}></Image>
                        </>}
                        {silver > 0 && <>{silver}
                            <Image preview={false} src={yin}></Image>
                        </>}
                    </>
                );
            }
        },
        {
            title: '上架时间',
            dataIndex: 'created',
            key: 'created',
            align: 'center',
            render: (created:any) => {
                return moment.unix(created).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    ];

    return(
        <div>
            <Table
                style={{marginLeft: 15, marginRight: 15, marginTop: 5}}
                dataSource={dataSource}
                // @ts-ignore
                columns={columns}
                pagination={false}
                bordered={true}
            />
        </div>
    );
}
export default ItemPrices;