import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getClients, clearErrors } from '../../../store/actions/clientActions';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';
import Button from '../../../shared/components/FormElements/Button';

const ClientsPage = () => {
	const dispatch = useDispatch();

	const { loading, error, clients } = useSelector((state) => state.clients);

	useEffect(() => {
		dispatch(getClients());
		dispatch(clearErrors());
	}, [dispatch]);

	const formatPhone = (phone) => {
		const phoneArr = phone.split('');
		phoneArr.splice(3, 0, '-');
		phoneArr.splice(7, 0, '-');
		return phoneArr.join('');
	};

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div className="row">
			<div className="col-md-4">
				<DashboardMenu />
			</div>
			<div className="col-md-8 d-flex mt-60">
				<div className="container">
					<div className="mb-60">
						<Button className="reg-text" to="/dashboard">
							Back to Dashboard
						</Button>
					</div>
					<div className="">
						<a
							role="button"
							href="/dashboard/clients/new-client"
							class="btn btn-primary sm-text bold-text ">
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
							NEW CLIENT
						</a>
					</div>
					<div className="mt-60">
						{clients ? (
							<table class="table table-hover">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Name</th>
										<th scope="col">Email</th>
										<th scope="col">Phone Number</th>
									</tr>
								</thead>
								<tbody>
									{clients.map((client, index) => (
										<tr>
											<th scope="row">{index + 1}</th>
											<td>{client.clientName}</td>
											<td>{client.clientEmail}</td>
											<td>
												{formatPhone(
													client.clientPhone
												)}
											</td>
											<td>
												<a
													role="button"
													href={`/dashboard/clients/${client._id}`}
													class="btn btn-primary sm-text bold-text me-3">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														fill="currentColor"
														class="bi bi-eye-fill pb-1"
														viewBox="0 0 16 16">
														<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
														<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
													</svg>
												</a>
												<a
													role="button"
													href={`/dashboard/clients/${client._id}`}
													class="btn btn-primary sm-text bold-text me-3">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="22"
														height="22"
														fill="currentColor"
														class="bi bi-pencil-fill pb-1"
														viewBox="0 0 16 16">
														<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
													</svg>
												</a>
												<a
													role="button"
													href={`/dashboard/clients/${client._id}`}
													class="btn btn-danger sm-text bold-text ">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														fill="currentColor"
														class="bi bi-trash mb-1"
														viewBox="0 0 16 16">
														<path d="M2.5 14a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V14z" />
														<path
															fill-rule="evenodd"
															d="M4.5 1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
														/>
														<path
															fill-rule="evenodd"
															d="M1.5 1.5A1.5 1.5 0 0 1 3 0h10a1.5 1.5 0 0 1 1.5 1.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1z"
														/>
													</svg>
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							'no clients'
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientsPage;
