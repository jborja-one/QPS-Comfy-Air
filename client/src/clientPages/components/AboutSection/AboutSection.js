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
				<p className="md-text light-text my-4">
					Heating and air conditioning installation and repair company
				</p>
				<p className="sm-text light-text my-4">
					Lorem ipsum dolor amet, consectetur adipiscing elit, sed
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip laborum.
				</p>
				<div className="">
					<Button className="md-btn bold-text" to="/about">
						Learn More
					</Button>
				</div>
			</div>
			<div className="col-md-2"></div>
		</div>
	);
};

export default AboutSection;
