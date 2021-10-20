import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState(
		[] || JSON.parse(localStorage.getItem('allUsers'))
	)

	// user registration
	const addUser = (newUser) => {
		const allUser = [...users, newUser]

		setUsers(allUser)
		// console.log('allusers', allUser)
		localStorage.setItem('allUser', JSON.stringify(allUser))
	}

	return (
		<UserContext.Provider
			value={{
				addUser,
				users,
				loading,
				setLoading,
			}}
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
