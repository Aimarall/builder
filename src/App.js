import Layout from "./components/Layout/Layout";
import CeilingBuilder from "./components/CeilingBuilder/CeilingBuilder";
import "./App.css";


function App() {
  return (
    <div className="App">
      
      <Layout>
        
        <CeilingBuilder className="CeilingBuilder"/>
      
      </Layout>
    </div>
  );
}

export default App;

