import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
	render() {
		return (
			<div className="Header">
				<div className="container">
					<div className="Header--top">
						<a href="#">Go back</a>
						<button>Sign up</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;