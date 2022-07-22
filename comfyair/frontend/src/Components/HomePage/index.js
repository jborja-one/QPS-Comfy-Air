import React from 'react';
import NavBar from '../NavBar';
import InfoCards from '../InfoCards';
import ServiceCards from '../ServiceCards';
import Footer from '../Footer';
import WhyChooseUs from '../WhyChooseUs';
import Home_img from '../../images/home-img.jpeg';
import Logo from '../../images/Logo-nobg.png';
import Home_about from '../../images/home-page-about.jpeg';
import './HomePage.css';
import '../../index.css';
import '../WhyChooseUs/WhyChooseUs.css';

function HomePage() {
	return (
		<div>
			<NavBar />
			<div className='header-container'>
				<div className='header-img_container'>
					<img
						class='img-fluid position-relative'
						src={Home_img}
						alt='logo'
					/>
					<h2 className='home-header_title position-absolute bold-text'>
						Installation <br></br> Services & <br></br> Repair
					</h2>
					<div className='header-btn_container position-absolute'>
						<a
							className='lg-btn sm-btn bold-text'
							href='/contact-us'>
							Get a Free Quote
						</a>
					</div>
				</div>
			</div>
			<div className='home-infocards'>
				<InfoCards />
			</div>
			<div className='home-about_container container my-100 d-flex justify-content-around'>
				<img
					className='img-fluid home-about_img'
					src={Home_about}
					alt='home-about us'
				/>
				<div className='home-about_content'>
					<h2 className='home-about_title reg-text lg-text'>
						Welcome to ComfyAir
					</h2>
					<p className='md-text light-text my-4'>
						Heating and air conditioning installation and repair
						company
					</p>
					<p className='sm-text light-text my-4'>
						Lorem ipsum dolor amet, consectetur adipiscing elit, sed
						eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip laborum.
					</p>
					<div className='home-about_btn-container'>
						<a className='md-btn bold-text' href='/about'>
							Learn More
						</a>
					</div>
				</div>
			</div>
			<ServiceCards />
			<div className='position-relative'>
				<WhyChooseUs />
			</div>
			<div className='container-fluid hot-cold_container d-flex justify-content-between align-items-center px-0'>
				<div className='hot-cold_content first-box'>
					<p className='sm-text light-text'>
						Air Conditioning Services
					</p>
					<h2 className='hot-cold_title reg-text lg-text'>
						Cool it Down
					</h2>
				</div>
				<div>
					<img className='banner-logo' src={Logo} alt='banner logo' />
				</div>
				<div className='hot-cold_content'>
					<p className='sm-text light-text'>Heating Services</p>
					<h2 className='hot-cold_title reg-text lg-text'>
						Heat it Up
					</h2>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default HomePage;
