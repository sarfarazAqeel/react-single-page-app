import React,{Component} from 'react';
import './App.css';
import Subscription from '../subscription';
import Footer from '../footer';
import FacebookLogin from 'react-facebook-login';

class Contact extends Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			password:''
		}
		
		this.handleChange=this.handleChange.bind(this);

	}

handleChange(event ,attr){
	const newState={...this.state}
	newState[attr]=event.target.value
	this.setState(newState)
}

	render(){
		return(<div>
			<Baner/>
			<Table  value={this.state.email}placeholder="your email address" change={(a)=>this.handleChange(a,'email')}  pswPlaceholder="Enter your Passwordn" 
			pasValue={this.state.password}
			changePsw={(e)=>this.handleChange(e,'password')} nameplaceholder="Enter You Name"/>
		    <Subscription/>
			<Footer/>
			

			</div>);
	}
}
class Baner extends Component{
	render(){
		return(
		<div>
		<img className="contact-banner"src="images/contact.jpg" alt="" /></div>);
	}
	
}

class Table extends Component{
constructor(props){
	super(props);
	this.state={
		pasw:'',
		p:'',
		styleClass:{
			background:'',
			width:'',
			height:''
		}
	}
}
changeLength(event){

	var length = event.target.value.length;


	this.setState({
		pasw:event.target.value
	})

		if(length>2){
			this.setState({
				p:'Low',
				styleClass:{
			background:'red',
			width:'10%',
			height:'10px'}
		})
	}
if(length>5){
			this.setState({
				p:'Medium',
				styleClass:{
			background:'yellow',
			width:'50%',
			height:'10px'}
		})
	}
if(length>8){
			this.setState({
				p:'Good',
				styleClass:{
			background:'orange',
			width:'70%',
			height:'10px'}
		})
	}
	if(length>11){
			this.setState({
				p:'Exelant',
				styleClass:{
			background:'green',
			width:'100%',
			height:'10px'}
		})
	}

}
	render(){
		return(

		<div>
	
		<div className="container form-adress">
		<div className="row">
		<div className="col-lg-6 col-sm-12 col-xs-12 contact-main">
		<div className="adress-side-bar">
		<img className="contact-img"src="/images/contact1.png" alt="" />
		<h3 className="heading">Adress</h3>
		<p className="contact-p">135, First Lane, City Street</p><p className="contact-p">New Yourk City, USA</p>
	</div>
	<div className="adress-side-bar">
		<img className="contact-img"src="/images/contact2.png" alt="" />
		<h3 className="heading">Adress</h3>
		<p className="contact-p">135, First Lane, City Street</p><p className="contact-p">New Yourk City, USA</p>
	</div>
		<div className="adress-side-bar">
		<img className="contact-img"src="/images/contact3.png" alt="" />
		<h3 className="heading">Adress</h3>
		<p className="contact-p">135, First Lane, City Street</p><p className="contact-p">New Yourk City, USA</p>
	</div></div>
		<div className="col-lg-6">
		<div className="main-form">
		<h4 className="form-heading">LEAVE A MASSAGE</h4>
		<p className="form-p">I must explain to you how all this a mistaken idea of ncing great explorer of the rut the is lder of human happinescias unde omnis iste natus error sit volptatem Name</p></div>
<form action="">
<lable className="form-lable">Name:</lable><br />
<input className="form-name"type="text" placeholder={this.props.nameplaceholder}/><br />
<lable className="form-lable">Email:</lable><br />



	<div><input  className="form-input" type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.change}/></div><br />



<lable className="form-lable">Password:</lable><br />


<input  className="input-pasw" type="password" value={this.state.pasw} placeholder="Enter Your Password" onChange={this.changeLength.bind(this)}/><br/>
<div style={this.state.styleClass}></div><p>{this.state.p}</p>







<lable class="form-lable">Massage:</lable><br />
<textarea className="form-area"name="" id="" cols="30" rows="10"></textarea>
<button className="btn-send">Send Massage</button><br /><Facebook/>
</form>


		</div>
		</div>
		</div>
		

		</div>);
	}
}

class Facebook extends Component{
	state ={
		isLoggedIn:false,
		userID:'',
		name:'',
		email:'',
		picture:''
	}
	responseFacebook = response =>{
		console.log(response);
	}
	componentClicked=()=>console.log("clicked");

	render(){
let fbContent;
if(this.state.isLoggedIn){
	fbContent=null;

}else{
	fbContent=( <FacebookLogin
    appId="303156393725887"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />);
 
}


		return(<div>
			{fbContent}

			</div>);
		}
	
}


export default Contact;
