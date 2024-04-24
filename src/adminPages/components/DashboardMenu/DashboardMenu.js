import React from 'react';
import { NavLink } from 'react-router-dom';
// import './ServicesMenu.css';

function DashboardMenu() {
	return (
		<>
			<div className="container ">
				<div className="text-left">
					<h1 class="lg-text bold-text ms-4 my-5">Dashboard Menu</h1>
				</div>
				<div className="menu-container d-flex flex-column  position-relative">
					<NavLink
						className={({ isActive }) =>
							isActive ? 'menu-active' : 'services-menu_links'
						}
						to="/dashboard/clients">
						CLIENTS
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
						to="/dashboard/invoices">
						INVOICES
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
						to="/dashboard/quotes">
						QUOTES
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
						to="/dashboard/messages">
						MESSAGES
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
			</div>
		</>
	);
}

export default DashboardMenu;
