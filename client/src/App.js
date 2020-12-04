import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
