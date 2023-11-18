import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./styles/common.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Works from "./pages/Works/Works";
import OneWork from "./pages/OneWork/OneWork";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { refreshUser } from "./redux/auth/thunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<OneWork />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;
