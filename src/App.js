import { Provider } from "react-redux";
import Body from "./components/Body";
import Login from "./components/Login";
import appStore from "./Utils/appStore";

function App() {
  return (
    <div className="overflow-hidden">
      <Provider store={appStore}>
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
