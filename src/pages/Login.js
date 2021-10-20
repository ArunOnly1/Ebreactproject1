import { Button, CircularProgress, TextField } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { useGlobalContext } from '../context/userContext'

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required('Required'),
	password: Yup.string().required('Required'),
})
const Login = () => {
	const { getUser, loading, setLoading } = useGlobalContext()
	const [alert, setAlert] = useState(false)
	const users = getUser()
	// console.log('users', users)
	let { push } = useHistory()

	const handleLogin = (data) => {
		try {
			setLoading(true)
			const { email, password } = data
			const matchUser = users.filter(
				(user) => user.email === email && user.password === password
			)
			if (matchUser.length === 1) {
				// console.log(matchUser)
				localStorage.setItem('loggedUser', JSON.stringify(matchUser))
				return push('/home')
			} else {
				setAlert(true)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<div className='login'>
				{alert && (
					<div className='login-fail-alert'>
						User with the given credentials does not exist
					</div>
				)}
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={validationSchema}
					onSubmit={handleLogin}
				>
					{({ errors, touched }) => (
						<Form className='form'>
							<h1>Login</h1>

							<div className='form-wrap'>
								<div className='form-control'>
									<Field
										className='input-field'
										helperText={touched.email && errors.email}
										error={touched.email && !!errors.email}
										name='email'
										label='Email'
										as={TextField}
									/>
								</div>

								<div className='form-control'>
									<Field
										className='input-field'
										helperText={touched.password && errors.password}
										error={touched.password && !!errors.password}
										name='password'
										label='Password'
										type='password'
										as={TextField}
									/>
								</div>

								<Button type='submit' id='btn-login' variant='outlined'>
									{loading ? <CircularProgress size={20} /> : 'Login'}
								</Button>
							</div>
						</Form>
					)}
				</Formik>

				<Link to='/register' className='btn-goto-register'>
					New User? Register
				</Link>
			</div>
		</>
	)
}

export default Login
