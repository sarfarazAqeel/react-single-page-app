import React,{Component} from 'react';
import  './App.css';
import Footer from '../footer.js';
import Subscription from '../subscription.js';


class Home extends Component{
	render(){
		
		return(<div>
			<p ><img  className="image" src="/images/wfa.jpg" alt=""/></p>

<div className="row">
  <div className="col-lg-6 col-xs-12 col-md-6">
  <h1><span className="welcom">WELCOME TO </span><span className="EDU">EDUHOME</span></h1>
  <p>I must explain to you how all this mistaken idea of denouncing pleure and prsing pain was born and I will give you a complete account of the system, and expound the actual teachings the master-builder of humanit happiness

I must explain to you how all this mistaken idea of denouncing pleure and prsing pain was born and I will give you a complete account of the system</p>
<button className="btn btn-danger">View Course</button>
  </div>
  <div className="col-lg-6 col-xs-12 col-md-6"><img className="side-image"src="/images/about.png" alt=""/></div>

</div><br />
<div className="row">
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"><img src="images/section.png" alt=""/></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>
<div className="col-lg-1"></div>


</div>
<div className="row">
<div className="col-lg-3"></div>
<div className="col-lg-6"><h1 className="meet">MEET OUR TEACHERS</h1></div>
<div className="col-lg-3"></div>
</div>
<div className="row">
<div className="col-lg-3">
<div className="main-post">
<img className="post" src="images/courses-01.jpg" alt=""/>
<h2 className="post-title">STUART KELVIN</h2>
<p>Associate Professor</p>

</div>
</div>
<div className="col-lg-3 main-post"><div className="main-post"><img className="post" src="images/courses-02.jpg" alt=""/>
<h2 className="post-title">SALINA GOMAZE</h2>
<p>Associate Professor</p></div></div>
<div className="col-lg-3"><div className="main-post"><img className="post" src="images/courses-03.jpg" alt=""/>
<h2 className="post-title">EAMILY CRISTIAN</h2>
<p>Associate Professor</p></div></div>
<div className="col-lg-3"><div className="main-post"><img  className="post" src="images/courses-04.jpg" alt=""/>
<h2 className="post-title">KEVIN WILLIAMS</h2>
<p>Associate Professor</p></div></div>
</div>

<div ><img className="slide" src="images/slide.jpg" alt="" /></div>
<div className="row">
<div className="col-lg-6">
<h4 className="h4">TAKE A VIDEO TOUR</h4></div>
<div className="col-lg-6">
<h4 className="h4">NOTICE BOARD</h4></div>
</div>
<div class="row">
<div class="col-lg-6">
<a href="https://www.youtube.com/watch?v=to6Ghf8UL7o"><img className="vide-baner"src="images/courses-06.jpg" alt="" />
</a>
<img className="video-icon"src="images/video-icon.png" alt=""/>
</div>
<div className="col-lg-6">
<table className="table">
<tr className="tr"><th className="th">
<h6 className="date">5,fab 2019</h6>
<p className="notic-board-paragraph">I must explain to you how all this mistaken idea of denouncing plasure and praising pain was born and I will give you a complete</p></th></tr>
<tr className="tr"><th className="th">
<h6 className="date">5,fab 2019</h6>
<p className="notic-board-paragraph">I must explain to you how all this mistaken idea of denouncing plasure and praising pain was born and I will give you a complete</p></th></tr>
<tr className="tr"><th className="th">
<h6 className="date">5,fab 2019</h6>
<p className="notic-board-paragraph">I must explain to you how all this mistaken idea of denouncing plasure and praising pain was born and I will give you a complete</p></th></tr>

</table>
</div>
</div>
<Subscription/>
<Footer/>
			</div>);
	}
}



export default Home;