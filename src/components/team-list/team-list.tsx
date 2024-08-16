import { Button, Grid, Space, Table, TableProps, Tag } from "antd";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { TeamDataType } from "../../types/team.types";

interface ITeamList {
    data: TeamDataType[];
}

const columns: TableProps<TeamDataType>['columns'] = [
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


const { useBreakpoint } = Grid;

const TeamList: React.FC<ITeamList> = ({ data }) => {
    const screens = useBreakpoint();
    const isLargeScreen = screens.lg;

    return (
        <Table columns={columns} scroll={{ x: isLargeScreen ? 1500 : 1000 }} dataSource={data} />
    )
}

export default TeamList