import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
					<Route exact path='/home'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>

					<Route path='/register'>
						<Register />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
