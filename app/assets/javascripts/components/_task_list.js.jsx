var TaskList = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.taskindex);
  },

  render: function () {
    return (
      <div className="project-box">
        <HomeLayout />
        <h1> Tasks </h1>
        <TaskAll tasks={ this.state.tasks } />
      </div>
    );
  }
});
