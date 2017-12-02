
class recipes extends React.Component {
  constructor(props) {
    console.log("props recipes : ");
    console.log(props);
    super(props);
  }

  render () {
    var list = [];
    for (var recipe of this.props.recipes) {
      list.push(<window.recipepage onClick={() => this.props.show(recipe)} recipe={recipe} />);
    }
    return <div>
      {list}
    </div>;
  }
}
