var Project = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.projectnew);
  },

  handleProjectSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ project: data });
        window.location.reload();
      }.bind(this),
      error: function(){
        window.location.reload();
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="project-box">
        <HomeLayout />
        <h2>Add Project:</h2>
        <br /><br />
        <ProjectForm form={ this.state.form } onProjectSubmit={ this.handleProjectSubmit } />
      </div>
    );
  }
});
