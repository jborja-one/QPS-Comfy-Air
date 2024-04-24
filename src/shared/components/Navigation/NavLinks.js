import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import Button from '../FormElements/Button';

// import { logout } from '../../../store/actions/userActions';

import './NavLinks.css';

const NavLinks = () => {
	const dispatch = useDispatch();
	// const user = useSelector((state) => state.user);

	// const onLogout = (e) => {
	// 	e.preventDefault();
	// 	dispatch(logout());
	// };

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
				<NavLink
					className="nav-links"
					to="/services-cooling/#services-cooling">
					SERVICES
				</NavLink>
			</li>

			<li>
				<NavLink className="nav-links" to="/contact">
					CONTACT
				</NavLink>
			</li>

			{/* <li>
				{user && user.isAuthenticated ? (
					<NavLink
						className="nav-links"
						onClick={onLogout}
						to="/admin-login">
						ADMIN LOGOUT
					</NavLink>
				) : (
					<NavLink className="nav-links" to="/admin-login">
						ADMIN LOGIN
					</NavLink>
				)}
			</li> */}
			<li>
				<NavLink className="btn" inverse to="/contact">
					<p className="bold-text reg-text">Book Now</p>
				</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
