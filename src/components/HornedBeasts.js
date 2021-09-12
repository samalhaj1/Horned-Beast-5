import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfHornedVotes: 0,
    };
  }
  increaseHorneVotes = () => {
    this.setState({
      numOfHornedVotes: this.state.numOfHornedVotes + 1,
    });
  };

  render() {
    return (
      <div>
        <Card
          style={{
            width: '25rem',
            border: 'solid',
            background: '#C8A2C8',
            color: 'black',
          }}
        >
          <Card.Img
            variant='top'
            src={this.props.image_url}
            onClick={this.increaseHorneVotes}
            alt={this.props.alt}
          />
          <Card.Body>
            <Card.Title>The Title is {this.props.title}</Card.Title>
            <Card.Text>number of horns {this.props.horns}</Card.Text>
            <Card.Text>Summary:- {this.props.desc}</Card.Text>
            <Card.Text>
              Number of votes : {this.state.numOfHornedVotes}
            </Card.Text>
            <Button onClick={this.increaseHorneVotes}>
              Click here or on the photo to vote
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;

// import React from 'react';
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// class HornedBeasts extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             votesnumber: 0,

//         }
//     }

//     voteNumberIncreace = () => {
//         alert('vote increasded')
//         this.setState({
//             votesnumber: this.state.votesnumber + 1
//         });
//         // this.props.ShowMain(this.props.title,this.props.image_url,this.props.description);
//     }

//     render() {

//         return (
//             <div>
//                 {/* <h2>{this.props.title}</h2>
//                 <p>{this.props.description}</p>
//                 <img src={this.props.imageUrl} alt='' /> */}
//                 <Card style={{ width: '18rem' }}>
//                     <Card.Img variant='top' src={this.props.imageUrl} onClick={this.voteNumberIncreace}/>
//                     <Card.Body>
//                         <Card.Title style={{height: '40px'}}> The Title is{this.props.title}</Card.Title>
//                         <Card.Title>Number of hOrns  {this.props.horns}</Card.Title>
//                         <Card.Text style = {{height: '4.9'}}> The description{this.props.description}<br />
//                             Number of corrent votes:{this.state.votesnumber}</Card.Text>
//                         <Button style={{ marginLeft: '10.1rem',  fontSize: '1.2rem'}} onClick={this.voteNumberIncreace} variant='primary'>vote for this lovely UniCorn
//                         </Button>
//                     </Card.Body>
//                 </Card>
//             </div>

//         );
//     }
// }

// export default HornedBeasts;
