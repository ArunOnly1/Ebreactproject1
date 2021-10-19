import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])

	// user registration
	const addUser = (newUser) => {
		const allUser = [newUser, ...users]

		setUsers(allUser)
		console.log('allusers', allUser)
		localStorage.setItem('allUser', JSON.stringify(allUser))
	}

	const getUser = () => {
		const data = JSON.parse(localStorage.getItem('allUser'))
		return data
	}
	return (
		<UserContext.Provider
			value={{ addUser, users, loading, setLoading, getUser }}
		>
			{children}
		</UserContext.Provider>
	)
}

// use Global context
const useGlobalContext = () => {
	return useContext(UserContext)
}

export { UserProvider, useGlobalContext }
