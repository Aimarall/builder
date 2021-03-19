
import Layout from "./components/Layout/Layout";
import CeilingBuilder from "./components/CeilingBuilder/CeilingBuilder";
// import Layout from "./components/Layout/CeilingControls/CeilingControls";
// import Layout from "./components/Layout/CeilingPreview/CeilingPreview";
import "./App.css"

function App() {
  return (
    <div className="App">
      
      <Layout>
        <CeilingBuilder/>
        {/* Ceiling Builder<br />
        Ceiling Preview<br />
        Ceiling Controls<br /> */}
      </Layout>
    </div>
  );
}

export default App;
