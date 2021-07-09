import React, { Component } from 'react'

import {Card,Modal,Button} from 'react-bootstrap'


 class SelectedBeast extends Component {
    render() {
        return (
            <div>
                
      <Modal show={this.props.showData} >
          <div class='head'>
        <Modal.Header >
          <Modal.Title class='title' >{this.props.dataForModal.title}</Modal.Title>
        </Modal.Header>
        </div>
        <Modal.Body class='bdy'>
        <Card style={{ width: '26rem',marginLeft:'40px'}  }>
        <Card.Img src={this.props.dataForModal. image_url}  />
            <Card.Body>
              
              <Card.Text class='text'>{this.props.dataForModal.description}</Card.Text>
             
             
          <Button style={{marginLeft:'150px'}} variant="secondary" onClick={this.props.exit}>
           close
          </Button>
            </Card.Body>
        </Card>



        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
                
            </div>
        )
    }
}

export default SelectedBeast