import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import WhyChooseUs from '../WhyChooseUs';
import ServiceCards from '../ServiceCards';
import RicharPhoto from '../../images/richar-photo.jpeg';
import AboutUs from '../../images/about-us-header.jpeg';
import './AboutPage.css';

function AboutPage() {
	return (
		<>
			<NavBar />
			<div className='about-page-header my-5 position-relative'>
				<div className='position-relative'>
					<img
						className='img-fluid'
						src={AboutUs}
						alt='about us header'
					/>
				</div>
				<h2 className='about-us-header_title position-absolute bold-text'>
					A bit<br></br> About Us
				</h2>
			</div>
			<div className='container about-page_container'>
				<div className='about-page_content-left position-relative d-flex justify-content-between'>
					<div>
						<img
							className='about-page_richar-photo'
							src={RicharPhoto}
							alt='richar'
						/>
						<div className='about-page_img_content position-absolute'>
							<h3 className='about-page_img-text text-center reg-text md-text'>
								<span className='about-page_img-years'>20</span>
								<br></br>years<br></br>experience
							</h3>
						</div>
					</div>
					<div>
						<div className='about-page_content-right'>
							<h3 className='lg-text bold-text'>
								<strong>Welcome</strong>
							</h3>
							<h2 className='md-text reg-text my-5'>
								We are trusted source of ac and heating
								maintenance repairs company
							</h2>
						</div>
						<div className='about-page_content-list'>
							<div className='about-page_content-list-item d-flex align-items-center my-4'>
								<i class='fa-about fa-solid fa-circle-check'></i>
								<p className='reg-text md-text'>
									Unmatched performance, satisfaction service
									guarantees
								</p>
							</div>
							<div className='about-page_content-list-item d-flex align-items-center my-4'>
								<i class='fa-about fa-solid fa-circle-check'></i>
								<p className='reg-text md-text'>
									Home protection through our shoe covers and
									mats
								</p>
							</div>
							<div className='about-page_content-list-item d-flex align-items-center my-4'>
								<i class='fa-about fa-solid fa-circle-check'></i>
								<p className='reg-text md-text'>
									Upfront, flat rate pricing???no overtime
									charges
								</p>
							</div>
							<div className='about-page_content-list-item d-flex align-items-center my-4'>
								<i class='fa-about fa-solid fa-circle-check'></i>
								<p className='reg-text md-text'>
									24 / 7 availability for all emergency
									services
								</p>
							</div>
							<div className='about-page_content-list-item d-flex align-items-center my-4'>
								<i class='fa-about fa-solid fa-circle-check'></i>
								<p className='reg-text md-text'>
									Fixed right promise???done right or it???s free
								</p>
							</div>
							<div className='about-page_content-list-item d-flex align-items-center my-4'>
								<i class='fa-about fa-solid fa-circle-check'></i>
								<p className='reg-text md-text'>
									Clear communication and updates on service
									arrival
								</p>
							</div>
							<div className='about-page_content-discount d-flex flex-column align-items-center'>
								<h2 className='discount-title lg-text reg-text'>
									10% off
								</h2>
								<p className='discount-text md-text light-text'>
									on all of our services
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<WhyChooseUs />
			<ServiceCards />
			<Footer />
		</>
	);
}

export default AboutPage;
