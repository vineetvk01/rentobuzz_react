import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import playstoreLogo from '../../public/images/playstore.png';
import appstoreLogo from '../../public/images/app-store.png';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';
import CameraIcon from '@material-ui/icons/Camera';

const useStyles = makeStyles((theme) => ({
	link: {
		margin: theme.spacing(1)
	},
	storeLogo: {
		width: '15vw',
		marginTop: '20px'
	},
	footerStyle: { backgroundColor: 'rgba(183, 28, 28,0.9)', color: '#fff', paddingTop: '50px', marginTop: '70px' }
}));

function Footer() {
	const classes = useStyles();

	return (
		<Grid container spacing={2} className={classes.footerStyle}>
			<Grid item xs={0} sm={1} />
			<Grid item xs={12} sm={3} style={{ textAlign: 'left', paddingLeft: '30px' }}>
				<Typography align="left" variant="h4" gutterBottom>
					<CameraIcon /> RENTOBUZZ
				</Typography>
				<Divider light="true" />
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Download our mobile app...
				</Typography>
				<img src={playstoreLogo} align="left" alt="PlayStore" className={classes.storeLogo} />
				<img src={appstoreLogo} align="left" alt="AppStore" className={classes.storeLogo} />
			</Grid>
			<Grid item xs={6} sm={2} style={{ textAlign: 'left', paddingLeft: '30px' }}>
				<Typography align="left" variant="h6" gutterBottom>
					Information
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Blog
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					FAQs
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Documents Required
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Here's why we verify your profile
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Renting for business
				</Typography>
			</Grid>
			<Grid item xs={6} sm={2} style={{ textAlign: 'left', paddingLeft: '30px' }}>
				<Typography align="left" variant="h6" gutterBottom>
					Policies
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Shipping Policy
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Cancellations & Modifications
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Return & refund
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Privacy Policy Rental
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Terms & Conditions
				</Typography>
				<Typography align="left" variant="overline" display="block" gutterBottom>
					Referral Terms & Conditions
				</Typography>
			</Grid>
			<Grid item xs={12} sm={2} style={{ textAlign: 'left', paddingLeft: '30px' }}>
				<Typography align="left" variant="h6" gutterBottom>
					Need Help ?
				</Typography>
				<Typography align="left" variant="body1" gutterBottom>
					Reach us at: <br />
					<PhoneIcon />
					<br /> +91-80XXXXXXXX <br /> +91-90XXXXXXXX <br />
					<MailOutlineIcon />
					<br />info@rentobuzz.com
				</Typography>
				<FacebookIcon style={{ color: '#3b5998', fontSize: '5vh' }} />
				<InstagramIcon style={{ color: '#fff', fontSize: '5vh' }} />
				<TwitterIcon style={{ color: '#00acee', fontSize: '5vh' }} />
			</Grid>
		</Grid>
	);
}

export default Footer;
