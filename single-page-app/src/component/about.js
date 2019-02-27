import React,{Component} from 'react';
import Google from '../googl.js'
import axios from 'axios';

class About extends Component{
	constructor(props){
super(props);
this.state={
	name:'',
	age:"",
	loading:false,
	massage:""
}

	}
	dataCahnge(event){
		this.setState({
	[event.target.name]:event.target.value
				
		})
	}

	loadData(event){
		event.preventDefault()

		const name = this.state.name
		const age= this.state.age
		this.setState({
			loading:true,
			name:'',
			age:''

		})
		const data={
			name,
			age
		}
		axios.post('/t/dk2un-1550342870/post', data)
		.then(res=>{
			console.log(res);
			this.setState({
				loading:false,
				massage:res.data
			})
		})
		.catch(err =>{
			console.log(err);
			this.setState({
				loading:false
			})
		})

	}
	loadOrShowMsg(){
		if(this.state.loading){
return <p>Loading..</p>
		}
		else{
			return <p>{this.state.massage}</p>
		}
	}
	render(){
		return(
			<div><form onSubmit={this.loadData.bind(this)}>
		<input type="text" name="name" value={this.state.name} onChange={this.dataCahnge.bind(this)} placeholder="enter your name" required className="form-control"/><br/>
			<input type="text" name="age" value={this.state.age} onChange={this.dataCahnge.bind(this)} placeholder="enter your age"  required  className="form-control" /><br/>
			<input type="submit" className="btn btn-info"/>
{this.loadOrShowMsg()}

			</form>
			<Google/>
			</div>);
	}
}
export default About;