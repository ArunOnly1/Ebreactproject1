import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Popconfirm, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { deleteUser, openEditDialog } from '../redux/slices/userSlice'
const UserTable = () => {
	const { users } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const data = users.map((user) => {
		return {
			key: user.id,
			username: user.username,
			role: user.role,
			designation: user.designation,
		}
	})

	const columns = [
		{
			title: 'User Name',
			dataIndex: 'username',
			key: 'username',
			align: 'center',
			// render:text=>{text}
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
			align: 'center',
			// render:text=>{text}
		},
		{
			title: 'Designation',
			dataIndex: 'designation',
			key: 'designation',
			align: 'center',
			// render:text=>{text}
		},
		{
			title: 'Action',
			align: 'center',
			key: 'action',
			render: ({ key }) => (
				<Space size='large'>
					<button className='table-btn'>
						<EditOutlined
							style={{ color: 'darkgreen', fontSize: '1.2rem' }}
							onClick={() => dispatch(openEditDialog(key))}
						/>
					</button>
					<Popconfirm
						title='Are you sure to delete this user?'
						onConfirm={() => dispatch(deleteUser(key))}
						okText='Yes'
						cancelText='No'
					>
						<button className='table-btn'>
							<DeleteOutlined style={{ color: 'red', fontSize: '1.2rem' }} />
						</button>
					</Popconfirm>
				</Space>
			),
		},
	]
	return (
		<div>
			<Table
				className='table'
				bordered
				columns={columns}
				dataSource={data}
				size='small'
				// pagination={false}
			></Table>
		</div>
	)
}

export default UserTable
