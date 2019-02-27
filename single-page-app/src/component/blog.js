import React,{Component} from 'react';
import './App.css';
import Footer from '../footer.js';
class Blog extends Component{
	render(){
		return(<div>
<Signup/>
<br/>
<Blogpost/>
<br/>
<Footer/>
</div>);
	}
}
export default Blog;
//Blog post
class Blogpost extends Component{
	render(){
		return(<div><img className="course-img" src="./images/banner6.jpg" alt="" />
	<div className="container-fluid">
	<div className="row">
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-09.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-01.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-02.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-03.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-04.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-05.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-06.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-07.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	<div className="col-lg-4 col-md-6 col-sml-12 col-xs-12">
<img src="/images/courses-08.jpg" alt=""/>
<p>By Alex/June 20,2017/ <i className="fa fa-comment">4</i></p>
<h4>I MUST EXPLAIN TO YOU HOW ALL THIS A MISTAKEN IDEA</h4>
<button className="blog-post-btn">Read More</button>
	</div>
	</div></div></div>);
	}
}
//Sign up 
class Signup extends Component{
	render(){
		return(
			<div>

<div className="container-fluid">
			<div className="row">
			<div className="col-lg-8 col-sm-8 col-xs-8 header1"><span>HAVE ANY QUESTION ? +880 5698 598 6587</span></div>
		   <div className="col-lg-4 col-sm-4 col-xs-4 header2"><button className="login-btn">login</button>
		   <button className="signup-btn">singup</button></div>
	       </div>
		  </div>
			</div>);
	}
}
