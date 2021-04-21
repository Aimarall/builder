
import Layout from "./components/Layout/Layout";
import FixingBuilder from "./components/FixingBuilder/FixingBuilder";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <h1 className="Jewelry">Precious stones</h1>
        <FixingBuilder />
      </Layout>


      
    </div>
  );
}

export default App;
