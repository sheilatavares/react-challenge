import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import DisplayPeriodic from "./components/displayPeriodic";
import Form from "./components/Form";
import "./App.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DisplayPeriodic />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
