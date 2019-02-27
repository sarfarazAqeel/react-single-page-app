import React,{Component} from 'react';
class Footer extends Component{
	render(){
		return(
			<div className="footer-table">
			<div className="container">
			<div className="row">
			<div className="col-lg-3">
			<ul>
				<li><img className="footer-logo"src="images/footer-logo.png" alt=""/></li><br />
				<li><p className="footer-t1-p">I must explain to you how all this mistaken idea of denoung pleure and praising pain was born and give you a coete account of the system.</p></li>
				</ul>
				<table className="social"><tr><th><i className="fa fa-facebook-f"></i></th><th><i className="fa fa-pinterest"></i></th><th><i className="fa fa-vimeo"></i></th><th><i className="fa fa-twitter"></i></th></tr></table>
				
				</div>
			<div className="col-lg-3">
			<ul className="footer-infom">
				<li><h3 className="footer-h3">INFORMATION</h3>
				<div className="first-bar"></div><div className="second-bar"></div></li>

				<li><p className="footer-p">Addmission</p></li>
				<li><p className="footer-p">Academic Calender</p></li>
				<li><p className="footer-p">Event List</p></li>
				<li><p className="footer-p">Hostel & Dinning</p></li>
				<li><p className="footer-p">TimeTable</p></li>
			</ul>
			</div>
			<div className="col-lg-3">
			<ul className="footer-infom">
				<li><h3 className="footer-h3">INFORMATION</h3>
				<div className="first-bar"></div><div className="second-bar"></div></li>

				<li><p className="footer-p">Our Courses</p></li>
				<li><p className="footer-p">About Us</p></li>
				<li><p className="footer-p">Teachers & Faculty</p></li>
				<li><p className="footer-p">Hostel & Dinning</p></li>
				<li><p className="footer-p">Our Events</p></li>
			</ul>
			</div>
			<div className="col-lg-3">
			<ul className="footer-infom">
				<li><h3 className="footer-h3">GET IN TOUCH</h3>
				<div className="first-bar"></div><div className="second-bar"></div></li>

				<li><p className="footer-p">Your address goes here, Street
City, Roadno 785 New York</p></li>
				<li><p className="footer-p">+880 548 986 898 87
+880 659 785 658 98</p></li>
				<li><p className="footer-p">Teachers & Faculty</p></li>
				<li><p className="footer-p">Hostel & Dinning</p></li>
				<li><p className="footer-p">info@eduhome.com
www.eduhome.com</p></li>
			</ul>
			</div>

		</div>
			</div>
			<div className="footer-bar"><p>Copyright © <strong className="footer-hash">HasTech</strong> 2017. All Right Reserved By Hastech.</p></div>
			</div>);
	}
}
export default Footer;