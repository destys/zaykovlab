import PageTitle from '../../components/page-title/page-title';
import { formatDate } from '../../utils/format-date';
import Status from './components/status';
import OrderType from './components/order-type';
import OrdersList from '../../components/orders-list/orders-list';
import { OrdersDataType } from '../../types/orders.types';

const data: OrdersDataType[] = [];
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

    return (
        <>
            <PageTitle title="Заказы" />
            <OrdersList data={data} />
        </>

    );
};

export default OrdersPage;