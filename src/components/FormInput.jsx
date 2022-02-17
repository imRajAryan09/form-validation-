import { useState } from "react";
import "./formInput.css";

function FormInput(props) {
	const [focused, setFocused] = useState(false);
	const { label, onChange, errorMessage, id, ...inputProps } = props;
	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<div className="formInput">
			<label>{label}</label>
			<input
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() =>
					inputProps.name === "confirmPassword" && setFocused(true)
				}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
}

export default FormInput;
