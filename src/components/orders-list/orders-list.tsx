import { Table, TableColumnsType, Grid } from "antd";
import { useNavigate } from "react-router-dom";
import OrderActions from "../order-actions/order-actions";
import { OrdersDataType } from "../../types/orders.types";

interface IOrdersList {
    data: OrdersDataType[];
}

const { useBreakpoint } = Grid;

const OrdersList: React.FC<IOrdersList> = ({ data }) => {
    const screens = useBreakpoint();
    const isLargeScreen = screens.lg;
    const navigate = useNavigate();

    const columns: TableColumnsType<OrdersDataType> = [
        {
            title: 'Дата',
            width: isLargeScreen ? 150 : 100,
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
            fixed: isLargeScreen ? 'right' : undefined,
            width: 80,
        },
        {
            title: 'Действия',
            key: 'operation',
            fixed: isLargeScreen ? 'right' : undefined,
            width: 112,
            render: () => <OrderActions />,
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: isLargeScreen ? 1500 : 1000 }}
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