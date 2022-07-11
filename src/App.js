import React from "react";
// import Login from "./Page/login.page";

import {BrowserRouter} from 'react-router-dom'

import Header from './components/header/header.component';
import View from './views/Views.component';
import Footer from './components/footer/footer.component';
import Process from "./components/process/process.component";

import history from "./history";
import UserHome from "./pages/user/userhome.component";

const App = () => {
  return (
    <React.Fragment>
        <div className="hero_area">
          <BrowserRouter history={history}>
              <Header/>
              {/* <UserHome/> */}
              <Process/>
              <View/>
              <Footer/>
          </BrowserRouter>
        </div>
    </React.Fragment>
  );
};
export default App;
