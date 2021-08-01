import { Button, DatePicker, Form, Input, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';
import moment from 'moment';

export function ProductForm(props) {
	const disabledDate = useCallback(
		(current) => current && current < moment().endOf('day'),
		[]
	);

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	return (
		<Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} {...props}>
			<Form.Item
				label="Title"
				name="title"
				rules={[
					{
						required: true,
						message: 'Title is required',
					},
					{
						min: 20,
						message: 'Min length 20 charters',
					},
					{
						max: 60,
						message: 'Max length 60 charters',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Description"
				name="description"
				initialValue={null}
				rules={[
					{
						max: 200,
						message: 'Max length 60 charters',
					},
				]}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				label="Price"
				name="price"
				rules={[
					{
						type: 'number',
					},
					{
						required: true,
						message: 'Price is required',
					},
				]}
			>
				<InputNumber min={0} max={99999999.99} step={0.01} />
			</Form.Item>
			<Form.Item
				label="Discount"
				name="discount"
				initialValue={null}
				rules={[
					{
						type: 'number',
					},
				]}
			>
				<InputNumber min={10} max={100} step={1} />
			</Form.Item>

			<Form.Item
				label="Expire discount"
				name="expire_discount"
				rules={[
					{
						type: 'date',
					},
					{
						required: true,
						message: 'Expire discount is required',
					},
				]}
			>
				<DatePicker
					showToday={false}
					disabledDate={disabledDate}
					showNow={false}
				/>
			</Form.Item>
			<Form.Item
				name="photo"
				label="Photo"
				valuePropName="fileList"
				getValueFromEvent={normFile}
				rules={[
					{
						required: true,
						message: 'Photo for product is required',
					},
				]}
			>
				<Upload
					listType="picture"
					beforeUpload={(file) => {
						console.log('file', file);
						return false;
					}}
				>
					<Button icon={<UploadOutlined />}>Click to upload</Button>
				</Upload>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}
