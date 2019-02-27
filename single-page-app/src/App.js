import React, { Component } from 'react';

import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './component/home.js';
import About from './component/about.js';
import Votingapp from './component/votingapp.js';
import Course from './component/course';
import Event from './component/event';
import Teachers from './component/teachers';
import Contact from './component/contact';
import Blog from './component/blog';
import BuyNow from './component/buynow';



class App extends Component {
  render() {
    return (

      <div className="main">
   
           <Router>
           <div className="container-fluid">

           <nav className="navbar navbar-inverse">
             
           <ul className="nav navbar ul">
             <li><Link to={'/'} className="navbar-brand"> <img src="images/logo.png" alt=""/></Link></li>

             <li  className="li"><Link  className="link" to={'/'}>home</Link></li>
             <li className="li"><Link  className="link"to={'/about'}>About</Link></li>
              <li className="li"> <Link  className="link"to={'/Course'}>Course</Link></li>
             <li className="li" ><Link  className="link"to={'/event'}>Event</Link></li>
             <li className="li" ><Link  className="link"to={'/teachers'}>Teacher</Link></li>
             <li className="li" ><Link  className="link"to={'/contact'}>Contact</Link></li>
             <li className="li" ><Link  className="link"to={'/blog'}>Blog</Link></li>
             <li className="li" ><Link  className="link"to={'/butnow'}>Buy Now</Link></li>
                    <Time/>
             </ul>
 
              </nav>
                     

           <Switch className="switch">
           <Route exact path='/' component={Home}/>
           <Route  path="/about" component={About}/>
           <Route  path="/votingapp" component={Votingapp}/>
          <Route path="/course" component={Course}/>
           <Route path="/event" component={Event}/>
           <Route path="/teachers" component={Teachers}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/blog" component={Blog}/>
           <Route path="/butnow" component={BuyNow}/>



           </Switch>

           </div>

           </Router>
        
                 </div>

    );
  }
}

class Time extends Component{
  constructor(props){
    super(props);
    this.state={
      time:new Date().toLocaleString(),
 
    }
    this.timeUpdate();
  }
  timeUpdate(){
    setInterval(()=>{
      this.setState({
        time:new Date().toLocaleString()

      })
    },1000)
  }
  render(){
    return(<div>
<p className="Time">{this.state.time}</p>
      </div>);
    }
  }
export default App;
