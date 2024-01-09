import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import {useSearchParams} from 'umi';
import {netAxios} from '@/utils/NetAxios';
import moment from 'moment';

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

/**
 * 团队招募组件
 */
const TeamActivitys : React.FC = () =>{
    // 提取链接中关键字
    const [searchParams, setSearchParams] = useSearchParams();
    const net = new netAxios();
    // 链接中的关键字/xxxx?keyword=*
    const keyword = searchParams.get('keyword');
    const nondict = searchParams.get('nondict');
    const server = searchParams.get('server');
    const [originalData,setOriginalData] = useState([])
    useEffect(() => {
        getTeamActivityData();
    }, []);

    async function getTeamActivityData() {
        let url = `/api/teamactivity?`;
        if (server) {
            url += `&server=${server}`;
        }
        if (server && keyword) {
            url += `&keyword=${keyword}`;
        }
        let teamActivity = await net.get(url);     
        let filteredData = nondict ? teamActivity.data.filter(item => !nondict.some(str => item['content'].includes(str))) : teamActivity.data;
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
        },
        {
            title: '队长',
            dataIndex: 'leader',
            key: 'leader',
            align: 'center',
        },
        {
            title: '人数',
            dataIndex: 'person',
            key: 'person',
            align: 'center',
            render: (item:any) =>{
                return(
                    <>{item.number}/{item.maxnumber}</>
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
