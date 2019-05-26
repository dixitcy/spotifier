import React, { Component } from "react";
import {Button , TextField} from "@material-ui/core";

import { Redirect } from "react-router-dom";
import ForgotPassword from "./forgotpassword";
import keys from '../../constants/keymaps';

import "./login.css";

const INITIAL_STATE = {
	username: "",
	email: "",
	password: "",
	signup: false,
	resetEmail: "",
	forgotPasswordFlow: false,
	error: null,
	redirectToDashboard: false,
	loading : false
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}
	toggleForgotPassword = () => {
		this.setState({ forgotPasswordFlow: true, signup: false });
	};
	toggleSignup = toggleVal => {
		this.setState({ signup: toggleVal, forgotPasswordFlow: false });
	};
	backToLogin = () => {
		this.setState({ forgotPasswordFlow: false, signup: false });
	};
	setResetEmail = value => {
		this.setState({ resetEmail: value });
	};

	login = () => {
		let { signup, email, password } = this.state;
		if (signup) {
			return false;
		}
		if (!email) {
			// required email validation
			return false;
		} else if (!password) {
			// required password validation
			return false;
		} else {
			this.props.firebase.login(email, password).then(res => {
				this.setState({ redirectToDashboard: true });
			});
		}
	};

	signup = () => {
		let { signup, email, password, username } = this.state;
		if (!signup) {
			return false;
		}
		if (!email) {
			// required email validation
			return false;
		} else if (!password) {
			// required password validation
			return false;
		} else if (!username) {
			// required name validation
			return false;
		} else {
			this.props.firebase.signup(username, email, password);
		}
	};

	loginSignup = (e) => {
		e.preventDefault();
		if (this.state.signup) {
			this.signup();
		} else {
			this.login();
		}
	};

	render() {
		if (this.state.redirectToDashboard) {
			// return <Redirect to="/dashboard" />;
		}
		return (
			<div className="login-container">
				{this.state.forgotPasswordFlow && (
					<ForgotPassword
						backToLogin={this.backToLogin}
						resetEmail={this.state.resetEmail}
						setResetEmail={this.setResetEmail}
					/>
				)}
				{!this.state.forgotPasswordFlow && (
					<div className="login-form">
						<form onSubmit={this.loginSignup}>
						<div className="login-title">
							<i
								className={
									"twa " + (this.state.signup ? "twa-memo" : "twa-unlock")
								}
								style={{ fontSize: "inherit", marginRight: "10px" }}
							/>
							{this.state.signup ? "Sign up" : "Login"}
						</div>
						{this.state.signup && (
							<div className="field-wrapper">
								<TextField
									id="username"
									name="username"
									label="name"
									value={this.state.username}
									onChange={e => {
										this.setState({ username: e.target.value });
									}}
									style={{ margin: "15px 10px", width: "calc(100% - 20px)" }}
									placeholder="John smith"
									fullWidth
									margin="normal"
									InputLabelProps={{
										shrink: true
									}}
									InputProps={{
										startAdornment: <i className="twa twa-grinning" />
									}}
								/>
							</div>
						)}
						<div className="field-wrapper">
							<TextField
								id="email"
								name="email"
								label="email"
								value={this.state.email}
								onChange={e => {
									this.setState({ email: e.target.value });
								}}
								style={{ margin: "15px 10px", width: "calc(100% - 20px)" }}
								placeholder="john@smith.com"
								fullWidth
								type="email"
								margin="normal"
								InputLabelProps={{
									shrink: true
								}}
								InputProps={{
									startAdornment: <i className="twa twa-email" />
								}}
							/>
						</div>

						<div className="field-wrapper">
							<TextField
								id="password"
								name="password"
								label="password"
								value={this.state.password}
								onChange={e => {
									this.setState({ password: e.target.value });
								}}
								style={{ margin: "15px 10px", width: "calc(100% - 20px)" }}
								type="password"
								placeholder="*********"
								fullWidth
								margin="normal"
								InputLabelProps={{
									shrink: true
								}}
								InputProps={{
									startAdornment: <i className="twa twa-key" />
								}}
							/>
						</div>

						<div style={{ margin: "15px 10px", textAlign: "right" }}>
							<Button
								variant="contained"
								className="login-button"
								type="submit"
								onClick={this.loginSignup}
								style={
									(!this.state.email || !this.state.password) &&
										!this.state.username
										? { backgroundColor: "rgba(0, 0, 0, 0.12)" }
										: { backgroundColor: "aquamarine" }
								}
								disabled={
									(!this.state.email || !this.state.password) &&
									!this.state.username
								}
							>
								{this.state.signup ? "Sign up" : "Login"}
								<i
									className={
										"twa " + (this.state.signup ? "twa-pencil" : "twa-unlock")
									}
									style={{ fontSize: "inherit" }}
								/>
							</Button>
						</div>

						<div className="login-options">
							<div
								onClick={() => {
									this.toggleForgotPassword();
								}}
							>
								forgot password ?
              				</div>
							<div
								onClick={() => {
									this.toggleSignup(!this.state.signup);
								}}
							>
								{this.state.signup
									? "have an account ? Sign in"
									: "new here ? Sign Up"}
							</div>
						</div>
						</form>
					</div>
					
				)}
			</div>
		);
	}
}
export default Login;
