var HomeIndex = React.createClass({
  render: function () {
    return (
      <div className='project-box'>
        <HomeLayout />
        <img src={ this.props.imgSrc }/>
      </div>
    )
  }
});
