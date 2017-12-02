
class signup extends React.Component {
  constructor(props) {
    console.log("props : ");
    console.log(props);
    super(props);
    this.state = {...props};
  }

  submit () {
    var email = $("#email").val()
    var pass = $("#pass").val()
    var pass = $("#name").val()
    console.log('submitted');
    //TODO : submit to firebase;
    props.show("showSignIn")
  }
 
  render() {
    return <div>
        <form>
          <legend>sign up Component</legend>
          <input placeholder="Name" id = "name" ></input>
          <input placeholder="Email" id = "email" ></input>
          <input placeholder="Password" id = "pass" ></input>
          <button onClick={this.submit} >click to submit</button>
        </form>
      </div>;
  }
}
connect((store, ownProps) => {
  //whatever i return here it will be sent as props
  return {
    ...ownProps,
    email: "",
    password: "",
    name: "",
  };
})(signup);
