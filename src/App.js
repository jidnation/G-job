import { Routes, Route} from "react-router-dom";
import Home from './views/Home/'
import  About  from "./views/about"
import Layout from "./components/Layout";


function App() {
  return (
    <>
      <div className="App">
     <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      </Layout>
    </div>

    </>
  );
}

export default App;
