import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="font-sans text-base">
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Outlet />
    </>
  );
}

export default App;
