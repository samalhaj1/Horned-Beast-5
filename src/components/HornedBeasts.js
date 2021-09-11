import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votesnumber: 0,



        }
    }

    voteNumberIncreace = () => {
        alert("vote increasded")
        this.setState({
            votesnumber: this.state.votesnumber + 1
        });
    }



    render() {

        return (
            <div>
                {/* <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.imageUrl} alt="" /> */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.voteNumberIncreace}/>
                    <Card.Body>
                        <Card.Title> The Title is{this.props.title}</Card.Title>
                        <Card.Title>Number of hOrns  {this.props.horns}</Card.Title>
                        <Card.Text> The description{this.props.description}<br />
                            Number of corrent votes:{this.state.votesnumber}</Card.Text>
                        <Button onClick={this.voteNumberIncreace} variant="primary">vote for this lovely UniCorn
                        </Button>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}

export default HornedBeasts;