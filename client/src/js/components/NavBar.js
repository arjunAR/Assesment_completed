var React=require('react');
var NavLink=require('./NavLink');
var NavBar=React.createClass({
render:function(){
  return(


    <div>

      <div id="myNavBar" className="navbar navbar-fixed-top">
        <div className="container">

          <ul className="nav navbar-nav">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/manage">Manage Participants</NavLink></li>
          </ul>



        </div>
      </div>

		</div>



);
}
})
module.exports=NavBar;
