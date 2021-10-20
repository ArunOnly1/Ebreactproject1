import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link className='eb-title' to='/home'>
				Ebpearls
			</Link>

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
					<li>
						<Link className='nav-btn' to='/'>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
