import React, {Component} from 'react';
import './FollowFriendListItem.css';
class FollowFriendListItem extends Component {
	render() {
		return(
			<div className="FollowFriendListItem">
					<img src={this.props.img}></img>
					<div className="FollowFriendListItem--text">
						<h6>{this.props.text}</h6>
						<p>{this.props.text2}</p>
					</div>
					<h5>{this.props.text3}</h5>
			</div>
		);
	}
}

export default FollowFriendListItem;