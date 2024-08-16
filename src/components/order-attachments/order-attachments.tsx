import { List, Skeleton, UploadFile } from 'antd';
import { DownloadOutlined } from "@ant-design/icons"
import ImageFileFormat from './image-file-format';
import BlockTitle from '../block-title/block-title';

const fileList: UploadFile[] = [
    {
        uid: '0',
        name: 'xxx.png',
        status: 'uploading',
        percent: 33,
    },
    {
        uid: '-1',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'zzz.png',
        status: 'error',
    },
];

const OrderAttachments: React.FC = () => {
    return (
        <div className="mt-10 lg:max-w-screen-md">
            <BlockTitle title="Файлы по заказу" />
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={fileList}
                renderItem={(item) => (
                    <List.Item
                        actions={[<button><DownloadOutlined size={64} className="text-2xl" /></button>]}
                        className="bg-gray-50 !mb-1 !px-5"
                    >
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                avatar={<ImageFileFormat title='.zip' />}
                                title={item.name}
                                className="!items-center"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>

    );
};

export default OrderAttachments;