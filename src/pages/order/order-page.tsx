import { useParams } from "react-router-dom";
import OrderHeader from "./components/order-header"
import { Tabs } from "antd";
import type { TabsProps } from 'antd';
import OrderDetails from "../../components/order-details/order-details";
import OrderAttachments from "../../components/order-attachments/order-attachments";

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Детали заказа',
        children: <OrderDetails />,
    },
    {
        key: '2',
        label: 'Вложения',
        children: <OrderAttachments />,
    },
];

const OrderPage = () => {
    const { id } = useParams();

    return (
        <div>
            <OrderHeader id={id} />
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

export default OrderPage