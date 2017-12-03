
class signup extends React.Component {
  constructor(props) {
    console.log("props signup: ");
    console.log(props);
    super(props);
  }

  submit () {
    var email = $("#email").val()
    var pass = $("#pass").val()
    var name = $("#name").val()
    console.log('submitted sign up');
    //TODO : submit to firebase;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        console.log(user);
        // firebase
        //   .database()
        //   .ref("users/" + user.id)
        //   .set(send);
        this.props.show("showSignIn");
      })
      .catch(function({ message }) {
        alert(message);
      });
  }
 
  render() {
    return <div>
        <form>
          <legend>sign up Component</legend>
          <input placeholder="Name" id = "name" ></input>
          <input placeholder="Email" id = "email" ></input>
          <input placeholder="Password" id = "pass" ></input>
          <button onClick={this.submit.bind(this)} >click to submit</button>
        </form>
      </div>;
  }
}