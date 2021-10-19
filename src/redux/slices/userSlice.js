import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons'
import { createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		users: [],
		mode: 'ADD',
		showDialog: false,
		formValue: {
			name: '',
			role: '',
			designation: '',
		},
	},
	reducers: {
		addUser: (state, action) => {
			state.users = [...state.users, action.payload]
			console.log('all users', state.users)
			state.showDialog = false
			notification.success({
				message: 'User added!',
				description: 'User has been added successfully!',
				duration: 2,
				placement: 'topLeft',
				icon: <UserAddOutlined style={{ color: 'green' }} />,
			})
		},
		openAddDialog: (state) => {
			state.mode = 'ADD'
			state.showDialog = true
			state.formValue = {
				name: '',
				role: '',
				designation: '',
			}
		},
		closeDialog: (state) => {
			state.showDialog = false
		},
		deleteUser: (state, action) => {
			const id = action.payload
			const updatedUser = state.users.filter((user) => user.id !== id)
			state.users = updatedUser

			notification.success({
				message: 'User deleted!',
				description: 'User has been deleted successfully!',
				duration: 2,
				placement: 'topRight',

				icon: <UserDeleteOutlined style={{ color: 'red' }} />,
			})
		},

		openEditDialog: (state, action) => {
			state.mode = 'EDIT'
			state.showDialog = true
			const id = action.payload
			console.log('id is', id)
			const userToEdit = state.users.findIndex((user) => user.id === id)

			console.log(userToEdit)
			state.formValue = {
				id,
				username: 'Ram',
				role: 'Admin',
				designation: 'Developer',
			}
		},
	},
})

export const {
	addUser,
	openAddDialog,
	closeDialog,
	deleteUser,
	openEditDialog,
} = userSlice.actions

export default userSlice.reducer
