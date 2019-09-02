import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Zine from "./components/zine/Zine";
import Apparel from "./components/apparel/Apparel";
import Paint from "./components/paint/Paint";
import Story from "./components/story/Story";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route path="/zine" component={Zine} />
      <Route path="/apparel" component={Apparel} />
      <Route path="/paint" component={Paint} />
      <Route path="/story" component={Story} />
      <Footer />
    </div>
  );
}

export default App;
