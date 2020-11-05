import "../common/template/dependecies";
import React from "react";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Routes from "./routes";

export default (props) => (
  <div className="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div className="content-wrapper">
      <Routes></Routes>
    </div>
    <Footer></Footer>
  </div>
);
