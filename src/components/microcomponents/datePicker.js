import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import FromToDate from './fromToDate';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2)
	}
}));

export default function DatePicker() {
	// The first commit of Material-UI
	const [ selectedDate, setSelectedDate ] = React.useState(new Date('2014-08-18T21:11:54'));

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const [ selected, setSelected ] = React.useState(false);

	const classes = useStyles();

	return (
		<React.Fragment>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify="space-around">
					<KeyboardDatePicker
						margin="normal"
						id="date-picker-dialog"
						label="Pickup Date"
						format="MM/dd/yyyy"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date'
						}}
					/>
					<KeyboardDatePicker
						margin="normal"
						id="date-picker-dialog"
						label="Drop date"
						format="MM/dd/yyyy"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date'
						}}
					/>
				</Grid>
			</MuiPickersUtilsProvider>
			<Grid container>
				<Grid item sm={12}>
					<Button color="primary">Check Availability</Button>
				</Grid>
				<Grid item sm={12}>
					<Paper className={classes.root}>
						<Grid container>
							<Grid item sm={12}>
								<Typography variant="h6" component="h3" align="left">
									Available For :
									<hr />
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<FromToDate fromDate="8th" fromMonth="Sep 2019" toDate="20th" toMonth="Sep 2019" />
							</Grid>
							<Grid item sm={6}>
								<Typography variant="body2" align="left" align="right" gutterBottom>
									&#8377; 250 x 5 days
								</Typography>
								<Typography variant="h4" component="h3" align="right">
									&#8377; 1000
								</Typography>
							</Grid>

							<Grid item sm={12}>
								<ToggleButton
									value="check"
									selected={selected}
									onChange={() => {
										setSelected(!selected);
									}}
									style={{ marginTop: '5%' }}
								>
									<CheckIcon /> Add to Cart
								</ToggleButton>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
