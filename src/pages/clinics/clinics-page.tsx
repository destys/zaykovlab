import { Button, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import PageTitle from "../../components/page-title/page-title"
import { useNavigate } from 'react-router-dom';


interface DataType {
    key: string;
    name: string;
    tel: string;
    email: string;
    city: string;
    responsible: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Город',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Телефон',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Ответственный',
        dataIndex: 'responsible',
        key: 'responsible',
    },
    {
        title: 'Action',
        key: 'action',
        render: (/* record */) => (
            <Space size="small">
                <Button icon={<EditFilled />} />
                <Button icon={<DeleteFilled />} />
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'ABC Clinic',
        tel: '32123 1231 23',
        email: 'test12@asd.rjd',
        city: 'Краснодар',
        responsible: 'Иванов Иван'
    },
    {
        key: '2',
        name: 'Jim Green',
        tel: '4221 123121 11',
        email: 'test3@rets.xk',
        city: 'Краснодар',
        responsible: 'Иванов Иван'
    },
    {
        key: '3',
        name: 'Joe Black',
        tel: '3221 12311 1231',
        email: 'test3@rets.xk',
        city: 'Краснодар',
        responsible: 'Иванов Иван'
    },
];

const ClinicsPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <PageTitle title="Клиники" />
            <Table columns={columns} dataSource={data} rowClassName={() => 'cursor-pointer'}
                onRow={(record) => {
                    return {
                        onClick: () => navigate(`/clinics/${record.key}`),
                    };
                }} />
        </>
    )
}

export default ClinicsPage;