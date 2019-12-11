import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
	const [ expanded, setExpanded ] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>Description</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography component="p" align="left">
						<p>Rent DJI Mavic Air Drone for best daily and weekly rates in Mumbai and Navi Mumbai.</p>

						<p>Included in the kit:</p>

						<p>
							3 x Intelligent Batteries<br />
							1 x Charger Hub<br />
							1x Controller<br />
							4 x Propeller Guard<br />
							1 x Gimbal Cover<br />
							1 x 128GB Memory Card<br />
							3 x Connector Cable<br />
							1 x Charging Cable<br />
							Why rent from us &ndash;<br />
							Save huge initial cost<br />
							Pay as you use.<br />
							You use, we maintain.<br />
							A permanent solution for temporary needs.
						</p>
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>Addtional Information</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography>Terms & Condition</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
