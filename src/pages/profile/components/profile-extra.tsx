import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ProfileExtra = () => {
    return (
        <div className="mb-6">
            <Avatar size={64} icon={<UserOutlined />} className="mb-4" />
            <h3 className="text-lg font-semibold text-center">Роман</h3>
        </div>
    )
}

export default ProfileExtra