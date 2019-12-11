import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: 0,
		padding: 0,
		minWidth: 120
	},
	input: {
		height: '40px',
		borderRadius: 8,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
		}
	}
}));

export default function SimpleSelect() {
	const classes = useStyles();

	const handleChange = (event) => {
		//setAge(event.target.value);
	};

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<Select
					className={classes.input}
					labelId="demo-simple-select-label"
					value={10}
					id="demo-simple-select"
					onChange={handleChange}
				>
					<MenuItem value={10}>Bangalore</MenuItem>
					<MenuItem value={20}>Mumbai</MenuItem>
					<MenuItem value={30}>Delhi</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
