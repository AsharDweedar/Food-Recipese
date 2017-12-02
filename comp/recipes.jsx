
class recipes extends React.Component {
  constructor(props) {
    super(props);
    console.log("props : ");
    console.log(props);
    if (props.recipes)
      this.state = {...props};
    else 
      this.state.recipes = ["test 1","test 2","test 3","test 4","test 5",];
    //TODO : fetch data from firebase & store it at :
    //this.setState(res)
  }
 
  render () {
    var list = ['<ul>'];
    for (var recipe of this.state.recipes) {
      list.push('<li onClick="this.props.show(recipe)">recipe</li>');
    }
    list.push("</ul>")
    return <div> list </div>;
  }
}
