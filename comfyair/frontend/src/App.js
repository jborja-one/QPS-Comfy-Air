import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/index.js';
import AboutPage from './Components/AboutPage/index.js';
import ServiceCoolingPage from './Components/ServiceCoolingPage/index.js';
import ServiceHeatingPage from './Components/ServiceHeatingPage/index.js';
import ServiceMaintenancePage from './Components/ServiceMaintenancePage/index.js';
import ServiceDiagnosticsPage from './Components/ServiceDiagnosticsPage/index.js';
import ContactPage from './Components/ContactPage/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route
						path='/services-cooling'
						element={<ServiceCoolingPage />}
					/>
					<Route
						path='/services-heating'
						element={<ServiceHeatingPage />}
					/>
					<Route
						path='/services-maintenance'
						element={<ServiceMaintenancePage />}
					/>
					<Route
						path='/services-diagnostics'
						element={<ServiceDiagnosticsPage />}
					/>
					<Route path='/contact-us' element={<ContactPage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;
