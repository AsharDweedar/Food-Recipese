
class Layout extends React.Component {
  constructor(props) {
    console.log("props : ");
    console.log(props);
    super(props);
    this.state = {
      showSignUp : false,
      showSignIn : true,
      showRecipes : false,
      showRecipesPage : false,
      showRecomendations : false,
      current : "showRecipesPage",
    }
  }
  toShow (show) {
    //conditional rendering
    this.state[show] = true; //the passed value is now true => will be shown 
    this.state[current] = false; //change the currently shown tab to false => will be hided
    this.setState({ current: show }); //the passed value is now the cuurrent
  }
  render() {
    return <div>
      
        { this.state.showSignUp && <signup /> }
        { this.state.showSignIn && <signin /> }
        { this.state.showRecipes && <recipes /> }
        { this.state.showRecipesPage && <recipepage /> }
        { this.state.showRecomendations && <recomendations /> }
        Hello world, this is <window.something
        >
          inside something
        </window.something>
      </div>;
  }
}
// debugger;
console.log('before connect');
const connect = ReactRedux.connect;
connect((store, ownProps) => {
  console.log('hi this is my store : ');
  console.log(store );
  //whatever i return here it will be sent as props
  return { name: "name is here !" };
})(Layout);
