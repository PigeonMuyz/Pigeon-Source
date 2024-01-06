import React, {useEffect, useState} from 'react';
import {Table, Card, Flex, Typography, Avatar} from 'antd';
import {useSearchParams} from 'umi';
import {netAxios} from '@/utils/NetAxios';

const {Meta} = Card;
/**
 * 个人信息组件
 */
const CharacterInfoPage : React.FC = () =>{

    const [userInfo, setUserInfo] = useState({
        personName: '',
        personAvatar: '',
        tongName: '',
        campName: '',
        bodyName: '',
        forceName: '',
        serverName: '',
        roleName: ''
    });

    const [equipInfo, setEquipInfo] = useState();

    const [luckInfo, setLuckInfo] = useState<number[]>([]);
    const net = new netAxios();
    // 提取链接中关键字
    const [searchParams, setSearchParams] = useSearchParams();
    // 链接中的关键字/xxxx?keyword=*
    const username = searchParams.get('username');
    const server = searchParams.get('server');

    useEffect(() => {
        getUserInfoData();
        getEquipInfoData();
        getLuckInfoData();
    }, []);
    async function getUserInfoData() {
            const userInfo = await net.get(`/api/role/detailed?name=${username}&server=${server}`);
            setUserInfo(userInfo.data);
    }
    async function getEquipInfoData(){
        const equipInfo = await net.get(`/api/role/attribute?name=${username}&server=${server}`)
        setEquipInfo(equipInfo.data.panelList.score)
    }
    async function getLuckInfoData(){
        const luckInfo = await net.get(`/api/luck/player?name=${username}&server=${server}&filter=1`)
        console.log(luckInfo)
        setLuckInfo([countKey(luckInfo.data,"level",1)||0,countKey(luckInfo.data,"level",2)||0,countKey(luckInfo.data,"level",3)||0])
    }

    function countKey(arr:[], key:any, value:any) {
        return arr.reduce((total, obj) => obj[key] === value ? total + 1 : total, 0);
    }
    // 角色信息中取personName,personAvatar,tongName,campName,bodyName,forceName,serverName,roleName
    // 装备统计中取个总装分
    // 奇遇的data全拉出来按元素分类
    const {personName, personAvatar, tongName, campName, bodyName, forceName, serverName, roleName} = userInfo;
        return(

            <div>
                <Card
                    style={{ width: "auto" }}
                    // cover={
                    //     <img
                    //         // alt="example"
                    //         src="http://pigeon-server-developer:40027/i/2024/01/06/65995678811ad.png"
                    //     />
                    // }
                >
                    <Meta
                        avatar={<Avatar shape={"square"} size={45} src="https://qdla.pvp.xoyo.com/prod/avatar/tmp/3ec4d6687cd442328fda86d472c47bfe/avatar.jpg/9d4597831b3341139cd3d7d5fcb52781.jpg" />}
                        title={
                            <div>
                            <Flex vertical>
                                <Typography.Text>
                                    {roleName}（{personName}）
                                </Typography.Text>
                                <Typography.Text type={'secondary'}>
                                    {forceName} {bodyName}
                                </Typography.Text>
                            </Flex>
                            </div>
                        }
                        description={
                            <div>
                                <Flex vertical>
                                    <Typography.Text type={'secondary'}>
                                        来自 {serverName} {campName}帮会《{tongName}》
                                    </Typography.Text>
                                    <Typography.Text type={'secondary'}>
                                        目前装备评分：{equipInfo}
                                    </Typography.Text>
                                    <Typography.Text type={'secondary'}>
                                        绝世奇遇：{luckInfo[1]}
                                    </Typography.Text>
                                    <Typography.Text type={'secondary'}>
                                        普通奇遇：{luckInfo[0]}
                                    </Typography.Text>
                                    <Typography.Text type={'secondary'}>
                                        宠物奇遇：{luckInfo[2]}
                                    </Typography.Text>
                                </Flex>
                            </div>
                        }
                    />
                </Card>
            </div>
        );
}
export default CharacterInfoPage;