import React, { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
