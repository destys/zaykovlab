import { DownloadOutlined, FileTextFilled, TruckFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';

const OrderActions = () => {
    return (
        <Space size="small">
            <Button icon={<DownloadOutlined />}></Button>
            <Button icon={<FileTextFilled />}></Button>
            <Button icon={<TruckFilled />}></Button>
        </Space>
    )
}

export default OrderActions;