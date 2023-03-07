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
import GeneralSettings from "./pages/GeneralSettings";
import Settings from "./pages/Settings";
import NavigationSettings from "./pages/NavigationSettings";
import AddLinks from "./pages/AddLinks";
import Posts from "./pages/Posts";
import Pages from "./pages/Pages";
import Tags from "./pages/Tags";

import Authors from "./pages/Authors";
import Domains from "./pages/Domains";
import Afilliate from "./pages/Afilliate";
import Features from "./pages/Features";
import NewsletterSetup from "./pages/NewsletterSetup";
import EmailNewsletter from "./pages/EmailNewsletter";
import CTASetup from "./pages/CTASetup";
import FieldMapping from "./pages/FieldMapping";

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
            <Route path="/general-settings" element={<GeneralSettings />} />
            <Route
              path="/navigation-settings"
              element={<NavigationSettings />}
            />
            <Route path="/add-links" element={<AddLinks />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/tags" element={<Tags />} />

            <Route path="/authors" element={<Authors />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/afilliate" element={<Afilliate />} />
            <Route path="/features" element={<Features />} />
            <Route path="/newsletter-setup" element={<NewsletterSetup />} />
            <Route path="/email-newsletter" element={<EmailNewsletter />} />
            <Route path="/cta-setup" element={<CTASetup />} />
            <Route path="/field-mapping" element={<FieldMapping />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
