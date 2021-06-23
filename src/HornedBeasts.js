import React, { Component } from 'react'
import { Card, Button, Row, Modal } from 'react-bootstrap';



export class HornedBeasts extends Component {

    constructor(props){
        super(props); 
        this.state={clicks : props.clicks,}
        this.state={show: props.show}
        
    }

    clickNumber=()=>{
        this.setState(
        { clicks : this.state.clicks+1}
        )
    }

       handleClose=()=> {this.setShow(false)}
       handleShow = () => {this.setShow(true)};

    render() {
      
      return (
        <>
    
          <Modal show={false} onHide={this.handleClose()}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{<img src= {this.props.image_url} alt= {this.props.title}></img>}</Modal.Body>
            <Modal.Footer>
              <p>{this.props.description}</p>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
              
             <Row>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} onClick={this.handleShow} />
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Button variant="danger" onClick = {this.clickNumber} >Like</Button>
            <span>{this.state.clicks}</span>
            <Card.Text>
              Number of horns: {this.props.horns}
            </Card.Text>
            </Card.Body>
            </Card>
            </Row>
            </>
        )
    }
}

export default HornedBeasts