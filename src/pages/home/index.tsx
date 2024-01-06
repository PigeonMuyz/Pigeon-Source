import {Button, Card, Flex,Typography, Image} from "antd";
import {useLocation} from "umi";
import { starfolder } from "@/config";

interface UrlItem {
    country: string;
    url: string;
}

interface StarItem {
    title: string;
    type: string;
    urls: {
        type: string;
        title: string;
        comments: string;
        icon: string;
        urls: UrlItem[];
    }[];
}

interface CustomCardProps {
    title: string;
    type: string;
    urls: StarItem['urls'];
    origin: string;
}

const cardStyle = { width: 300, margin: 10 };
const {origin} = window.location

const CustomCard: React.FC<CustomCardProps> = ({ title,type, urls, origin }) => (
    <Card hoverable style={cardStyle} title={title}>
        <Flex wrap={'wrap'} gap={'middle'} style={{ marginLeft: 10 }}>
            {urls.map((item, index) => {
                let buttonHref = item.urls.find((urlItem: UrlItem) => {
                    if (origin.includes('www.muyz.xyz')) {
                        return urlItem.country === 'Tokyo';
                    } else if (origin.includes('api.muyz')) {
                        return urlItem.country === 'China';
                    }
                    return urlItem.country === 'default';
                });

                // 添加检查以确保 buttonHref 存在
                if (buttonHref) {
                    return (
                        <Button key={index} size="small" style={{ height: 60, paddingTop: 5, paddingBottom: 5 }} href={buttonHref.url} target="_blank">
                            <Flex justify="space-between">
                                {/* 图标 */}
                                <div style={{ width: 50, height: 30 }}>
                                    {item.icon ? (
                                        item.icon
                                    ) : (
                                        <Image src={buttonHref.url + '/favicon.ico'} width={40} preview={false} />
                                    )}
                                </div>
                                {/* 解释性文字 */}
                                <Flex vertical align="flex-start" justify="center" style={{ marginLeft: 5 }}>
                                    <Typography.Text>{item.title}{(type ==='pigeonUni' ? (buttonHref.country === 'China' ? "（国内）":buttonHref.country ==='Tokyo' ? "（东京）":"（内部）"):null)}</Typography.Text>
                                    <Typography.Text type={'secondary'} style={{ fontSize: 12 }}>{item.comments}</Typography.Text>
                                </Flex>
                            </Flex>
                        </Button>
                    );
                }

                return null; // 如果找不到匹配项，则返回 null
            })}
        </Flex>
    </Card>
);

const HomePage : React.FC = () =>{
    return(
        <Flex justify={"center"} align={"start"} wrap="wrap">
            {starfolder.map((item, index) => (
                <CustomCard key={index}
                            title={item.title}
                            type={item.type||''}
                            // @ts-ignore
                            urls={item.urls}
                            origin={origin}/>
            ))}
        </Flex>
    );
}
export default HomePage;