import React from 'react';
import { Button, Form, Input, Space } from 'antd';

const ProfileSafety = () => {
    return (
        <Form layout="vertical">
            <Form.Item
                name="current_password"
                label="Старый пароль"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите пароль!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="new_password"
                label="Новый пароль"
                rules={[
                    {
                        required: true,
                        message: 'Введите новый пароль',
                    },
                    {
                        min: 6,
                        message: 'Пароль должен содержать не менее 6 символов',
                    },
                    {
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                        message: 'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirm_password"
                label="Подтвердите пароль"
                dependencies={['new_password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Подтвердите пароль',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('new_password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Space>
                <Button type="primary" htmlType="submit">Сохранить</Button>
                <Button htmlType="reset">Сбросить</Button>
            </Space>
        </Form>
    );
};

export default ProfileSafety;