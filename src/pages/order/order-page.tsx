import { useParams } from "react-router-dom";
import OrderHeader from "./components/order-header"
import { Tabs } from "antd";
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Детали заказа',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Вложения',
        children: 'Content of Tab Pane 2',
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