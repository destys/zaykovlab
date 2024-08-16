import { Table, TableProps } from "antd";
import BlockTitle from "../block-title/block-title";

interface DataType {
    number: string;
    type: string;
    implantType: string;
    material: string;
    color: string;
}

interface OrderDetail {
    id: number;
    title: string;
    value: string;
}

const OrderDetails = () => {

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Номер',
            dataIndex: 'number',
            key: 'number',
            width: 10,

        },
        {
            title: 'Тип',
            dataIndex: 'type',
            key: 'type',
            width: 30,

        },
        {
            title: 'Тип импланта',
            dataIndex: 'implantType',
            key: 'implantType',
        },
        {
            title: 'Материал',
            dataIndex: 'material',
            key: 'material',
        },
        {
            title: 'Цвет',
            dataIndex: 'color',
            key: 'color',
        },
    ];
    const data: DataType[] = [
        {
            number: '37',
            type: 'Full Crown',
            implantType: 'Screw fixing',
            material: 'Zirconia',
            color: 'A1',
        },
    ];

    const orderDetails: OrderDetail[] = [
        {
            id: 1,
            title: 'Клиника',
            value: 'AS DENT/AS DENT/strigant@mail.ru'
        },
        {
            id: 2,
            title: 'Номер заказа',
            value: '94f29f78-d0d4-5d80-9ae8-215867cb1b59',
        },
        {
            id: 3,
            title: 'Автор заказа',
            value: 'Роман',
        },
        {
            id: 4,
            title: 'Дата доставки',
            value: '2024-08-01 08:16:04',
        },
        {
            id: 5,
            title: 'Последнее обновление',
            value: '2024-08-02 12:11:22',
        },
        {
            id: 5,
            title: 'Заметки',
            value: 'Оттенок: А3. Особые требования: имплант Хайтек,срредняя платформа',
        },
    ]

    return (
        <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div>
                <BlockTitle title="Информация" />
                <div className="flex flex-col items-center xl:flex-row xl:items-start gap-4 p-5 bg-gray-100 rounded">
                    <div className="basis-[150px] w-[150px] shrink-0">
                        <img src="/teeth.svg" alt="teeth" />
                    </div>
                    <Table columns={columns} dataSource={data} pagination={false} className="flex-auto" scroll={{ x: 300 }} />
                </div>
            </div>
            <div>
                <BlockTitle title="Детали заказа" />
                <div className=" p-5 bg-gray-100 rounded">
                    <div className="grid gap-1">
                        {orderDetails.map(item => (
                            <div key={item.id} className="grid grid-cols-[120px_minmax(100px,_1fr)] gap-3">
                                <div className="text-gray-400 text-right">{item.title}</div>
                                <div>{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails