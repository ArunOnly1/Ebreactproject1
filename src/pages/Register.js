import { Button, TextField } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context/userContext'
import { v4 as uuidv4 } from 'uuid'

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(55, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(55, 'Too Long!')
		.required('Required'),
	email: Yup.string().email().required('Required'),
	mobileNo: Yup.string().max(10).required('Required'),
	password: Yup.string().required('Required'),
	confirmPassword: Yup.string().required('Required'),
})
const Register = () => {
	const { addUser, setLoading, loading } = useGlobalContext()
	let history = useHistory()

	const handleRegistration = (data) => {
		try {
			setLoading(true)
			const updatedData = { ...data, id: uuidv4() }
			console.log(updatedData)
			addUser(updatedData)
			history.push('/home')
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}
	return (
		<div className='register'>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					mobileNo: '',
					password: '',
					confirmPassword: '',
				}}
				validationSchema={validationSchema}
				onSubmit={handleRegistration}
			>
				{({ errors, touched }) => (
					<Form className='form'>
						<h1> Register</h1>
						<div className='form-wrap'>
							<div className='form-control'>
								<Field
									className='input-field'
									helperText={touched.firstName && errors.firstName}
									error={touched.firstName && !!errors.firstName}
									name='firstName'
									label='First Name'
									as={TextField}
								/>
							</div>
							<div className='form-control'>
								<Field
									className='input-field'
									helperText={touched.lastName && errors.lastName}
									error={touched.lastName && !!errors.lastName}
									name='lastName'
									label='Last Name'
									as={TextField}
								/>
							</div>
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
									helperText={touched.mobileNo && errors.mobileNo}
									error={touched.mobileNo && !!errors.mobileNo}
									name='mobileNo'
									label='Phone Number'
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
							<div className='form-control'>
								<Field
									className='input-field'
									helperText={touched.confirmPassword && errors.confirmPassword}
									error={touched.confirmPassword && !!errors.confirmPassword}
									name='confirmPassword'
									label='Repeat Password'
									type='password'
									as={TextField}
								/>
							</div>
							<Button type='submit' id='btn-register' variant='outlined'>
								{loading ? <Loading /> : 'Register'}
							</Button>
						</div>
					</Form>
				)}
			</Formik>

			<Link to='/' className='btn-goto-login'>
				Already registered? Login
			</Link>
		</div>
	)
}

export default Register
