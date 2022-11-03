let state

function changeState(state = {count: 0}, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

//so that the page displays 0 at first
//does not have to be "@@INIT" could be anything
dispatch({ type: "@@INIT" });
