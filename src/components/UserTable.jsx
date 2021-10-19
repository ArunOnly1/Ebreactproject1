import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Popconfirm } from 'antd'
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
			// render:text=>{text}
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
			// render:text=>{text}
		},
		{
			title: 'Designation',
			dataIndex: 'designation',
			key: 'designation',
			// render:text=>{text}
		},
		{
			title: 'Action',
			key: 'action',
			render: ({ key }) => (
				<Space size='large'>
					<a onClick={() => dispatch(openEditDialog(key))}>
						<EditOutlined style={{ color: 'darkgreen', fontSize: '1.2rem' }} />
					</a>
					<Popconfirm
						title='Are you sure to delete this user?'
						onConfirm={() => dispatch(deleteUser(key))}
						okText='Yes'
						cancelText='No'
					>
						<a>
							<DeleteOutlined style={{ color: 'red', fontSize: '1.2rem' }} />
						</a>
					</Popconfirm>
				</Space>
			),
		},
	]
	return (
		<div className='table'>
			<Table bordered columns={columns} dataSource={data}></Table>
		</div>
	)
}

export default UserTable
