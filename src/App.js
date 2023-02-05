import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import AllSites from "./pages/AllSites";
import Blogs from "./pages/Blogs";
import Docs from "./pages/Docs";
import Showcase from "./pages/Showcase";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-sites" element={<AllSites />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
