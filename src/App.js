import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import AllSites from "./pages/AllSites";
import Blogs from "./pages/Blogs";
import Docs from "./pages/Docs";
import Showcase from "./pages/Showcase";
import { AuthContextProvider } from "./context/AuthContext";
import CreateBlog from "./pages/CreateBlog";
import CreateBlogTwo from "./pages/CreateBlogTwo";
import BlogContent from "./pages/BlogContent";
import DataInput from "./pages/DataInput";
import DataPages from "./pages/DataPages";
import DataTags from "./pages/DataTags";
import DataAuthors from "./pages/DataAuthors";
import DataFinish from "./pages/DataFinish";
import Dashboard from "./pages/Dashboard";

function App() {
  // function pathMatch(route) {
  //   const path = "/create-blog";
  //   if (route === path) {
  //     return true;
  //   }
  // }
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
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="create-blog-two" element={<CreateBlogTwo />} />
            <Route path="/blog-content" element={<BlogContent />} />
            <Route path="/database-input" element={<DataInput />} />
            <Route path="/database-pages" element={<DataPages />} />
            <Route path="/database-tags" element={<DataTags />} />
            <Route path="/database-author" element={<DataAuthors />} />
            <Route path="/database-finish" element={<DataFinish />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
