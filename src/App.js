import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import MainBody from './MainBody';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Profile from './Profile';
import Result from './Result';
import Home from './Home';
import Jobs from './Jobs';
import Login from './Login'
import Signup from './Signup';
import YourProfile from './YourProfile';
import CompanyProfile from './CompanyProfile';
import Notifications from './Notifications';
import LoginRedirect from './LoginRedirect';
import Callback from './Callback';
import FriendRequests from './FriendRequests';
function App() {
  
  return (
    <div className="App " style={{minHeight:"200vh",backgroundColor:"#f3f2ee",paddingBottom:"200px"}}>
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" type="text/css" href="/css_root/flaticon.css"></link>
      <link href="https://use.fontawesome.com/releases/v5.10.1/css/all.css" rel="stylesheet"></link>
      {/* <link href="https://use.fontawesome.com/releases/v5.0.0/css/all.css" rel="stylesheet"></link> */}
     
      <Header></Header>
      <Router>
        <Switch>
        {/* <Route path="/" exact children={() => (
         
         <div onLoad={window.location.href="https://www.facebook.com"}>
                
         </div>
          )} /> */}
          {/* <Route path="/" exact component={LoginRedirect}></Route> */}
          {/* <Route path="/" exact component={Home}/> */}
          <Route path="/chat" exact component={Callback}/>
          <Route path="/profile" exact component={YourProfile}/>
          <Route path="/companyprofile" exact component={CompanyProfile}/>
          <Route path="/result" exact component={Result}/>
          <Route path="/jobs" exact component={Jobs}/>
          <Route path="/notifications" exact component={Notifications}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/friendrequests" exact component={FriendRequests}/>

          {/* <Route path="/" component={PageNotFound}/>   */}
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
