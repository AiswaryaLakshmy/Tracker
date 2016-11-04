var SignUp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.signup);
  },

  handleSignupSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ user: data });
        window.location.reload();
      }.bind(this),
      error: function(){
        window.location.reload();
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="login">
        <h1 className="main-heading">Tracker</h1>
        <hr />
        <div className="login-triangle" />
        <h2 className="login-header">Sign Up</h2>
        <SignupForm form={ this.state.form } onSignupSubmit={ this.handleSignupSubmit } />
        <p className="new-user">Already a User? <a className="link" href="/users/sign_in">Login</a> here!</p>
      </div>
    );
  }
});
