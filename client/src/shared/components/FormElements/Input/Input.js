import React, { useState } from 'react';
import './Input.css';

const Input = (props) => {
	const [isValid] = useState(true);

	const element =
		props.element === 'input' ? (
			<input
				id={props.id}
				className={'form-input' || props.className}
				type={props.type}
				placeholder={props.placeholder}
				onChange={props.onChange}
				onBlur={props.onBlur}
				value={props.value}
				error-text={props.errorText}
			/>
		) : (
			<textarea
				id={props.id}
				className={'form-input' || props.className}
				rows={props.rows || 3}
				onChange={props.onChange}
				onBlur={props.onBlur}
				value={props.value}
				error-text={props.errorText}
			/>
		);

	return (
		<div className={`form-control ${!isValid && 'form-control--invalid'}`}>
			<label htmlFor={props.id}>{props.label}</label>
			{element}
			{!isValid && <p>{props.errorText}</p>}
		</div>
	);
};

export default Input;
