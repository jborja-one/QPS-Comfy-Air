import React from 'react';

import AirConditioningPhoto from '../../../images/service-card-air-conditioning.jpeg';
import HeatingPhoto from '../../../images/service-card-heating.jpeg';
import RepairPhoto from '../../../images/repair-photo.jpeg';
import './ServiceCards.css';

function ServiceCards() {
	return (
		<>
			<div className="container-fluid my-100 pt-100 service-cards_container">
				<div className="d-flex justify-content-center">
					<h2 className="home-about_title lg-text reg-text text-center mb-100 fs-1">
						Our Services
					</h2>
				</div>
				<div className="service-card_box row mx-auto my-auto pb-100">
					<div className="col-6 col-md-4 service-card d-flex align-items-center flex-column">
						<img
							className="img-fluid service-card_img"
							src={AirConditioningPhoto}
							alt="air conditioning"
						/>
						<div className="service-card_content">
							<h3 className="lg-text reg-text service-card_title my-5">
								Air Conditioning
							</h3>
							<p className="sm-text light-text service-card_text my-4 py-3 px-3">
								Full diagnostic and planning for the best
								service and equipment available for your home or
								business.
							</p>
							<a
								className="service-card_btn bold-text"
								href="/services-cooling/#services-cooling">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-6 col-md-4 service-card d-flex align-items-center flex-column">
						<img
							className="img-fluid service-card_img"
							src={HeatingPhoto}
							alt="air conditioning"
						/>
						<div className="service-card_content">
							<h3 className="lg-text reg-text service-card_title my-5">
								Heating
							</h3>
							<p className="sm-text light-text service-card_text my-4 py-3 px-3">
								Full diagnostic and planning for the best
								service and equipment available for your home or
								business.
							</p>
							<a
								className="service-card_btn bold-text"
								href="/services-heating/#heating">
								Learn More
							</a>
						</div>
					</div>
					<div className="col-6 col-md-4 service-card service-card_last-card d-flex align-items-center flex-column">
						<img
							className="img-fluid service-card_img"
							src={RepairPhoto}
							alt="air conditioning"
						/>
						<div className="service-card_content">
							<h3 className="lg-text reg-text service-card_title my-5">
								Repairs
							</h3>
							<p className="sm-text light-text service-card_text my-4 py-3 px-3">
								A proper diagnostic is key for a professional
								repair. Misdiagnosis are often the cause for
								equipment failures.
							</p>
							<a
								className="service-card_btn bold-text"
								href="/services-maintenance/#maintenance">
								Learn More
							</a>
						</div>
					</div>
				</div>
				<div className="mid-banner d-flex justify-content-around align-items-center py-100">
					<h2 className="lg-text reg-text text-center fs-1">
						No Overtime Charges, 7 Days a Week
					</h2>
					<a className="banner-btn bold-text" href="/contact">
						Get a Free Quote
					</a>
				</div>
			</div>
		</>
	);
}

export default ServiceCards;
