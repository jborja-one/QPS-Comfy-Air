import React from 'react';

import Button from '../../../shared/components/FormElements/Button';
import Home_about from '../../../images/home-page-about.jpeg';

import './AboutSection.css';

const AboutSection = () => {
	return (
		<div className="about-section row">
			<div className="col-md-2"></div>
			<img
				className="img-fluid col-md-4"
				src={Home_about}
				alt="home-about us"
			/>
			<div className="home-about_content col-md-4">
				<h2 className="reg-text lg-text">Welcome to ComfyAir</h2>
				<h1 className="md-text light-text my-4">
					Heating and air conditioning installation and repair company
				</h1>
				<p className="sm-text light-text my-4">
					At ComfyAir we pride ourselves in our experience and
					abilities to take care of the needs and wants of every
					single of our customers. We have been operating in Salt Lake
					City for almost 20 years now and loving it!
				</p>
				<div className="">
					<Button
						className="md-btn bold-text"
						to="/about/#about-page-header">
						Learn More
					</Button>
				</div>
			</div>
			<div className="col-md-2"></div>
		</div>
	);
};

export default AboutSection;
