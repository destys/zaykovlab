import { useParams } from "react-router-dom"
import PageTitle from "../../components/page-title/page-title"
import { Tabs, TabsProps } from "antd";
import TeamList from "../../components/team-list/team-list";
import OrdersList from "../../components/orders-list/orders-list";
import { formatDate } from "../../utils/format-date";
import OrderType from "../orders/components/order-type";
import Status from "../orders/components/status";

interface DataType {
    key: React.Key;
    date: string;
    doctor: string;
    clinic: string;
    orderType: JSX.Element;
    status: JSX.Element;
    patient: string;
}

const team = [
    {
        key: '1',
        name: 'John Brown',
        tel: '32123 1231 23',
        email: 'test12@asd.rjd',
        tags: ['Управляющий'],
    },
    {
        key: '2',
        name: 'Jim Green',
        tel: '4221 123121 11',
        email: 'test3@rets.xk',
        tags: ['Врач'],
    },
    {
        key: '3',
        name: 'Joe Black',
        tel: '3221 12311 1231',
        email: 'test3@rets.xk',
        tags: ['Врач'],
    },
];

const orders: DataType[] = [];
for (let i = 1; i < 30; i++) {
    orders.push({
        key: i,
        date: formatDate(new Date()),
        doctor: `Иван Петров ${i}`,
        clinic: `London Park no. ${i}`,
        orderType: <OrderType type="Ортопедия" />,
        patient: `Пациент no. ${i}`,
        status: <Status status="В работе" />,
    });
}

const tabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'Заказы клиники',
        children: <OrdersList data={orders} />,
    },
    {
        key: '2',
        label: 'Сотрудники',
        children: <TeamList data={team} />,
    },
];

const ClinicPage = () => {
    const { id } = useParams();
    return (
        <>
            <PageTitle title={`Клиника №${id}`} />
            <Tabs defaultActiveKey="1" items={tabs} />
        </>
    )
}

export default ClinicPage