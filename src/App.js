import { Navigate, Route, Routes } from "react-router-dom";

import "./styles/common.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Works from "./pages/Works/Works";
import OneWork from "./pages/OneWork/OneWork";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<OneWork />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
