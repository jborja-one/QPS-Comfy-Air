import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../FormElements/Button';
import LoginModal from '../../../clientPages/components/LoginModal/LoginModal';

import './NavLinks.css';

const NavLinks = () => {
	return (
		<ul className="nav-links__container">
			<li>
				<NavLink className="nav-links" to="/">
					HOME
				</NavLink>
			</li>

			<li>
				<NavLink className="nav-links" to="/about">
					ABOUT
				</NavLink>
			</li>

			<li>
				<NavLink className="nav-links" to="/services">
					SERVICES
				</NavLink>
			</li>

			<li>
				<NavLink className="nav-links" to="/contact">
					CONTACT
				</NavLink>
			</li>

			<li>
				<LoginModal />
			</li>
			<li>
				<Button className="btn" inverse>
					<p className="bold-text reg-text">Book Now</p>
				</Button>
			</li>
		</ul>
	);
};

export default NavLinks;
