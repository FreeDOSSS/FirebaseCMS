import React from 'react';
import { Button, Form, Input } from 'antd';

export const AuthForm = (props) => (
	<Form
		name="basic"
		labelCol={{ span: 5 }}
		wrapperCol={{ span: 19 }}
		{...props}
	>
		<Form.Item
			label="Email"
			name="email"
			rules={[{ required: true, message: 'Please input your username!' }]}
		>
			<Input />
		</Form.Item>

		<Form.Item
			label="Password"
			name="password"
			rules={[{ required: true, message: 'Please input your password!' }]}
		>
			<Input.Password />
		</Form.Item>

		<Form.Item wrapperCol={{ offset: 20, span: 4 }}>
			<Button type="primary" htmlType="submit">
				Submit
			</Button>
		</Form.Item>
	</Form>
);
