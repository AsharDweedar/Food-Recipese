
class signup extends React.Component {
  constructor(props) {
    console.log("props signup: ");
    console.log(props);
    super(props);
  }

  submit () {
    var email = $("#email").val()
    var pass = $("#pass").val()
    var pass = $("#name").val()
    console.log('submitted');
    //TODO : submit to firebase;
    this.props.show("showSignIn")
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