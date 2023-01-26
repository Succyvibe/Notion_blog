import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import AllSites from "./pages/AllSites";
import Blogs from "./pages/Blogs";
import Docs from "./pages/Docs";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/all-sites" element={<AllSites />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
