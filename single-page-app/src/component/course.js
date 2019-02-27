import React,{Component} from 'react';
import './App.css'
import Subscription from '../subscription';
import Footer from '../footer'
import Detail from './coursedetail';
class Course extends Component{
	constructor(props){
		super(props);
		this.state={
			formname:'sing Up',
			btn:"sing Up"
		}
	}
	signup(){
		this.setState({
			formname:'sign Up',
			btn:"sing up"
		})

	}
	login(){
		this.setState({
			formname:'Sign in',
			btn:"sing in"
		})
	}

	render(){
		return(
			<div className="Main">
			<div className="container-fluid">
			<div className="row">

			
				<div className="col-lg-8 col-sm-8 col-xs-8 header1"><span>HAVE ANY QUESTION ? +880 5698 598 6587</span></div>
					<div className="col-lg-4 col-sm-4 col-xs-4 header2"><button className="login-btn" onClick={this.login.bind(this)}>login</button>
					<button className="signup-btn"  onClick={this.signup.bind(this)}>singup</button></div>
				</div></div>
				<img className="course-img" src="./images/banner.jpg" alt="" />
				<Detail/> 
				<Sign name={this.state.formname} button={this.state.btn}/>
			</div>);
	}
}
//childe component
class Sign extends Component{
	constructor(props){
		super(props);
		this.state={
			pass:'',
			p:'',
			classname:{
				background:'',
				width:'',
				height:'',
			
			}
		}
	}
	changeHandler(event){
		var length = event.target.value.length;

		this.setState({
			pass:length
		})
		if(length>2){
			this.setState({
				p:'low',
				classname:{
				background:'red',
				width:'20px',
				height:'10px'}			})
		}

		if(length>5){
			this.setState({
				p:'medium',
				classname:{
				background:'yellow',
				width:'50px',
				height:'10px'}			})
		}
			if(length>8){
			this.setState({
				p:'good',
				classname:{
				background:'yellow',
				width:'100px',
				height:'10px',}
			})
		}
			if(length>15){
			
			this.setState({
					p:'strong',
				classname:{
				background:'green',
				width:'150px',
				height:'10px',}
			})
		}

	}

	render(){
		return(
		<div>
		<div className="singup-form">
			<h1 className="singup">{this.props.name}</h1>
			<p class="signup-p">Please Login using account detail bellow</p>
			<input className="username"type="text" placeholder="Username"/><br/>
			<input className="password"type="password" placeholder="password" onChange={this.changeHandler.bind(this)}/><br/>
			<br/>
			<div className="main-bar-div"><div style={this.state.classname}></div>
			<p>{this.state.p}</p></div>
	        <p className="signup-remember">Remember me <input type="checkBox"/><p className="password-p">Forget Password?</p></p>
			
			<button className="sgnup-btn">{this.props.button}</button>
		
		
			</div>
				<Subscription/>
					<Footer/>
			</div>);
	}
}
export default Course;