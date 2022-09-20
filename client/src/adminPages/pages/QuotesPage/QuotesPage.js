import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllQuotes } from '../../../store/actions/quoteActions';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import Button from '../../../shared/components/FormElements/Button';

const QuotesPage = () => {
	const dispatch = useDispatch();
	const { quotes, error, loading } = useSelector((state) => state.quotes);

	useEffect(() => {
		dispatch(getAllQuotes());
	}, [dispatch]);

	const formatDate = (date) => {
		const dateArr = date.split('T');
		return dateArr[0];
	};

	return (
		<div className="row">
			<div className="col-md-4">
				<DashboardMenu />
			</div>
			<div className="col-md-8 d-flex my-60">
				<div className="container">
					<div className="mb-60">
						<a className="reg-text" href="/dashboard/clients">
							Back to Clients
						</a>
					</div>
					<h1 className="lg-text bold-text mb-5">QUOTES</h1>
					<table className="quote-table">
						<thead>
							<tr>
								<th>Quote #</th>
								<th>Client</th>
								<th>Date Issued</th>
								<th>Due Date</th>
								<th>Amount</th>
								<th>Status</th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{quotes.map((quote) => (
								<tr>
									<td>{quote.quoteNumber}</td>
									<td>{quote.client.clientName}</td>
									<td>{formatDate(quote.quoteDate)}</td>
									<td>Due Date</td>
									<td>{quote.quoteTotal}</td>
									<td>{quote.quoteStatus}</td>
									<td>
										<Link
											to={`/dashboard/quotes/${quote._id}`}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-eye-fill"
												viewBox="0 0 16 16">
												<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
												<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
											</svg>
										</Link>
									</td>
									<td>
										<Link
											to={`/dashboard/quotes/${quote._id}/edit`}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-pencil-fill"
												viewBox="0 0 16 16">
												<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
											</svg>
										</Link>
									</td>
									<td>
										<Button>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="red"
												class="bi bi-trash-fill"
												viewBox="0 0 16 16">
												<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
											</svg>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default QuotesPage;
