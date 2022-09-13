import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { login } from '../../../store/actions/userActions';
import Button from '../../../shared/components/FormElements/Button';
import Input from '../../../shared/components/FormElements/Input/Input';
import Modal from '../../../shared/components/UIElements/Modal';

import './LoginModal.css';

const LoginModal = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, error } = useSelector((state) => state.user);

	const [showLoginModal, setShowLoginModal] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const openLoginModalHandler = () => setShowLoginModal(true);

	const closeLoginModalHandler = () => setShowLoginModal(false);

	const loginHandler = () => {
		dispatch(login(email, password));
	};

	if (user.isAuthenticated) {
		navigate('/dashboard');
	}
	console.log(user);

	return (
		<React.Fragment>
			<a
				className="nav-links bold-text"
				onClick={openLoginModalHandler}
				href={'#'}
				style={{ cursor: 'pointer', textDecoration: 'none' }}>
				Admin Login
			</a>
			<Modal
				show={showLoginModal}
				onCancel={closeLoginModalHandler}
				header="Login"
				footer={
					<React.Fragment>
						<Button className="btn" onSubmit={loginHandler}>
							<p className="bold-text">Login</p>
						</Button>
						<Button
							className="btn"
							onClick={closeLoginModalHandler}>
							<p className="bold-text">Cancel</p>
						</Button>
					</React.Fragment>
				}>
				<div className="modal-container">
					<Input
						id="email"
						element="input"
						type="email"
						label="Email"
						value={email}
						validators={[]}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div>test test</div>
					<Input
						id="password"
						element="input"
						type="password"
						label="Password"
						value={password}
						validators={[]}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{error && <p className="error-text">{error}</p>}
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default LoginModal;
