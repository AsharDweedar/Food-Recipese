var { Provider } = window.ReactRedux;
console.log('store :');
console.log(store);
$(document).ready(function() {
  ReactDOM.render(
    <Provider store={store}>
      <window.Layout />
    </Provider>,
    document.getElementById("container")
  );
}); 