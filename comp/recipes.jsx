
class recipes extends React.Component {
  constructor(props) {
    console.log("props recipes : ");
    console.log(props);
    super(props);
  }

  render () {
    var list = [];
    for (var recipe of this.props.recipes) {
      list.push(<li
          onClick={() => this.props.show("showRecipePage", recipe)}
        >
          {" "}
          recipe{" "}
        </li>);
    }
    return <div><ul>
      {list}
      </ul>
    </div>;
  }
}
