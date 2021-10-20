import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
const Contact = () => {
	return (
		<main style={{ background: '#d7d1e6', height: '100vh' }}>
			<Navbar />
			<div className='contact-container'>
				<div>
					<h1>React Assignment</h1>
					<h3>October 20, 2021</h3>
				</div>
				<div className='content'>
					<p>Submitted by: Arun Chapagain</p>
					<p>Employee code: EB384</p>
				</div>
				<div className='content'>
					<p>Submitted to:Pradeep Bista</p>
					<p>Team Lead</p>
				</div>
			</div>
			<Footer />
		</main>
	)
}

export default Contact
