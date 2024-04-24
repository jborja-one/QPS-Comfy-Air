import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	clearErrors,
	createReview,
} from '../../../store/actions/reviewsActions';
import Logo from '../../../images/Logo-nobg.png';
import emailjs from '@emailjs/browser';
import './ReviewFormPage.css';

function ReviewPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { reviews, error } = useSelector((state) => state.reviews);

	const [reviewData, setReviewData] = useState({
		fullName: '',
		rating: '',
		service: '',
		review: '',
	});

	const { fullName, rating, service, review } = reviewData;

	const onChange = (e) => {
		setReviewData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		if (error) {
			toast.error(error);
		}

		dispatch(clearErrors());
	}, [reviews, error, navigate, dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			createReview({
				fullName,
				rating,
				service,
				review,
			})
		);

		setReviewData({
			fullName: '',
			rating: '',
			service: '',
			review: '',
		});

		emailjs.sendForm(
			'service_hehbavc',
			'template_7cceu2s',
			e.target,
			'eI07DrI2A9b126Ij8'
		);

		if (reviews) {
			navigate('/reviews');
			toast.success('Review submitted successfully');
		}
	};

	return (
		<div className="container review-container">
			<div className="review-header d-flex">
				<img src={Logo} alt="ComfyAir Logo" />
				<div className="d-flex flex-column align-items-center">
					<h1 className="review-header_title text-center">
						<span className="thank-you bold-text">
							Thank You!!!
						</span>
					</h1>
					<h1 className="lg-text bold-text">for working with us</h1>
				</div>
			</div>
			<div className="review-body">
				<h2 className="lg-text bold-text text-center">
					We always love to hear from you
				</h2>
				<h2 className="lg-text bold-text my-5 text-center">
					Tell us how we did...
				</h2>
			</div>
			<div className="review-form">
				<form onSubmit={handleSubmit}>
					<div className="d-flex w-100 mt-5">
						<div className="form-group me-3">
							<div class="form-floating w-100 ">
								<input
									type="text"
									name="fullName"
									value={fullName}
									onChange={onChange}
									class="form-control form-input"
									id="floatingInput"
									placeholder="Full Name"
									required
								/>
								<label for="floatingInput">Full Name</label>
							</div>
							<div class="form-floating ">
								<select
									name="service"
									value={service}
									onChange={onChange}
									class="form-select form-input"
									id="floatingSelect"
									aria-label="Floating label select example"
									required>
									<option defaultValue="selected">
										What did we help you with?
									</option>
									<option value="Cooling Systems">
										Cooling
									</option>
									<option value="Heating Systems">
										Heating
									</option>
									<option value="Maintenance & Repair">
										Maintenance & Repair
									</option>
									<option value="Diagnostic Service">
										Diagnostics
									</option>
								</select>
								<label for="floatingSelect">
									Select a Service
								</label>
							</div>
							<div className="form-group">
								<select
									className="form-select form-input"
									name="rating"
									onChange={onChange}
									value={rating}
									required>
									<option defaultValue="selected">
										How did we do?
									</option>
									<option value="5">⭐️⭐️⭐️⭐️⭐️</option>
									<option value="4">⭐️⭐️⭐️⭐️</option>
									<option value="3">⭐️⭐️⭐️</option>
									<option value="2">⭐️⭐️</option>
									<option value="1">⭐️</option>
								</select>
							</div>
						</div>
						<div class="form-group form-floating">
							<div class="form-floating">
								<textarea
									class="form-control form-input review-textarea"
									name="review"
									value={review}
									onChange={onChange}
									placeholder="Your Message Here ..."
									id="floatingTextarea"
									required></textarea>
								<label for="floatingTextarea">
									We appreciate your feedback!
								</label>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center my-5 pb-5">
						<button type="submit" class="lg-btn">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ReviewPage;
