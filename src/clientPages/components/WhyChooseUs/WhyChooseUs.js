import React from 'react';

import ChooseUs from '../../../images/why-choose-us.jpeg';

import './WhyChooseUs.css';

const WhyChooseUs = () => {
	return (
		<div className="container why-choose-us_container mb-100 position-relative">
			<h2 className="why-choose-us_title lg-text reg-text text-start mb-5 fs-1">
				Why Choose Us
			</h2>
			<div className="why-choose-us_content">
				<div className="why-choose-us_left position-relative">
					<div className="why-choose-us_item d-flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="90"
							height="25"
							fill="#09aeb8"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<div className="why-choose-us_item-content">
							<h3 className="md-text reg-text why-choose-us_item-title">
								Experienced Team
							</h3>
							<p className="sm-text light-text why-choose-us_text my-4 py-3 px-3">
								We have- an extensive team of qualified
								professionals with a proven track record of
								rendering quality work.
							</p>
						</div>
					</div>
					<div className="why-choose-us_item d-flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="90"
							height="25"
							fill="#09aeb8"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<div className="why-choose-us_item-content">
							<h3 className="md-text reg-text why-choose-us_item-title">
								Affordable Service Prices
							</h3>
							<p className="sm-text light-text why-choose-us_text my-4 py-3 px-3">
								As we aim to ensure that the best quality
								services are available for everyone, all our
								works are priced at genuine, competitive rates.
							</p>
						</div>
					</div>
					<div className="why-choose-us_item d-flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="90"
							height="25"
							fill="#09aeb8"
							className="bi bi-check-circle-fill"
							viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						<div className="why-choose-us_item-content">
							<h3 className="md-text reg-text why-choose-us_item-title">
								Maintenance Support
							</h3>
							<p className="sm-text light-text why-choose-us_text my-4 py-3 px-3">
								Through our 24 hours functionality and free
								helpline, we ensure our presence whenever our
								customers are in need
							</p>
						</div>
					</div>
				</div>
				<div className="why-choose-us_right position-absolute">
					<img
						className="chooseus-img"
						src={ChooseUs}
						alt="why-choose-us"
					/>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
