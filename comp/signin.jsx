class signin extends React.Component {
  constructor(props) {
    console.log("props : ");
    console.log(props);
    super(props);
    this.state = { ...props };
  }

  submit() {
    var email = $("#email").val();
    var pass = $("#pass").val();
    console.log("submitted sign in");
    //TODO : submit to firebase;
    this.props.show("showRecipesPage");
  }

  render() {
    return
    <div>
      <form>
        <legend>sign In Component</legend>
        <input placeholder="email" id="email" />
        <input placeholder="password" id="pass" />
        <button onClick={this.submit}>click to submit</button>
      </form>
    </div>
  }
}