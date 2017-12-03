window.fbAsyncInit = function () {
  FB.init({
    appId: '712050912334618',
    cookie: true,
    xfbml: true,
    version: 'v2.11'
  });
  
  
  FB.AppEvents.logPageView();
  
};
//check if he is already signed in with facebook
function checkLoginState () {
  return FB.getLoginStatus((response) => {
    window.isLoggedIn = response.state === "connected";
    console.log(window.isLoggedIn);
    return response.state === "connected";
  });
}

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//log out function ...
function logmeout () {
  console.log('inside log out ')
  FB.logout(function (response) {
    // user is now logged out
    console.log('logged out ');
  });
}
/*


  response object is =>    {
          status: 'connected',
          authResponse: {
              accessToken: '...',
              expiresIn:'...',
              signedRequest:'...',
              userID:'...'
          }

      status specifies the login status of the person using the app. The status can be one of the following:

          connected - the person is logged into Facebook, and has logged into your app.
          not_authorized - the person is logged into Facebook, but has not logged into your app.
          unknown - the person is not logged into Facebook, so you don't know if they've logged into your app or FB.logout() was called before and therefore, it cannot connect to Facebook.

      authResponse is included if the status is connected and is made up of the following:

          accessToken - contains an access token for the person using the app.
          expiresIn - indicates the UNIX time when the token expires and needs to be renewed.
          signedRequest - a signed parameter that contains information about the person using the app.
          userID - the ID of the person using the app.

      Once your app knows the login status of the person using it, it can do one of the following:

          If the person is logged into Facebook and your app, redirect them to your app's logged in experience.
          If the person isn't logged into your app, or isn't logged into Facebook, prompt them with the Login dialog with FB.login() or show them the Login Button.
    */
