import { Card } from 'antd'
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useGlobalContext } from '../context/userContext'
import Footer from '../components/Footer.jsx'

const About = () => {
	const { users } = useGlobalContext()

	return (
		<main>
			<Navbar />
			<h1
				style={{
					fontSize: '2rem',
					marginTop: '3rem',
					textTransform: 'capitalize',
				}}
			>
				registered user's information
			</h1>
			<div className='card-container'>
				{users &&
					users.map((user) => {
						return (
							<Card
								key={user.id}
								title={
									<div>
										<span
											style={{
												color: 'white',
												marginRight: '5px',
											}}
										>
											{user.firstName}
										</span>
										<span style={{ color: 'white' }}>{user.lastName}</span>
									</div>
								}
								style={{
									width: '20%',
									margin: '2rem 3rem',
									fontSize: '1rem',
									border: 'none',
									borderRadius: '5px',
									background: '#694062',
									color: 'white',
									padding: '1rem',
								}}
							>
								<p style={{ fontSize: '1.1rem' }}>email:{user.email}</p>
								<p style={{ fontSize: '1.1rem' }}>phone : {user.mobileNo}</p>
							</Card>
						)
					})}
			</div>
			<Footer />
		</main>
	)
}

export default About
