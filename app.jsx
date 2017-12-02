//import { Provider } from "react-redux"
var { Provider } = window.ReactRedux;
ReactDOM.render(<Provider store = {store} ><window.Layout /></Provider>, document.getElementById("container"));
