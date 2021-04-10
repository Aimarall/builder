
import Layout from "./components/Layout/Layout";
import FixingBuilder from "./components/FixingBuilder/FixingBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <FixingBuilder/>
      </Layout>
    </div>
  );
}

export default App;
