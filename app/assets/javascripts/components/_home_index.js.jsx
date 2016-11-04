var HomeIndex = React.createClass({
  render: function () {
    return (
      <div>
      	<h4 className="home">HOME</h4>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="=&quot;IE=edge&quot;/" />
        <meta name="google" value="notranslate" />
        <title>Side Menu</title>
        <link rel="stylesheet" type="text/css" href="css/menu.css" />
        <link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
        <nav className="main-menu">
          <div>
            <a className="logo" href="http://startific.com">
            </a> 
          </div> 
          <div className="settings" />
          <div className="scrollbar" id="style-1">
            <ul>
              <li>                                   
                <a href="http://startific.com">
                  <i className="fa fa-home fa-lg" />
                  <span className="nav-text">Home</span>
                </a>
              </li>   
              <li>                                 
                <a  href="http://startific.com">
                  <i className="fa fa-user fa-lg" />
                  <span className="nav-text">Login</span>
                </a>
              </li>   
              <li>                                 
                <a href="/users/sign_out" data-method="delete">
                  <i className="fa fa-sign-out" aria-hidden="true" />
                  <span className="nav-text">Logout</span>
                </a>
              </li>   
              
              <li className="darkerlishadow">
                <a href="http://startific.com">
                  <i className="fa fa-clock-o fa-lg" />
                  <span className="nav-text">News</span>
                </a>
              </li>
              <li className="darkerli">
                <a href="http://startific.com">
                  <i className="fa fa-desktop fa-lg" />
                  <span className="nav-text">Technology</span>
                </a>
              </li>
              <li className="darkerli">
                <a href="http://startific.com">
                  <i className="fa fa-plane fa-lg" />
                  <span className="nav-text">Travel</span>
                </a>
              </li>
            </ul>
            
          </div></nav>
      </div>
    )
  }
});
        
