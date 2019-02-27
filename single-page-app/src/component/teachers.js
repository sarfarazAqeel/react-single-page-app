import React,{Component} from 'react';
import './App.css';
import Subscription from '../subscription'
import Footer from '../footer';

class Teachers extends Component{
	customstyle={
  color:"white",
  backgroundColor:'#2c2b5e',
  fontSize:'50px',
  textDecorationStyle:'none',
  textAlign:'center',
  }
	constructor(props){
		super(props);
		this.state={
			name:"",
			age:"",
			massage:'',
			loading:true,
			data:null
		}
		this.loadData()

	}
		loadData(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res=>res.json())
		.then(json=>{
			this.setState({
				loading:false,
				data:json
			})
		})
	}
	cutomRender(){
		if(this.state.loading){
			return <h4 style={this.customstyle}>Loading...</h4>

		}
		else{
			let getData=this.state.data;
			const output = getData.map(value=>{
				return(
				<div key={value.id} className="container-fluid main-continer-json">
			
					<div className="teacher-data-api-p"><h3 className="api-h3"><span>Name:</span>{value.name}</h3>
					 <h5 className="api-h2"><span>UserName:</span>{value.username}</h5> 
					<p className="Api-email"><span>Email:</span>{value.email}</p> 
					<p class="address-city"><span>City:</span>{value.address.city}</p>
				<p className="api-street"><span>Street:</span>{value.address.street}</p> 
				<p className="zipcode"><span>ZinpCode:</span>{value.address.zipcode}</p>
				<p class="lat"> <span>Lat:</span>{value.address.geo.lat}</p>
				<p class="lan"><span>Lng:</span>{value.address.geo.lng}</p>
				<p class="phone"><span>Phone:</span>{value.phone}</p>
				<p className="website"><span>Website:</span>{value.website}</p>
				 
					</div>

					</div>);

			})
			return output
		}
	}
	render(){
		return(<div>
	<div><h2 className="h2">Teachers Data</h2></div>
{this.cutomRender()}
	<Subscription/>
	<Footer/>
			</div>);

	}
}
export default Teachers;