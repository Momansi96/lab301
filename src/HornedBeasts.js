import React, { Component } from 'react'
import { Card, Button, Modal } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


export class HornedBeasts extends Component {

    constructor(props){
        super(props); 
        this.state={clicks : props.clicks,}
    }

    clickNumber=()=>{
        this.setState(
        { clicks : this.state.clicks+1}
        )
    }

    imageRender=()=>{
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.description}</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
         <div>
          <img src= {this.props.image_url} alt= {this.props.title}></img>
          </div>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="danger">Don't like it</Button>
          <Button variant="success">Liked the image</Button>
        </Modal.Footer>
      </Modal.Dialog>
    }
    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} onClick ={this.imageRender} />
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Button variant="danger" onClick = {this.clickNumber} >Like</Button>
            <span>{this.state.clicks}</span>
            </Card.Body>
            </Card>
            </div>
        )
    }
}

export default HornedBeasts