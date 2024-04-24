import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
	if (props.href) {
		return (
			<a
				className={`btn ${props.inverse && 'btn--inverse'} btn-${
					props.size || 'default'
				} ${props.danger && 'btn--danger'}`}
				href={props.href}>
				{props.children}
			</a>
		);
	}

	if (props.to) {
		return (
			<Link
				className={`btn ${props.inverse && 'btn--inverse'} btn-${
					props.size || 'default'
				} ${props.danger && 'btn--danger'}`}
				to={props.to}>
				{props.children}
			</Link>
		);
	}
	return (
		<button
			className={`btn ${props.size || 'default'} ${
				props.inverse && 'btn--inverse'
			} ${props.danger && 'btn--danger'}`}>
			{props.children}
		</button>
	);
};

export default Button;
