import React, {Component} from 'react';
import TableList from './TableList.js';
import './Table.css';
class Table extends Component {
	constructor(){
		super();
		this.tableList = [
			{
				'stt' : '#',
				'text1' : 'First',
				'text2' : 'Last',
				'text3' : 'Handle',
				trComplete : true
			},
			{
				'stt' : '1',
				'text1' : 'First',
				'text2' : 'Last',
				'text3' : 'Handle'
			},
			{
				'stt' : '2',
				'text1' : 'First',
				'text2' : 'Last',
				'text3' : 'Handle'
			},
			{
				'stt' : '3',
				'text1' : 'First',
				'text2' : 'Last',
				'text3' : 'Handle'
			}
		]
	}
	render(){
		return (
			<div className="table">
				<table>
					{
						this.tableList.map((item,index) => <TableList key={index} item={item} item={item} item={item} item={item} />)
					}
				</table>
			</div>
		);
	}
}

export default Table;