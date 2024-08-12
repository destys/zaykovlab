import { LogoutOutlined, BellFilled } from '@ant-design/icons';
import { Avatar, Badge, Button, Layout, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderBlock = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  //const { logout } = useAuth();
  //const { showModal } = useModalContext();

  return (
    <Header className="flex justify-between items-center mx-4 px-3 py-2 lg:px-6 !rounded-t-none" style={{
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}>
      <Button onClick={() => navigate('/new-order')}>Создать проект</Button>
      <div className="flex items-center gap-4">
        <Badge dot={true} offset={[-7, 25]} className="p-2 rounded cursor-pointer hover:bg-gray-200">
          <BellFilled className="text-xl" />
        </Badge>
        <div className="group flex items-center gap-2 px-2 cursor-pointer rounded" onClick={() => navigate('/profile')}>
          <Avatar size={32} className="group-hover:text-blue-400 transition-colors">Z</Avatar>
          <div className="group-hover:text-blue-400 transition-colors">ZaykovLab</div>
        </div>
        <Button icon={<LogoutOutlined />} danger onClick={() => alert('Выход из профиля')}></Button>
      </div>
    </Header>
  )
}

export default HeaderBlock;