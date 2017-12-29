import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login with google</a>
					</li>
				);
			default:
				return (
					<li>
						{/*full http redirect / refresh
						if ajax then we need to handle auth redux*/}
						<a href="/api/logout">logout</a>
					</li>
				);
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					{/*if user is logged in then home icon redirects to dashboard else lander*/}
					<Link
						className="left brand-logo"
						to={this.props.auth ? '/surveys' : '/'}
					>
						Emaily
					</Link>
					<ul id="nav-mobile" className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};
export default connect(mapStateToProps)(Header);
