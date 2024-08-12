import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import PageTitle from '../../components/page-title/page-title';
import { formatDate } from '../../utils/format-date';
import Status from './components/status';
import OrderType from './components/order-type';
import { useNavigate } from 'react-router-dom';
import OrderActions from '../../components/order-actions/order-actions';

interface DataType {
    key: React.Key;
    date: string;
    doctor: string;
    clinic: string;
    orderType: JSX.Element;
    status: JSX.Element;
    patient: string;
}

const columns: TableColumnsType<DataType> = [
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

const data: DataType[] = [];
for (let i = 1; i < 30; i++) {
    data.push({
        key: i,
        date: formatDate(new Date()),
        doctor: `Иван Петров ${i}`,
        clinic: `London Park no. ${i}`,
        orderType: <OrderType type="Ортопедия" />,
        patient: `Пациент no. ${i}`,
        status: <Status status="В работе" />,
    });
}

const OrdersPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <PageTitle title="Заказы" />
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
        </>

    );
};

export default OrdersPage;