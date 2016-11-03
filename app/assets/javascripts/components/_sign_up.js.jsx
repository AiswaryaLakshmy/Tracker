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
      <div className="signup-box">
        <h1>Tracker</h1>
        <hr />
        <h2>Sign Up</h2>
        <SignupForm form={ this.state.form } onSignupSubmit={ this.handleSignupSubmit } />
        Already a User? <a href="/users/sign_in">Login</a> here!
      </div>
    );
  }
});
