import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './clientPages/pages/HomePage/HomePage';
import AdminLogin from './clientPages/pages/AdminLogin/AdminLogin';
import AboutPage from './clientPages/pages/AboutPage/AboutPage';
import ServiceCoolingPage from './clientPages/pages/ServiceCoolingPage/ServiceCoolingPage';
import ServiceDiagnosticPage from './clientPages/pages/ServiceDiagnosticPage/ServiceDiagnosticPage';
import ServiceHeatingPage from './clientPages/pages/ServiceHeatingPage/ServiceHeatingPage';
import ServiceMaintenancePage from './clientPages/pages/ServiceMaintenancePage/ServiceMaintenancePage';
import ReviewFormPage from './clientPages/pages/ReviewFormPage/ReviewFormPage';
import ContactPage from './clientPages/pages/ContactPage/ContactPage';
import DashboardPage from './adminPages/pages/DashboardPage/DashboardPage';
import ClientsPage from './adminPages/pages/ClientsPage/ClientsPage';
import EachClientPage from './adminPages/pages/EachClientPage/EachClientPage';

import Footer from './clientPages/components/Footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	const user = useSelector((state) => state.user);

	let routes;

	if (user.isAuthenticated) {
		routes = (
			<Routes>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/admin-login" element={<AdminLogin />} />
				<Route path="/dashboard/clients" element={<ClientsPage />} />
			</Routes>
		);
	} else {
		routes = (
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/admin-login" element={<AdminLogin />} />
				<Route path="/about" element={<AboutPage />} />
				<Route
					path="/services-cooling"
					element={<ServiceCoolingPage />}
				/>
				<Route
					path="/services-diagnostics"
					element={<ServiceDiagnosticPage />}
				/>
				<Route
					path="/services-heating"
					element={<ServiceHeatingPage />}
				/>
				<Route
					path="/services-maintenance"
					element={<ServiceMaintenancePage />}
				/>
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/reviews" element={<ReviewFormPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/dashboard/clients" element={<ClientsPage />} />
				<Route
					path="/dashboard/clients/:id"
					element={<EachClientPage />}
				/>
			</Routes>
		);
	}

	return (
		<>
			<BrowserRouter>{routes}</BrowserRouter>
			<Footer />
			<ToastContainer />
		</>
	);
}

export default App;
