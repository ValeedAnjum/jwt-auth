import { BrowserRouter, Switch, Route } from "react-router-dom";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
function App() {
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
