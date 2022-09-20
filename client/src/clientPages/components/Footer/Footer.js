import React from 'react';
import FooterBg from '../../../images/footer-bghd-img.png';
import Logo from '../../../images/Logo-nobg.png';

import './Footer.css';

const Footer = () => {
	return (
		<div className="footer-container container-fluid position-relative">
			<div className="footer-img_container d-flex justify-content-center position-relative">
				<img
					className="position-relative"
					width="40%"
					src={FooterBg}
					alt="logo"
				/>
			</div>
			<div className="footer-content_container position-absolute">
				<div className="footer-content_row row">
					<div className="footer-content col">
						<img
							className="footer-logo im-fluid"
							src={Logo}
							alt="logo"
						/>
						<h2 className="lg-text reg-text mb-5">
							Installation Services & <br></br>Repair
						</h2>
						<div className="d-flex my-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#09aeb8"
								class="bi bi-envelope-fill"
								viewBox="0 0 16 16">
								<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
							</svg>
							<h4 className="footer-email md-text reg-text ms-3">
								Email: comfyair@gmail.com
							</h4>
							 
						</div>
						<div className="d-flex my-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="#09aeb8"
								class="bi bi-telephone-fill mt-3"
								viewBox="0 0 16 16">
								<path
									fill-rule="evenodd"
									d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
								/>
							</svg>
							<h4 className="footer-phone md-text reg-text ms-3 mt-3">
								Phone: (801) 688-6619
							</h4>
						</div>
					</div>
					<div className="footer-content_right col mt-5">
						<h2 className="lg-text reg-text">Quick Links</h2>
						<div className="d-flex w-100 justify-content-end">
							<div className="d-flex my-3">
								<ul className="footer-ul">
									<li>
										<a className="footer-links" href="/">
											Home
										</a>
									</li>
									<li>
										<a
											className="footer-links"
											href="/about">
											About
										</a>
									</li>
									<li>
										<a
											className="footer-links"
											href="/services-cooling/#cooling">
											Services
										</a>
									</li>
									<li>
										<a
											className="footer-links"
											href="/contact">
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							<div className="d-flex my-3">
								<ul className="footer-ul">
									<li>
										<a
											className="footer-links"
											href="/services-cooling/#cooling">
											Cooling Services
										</a>
									</li>
									<li>
										<a
											className="footer-links"
											href="/services-heating/#heating">
											Heating Services
										</a>
									</li>
									<li>
										<a
											className="footer-links"
											href="/services-maintenance/#maintenance">
											Maintenance & Repair
										</a>
									</li>
									<li>
										<a
											className="footer-links"
											href="/services-diagnostics/#diagnostics">
											Diagnostic Services
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
