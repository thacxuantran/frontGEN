import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import WorkIcon from '@material-ui/icons/WorkOutline';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		listStyle: 'none',
		marginBottom: 15,
		borderRadius: '20px'
	},
	chip: {
		margin: theme.spacing(0.5),
	},
}));

export default function ChipsArray({ chipData, handleChipData, maxSalary, minSalary }) {
	const classes = useStyles();
	// const [chipData, setChipData] = React.useState([
	// 	{ key: 0, label: 'Angular' },
	// 	{ key: 1, label: 'jQuery' },
	// 	{ key: 2, label: 'Polymer' },
	// 	{ key: 3, label: 'React' },
	// 	{ key: 4, label: 'Vue.js' },
	// ]);

	const handleDelete = (chipToDelete) => () => {
		handleChipData(chipToDelete);
	};

	return (
		<Paper component="ul" className={classes.root}>
			{chipData.map((data) => {
				let icon;
				if (data.key === "extra") {
					icon = (<AddCircleIcon />)
				} else if (data.key === "job") {
					icon = (<WorkIcon />)
				} else if (data.key === "salary") {
					icon = (<MonetizationOnIcon />)
				}
				return (
					data.value !== "" && typeof (data.value) === "string" ? <li key={data.key}>
						<Chip
							icon={icon}
							label={data.value}
							onDelete={handleDelete(data)}
							className={classes.chip}
							color="primary"
						/>
					</li> : typeof (data.value) === "object" && (data.value[0] !== minSalary || data.value[1] !== maxSalary) ? <li key={data.key}>
						<Chip
							icon={icon}
							label={data.key !== 'salary' ? data.value : data.value[0] + ' - ' + data.value[1]}
							onDelete={handleDelete(data)}
							className={classes.chip}
							color="primary"
						/>
					</li> : null
				);
			})}
		</Paper>
	);
}
