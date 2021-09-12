import React from 'react';
import HornedBeasts from './HornedBeasts';
import beastarray from '../assets/data.json';
import Formhorn from './formforbeast';
// import App from '../App';
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beastarray1: beastarray,
    };
  }


  handleCallback = (data1) => {
    this.setState({ beastarray1: data1 });
  };
  render() {
    return (
      <main>
        {this.state.beastarray1.map((elemnt) => {
          return (
            <>
              <Formhorn callBack={this.handleCallback} />

              <HornedBeasts
                title={elemnt.title}
                desc={elemnt.description}
                image_url={elemnt.image_url}
                horns={elemnt.horns}
                alt={elemnt.keyword}
                showModal={this.props.showModal}
                handleClose={this.props.handleClose}
              />
            </>
          );
        })}
      </main>
    );
  }
}

export default Main;
