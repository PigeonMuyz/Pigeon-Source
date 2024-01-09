import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import {useSearchParams} from 'umi';
import {netAxios} from '@/utils/NetAxios';
import moment from 'moment';

/**
 * 定义返回值数据结构
 */
interface OriginalDataItem {
    activityId: number;
    activity: string;
    level: number;
    leader: string;
    pushId: number;
    roleId: number;
    createTime: number;
    number: number;
    maxNumber: number;
    label: [];
    content: string;
}

// 推荐宽度1200

/**
 * 团队招募组件
 */
const TeamActivitys : React.FC = () =>{
    // 调用UMI API获取路由中的值
    const [searchParams, setSearchParams] = useSearchParams();
    // 初始化网络请求对象
    const net = new netAxios();
    const keyword = searchParams.get('keyword');
    let nondict = searchParams.get('nondict');
    nondict = nondict ? JSON.parse(nondict) : null;
    const server = searchParams.get('server');
    const [originalData,setOriginalData] = useState([])
    /**
     * 只在初始化渲染时运行
     */
    useEffect(() => {
        getTeamActivityData();
    }, []);

    // 异步获取招募数据
    async function getTeamActivityData() {
        let url = `/api/teamactivity?`;
        if (server) {
            url += `server=${server}`;
        }
        if (server && keyword) {
            url += `&keyword=${keyword}`;
        }
        let teamActivity = await net.get(url);
        let filteredData = nondict ? teamActivity.data.data.filter(item => !nondict.some(str => item['content'].includes(str))) : teamActivity.data.data;
        setOriginalData(filteredData);
    }
    const columns = [
        {
            title: '活动名称',
            dataIndex: 'activity',
            key: 'activity',
            align: 'center',
        },
        {
            title: '等级',
            dataIndex: 'level',
            key: 'level',
            align: 'center',
            width: 80,
        },
        {
            title: '队长',
            dataIndex: 'leader',
            key: 'leader',
            align: 'center',
            width: 180,
        },
        {
            title: '人数',
            key: 'person',
            align: 'center',
            width: 70,
            render: (item:any) =>{
                return(
                    <>{item.number}/{item.maxNumber}</>
                );
            }
        },
        {
            title: '招募信息',
            dataIndex: 'content',
            key: 'content',
            align: 'center',
        },
        {
            title: '创建招募时间',
            dataIndex: 'createTime',
            key: 'createTime',
            align: 'center',
            width: 120,
            render: (createTime:any) => {
                return moment.unix(createTime).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    ];

    return(
        <div>
            <Table
                style={{marginLeft: 15, marginRight: 15, marginTop: 5}}
                dataSource={originalData}
                // @ts-ignore
                columns={columns}
                pagination={false}
                bordered={true}
            />
        </div>
    );
}
export default TeamActivitys;
