import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='eb-title'>Ebpearls</div>

			<div className='navbar-items'>
				<ul>
					<li>
						<Link className='nav-btn' to='/home'>
							Home
						</Link>
					</li>
					<li>
						<Link className='nav-btn' to='/about'>
							About
						</Link>
					</li>
					<li>
						<Link className='nav-btn' to='/contact'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
