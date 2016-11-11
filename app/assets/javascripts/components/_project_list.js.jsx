var ProjectList = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.projectindex);
  },

  render: function () {
    return (
      <div className='project-box'>
        <HomeLayout />
        <h1> Projects </h1><br />
        <ProjectAll projects={ this.state.projects } />
      </div>
    );
  }
});
