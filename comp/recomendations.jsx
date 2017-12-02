class recomendations extends React.Component {
  constructor(props) {
    super(props);
    console.log("props recomendations : ");
    console.log(props);
  }

  render() {
    var list = [];
    for (var recomendation of this.props.recomendations) {
      list.push(<li> {recomendation} </li>);
    }
    return <div>{list}</div>;
  }
}