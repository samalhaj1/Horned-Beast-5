import React from "react";
import beastarray from "../src/assets/data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
class App extends React.Component {



  render() {
    return (
      <div>
        <Header/>
        <Main beastsList={beastarray} />
       <Footer/>

      </div>

    );
  }
}

export default App;
