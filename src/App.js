import React from "react";
import './App.css'

import {BrowserRouter} from 'react-router-dom'
import { useSelector } from "react-redux";

import Header from './components/header/header.component';
import View from './views/Views.component';
import Footer from './components/footer/footer.component';
import Process from "./components/process/process.component";


import history from "./history";
import Loading from "../src/components/loading/loading";

const App = () => {
  // const { loading } = useSelector((state) => state.loading);
  return (
    <>
      <React.Fragment>
        {/* {loading && <Loading />} */}
        {/* <Loading /> */}
        <div className="hero_area">
          <BrowserRouter history={history}>
              <Header/>
              <Process/>
              <View/>
              {/* <Footer/> */}
          </BrowserRouter>
        </div>
      </React.Fragment>
    </>
    
  );
};
export default App;
