import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import Select, { components } from 'react-select';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const AirbnbSlider = withStyles({
	root: {
		color: '#3a8589',
		height: 3,
		padding: '13px 0',
	},
	thumb: {
		height: 27,
		width: 27,
		backgroundColor: '#fff',
		border: '1px solid currentColor',
		marginTop: -12,
		marginLeft: -13,
		boxShadow: '#ebebeb 0 2px 2px',
		'&:focus, &:hover, &$active': {
			boxShadow: '#ccc 0 2px 3px 1px',
		},
		'& .bar': {
			// display: inline-block !important;
			height: 9,
			width: 1,
			backgroundColor: 'currentColor',
			marginLeft: 1,
			marginRight: 1,
		},
	},

	active: {},
	valueLabel: {
		left: 'calc(-50% + 10px)',
	},
	track: {
		height: 3,
	},
	rail: {
		color: '#d8d8d8',
		opacity: 1,
		height: 3,
	},
})(Slider);
function AirbnbThumbComponent(props) {
	return (
		<span {...props}>
			<span className="bar" />
			<span className="bar" />
			<span className="bar" />
		</span>
	);
}


function valuetext(value) {
	return `${value}°C`;
}

function OptionFilterField(props) {
	const {
		name,
		label,
		control,
		className,
		placeholder,
		options,
		onChangeFilter,
		value,
		maxSalary,
		minSalary
	} = props;

	const [openMenu, setOpenMenu] = useState(false)
	const maxValue = value[1];

	useEffect(() => {
		document.querySelector("#salaryfilter .select__value-container").addEventListener('click', (e) => {
			console.log(e.target)
			console.log(e.currentTarget)

			if (e.currentTarget != e.target) return;
			setOpenMenu((prv) => {
				console.log(prv)
				return !prv;
			})
		})

		document.querySelector("#salaryfilter .select__placeholder").addEventListener('click', (e) => {
			console.log(e.target)
			console.log(e.currentTarget)

			if (e.currentTarget != e.target) return;
			setOpenMenu((prv) => {
				console.log(prv)
				return !prv;
			})
		})


	}, [])

	const handleChangeSlide = (event, slideValue) => {
		console.log(slideValue)
		onChangeFilter(slideValue);
	}

	const MenuList = props => {
		return (
			<AirbnbSlider
				getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
				defaultValue={value}
				min={0}
				max={maxSalary}
				valueLabelDisplay="auto"
				onChangeCommitted={handleChangeSlide}
			/>
		);
	};

	const customTheme = (theme) => {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary: '#0DAB42',
			},
		};
	};

	return (
		<Select
			name={name}
			placeholder={placeholder}
			className={className}
			theme={customTheme}
			isSearchable="true"
			classNamePrefix="select"
			components={{ MenuList }}
			closeMenuOnSelect={false}
			menuIsOpen={openMenu}
			id="salaryfilter"
		>

		</Select >

	);
}

export default OptionFilterField;
