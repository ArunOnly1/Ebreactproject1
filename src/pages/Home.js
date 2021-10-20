import { Button, Input, Modal, Form, Select } from 'antd'
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { PlusOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
	addUser,
	openAddDialog,
	closeDialog,
	editUser,
} from '../redux/slices/userSlice'
import { v4 as uuidv4 } from 'uuid'
import UserTable from '../components/UserTable'

const Home = () => {
	// redux
	const { showDialog, mode, formValue } = useSelector((state) => state.user)

	const dispatch = useDispatch()

	// Form instance
	const [form] = Form.useForm()

	// Fill the form with provided form value

	form.setFieldsValue(formValue)

	const { Option } = Select

	// Fetching logged in user from localStorage
	const loggedInUser = JSON.parse(localStorage.getItem('loggedUser'))
	const { firstName, lastName } = loggedInUser[0]
	return (
		<section>
			<Navbar />
			<h1 style={{ marginTop: '2rem', fontSize: '2rem' }}>
				Welcome {firstName} {lastName}
			</h1>

			<Button
				style={{ marginTop: '1rem' }}
				onClick={() => dispatch(openAddDialog())}
			>
				<PlusOutlined />
				Add User
			</Button>

			<Modal
				title={`${mode === 'ADD' ? 'ADD' : 'EDIT'} USER`}
				visible={showDialog}
				footer={null}
				onCancel={() => dispatch(closeDialog())}
				afterClose={() => form.resetFields()}
				getContainer={false}
			>
				<Form
					form={form}
					layout='vertical'
					onFinish={({ username, role, designation }) => {
						if (mode === 'ADD') {
							const newAddedUser = {
								id: uuidv4(),
								username,
								role,
								designation,
							}
							dispatch(addUser(newAddedUser))
						} else {
							const editedUser = {
								id: formValue.id,
								username,
								role,
								designation,
							}
							dispatch(editUser(editedUser))
						}
					}}
				>
					<Form.Item
						label='Name'
						name='username'
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input placeholder='John Doe' />
					</Form.Item>

					<Form.Item
						name='role'
						label='Role'
						rules={[
							{
								required: true,
							},
						]}
					>
						<Select
							placeholder='Select a role'
							// onChange={handleRole}
							allowClear
						>
							<Option value='user'>User</Option>
							<Option value='admin'>Admin</Option>
						</Select>
					</Form.Item>
					<Form.Item
						label='Designation'
						name='designation'
						rules={[
							{
								required: true,
								message: 'Please input designation!',
							},
						]}
					>
						<Input placeholder='Manager' />
					</Form.Item>
					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							style={{
								marginRight: 10,
							}}
						>
							{`${mode === 'ADD' ? 'Add ' : 'Edit '}`}
						</Button>
						<Button
							type='default'
							// On click, close the dialog box
							onClick={() => dispatch(closeDialog())}
						>
							Cancel
						</Button>
					</Form.Item>
				</Form>
			</Modal>
			<UserTable />
		</section>
	)
}

export default Home
