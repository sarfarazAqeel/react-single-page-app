import React,{Component} from 'react';
import "../App.css";
class Event extends  Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			array:[]
		}
	}
	changeHandler(event){
		this.setState({
      name:event.target.value

		})
	}
	clickHandler(){
		var instanceArray=this.state.array;
		var input=this.state.name;
		instanceArray.push(input);
		this.setState({
			array:instanceArray,
			name:''
		})


	}
	deletData(event){
		var list = event.target.value;
		var instanceArray=this.state.array;
		instanceArray.splice(list,1);
		this.setState({
			array:instanceArray
		})

	}
	render(){
		var output= this.state.array.map((e,i)=>
		<li className="form-li" key={i}>{e} <span onClick={this.deletData.bind(this)}><i className="fa fa-trash"></i></span></li>
		)
		return(
			<div className="main-container">
			<div className="header"><h2>Update Events </h2></div>

<ul className="form-ul">{output}</ul>

<div class="footer">
<input className="fom-input" type="text" onChange={this.changeHandler.bind(this)}/><button className="submit-btn" onClick={this.clickHandler.bind(this)}>+</button>
</div>





			</div>)
	}
}
export default Event;