import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loding..."}>
        <Router />
        <ToastContainer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
