import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { reset, logout, login } from '../../features/auth/authSlice';
import Spinner from '../Spinner/index';
import Logo from '../../images/Logo-nobg.png';
import './NavBar.css';

function NavBar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const { name, email, password, passwordConfirm } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		// if (isSuccess || user) {
		// 	navigate('/');
		// }

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	// const onSubmit = (e) => {
	// 	e.preventDefault();

	// 	if (password !== passwordConfirm) {
	// 		toast.error("Passwords don't match");
	// 	} else {
	// 		const userData = {
	// 			name,
	// 			email,
	// 			password,
	// 		};
	// 		dispatch(register(userData));
	// 	}
	// };

	const onLogin = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};
		dispatch(login(userData));
	};

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};

	if (isLoading) return <Spinner />;

	return (
		<div className='container'>
			<div className='navBar_container'>
				<div class='navbar-top_container d-flex align-items-center justify-content-between'>
					<div className='navbar-admin_container mt-5'></div>
					<div className='navBar-top d-flex justify-content-end mt-5'>
						<div className='d-flex mx-3'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='#75cad1'
								className='bi bi-telephone-fill'
								viewBox='0 0 16 16'>
								<path
									fill-rule='evenodd'
									d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
								/>
							</svg>
							<p className='navbar-top_text'>
								<span className='fw-bold mx-2'>Call Now</span>
								(801) 688 - 6619
							</p>
						</div>
						<div className='d-flex'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='#75cad1'
								className='bi bi-clock'
								viewBox='0 0 16 16'>
								<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z' />
								<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z' />
							</svg>
							<p className='navbar-top_text'>
								<span className='fw-bold mx-2'>Open Hours</span>
								Mon-Sat: 9am - 6pm
							</p>
						</div>
						{user && user !== null ? (
							<div className='ms-3'>
								<a
									className='navbar-admin navbar-top_text'
									href='/'
									data-bs-toggle='modal'
									data-bs-target='#user-logout_modal'>
									Logout
								</a>
							</div>
						) : (
							<div className='ms-5'>
								<a
									className='navbar-admin navbar-top_text'
									href='/'
									data-bs-toggle='modal'
									data-bs-target='#user-modal'>
									Admin Login
								</a>
							</div>
						)}
					</div>
				</div>

				<div className='navBar-bottom container-fluid d-flex justify-content-between align-items-center'>
					<div className='navbar-logo_container'>
						<a href='/'>
							<img className='img-fluid' src={Logo} alt='logo' />
						</a>
						<button
							class='nav-btn navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#collapsibleNavbar'
							aria-controls='#collapsibleNavbar'
							aria-expanded='false'>
							<span class='navbar-toggler-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									fill='currentColor'
									class='bi bi-list'
									viewBox='0 0 16 16'>
									<path
										fill-rule='evenodd'
										d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
									/>
								</svg>
							</span>
						</button>
					</div>
					<div
						className='navbar-collapse navbar-links_container'
						id='collapsibleNavbar'>
						<div className='navbar-box'>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'nav-active' : 'navbar_links'
								}
								// activeClassName='nav-active'
								tabindex='1'
								to='/'>
								Home
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'nav-active' : 'navbar_links'
								}
								to='/about'>
								About Us
							</NavLink>
							{/* <a className='navbar_links' href='/services'>
								Services
							</a> */}
							<NavLink
								to={
									'/services-cooling' ||
									'/services-heating' ||
									'/services-maintenance' ||
									'/services-diagnostics'
								}
								// className='dropdown dropdown-toggle navbar_links'
								className={({ isActive }) =>
									isActive
										? 'nav-active dropdown dropdown-toggle'
										: 'navbar_links dropdown dropdown-toggle'
								}
								type='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Services
							</NavLink>
							<ul class='dropdown-menu'>
								<li>
									<a
										class='dropdown-item light-text'
										href='/services-cooling/#cooling'>
										Cooling Services
									</a>
								</li>
								<li>
									<a
										class='dropdown-item light-text'
										href='/services-heating/#heating'>
										Heating Services
									</a>
								</li>
								<li>
									<a
										class='dropdown-item light-text'
										href='/services-maintenance/#maintenance'>
										Maintenance & Repairs
									</a>
								</li>
								<li>
									<a
										class='dropdown-item light-text'
										href='/services-diagnostics/#diagnostics'>
										Diagnostics
									</a>
								</li>
							</ul>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'nav-active' : 'navbar_links'
								}
								to='/contact-us'>
								Contact Us
							</NavLink>
							<div className='navbar-btn_container'>
								<a
									className='navbar-btn_book bold-text'
									href='/'>
									BOOK TODAY
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='modal' tabindex='-1' id='user-modal'>
				<div class='modal-dialog modal-dialog-centered'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title modal-dialog-centered lg-text reg-text'>
								Admin Login
							</h5>
						</div>
						<div class='modal-body'>
							<form onSubmit={onLogin}>
								<div class='form-group d-flex flex-column align-items-center'>
									<input
										className='login-input'
										placeholder='Email'
										type='email'
										name='email'
										value={email}
										onChange={onChange}
										required
									/>
									<input
										className='login-input'
										placeholder='Comfirm Password'
										type='password'
										name='password'
										value={password}
										onChange={onChange}
										required
									/>
								</div>
								<div class='d-flex justify-content-center flex-column align-items-center'>
									<button
										type='submit'
										class='login-btn sm-btn mb-3'>
										Login
									</button>
									{/* <p>Don't have an account?</p>
									<a
										className='navbar-admin navbar-top_text text-center mt-3'
										href='/'
										data-bs-toggle='modal'
										data-bs-target='#register-modal'>
										Register Here!
									</a> */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* <div class='modal' tabindex='-1' id='register-modal'>
				<div class='modal-dialog modal-dialog-centered'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title modal-dialog-centered lg-text reg-text'>
								Create a new account
							</h5>
						</div>
						<div class='modal-body'>
							<form onSubmit={onSubmit}>
								<div class='form-group d-flex flex-column align-items-center'>
									<input
										className='footer-input'
										placeholder='Name'
										type='text'
										name='name'
										value={name}
										onChange={onChange}
										required
									/>
									<input
										className='footer-input'
										placeholder='Email'
										type='email'
										name='email'
										value={email}
										onChange={onChange}
										required
									/>
									<input
										className='footer-input'
										placeholder='Password'
										type='password'
										name='password'
										value={password}
										onChange={onChange}
										required
									/>
									<input
										className='footer-input'
										placeholder='Comfirm Password'
										type='password'
										name='passwordConfirm'
										value={passwordConfirm}
										onChange={onChange}
										required
									/>
								</div>
								<div class='modal-footer d-flex justify-content-center flex-column'>
									<button
										type='submit'
										class='footer-btn sm-btn'>
										Register
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div> */}
			<div class='modal' tabindex='-1' id='user-logout_modal'>
				<div class='modal-dialog modal-dialog-centered'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title modal-dialog-centered lg-text reg-text text-center'>
								Are you sure you want to logout?
							</h5>
						</div>
						<div class='modal-body'>
							<form>
								<div class='form-group d-flex  align-items-center justify-content-center justify-content-evenly'>
									<div class='d-flex justify-content-center '>
										<button
											onClick={onLogout}
											type='submit'
											class='footer-btn sm-btn'>
											YES
										</button>
									</div>
									<div class='d-flex justify-content-center '>
										<button
											type='submit'
											class='footer-btn sm-btn'
											data-bs-dismiss='modal'
											aria-label='Close'>
											{' '}
											NO
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
