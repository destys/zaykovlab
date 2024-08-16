import { UserOutlined, PlusCircleOutlined, BellFilled, SafetyOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Divider, Dropdown, Layout, MenuProps, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;


const HeaderBlock = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  //const { logout } = useAuth();
  //const { showModal } = useModalContext();

  const items: MenuProps['items'] = [
    {
      label: <div onClick={() => navigate('/profile/info')}>Личные данные</div>,
      key: '0',
      icon: <UserOutlined />,
    },
    {
      label: <div onClick={() => navigate('/profile/safety')}>Безопасность</div>,
      key: '1',
      icon: <SafetyOutlined />,
    },
    {
      type: 'divider',
    },
    {
      label: 'Выйти',
      key: '3',
      icon: <LogoutOutlined />,
    },
  ];


  return (
    <Header className="flex justify-between items-center mx-4 px-3 py-2 lg:px-6 !rounded-t-none" style={{
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}>
      <Button onClick={() => navigate('/new-order')} icon={<PlusCircleOutlined />}><span className="!hidden md:!inline">Создать проект</span></Button>
      <div className="flex items-center">
        <Badge dot={true} offset={[-7, 25]} className="p-2 rounded cursor-pointer hover:bg-gray-200">
          <BellFilled className="text-xl" />
        </Badge>
        <Divider type="vertical" className="h-16" />
        <div className="group flex items-center gap-2 px-2 cursor-pointer rounded md:min-w-56" onClick={() => navigate('/clinics/123')}>
          <Avatar size={32} shape="square">Z</Avatar>
          <div className="text-[0px] md:text-base">ZaykovLab</div>
        </div>
        <Divider type="vertical" className="h-16" />
        <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
          <Avatar size={32} icon={<UserOutlined />} className="px-2 cursor-pointer" onClick={() => { }} />
        </Dropdown>
      </div>
    </Header>
  )
}

export default HeaderBlock;