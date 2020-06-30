import React, {Component} from 'react';
import './Input.css';
import IconInput from './IconInput.js';
import classNames from 'classnames';
class Input extends Component {
	constructor(){
		super();
		this.state = { isFocused: false , isRed : false };
		this.inputFocus = this.inputFocus.bind(this);
		this.inputBlur = this.inputBlur.bind(this);
		this.inputonkeyUp = this.inputonkeyUp.bind(this);
	}
	inputFocus(){
		if(this.state.isFocused === false){
			this.setState({
				isFocused : true
			})
		}
	}
	inputBlur(){
		if(this.state.isFocused === true){
			this.setState({
				isFocused : false
			})
		}
	}
	inputonkeyUp(event){
		let text = event.target.value;
		var lengthText = text.length;
		if(lengthText > 10 ){
			this.setState({
				isRed : true
			})
		}else{
			this.setState({
				isRed : false
			})
		}
	}
	render() {
		return(
			<div className="input">
				<input className={classNames(  { inputRed : this.state.isRed === true } )} onKeyUp={this.inputonkeyUp} onFocus= { this.inputFocus } onBlur = {this.inputBlur} type="text" placeholder="Type something to search ... "></input>
				
				
				<IconInput className={classNames( 'icon-input' ,{  active : this.state.isFocused === true} )}></IconInput>

			</div>
		);
	}
}

export default Input;