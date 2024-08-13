import { Tabs } from "antd";
import { UserOutlined, SafetyOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import ProfileInfo from "./components/profile-info";
import ProfileSafety from "./components/profile-safety";
import ProfileExtra from "./components/profile-extra";



const ProfilePage = () => {
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
            tabPosition="left"
            defaultActiveKey={id}
            items={tabs}
            onTabClick={(key) => navigate(`/profile/${key}`)}
            tabBarExtraContent={{ left: <ProfileExtra /> }}
            tabBarStyle={{ width: 300, height: '100%' }}
        />
    )
}

export default ProfilePage