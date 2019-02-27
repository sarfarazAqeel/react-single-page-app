import React,{Component} from 'react';
class Subscription extends Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
			array:[]
		}
	}
	subChange(event){
		this.setState({
			email:event.target.value
		})}
		buttonClick(){
			var instanceArray= this.state.array;
			var input=this.state.email;
			instanceArray.push(input);
			this.setState({
				array:instanceArray,
				email:''
			})
		}

	
	render(){
		var item=this.state.array.map((e,i)=>
			<li key={i}>{e}</li>

		)
		return(
			<div>
			<div className="row">
<div className="col-lg-12 subscribe">
<h1 className="subscribe-title">SUBSCRIBE OUR NEWSLETTER</h1>
<p class="subscribe-paragraph">I must explain to you how all this mistaken idea</p>

<div class="form"><p className="Emial">{this.state.email}</p>
<span class="icon"><i className="fa fa-envelope icon"></i></span><input type="Email" className="sub-form" required placeholder="Enter your Email" onChange={this.subChange.bind(this)}/>
<button type="submit" className="sub-button" onClick={this.buttonClick.bind(this)}>Submit</button>
</div>

</div>
</div>
<div className="sub-user"><ul>{item}</ul></div><br />
</div>
			);
	}
}
export default Subscription;