import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectInfo.css';

const ProjectInfo = (props) => {
	const formatDate = (date) => {
		const dateArr = date.split('T');
		return dateArr[0];
	};

	const project = () => {
		try {
			return (
				<table className="quote-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Date Issued</th>
							<th>Status</th>
							<th>Type</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{props.projects.length > 0 ? (
							props.projects.map((project) => {
								return (
									<tr key={project._id}>
										<td>{project.projectNumber}</td>
										<td>
											{formatDate(project.projectDate)}
										</td>
										<td
											className={
												project.projectStatus ===
													'Paid' ||
												project.projectStatus ===
													'Approved'
													? 'invoice-paid'
													: 'invoice-unpaid'
											}>
											{project.projectStatus}
										</td>
										<td>{project.projectType}</td>
										<td>
											<Link
												to={`/dashboard/quotes/${project._id}`}>
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
												to={`/dashboard/quotes/${project._id}/edit`}>
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
									</tr>
								);
							})
						) : (
							<tr>
								<td>No Quotes</td>
								<td>---</td>
								<td>---</td>
							</tr>
						)}
					</tbody>
				</table>
			);
		} catch (err) {
			console.log(err);
		}
	};

	return <div>{project()}</div>;
};

export default ProjectInfo;
