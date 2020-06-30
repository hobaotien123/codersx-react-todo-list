import React, {Component} from 'react';
import './TableList.css';

class TableList extends Component {
	render() {
		const {item} = this.props;
		let className = '';
		if(item.trComplete === true){
			className += 'trComplete';
		}
		return(
			<tr className={className}>
				<td>{this.props.item.stt}</td>
				<td>{this.props.item.text1}</td>
				<td>{this.props.item.text2}</td>
				<td>{this.props.item.text3}</td>
			</tr>
		);
	}
}

export default TableList;