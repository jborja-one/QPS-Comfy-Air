import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getReviews, clearErrors } from '../../../store/actions/reviewsActions';

import './Reviews.css';

const Reviews = () => {
	const dispatch = useDispatch();

	const { reviews } = useSelector((state) => state.reviews);
	console.log(reviews);
	useEffect(() => {
		dispatch(getReviews());
		dispatch(clearErrors());
	}, [dispatch]);
	return (
		<div className="container-fluid ms-5 mt-100">
			<div className="position-relative">
				<h2
					className="lg-text reg-text position-relative"
					style={{ fontSize: '3.5rem' }}
					data-aos="fade-up"
					data-aos-duration="3000"
					data-aos-easing="ease-in-back">
					What Our Customers
					<span className="bold-text"> Have to Say</span>
				</h2>
			</div>
			<div
				id="carouselExampleControls"
				class="carousel slide mt-60"
				data-bs-ride="carousel">
				<div class="carousel-inner">
					{reviews.map((review, i) => (
						<div
							active={i === 0}
							class={
								i === 0
									? 'carousel-item active'
									: 'carousel-item'
							}
							key={review.id}>
							<div className="d-flex align-items-center ">
								<h1
									className="lg-text bold-text mb-2 me-5"
									style={{
										color: 'black',
										textDecoration: 'none',
									}}>
									{review.fullName}
								</h1>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="100"
									height="100"
									fill="currentColor"
									class="bi bi-quote"
									viewBox="0 0 16 16">
									<path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
								</svg>
							</div>
							<p
								className="md-text light-text mb-4"
								style={{
									color: 'black',
									textDecoration: 'none',
								}}>
								{review.service}
							</p>
							<p>
								{review.rating === 1 ? (
									<div className="mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									</div>
								) : review.rating === 2 ? (
									<div className="mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									</div>
								) : review.rating === 3 ? (
									<div className="mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									</div>
								) : review.rating === 4 ? (
									<div className="mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									</div>
								) : review.rating === 5 ? (
									<div className="mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											fill="#e0cc81"
											class="bi bi-star-fill"
											viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									</div>
								) : null}
							</p>
							<p
								className="md-text light-text"
								style={{
									color: 'black',
									textDecoration: 'none',
								}}>
								{review.review}
							</p>
							<div className="d-flex justify-content-center align-items-center mt-100">
								<p className="review-bar me-3"></p>
								<p className="review-bar me-3"></p>
								<p className="review-bar"></p>
							</div>
						</div>
					))}
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev">
					<span
						class="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next">
					<span
						class="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Reviews;
