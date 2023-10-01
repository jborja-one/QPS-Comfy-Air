import React from 'react';

import Button from '../../../shared/components/FormElements/Button';
import MainNav from '../../../shared/components/Navigation/MainNav';
import InfoCards from '../../components/InfoCards/InfoCards';
import AboutSection from '../../components/AboutSection/AboutSection';
import Services from '../../components/ServiceCards/ServiceCards';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Footer from '../../components/Footer/Footer';

import Home_img from '../../../images/home-img.jpeg';

import './HomePage.css';
import HeatColdBar from '../../components/HeatColdBar/HeatColdBar';
import Reviews from '../Reviews/Reviews';

const HomePage = () => {
	return (
		<div>
			<div className="">
				<div className="header-img_container position-relative">
					<img
						className="img-fluid position-relative"
						src={Home_img}
						alt="logo"
					/>
					<h2 className="home-header_title position-absolute bold-text">
						Installation <br></br> Services & <br></br> Repair
					</h2>
					<div className="header-btn_container position-absolute">
						<Button className="btn" to="/contact">
							<p className="bold-text">Get a Free Quote</p>
						</Button>
					</div>
					<div className="main-nav__container position-absolute">
						<MainNav />
					</div>
				</div>
			</div>
			<InfoCards />
			<AboutSection />
			<Services />
			<WhyChooseUs />
			<HeatColdBar />
			<Reviews />
			<Footer />
		</div>
	);
};

export default HomePage;
