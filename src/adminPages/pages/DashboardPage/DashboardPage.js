import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import { logout } from '../../../store/actions/userActions';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';

function DashboardPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const onLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
	};

	if (!user) {
		navigate('/');
	}

	return (
		<div className="row">
			<div className="col-md-4">
				<DashboardMenu />
			</div>
			<div className="col-md-8 d-flex mt-60 d-flex flex-column">
				<div className="dashboard-header d-flex justify-content-around align-items-center">
					<h1 className="lg-text bold-text">Dashboard Content</h1>
					<NavLink className="btn" inverse onClick={onLogout} to="/">
						Logout
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default DashboardPage;
