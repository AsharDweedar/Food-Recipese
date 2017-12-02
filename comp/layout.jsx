
class Layout extends React.Component {
  constructor(props) {
    console.log("props : ");
    console.log(props);
    super(props);
    this.state = {
      showSignUp : true,
      showSignIn : false,
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
        {this.state.showSignUp && <window.signup />}
        {this.state.showSignIn && <window.signin />}
        {this.state.showRecipes && <window.recipes />}
        {this.state.showRecipesPage && <window.recipepage />}
        {this.state.showRecomendations && <window.recomendations />}
      </div>;
  }
}
// debugger;
console.log('before connect');
// const connect = ReactRedux.connect;
connect((store, ownProps) => {
  console.log('hi this is my store : ');
  console.log(store );
  //whatever i return here it will be sent as props
  return { name: "name is here !" };
})(Layout);
