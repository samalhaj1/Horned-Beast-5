import React from "react";
import beastarray from "../src/assets/data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      theSelectedOne: {},
    };
  }


      showModal = (tilte) =>{
        let SelectedBeast=beastarray.find((item) =>{
          return(item.tilte === tilte);
        });
      }


  handleClose =()=> {this.setState(show:!this.state.show)}

  render() {
    return (

      <div>
        <Header />
        <Main beastsList={beastarray} />
        <Footer />
        <SelectedBeast 
        handleClose={this.handleClose}
        theSelectedOne={this.state.theSelectedOne}
        />

      </div>
    );
  }
}

export default App;