import React from "react";
import beastarray from "../src/assets/data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      theSelectedOne: {},
    };
  }

  showModal = (title) => {
    let selectedArr =  beastarray.find((element) => {
      return (element.title === title);

    });

    this.setState({
      show: true,
      theSelectedOne: beastarray,
    });
    return selectedArr;
  };

  handleClose = () => {
    this.setState({ show: !this.state.show });
  };


  render() {
    return (
      <div>
        <Header />
        <Main
          theSelectedOne={this.state.theSelectedOne}
          showModal={this.showModal}
        />
        <SelectedBeast
          handleClose={this.handleClose}
          show={this.state.show}
          theSelectedOne={this.state.theSelectedOne}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false,
//       theSelectedOne: {},

//     };
//   }


//       showModal = (title) =>{
//          theSelectedOne =beastarray.find((item) =>{
//           return(item.title === title);
//         });
//       }


