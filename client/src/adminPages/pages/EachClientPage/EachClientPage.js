import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import {
	getClientById,
	clearErrors,
} from '../../../store/actions/clientActions';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import QuoteInfo from '../../components/QuoteInfo/QuoteInfo';
import InvoiceInfo from '../../components/InvoiceInfo/InvoiceInfo';
import Button from '../../../shared/components/FormElements/Button';

const EachClientPage = (props) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { client, error, loading } = useSelector((state) => state.client);

	useEffect(() => {
		dispatch(getClientById(id));
		dispatch(clearErrors());
	}, [dispatch, id]);

	const formatPhone = (phone) => {
		if (phone) {
			const phoneArr = phone.split('');
			phoneArr.splice(3, 0, '-');
			phoneArr.splice(7, 0, '-');
			return phoneArr.join('');
		}
	};

	return (
		<div className="row">
			<div className="col-md-4">
				<DashboardMenu />
			</div>
			<div className="col-md-8 d-flex mt-60">
				<div className="container">
					<div className="mb-60">
						<a className="reg-text" href="/dashboard/clients">
							Back to Clients
						</a>
					</div>
					<div className="row me-5">
						{client ? (
							<div className="col-md-6 ">
								<div className="mb-30">
									<div className="mb-5">
										<h3 className="lg-text bold-text">
											{client.clientName}
										</h3>
									</div>
									<div className="row">
										<div className="col-md-6  mb-5">
											<p className="sm-text reg-text mb-4">
												Phone Number:
											</p>
											<p className="sm-text reg-text mb-4">
												Email:
											</p>
											<p className="sm-text reg-text mb-4 me-4">
												Address:
											</p>
										</div>
										<div className=" col-md-6">
											<div className="">
												<a
													className="sm-text reg-text"
													href="tel:  {client.clientPhone}">
													{formatPhone(
														client.clientPhone
													)}
												</a>
												<p className="sm-text reg-text my-4">
													{client.clientEmail}
												</p>
											</div>
											<div className=" flex-column">
												<p className="reg-text mb-2">
													{client.clientStreet}
												</p>
												<div className="d-flex mb-2">
													<p className="reg-text me-2">
														{client.clientCity}
													</p>
													<p className="reg-text me-2">
														{client.clientState}
													</p>
													<p className="reg-text me-2">
														{client.clientZip}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							'loading'
						)}
						<div className="col-md-6 d-flex flex-column align-items-end mt-5">
							<div className="mb-5">
								<Button
									role="button"
									to="/dashboard/clients/create-invoice"
									class="btn sm-text bold-text ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="21"
										height="21"
										fill="currentColor"
										class="bi bi-plus-square me-2 mb-1"
										viewBox="0 0 16 16">
										<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
										<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
									</svg>
									CREATE INVOICE
								</Button>
							</div>
							<div className="">
								<Button
									role="button"
									to="/dashboard/clients/create-quote"
									class="btn sm-text bold-text ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="21"
										height="21"
										fill="currentColor"
										class="bi bi-plus-square me-2 mb-1"
										viewBox="0 0 16 16">
										<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
										<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
									</svg>
									CREATE QUOTE
								</Button>
							</div>
						</div>
					</div>
					<hr />
					<div>
						<h1 className="lg-text bold-text mb-4">Quotes</h1>
						{client && client.quote ? (
							<QuoteInfo quote={client.quote} />
						) : (
							'NO QUOTES'
						)}
					</div>
					<hr />
					<div>
						<h1 className="lg-text bold-text mb-4">Invoices</h1>
						{client && client.invoice ? (
							<InvoiceInfo invoice={client.invoice} />
						) : (
							'NO INVOICES'
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EachClientPage;
