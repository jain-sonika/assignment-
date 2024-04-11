
import { useState } from "react";


import { Navbar, Footer, SideBar, Body , TableComponent } from "./Components";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Body />
      <TableComponent />
       <Footer />
     
    </>
  );
}

export default App;
