import React, {Component} from 'react';
import FollowFriendListItem from './FollowFriendListItem.js';
import  './RecommendedFriends.css';
import logoFb from '../img/logofb.png';
class RecommendedFriends extends Component {
	constructor() {
		super();
		this.todoItem = [
	      { 
	        'text' : 'phong08888',
	        'text2': 'Gợi ý cho bạn',
	        'text3' : 'Theo dõi'
	      },
	      { 
	        'text' : 'phong08888',
	        'text2': 'Gợi ý cho bạn',
	        'text3' : 'Theo dõi'
	      },
	      { 
	        'text' : 'phong08888',
	        'text2': 'Gợi ý cho bạn',
	        'text3' : 'Theo dõi'
	      }
	    ];
	}
	render() {
		return(
			<div className="RecommendedFriends">
				<h4>Gợi ý cho bạn</h4>
				<p>Xem tất cả</p>
				{  
            		this.todoItem.map((item,index) => <FollowFriendListItem key={index} img={logoFb} text={item.text} text2={item.text2} text3={item.text3} />)
          		}
			</div>
		)
	}
}
export default RecommendedFriends;