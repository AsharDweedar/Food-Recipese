var { Provider } = window.ReactRedux;
$(document).ready(function() {
  ReactDOM.render(
    <Provider store={store}>
      <window.Layout />
    </Provider>,
    document.getElementById("container")
  );
}); 