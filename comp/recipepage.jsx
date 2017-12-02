
class recipepage extends React.Component {
  constructor(props) {
    super(props);
    console.log("props : ");
    console.log(props);
    this.state = {...props};
  }
 
  render() {
    return <div>
        <address> recipe page </address>
      </div>;
  }
}
const connect = ReactRedux.connect;
connect((store, ownProps) => {
  //whatever i return here it will be sent as props
  return {
    ...ownProps
  };
})(recipepage);
