import { Button, Form, Input, Select, Space } from "antd"


const ProfileInfo = () => {
    return (
        <Form layout="vertical">
            <div className="grid grid-cols-2 gap-4">
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'ФИО не может быть пустым' }]}
                    label="ФИО"
                    className="flex-auto"
                >
                    <Input placeholder="ФИО" defaultValue={'Роман'} />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Email не может быть пустым' }]}
                    label="Email"
                >
                    <Input placeholder="email@email.com" defaultValue="zaykovlab@mail.ru" />
                </Form.Item>
            </div>
            <Form.Item name="clinic" label="Клиника">
                <Select defaultValue="2" disabled>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                </Select>
            </Form.Item>
            <Space>
                <Button type="primary" htmlType="submit">Сохранить</Button>
                <Button htmlType="reset">Сбросить</Button>
            </Space>
        </Form>
    )
}

export default ProfileInfo