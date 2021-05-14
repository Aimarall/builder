import Checkout from "./components/Checkout/Checkout";
import Layout from "./components/Layout/Layout";
import FixingBuilder from "./components/FixingBuilder/FixingBuilder";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Orders from "./components/Orders/Orders";


const App = () => {
  return (
    <div className="App">

      <Layout>
        <h1 className="Jewelry">Gems</h1>
        <Switch>
          <Route path="/" component={FixingBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
