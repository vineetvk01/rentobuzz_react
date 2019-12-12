import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin = (e) => {
		alert('Username : ' + this.state.username + '| password: ' + this.state.password);
		var username1 = this.state.username;
		var password1 = this.state.password;
		fetch('https://rentobuzz.herokuapp.com/api/v1/users/login', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({ email: username1, password: password1 })
		})
			.then((resp) => resp.json())
			.then((data) => console.log(data));
	};

	handleChange = (e) => {
		if (e.target.name == 'username') {
			this.setState({ username: e.target.value });
		} else {
			this.setState({ password: e.target.value });
		}
	};

	render() {
		return (
			<div>
				<h2 id="transition-modal-title">Login Now</h2>
				<p id="transition-modal-description">Please enter your credentials to login</p>
				<FormControl style={{ margin: '10px' }}>
					<InputLabel htmlFor="input-login-username">Username</InputLabel>
					<Input
						id="input-login-username"
						name="username"
						startAdornment={
							<InputAdornment position="start">
								<AccountCircle />
							</InputAdornment>
						}
						onChange={this.handleChange}
					/>
				</FormControl>
				<br />
				<FormControl style={{ margin: '10px' }}>
					<InputLabel htmlFor="input-login-password">Password</InputLabel>
					<Input
						id="input-login-password"
						type="password"
						name="password"
						startAdornment={
							<InputAdornment position="start">
								<LockIcon />
							</InputAdornment>
						}
						onChange={this.handleChange}
					/>
				</FormControl>
				<br />
				<Button
					onClick={this.handleLogin}
					variant="contained"
					style={{ backgroundColor: 'rgba(183, 28, 28,1)', color: 'white' }}
				>
					Login Now
				</Button>
				<Button href="#text-buttons">Sign Up</Button>
			</div>
		);
	}
}

export default LoginForm;
