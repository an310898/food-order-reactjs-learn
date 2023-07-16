import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label style={{ minWidth: "91px" }} htmlFor={props.input.id}>
				{props.lable}
			</label>
			<input {...props.input} ref={ref} style={props.style} />
		</div>
	);
});

export default Input;
