import React from 'react';

const QuoteInfo = (props) => {
	const formatDate = (date) => {
		const dateArr = date.split('T');
		return dateArr[0];
	};

	const quote = () => {
		try {
			return (
				<table>
					<thead>
						<tr>
							<th>Quote #</th>
							<th>Quote Date</th>
							<th>Quote Status</th>
							<th>Quote Total</th>
						</tr>
					</thead>
					<tbody>
						{props.quote.length > 0 ? (
							props.quote.map((quote) => {
								return (
									<tr key={quote._id}>
										<td>{quote.quoteNumber}</td>
										<td>{formatDate(quote.quoteDate)}</td>
										<td>{quote.quoteStatus}</td>
										<td>{quote.quoteTotal}</td>
									</tr>
								);
							})
						) : (
							<tr>
								<td>No Quotes</td>
							</tr>
						)}
					</tbody>
				</table>
			);
		} catch (err) {
			console.log(err);
		}
	};

	return <div>{quote()}</div>;
};

export default QuoteInfo;
