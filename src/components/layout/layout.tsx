import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardOutlined, ToolFilled, TeamOutlined, PlusSquareFilled } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
/* import { useAuth } from '../../context/auth-context';
import useProjects from '../../hooks/use-projects'; */
import Header from '../header/header';

const { Content, Sider } = Layout;

interface ILayoutComponent {
    children: ReactNode
}

const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(true);
    /* const { role } = useAuth(); */
    const navigate = useNavigate();
    /* const { data } = useProjects(); */
    //const role = 'admin';
    //const data = { data: [] };

    const items = [{
        key: 'dashboard',
        icon: <DashboardOutlined label='Dct' />,
        label: `Статистика`,
        onClick: () => navigate('/')
    }, {
        key: 'orders',
        icon: <ToolFilled />,
        label: 'Заказы',
        onClick: () => navigate('/orders')
    },
    {
        key: 'team',
        icon: <TeamOutlined />,
        label: 'Сотрудники',
        onClick: () => navigate('/team')
    },
    {
        key: 'clinics',
        icon: <PlusSquareFilled />,
        label: 'Клиники',
        onClick: () => navigate('/clinics')
    }]

    return (
        <Layout className="min-h-[100vh]">
            <Sider
                breakpoint="lg"
                collapsedWidth="50"
                defaultCollapsed={true}
                collapsed={collapsed}
                onCollapse={setCollapsed}
                collapsible={true}
                width={250}
            >
                <div className="flex justify-center my-10 demo-logo-vertical">
                    {collapsed ? (
                        <img src="/logo-small.svg" alt="" className="max-h-20" />
                    ) : (
                        <img src="/logo.svg" alt="" className="max-h-40" />
                    )}

                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} items={items} />
            </Sider>
            <Layout className="flex flex-col h-[100vh]">
                <Header />
                <Content className="mt-6 mx-4 h-full p-3 lg:p-6 flex-auto overflow-y-auto !rounded-b-none" style={{
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;