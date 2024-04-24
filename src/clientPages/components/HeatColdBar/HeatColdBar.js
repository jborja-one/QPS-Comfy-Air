import React from 'react';

import Logo from '../../../images/Logo-nobg.png';

import './HeatColdBar.css';

const HeatColdBar = () => {
	return (
		<div className="container-fluid hot-cold_container d-flex justify-content-between align-items-center px-0">
			<div className="hot-cold_content first-box">
				<p className="sm-text light-text">Air Conditioning Services</p>
				<h2 className="hot-cold_title reg-text lg-text">
					Cool it Down
				</h2>
			</div>
			<div>
				<img className="banner-logo" src={Logo} alt="banner logo" />
			</div>
			<div className="hot-cold_content">
				<p className="sm-text light-text">Heating Services</p>
				<h2 className="hot-cold_title reg-text lg-text">Heat it Up</h2>
			</div>
		</div>
	);
};

export default HeatColdBar;
