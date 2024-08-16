import { Grid, Tabs } from "antd";
import { UserOutlined, SafetyOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import ProfileInfo from "./components/profile-info";
import ProfileSafety from "./components/profile-safety";
import ProfileExtra from "./components/profile-extra";


const { useBreakpoint } = Grid;

const ProfilePage = () => {
    const screens = useBreakpoint();
    const isMediumScreen = screens.md;
    const { id } = useParams();
    const navigate = useNavigate();

    const tabs = [{
        label: `Личная информация`,
        key: 'info',
        icon: <UserOutlined />,
        children: <ProfileInfo />,
    }, {
        label: `Изменить пароль`,
        key: 'safety',
        icon: <SafetyOutlined />,
        children: <ProfileSafety />,
    }]
    return (
        <Tabs
            tabPosition={isMediumScreen ? "left" : "top"}
            defaultActiveKey={id}
            items={tabs}
            onTabClick={(key) => navigate(`/profile/${key}`)}
            tabBarExtraContent={isMediumScreen ? { left: <ProfileExtra /> } : { right: <ProfileExtra /> }}
            tabBarStyle={{ width: isMediumScreen ? 300 : '100%', height: '100%', display: isMediumScreen ? '' : 'flex', flexDirection: isMediumScreen ? 'column' : 'column-reverse' }}
        />
    )
}

export default ProfilePage