import Checkout from "./components/Checkout/Checkout";
import Layout from "./components/Layout/Layout";
import FixingBuilder from "./components/FixingBuilder/FixingBuilder";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";


const App = () => {
  return (
    <div className="App">

      <Layout>
        <h1 className="Jewelry">Gems</h1>
        <Switch>
          <Route path="/" component={FixingBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
