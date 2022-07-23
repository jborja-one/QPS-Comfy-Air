import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { reset, createMessage } from '../../features/messages/messagesSlice';
import NavBar from '../NavBar';
import WhyChooseUs from '../WhyChooseUs';
import InfoCards from '../InfoCards';
import Footer from '../Footer';
import ContactHeaher from '../../images/contact-header.jpeg';
import User from '../../images/user.jpeg';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

function ContactPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { formMessage, isError, isSuccess, isLoading, errorMessage } =
		useSelector((state) => state.messages);

	const [formData, setFormData] = useState({
		fullName: '',
		phoneNumber: '',
		email: '',
		service: '',
		message: '',
	});

	const { fullName, phoneNumber, email, service, message } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		if (isError) {
			toast.error(errorMessage);
		}

		// if (isSuccess || user) {
		// 	navigate('/');
		// }

		dispatch(reset());
	}, [formMessage, isError, isSuccess, errorMessage, navigate, dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			createMessage({
				fullName,
				phoneNumber,
				email,
				service,
				message,
			})
		);
		toast.success('Message sent successfully');
		setFormData({
			fullName: '',
			phoneNumber: '',
			email: '',
			service: '',
			message: '',
		});

		emailjs.sendForm(
			'service_hehbavc',
			'template_50ko7sd',
			e.target,
			'eI07DrI2A9b126Ij8'
		);
	};

	return (
		<>
			<NavBar />
			<div className='header-container position-relative'>
				<div className='header-img_container '>
					<img class='img-fluid' src={ContactHeaher} alt='logo' />
					<h1 className='contact-header_title position-absolute bold-text'>
						Contact Us
					</h1>
				</div>
			</div>
			<div className='container mt-5'>
				<div className='row'>
					<div className='col-md-6'>
						<h3 className='lg-text reg-text'>
							Let us help you make the right decision
						</h3>
						<h5 className='md-text light-text mt-5'>
							We offer installation services for A/C and heating
							systems, <br></br> as well as repairs and diagnostic
							services. We are here to help you with any questions
							you may have.
						</h5>
						<div className='container contact-user_img'>
							<img className='img-fluid' src={User} />
							<div className='container text-center'>
								<h2 className='md-text reg-text'>
									Richar Borja
								</h2>
								<h4 className='sm-text reg-text mt-2'>Owner</h4>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className=''>
							<h4 className='lg-text reg-text text-center mb-3'>
								Get a Free Quote
							</h4>
							<h3 className='md-text light-text text-center footer-form_subtitle mb-3'>
								To request a service call <br></br>please fill
								out the form below
							</h3>
							<form onSubmit={handleSubmit}>
								<div className='d-flex w-100 justify-content-between '>
									<div class='form-floating w-100'>
										<input
											type='text'
											name='fullName'
											value={fullName}
											onChange={onChange}
											class='form-control form-input'
											id='floatingInput'
											placeholder='Full Name'
											required
										/>
										<label for='floatingInput'>
											Full Name
										</label>
									</div>
									<div class='form-floating w-100'>
										<input
											type='text'
											name='phoneNumber'
											value={phoneNumber}
											onChange={onChange}
											class='form-control form-input'
											id='floatingPhone'
											placeholder='Enter Your Phone Number'
											required
										/>
										<label for='floatingPhone'>
											Phone Number
										</label>
									</div>
								</div>
								<div class='form-floating my-4 w-100'>
									<input
										type='email'
										name='email'
										value={email}
										onChange={onChange}
										class='form-control form-input'
										id='floatingEmail'
										placeholder='Email'
										required
									/>
									<label for='floatingPassword'>
										Email Address
									</label>
								</div>
								<div class='form-floating my-4'>
									<select
										name='service'
										value={service}
										onChange={onChange}
										class='form-select form-input'
										id='floatingSelect'
										aria-label='Floating label select example'
										required>
										<option defaultValue='selected'>
											What do you need help with?
										</option>
										<option value='cooling'>Cooling</option>
										<option value='heating'>Heating</option>
										<option value='maintenance'>
											Maintenance & Repair
										</option>
										<option value='diagnostic'>
											Diagnostics
										</option>
									</select>
									<label for='floatingSelect'>
										Select a Service
									</label>
								</div>
								<div class='form-floating'>
									<textarea
										class='form-control form-input'
										name='message'
										value={message}
										onChange={onChange}
										placeholder='Your Message Here ...'
										id='floatingTextarea'
										required></textarea>
									<label for='floatingTextarea'>
										How can we help? ...
									</label>
								</div>
								<div className='footer-btn'>
									<button
										className='footer-btn md-btn mt-3'
										type='submit'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<InfoCards />
			<WhyChooseUs />
			<Footer />
		</>
	);
}

export default ContactPage;
