import { Table, TableColumnsType } from "antd";
import { useNavigate } from "react-router-dom";
import OrderActions from "../order-actions/order-actions";
import { OrdersDataType } from "../../types/orders.types";

interface IOrdersList {
    data: OrdersDataType[];
}

const columns: TableColumnsType<OrdersDataType> = [
    {
        title: 'Дата',
        width: 150,
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Доктор',
        width: 120,
        dataIndex: 'doctor',
        key: 'doctor',
    },
    {
        title: 'Клиника',
        dataIndex: 'clinic',
        key: 'clinic',
        width: 120,
    },
    {
        title: 'Тип заказа',
        dataIndex: 'orderType',
        key: 'orderType',
        width: 100,
    },
    {
        title: 'Пациент',
        dataIndex: 'patient',
        key: 'patient',
        width: 100,
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        fixed: 'right',
        width: 80,
    },
    {
        title: 'Действия',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <OrderActions />,
    },
];

const OrdersList: React.FC<IOrdersList> = ({ data }) => {
    const navigate = useNavigate();
    return (
        <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1500 }}
            className='text-sm'
            rowClassName={() => 'cursor-pointer'}
            onRow={(record) => {
                return {
                    onClick: () => navigate(`/orders/${record.key}`),
                };
            }}
        />
    )
}

export default OrdersList