import React from 'react';
import { NavLink } from 'react-router-dom';
import User from '../../../images/user.jpeg';

import './ServiceMenu.css';

function ServicesMenu() {
	return (
		<div className="container">
			<div className="menu-container d-flex flex-column mt-100 position-relative">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'menu-active' : 'services-menu_links'
					}
					to="/services-cooling/#cooling">
					COOLING SERVICES
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chevron-double-right services-menu_links-icon position-absolute icon-1"
						viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
						/>
						<path
							fill-rule="evenodd"
							d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'menu-active' : 'services-menu_links'
					}
					to="/services-heating/#heating">
					HEATING SERVICES
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chevron-double-right services-menu_links-icon position-absolute icon-2"
						viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
						/>
						<path
							fill-rule="evenodd"
							d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'menu-active' : 'services-menu_links'
					}
					to="/services-maintenance/#maintenance">
					MAINTENANCE & REPAIR
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chevron-double-right services-menu_links-icon position-absolute icon-3"
						viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
						/>
						<path
							fill-rule="evenodd"
							d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'menu-active' : 'services-menu_links'
					}
					to="/services-diagnostics/#diagnostics">
					DIAGNOSTICS
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chevron-double-right services-menu_links-icon position-absolute icon-4"
						viewBox="0 0 16 16">
						<path
							fill-rule="evenodd"
							d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
						/>
						<path
							fill-rule="evenodd"
							d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</NavLink>
			</div>
			<div className="container services-menu_img">
				<img className="img-fluid" src={User} />
				<div className="container text-center">
					<h2 className="md-text reg-text">Richar Borja</h2>
					<h4 className="sm-text reg-text mt-2">Owner</h4>
				</div>
			</div>
		</div>
	);
}

export default ServicesMenu;
