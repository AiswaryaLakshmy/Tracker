var ProjectAll = React.createClass({
  render: function () {
    var projectNodes = this.props.projects.map(function ( project ) {
      return <SingleProject name={ project.name } id={ project.id } key={Math.random()} />
    });

    return (
      <div className="project-list">
        { projectNodes }
      </div>
    )
  }
});
