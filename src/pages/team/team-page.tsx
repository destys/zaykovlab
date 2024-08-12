import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import PageTitle from "../../components/page-title/page-title"


interface DataType {
    key: string;
    name: string;
    tel: string;
    email: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
    },

    {
        title: 'Роль',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    const color = tag.length > 5 ? 'green' : 'geekblue';
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
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

const TeamPage = () => {
    return (
        <>
            <PageTitle title="Сотрудники" />
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default TeamPage;