class signin extends React.Component {
  constructor(props) {
    console.log("props signin : ");
    console.log(props);
    super(props);
    this.state = { ...props };
  }

  submit() {
    var email = $("#email").val();
    var pass = $("#pass").val();
    console.log("submitted sign in");
    //TODO : submit to firebase;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        this.props.show("showRecipes", true);
      })
      .catch(function({ message }) {
        alert(message);
      });
  }

  render() {
    return <div>
      <form>
        <legend>sign In :</legend>
        <input placeholder="email" id="email" />
        <input placeholder="password" id="pass" />
        <button onClick={this.submit.bind(this)}>click to submit</button>
      </form>
    </div>
  }
}