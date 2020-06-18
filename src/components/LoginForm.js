import React, { Component} from 'react';
import './LoginForm.css';
class LoginForm extends Component {
	render() {
		return (
			<div className="LoginForm">
				<div className="container">
					<div className="LoginForm-all">
						<h1>{this.props.title}</h1>
						<form>
							<label>{this.props.email}</label>
							<input placeholder="Email" type="text"></input>
							<input placeholder="Password" type="text"></input>
							<button>Sign up to Coders-x</button>
							<input className="ip-checkbox" type="checkbox"></input>
							<span>Keep me signin</span>
							<div className="form-link">
								<a href="#">Forgot username</a>
								<a href="#">Forgot password</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}


export default LoginForm;