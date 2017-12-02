const connect = window.ReactRedux;
connect((store) => {
  //whatever i return here it will be sent as props 
  return {};
})(window.Layout);
window.Layout = React.createClass({
  render: function() {
    return <div>Hello world, this is <window.something>inside something</window.something></div>;
  }
});
