import { Provider } from "react-redux";
import { store } from "./redux/store";
import CounterApp from "./components/CounterApp";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1 className="title">Smart Counter + Todo App</h1>
      <CounterApp />
      <TodoList />
    </Provider>
  );
}

export default App;
