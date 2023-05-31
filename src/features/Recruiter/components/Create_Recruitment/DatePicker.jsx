import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

DatePicker.propTypes = {};

function DatePicker(props) {
  const { name, label, control, className } = props;
  var getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var min = new Date().getMinutes();

    return year + "-" + month + "-" + date + "T" + hour + ":" + min; //format: dd-mm-yyyy;
  };
  return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					id='datetime-local'
					type='datetime-local'
					className={className}
					//  className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
					{...field}
					color='primary'
				/>
			)}
		/>
	);
}

export default DatePicker;
