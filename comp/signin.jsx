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
    this.props.show("showRecipes");
  }

  render() {
    return <div>
      <form>
        <legend>sign In Component</legend>
        <input placeholder="email" id="email" />
        <input placeholder="password" id="pass" />
        <button onClick={this.submit.bind(this)}>click to submit</button>
      </form>
    </div>
  }
}