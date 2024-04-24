import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Input from '../../../shared/components/FormElements/Input/Input';
import Button from '../../../shared/components/FormElements/Button';
import { login, clearErrors } from '../../../store/actions/userActions';
import './AdminLogin.css';
import MainNav from '../../../shared/components/Navigation/MainNav';

const AdminLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	const [formData, SetFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		dispatch(clearErrors());
	};

	if (user.isAuthenticated) {
		navigate('/dashboard');
	}

	return (
		<React.Fragment>
			<div className="main-nav__container position-absolute">
				<MainNav />
			</div>
			<div className="form-container">
				<h2 className="lg-text bold-text mb-4">Admin Login</h2>
				<form onSubmit={submitHandler} style={{ width: '20%' }}>
					<Input
						element="input"
						type="email"
						placeholder="Email"
						onChange={(e) =>
							SetFormData({ ...formData, email: e.target.value })
						}
						value={email}
						error-text="Please enter a valid email address"
					/>
					<Input
						element="input"
						type="password"
						placeholder="Password"
						onChange={(e) =>
							SetFormData({
								...formData,
								password: e.target.value,
							})
						}
						value={password}
						error-text="Please enter a valid password"
					/>
					{user.error && <p className="error-text">{user.error}</p>}
					<div className="d-flex justify-content-center mt-4">
						<Button className="btn">
							<p className="bold-text">Login</p>
						</Button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default AdminLogin;
