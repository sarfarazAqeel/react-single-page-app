import React,{Component} from 'react';
import './buynow.css';
class BuyNow extends Component{
	render(){
		return(<div>
			<Header/>
			<Slider/>
			<Banner/>
			<About/>
			<Contact/>
			<Footer/>
			</div>);
	}
}
//
export default BuyNow;
class Header extends Component{
	render(){
		return(
			<div className="nav-bootstrap">
		<div className="container-fluid">
		<div className="row">
		<div className="col-lg-6"><h3 classname="header-h3">Start Bootstrap</h3></div>
		<div className="col-lg-2"><p className="header-p">portfolio</p></div>
		<div className="col-lg-2"> <p className="header-p">contact</p></div>
		<div className="col-lg-2"> <p className="header-p">about us</p></div>
		</div></div></div>);
	}
}


class Slider extends Component{
	render(){
		return(
		<div className="slider">
		<img className="slider-image"src="./images/profile.png" alt="" />
		<h1 className="slider-img-title">start bootstrap</h1>

		
	<div className="slider-star col-lg-12"><div><hr className="diash"/></div><div className="logo-star"><i className="fa fa-star slider-star-log"></i></div> <div><hr className="diash2"/></div> </div>

		<p className="header-p">Web Develpore-graphic Artist-User Experience Designer</p>
		</div>
		);
	}
}

class Banner extends Component{
	render(){
		return(
		<div className="banner-main">
		<div className="row">
		<div className="container">
		<h1 className="banner-h1 col-lg-12">portfolio</h1>
		<div className="col-lg-12 port"><div className="dash3"></div><i className="fa fa-star"></i><div className="dash3"></div></div>
		<div className="container">
		<div className="row">
		<div className="col-lg-4 col-md-12 col-xs-12">
		<img className="banner-img" src="./images/cabin.png" alt="" />
		</div>
			<div className="col-lg-4 col-md-12 col-xs-12">
		<img className="banner-img" src="./images/cake.png" alt="" />
		</div>
			<div className="col-lg-4 col-md-12 col-xs-12">
		<img className="banner-img" src="./images/circus.png" alt="" />
		</div>
			<div className="col-lg-4 col-md-12 col-xs-12">
		<img className="banner-img" src="./images/game.png" alt=""/>
		</div>
			<div className="col-lg-4 col-md-12 col-xs-12">
		<img className="banner-img" src="./images/safe.png"  alt=""/>
		</div>
			<div className="col-lg-4 col-md-12 col-xs-12">
		<img className="banner-img" src="./images/submarine.png" alt=""/>
		</div>
		</div></div>

		</div></div>

		</div>
		);
	}
}
//
class About extends Component{
	render(){
		return(
		<div className="about-main">
		<div className="container">
		<div class="row">
				<div class="col-lg-12"><h1 className="about-heading">About</h1>
		<div className="star-and-dash"><div className="hr-left"></div><span><i className="fa fa-star star"></i></span><div class="hr-right"></div></div>
		</div>
      
<div class="col-lg-3"></div>
<div className="col-lg-3"><p className="about-p">Freelancer is a free bootstrap them ceated by bootstrap.The download includes the complete source files  including html css and javaScript as well as optional Less stylesheet  for easy customiation</p>.</div>
<div className="col-lg-3"><p className="about-p"> Whether you'r a student looking to showcase you work a professional lookin to a attarct clients or a graphic artist lokking to share your project this template is the best for starting point!</p></div>
<div className="col-lg-3"></div>

  </div>
    </div>
    <button className="about-btn">Download Now! <span class="fa fa-download"></span></button>

		</div>);
	}

}//
class Contact extends Component{
	render(){
		return(
		<div className="main-contact">
		<div className="container">
		<div className="row">
		<div className="col-lg-12"><h1 className="contact-header">Contact Me</h1></div>
		<div className="col-lg-12"><span><i></i><i></i><i></i></span></div>
<form action="" className="contact-form">
<input type="text" className="input-feilds" placeholder="Name" /><br />
<input type="text" className="input-feilds" placeholder="Email Address"/><br />
<input type="text" className="input-feilds" placeholder="Phone Number" /><br />
<textarea name="" id="" cols="30" rows="10" className="input-feilds" placeholder="Write the massage..."></textarea>
<button className="btn btn-success">Send</button>
</form>
		</div></div>
		</div>
		);
	}
}//
class Footer extends Component{
	render(){
		return(
		<div className="main-footer">
		<div className="container">
		<div className="row">
		<div className="col-lg-2"></div>
		<div className="col-lg-3 footer-haeding"><h4>location</h4></div>
		<div className="col-lg-3 footer-haeding"><h4>Around the web</h4></div>
		<div className="col-lg-3 footer-haeding"><h4>About Freelancer</h4></div>
		<div className="col-lg-2"></div>
			<div className="col-lg-1.5"></div>
		<div className="col-lg-3"><p className="footer-p2">Johar Town Lahore</p></div>
		<div className="col-lg-3"><p className="footer-p2">Social media</p>
		<span className="social-border"><i className="fa fa-facebook-square social-icon"></i></span>
		<span className="social-border"><i className="fa fa-instagram social-icon"></i></span>
		<span className="social-border"><i className="fa fa-twitter social-icon"></i></span>
		<span className="social-border"><i className="fa fa-youtube social-icon"></i></span>

		</div>

		<div className="col-lg-3"><p className="footer-p2">Freelancer is a free to use open source Bootstrap theme created by <span>Start Bootstrap</span></p></div>
		<div className="col-lg-1.5"></div>

		</div>
		</div>
		<div className="footer"><p>Copyright your wbsite 2019</p></div>
		</div>);
	}
}