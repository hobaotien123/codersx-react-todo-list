import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './FollowFriendListItem.css';
class FollowFriendListItem extends Component {
	render() {
		const { item } = this.props
		return(
			<div className="FollowFriendListItem">
					<img src={this.props.img}></img>
					<div className="FollowFriendListItem--text">
						<h6>{item.text}</h6>
						<p>{item.text2}</p>
					</div>
					<h5>{item.text3}</h5>
			</div>
		);
	}
}

FollowFriendListItem.propTypes = {
	item : PropTypes.shape({
		text : PropTypes.string,
		text2 : PropTypes.string,
		text3 : PropTypes.string
	})
};

export default FollowFriendListItem;