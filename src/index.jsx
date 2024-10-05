import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, NotFound } from "./Handlers/Imports.jsx";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function Loader() {
  const { pathname } = useLocation();

  useEffect(() => {
    NProgress.start();
    window.scrollTo(0, 0);
    NProgress.done();
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <Loader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
