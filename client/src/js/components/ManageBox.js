var React=require('react');
var ViewSavedData=require('./ViewSavedData');
var ManageBox=React.createClass({

getInitialState:function(){
      return({waveBatch:'wave1',namee:'',email:'',phone:'',git:'',codee:'',dept:'',designation:'',skill:'',exp:'',getData:[]});
    },

  viewMail:function(){
    $.ajax({
     url: '/getData',
     dataType: 'json',
     type: 'GET',
     success: function(data)
     {
       this.setState({getData:data});
       console.log("Success of HOME",data.length);
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)
  });

  },
  componentDidMount:function(){
    this.viewMail();
  },

handleWaveBatch:function(e){
      this.setState({waveBatch:e.target.value});
    },
handleName:function(e){
    this.setState({namee:e.target.value});
  },
handleEmail:function(e){
    this.setState({email:e.target.value});
    },
    handlePhone:function(e){
        this.setState({phone:e.target.value});
      },

      handleGit:function(e){
          this.setState({git:e.target.value});
        },

        handleCode:function(e){
            this.setState({codee:e.target.value});
          },
          handleDept:function(e){
              this.setState({dept:e.target.value});
            },
            handleDesignation:function(e){
                this.setState({designation:e.target.value});
              },
              handleSkill:function(e){
                  this.setState({skill:e.target.value});
                },
                handleExp:function(e){
                    this.setState({exp:e.target.value});
                  },

  saveDetails:function(){
    console.log("DATAAAAA1",this.state.waveBatch);
    console.log("DATAAAAA2",this.state.namee);
    var expp=this.state.exp;
		$.ajax({
		 url: '/manageSave',
		 dataType: 'json',
		 contentType: "application/json",
		 type: 'POST',
		 data:JSON.stringify({"batch":this.state.waveBatch,"name":this.state.namee,"email":this.state.email,"phone":this.state.phone,"git":this.state.git,"code":this.state.codee,"dept":this.state.dept,"designation":this.state.designation,"skill":this.state.skill,"exp":expp}),

		 success: function(data)
		 {
				 console.log("SEND MAIL AJAX SUCCESS");
         this.setState({waveBatch:'wave1',namee:'',email:'',phone:'',git:'',codee:'',dept:'',designation:'',skill:'',exp:''});

		 }.bind(this),
     async:false,
		 error: function(xhr, status, err) {
			 console.error(err.toString());
		 }.bind(this)
	});
  this.viewMail();

	},
render:function(){
  var iterateData=this.state.getData.map(function(dataa){

      return(
        <ViewSavedData batch={dataa.batch} name={dataa.name} email={dataa.email} phone={dataa.phone} git={dataa.git} code={dataa.code} dept={dataa.dept} designation={dataa.designation} skill={dataa.skill} exp={dataa.exp} />
      )
    });

    return(
      <div>
        <h1>Manage Participants</h1><br/><br/>
        <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <form name="manageForm" id="manageForm" method="post">

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Wave Batch</label>
                    </div>
                    <div className="col-lg-6">
                      <select value={this.state.waveBatch} onChange={this.handleWaveBatch}>
                        <option value="wave1">MERN Wave 1</option>
                        <option value="wave2">MERN Wave 2</option>
                        <option value="wave3">MERN Wave 3</option>
                        <option value="wave4">MERN Wave 4</option>
                        <option value="wave5">MERN Wave 5</option>
                      </select>
                    </div>
                  </div>





                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Name</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.namee} onChange={this.handleName} id="nameVal" name="nameVal" />
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Email</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.email} onChange={this.handleEmail} id="emailVal" name="emailVal" />
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Phone</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.phone} onChange={this.handlePhone} id="phoneVal" name="phoneVal" />
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">GIT url</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.git} onChange={this.handleGit} id="gitVal" name="gitVal" />
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Employee Code</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.codee} onChange={this.handleCode} id="codeVal" name="codeVal" />
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Employee Department</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.dept} onChange={this.handleDept} id="deptVal" name="deptVal" />
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Employee Designation</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.designation} onChange={this.handleDesignation} id="designationVal" name="designationVal" />
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Skills</label>
                    </div>
                    <div className="col-lg-6">
                      <textarea className="form-control" type="text" value={this.state.skill} onChange={this.handleSkill} id="skillVal" name="skillVal" placeholder="Enter your skills.." rows="4"></textarea>
                    </div>
                  </div>

                  <div className="form-group col-lg-12">
                    <div className="col-lg-2">
                      <label className="control-label">Experience</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" value={this.state.exp} onChange={this.handleExp} id="expVal" name="expVal" />
                    </div>
                  </div>
                  <br/><br/>
                  <button type="button" className="btn btn-warning" onClick={this.saveDetails}>Submit</button>

                  </form>
                </div>
              </div>
              </div>
              <br/><br/><br/>
              <div className="container-fluid">
                			<div className="row">
                				<div className="col-lg-12">
                						<table className="test table">
                							<thead>
                								<tr className="col-lg-12">
                									<th className="col-lg-1">Batch</th>
                									<th className="col-lg-1">Name</th>
                                  <th className="col-lg-1">Email</th>
                                  <th className="col-lg-1">Phone</th>
                                  <th className="col-lg-1">GIT Url</th>
                                  <th className="col-lg-1">Employe code</th>
                                  <th className="col-lg-1">Department</th>
                                  <th className="col-lg-1">Designation</th>
                                  <th className="col-lg-1">Skills</th>
                                  <th className="col-lg-1">Experience</th>

                								</tr>
                							</thead>

                							<tbody>
                								{iterateData}
                							</tbody>
                						</table>
                				</div>
                			</div>
                		</div>

      </div>
    );
  }
});

module.exports=ManageBox;
