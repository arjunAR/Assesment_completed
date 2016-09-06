var React=require('react');


var ViewSavedData=React.createClass({

  getInitialState: function()
  {
    return({status:false});
  },
  ViewMailStatus:function(){

  this.setState({status:true});
  },

  hideMailStatus:function(){
    this.setState({status:false});
  },
  render:function(){


    return(
      <div>

          <tr className="danger">
        		<td className="col-lg-1">{this.props.batch}</td>
        		<td className="col-lg-1">{this.props.name}</td>
            <td className="col-lg-1">{this.props.email}</td>
            <td className="col-lg-1">{this.props.phone}</td>
            <td className="col-lg-1">{this.props.git}</td>
            <td className="col-lg-1">{this.props.code}</td>
            <td className="col-lg-1">{this.props.dept}</td>
            <td className="col-lg-1">{this.props.designation}</td>
            <td className="col-lg-1">{this.props.skill}</td>
            <td className="col-lg-1">{this.props.exp}</td>
      		</tr>

    </div>
    );
  }
});

module.exports=ViewSavedData;
