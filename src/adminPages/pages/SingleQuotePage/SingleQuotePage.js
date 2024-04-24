import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import Button from '../../../shared/components/FormElements/Button';

import {
	getProjectById,
	clearErrors,
} from '../../../store/actions/projectActions';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';

const SingleQuotePage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { project, error, loading } = useSelector((state) => state.project);

	useEffect(() => {
		dispatch(getProjectById(id));
		return () => {
			dispatch(clearErrors());
		};
	}, [dispatch, id]);

	const formatDate = (date) => {
		const dateArr = date.split('T');
		return dateArr[0];
	};

	const formatPhone = (phone) => {
		const phoneArr = phone.split('');
		const areaCode = phoneArr.slice(0, 3).join('');
		const firstThree = phoneArr.slice(3, 6).join('');
		const lastFour = phoneArr.slice(6, 10).join('');
		return `(${areaCode}) ${firstThree}-${lastFour}`;
	};

	return (
		<div className="row">
			<div className="col-md-4">
				<DashboardMenu />
			</div>
			<div className="col-md-8 d-flex my-60">
				{project && project.client && (
					<div className="container">
						<div className="mb-60">
							<Link
								className="reg-text"
								to={`/dashboard/clients/${project.client._id}`}>
								Back to Client
							</Link>
						</div>
						<div className="document-container">
							<div className="document-header d-flex justify-content-between align-items-center">
								<h1 className="lg-text bold-text ">
									{project.client.clientName}
								</h1>
								<h3 className="lg-text bold-text me-5">
									Status:{' '}
									<spam
										className={
											project.projectStatus === 'Paid' ||
											project.projectStatus === 'Approved'
												? 'invoice-paid'
												: 'invoice-unpaid'
										}>
										{project.projectStatus}
									</spam>
								</h3>
							</div>
							<hr />
							<div className="row">
								<div className="col-md-4">
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											Email:
										</h3>
										<p className="sm-text light-text">
											{project.client.clientEmail}
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											Phone Number:
										</h3>
										<p className="sm-text light-text">
											{formatPhone(
												project.client.clientPhone
											)}
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											Address:
										</h3>
										<p className="sm-text light-text">
											{project.client.clientStreet}
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											City & State:
										</h3>
										<p className="sm-text light-text">
											{project.client.clientCity},{' '}
											{project.client.clientState}
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											Zip Code:
										</h3>
										<p className="sm-text light-text">
											{project.client.clientZip}
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="">
											<h3 className="md-text bold-text">
												Client Notes:
											</h3>
										</div>
										<div className="">
											{project.client.clientNotes.length >
											0 ? (
												project.client.clientNotes.map(
													(note) => (
														<li className="sm-text light-text ">
															{note}
														</li>
													)
												)
											) : (
												<p className="sm-text light-text">
													No Notes Added
												</p>
											)}
										</div>
									</div>
								</div>
								<div className="col-md-2"></div>
								<div className="col-md-5 ">
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											Project #:
										</h3>
										<p className="sm-text light-text">
											{project.projectNumber}
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											Date Issued:
										</h3>
										<p className="sm-text light-text">
											{formatDate(project.projectDate)}
										</p>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											Exp. Date:
										</h3>
										<p className="sm-text light-text">
											{formatDate(project.projectDate)}
										</p>
									</div>
									{/* <div className="d-flex justify-content-between align-items-center mt-3">
										<h3 className="md-text bold-text">
											project Total:
										</h3>
										<p className="sm-text light-text">
											${project.projectTotal}.00
										</p>
									</div> */}
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div className="">
											<h3 className="md-text bold-text">
												Project Notes:
											</h3>
										</div>
										<div className="">
											<p className="sm-text light-text">
												{project.projectNotes}
											</p>
										</div>
									</div>
								</div>
							</div>
							<hr />
							<div>
								<div className="d-flex justify-content-between align-items-center my-5">
									<div className="">
										<h3 className="lg-text bold-text">
											Quote Items
										</h3>
									</div>
									<div class="d-flex justify-content-between align-items-center">
										<Link
											className="reg-text me-5"
											to="/dashboard/quotes">
											Add Items
										</Link>
										<Link
											className="reg-text me-5"
											to="/dashboard/quotes">
											Edit Items
										</Link>
									</div>
								</div>
								<table className="quote-table">
									<thead>
										<tr>
											<th>Item #</th>

											<th>Item Description</th>

											<th>Item Price</th>

											<th></th>
										</tr>
									</thead>
									<tbody>
										{project.projectItems.length > 0 ? (
											project.projectItems.map(
												(item, i) => (
													<tr key={i}>
														<td>
															{item.itemNumber}
														</td>

														<td>
															{
																item.itemDescription
															}
														</td>

														<td>
															{item.itemPrice}
														</td>

														<td>
															<a className="not-btn">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	width="20"
																	height="20"
																	fill="red"
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
												)
											)
										) : (
											<tr>
												<td>No Items Added</td>
												<td>---</td>
												<td>---</td>
												<td>---</td>
												<td>---</td>
												<td>---</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SingleQuotePage;
