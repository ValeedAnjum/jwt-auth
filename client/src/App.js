import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { loadUser } from "./store/actions/authActions";
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/info" component={Info} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
