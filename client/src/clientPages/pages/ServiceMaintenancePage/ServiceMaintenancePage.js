import React from 'react';
import MainNav from '../../../shared/components/Navigation/MainNav';
import ServiceHeader from '../../../images/why-choose-us.jpeg';
import ServiceMenu from '../../components/ServiceMenu/ServiceMenu';
import InfoCards from '../../components/InfoCards/InfoCards';
import Reviews from '../Reviews/Reviews';
import ServiceMaintenance from '../../../images/services-maintenance.jpeg';
import ChooseUs from '../../../images/why-choose-us.jpeg';
import Footer from '../../components/Footer/Footer';

function ServiceMaintenancePage() {
	return (
		<>
			<div className="service-page_container">
				<div className="service-page_header">
					<div className="service-page_header-img position-relative">
						<img
							className="img-fluid"
							src={ServiceHeader}
							alt="service header"
						/>
						<h2 className="about-us-header_title position-absolute bold-text">
							Our Services <br></br>Maintenance
						</h2>
						<div className="main-nav__container position-absolute">
							<MainNav />
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row" id="maintenance">
					<div className="col-md-4">
						<ServiceMenu />
					</div>
					<div className="col-md-8">
						<div className="service-page_content">
							<div className="row">
								<div className="col-md-6 mt-4">
									<img
										className="img-fluid"
										src={ServiceMaintenance}
										alt="service AC"
									/>
								</div>
								<div className="col-md-6 mt-4">
									<h2 className="service-page_content-title reg-text ms-5">
										Maintenance & Repair
									</h2>
									<p className="service-page_content-text mt-4 ms-5 sm-text light-text">
										loremIpsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to make a type specimen
										book. It has survived not only five
										centuries, but also the leap
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className="container why-choose-us_container mb-100 position-relative my-100">
								<h2 className="service-choose-us_title reg-text text-start mb-5 fs-1">
									Why Choose Us
								</h2>
								<div className="why-choose-us_content">
									<div className="position-relative">
										<div className="service-choose-us_item d-flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="90"
												height="25"
												fill="#09aeb8"
												class="bi bi-check-circle-fill"
												viewBox="0 0 16 16">
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
											</svg>
											<div className="why-choose-us_item-content">
												<h3 className="md-text reg-text why-choose-us_item-title">
													Experienced Team
												</h3>
											</div>
										</div>
										<div className="service-choose-us_item d-flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="90"
												height="25"
												fill="#09aeb8"
												class="bi bi-check-circle-fill"
												viewBox="0 0 16 16">
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
											</svg>
											<div className="why-choose-us_item-content">
												<h3 className="md-text reg-text why-choose-us_item-title">
													Affordable Service Prices
												</h3>
											</div>
										</div>
										<div className="service-choose-us_item d-flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="90"
												height="25"
												fill="#09aeb8"
												class="bi bi-check-circle-fill"
												viewBox="0 0 16 16">
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
											</svg>
											<div className="why-choose-us_item-content">
												<h3 className="md-text reg-text why-choose-us_item-title">
													Maintenance Support
												</h3>
											</div>
										</div>
										<div className="service-choose-us_item d-flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="90"
												height="25"
												fill="#09aeb8"
												class="bi bi-check-circle-fill"
												viewBox="0 0 16 16">
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
											</svg>
											<div className="why-choose-us_item-content">
												<h3 className="md-text reg-text why-choose-us_item-title">
													Quality Brands
												</h3>
											</div>
										</div>
										<div className="service-choose-us_item d-flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="90"
												height="25"
												fill="#09aeb8"
												class="bi bi-check-circle-fill"
												viewBox="0 0 16 16">
												<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
											</svg>
											<div className="why-choose-us_item-content">
												<h3 className="md-text reg-text why-choose-us_item-title">
													One More
												</h3>
											</div>
										</div>
									</div>
									<div className="service-choose-us_right position-absolute">
										<img
											className="chooseus-img"
											src={ChooseUs}
											alt="why-choose-us"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="d-flex justify-content-center my-5">
					<a className="lg-btn bold-text" href="/contact">
						Get a Free Quote
					</a>
				</div>
			</div>
			{/* <div>
				<div className='md-btn'></div>
			</div> */}
			<InfoCards />
			<Reviews />
			<Footer />
		</>
	);
}

export default ServiceMaintenancePage;
