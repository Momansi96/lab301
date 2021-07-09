import React , {Component} from 'react';
import {Card}from 'react-bootstrap';
import {ListGroup,Button}from 'react-bootstrap';


class HornedBeast extends Component {
constructor(props){
    super(props);
    this.state={
        
        votes:0
    }
}

changeVotes =()=>{
    this.setState({
        votes:this.state.votes+1
    })
}
clickMe=()=>{
    let data={
        title:this.props.title,
        image_url:this.props.image_url,
        description:this.props.description
    }
    this.props.showModal(data)
}
    render(){
        return(
            <div>
            <Card border="dark"  style={{ width: '25rem',height:'700px'   }} bg="info" text = 'dark' >
            
            

  <Card.Img variant="top"  style={{ width: '24.88rem',height:'300px'  }}  src={this.props.  image_url}  onClick={this.changeVotes}alt ={this.props.title} />
  <ListGroup variant="flush" style={{ width: '25rem',height:'250px'}} >
  <Card.Body>
  <ListGroup.Item><Card.Title  class="list">{this.props.title}</Card.Title></ListGroup.Item>
  <ListGroup.Item> <Card.Text class="list">
    {this.props.description}
    </Card.Text></ListGroup.Item>
    <ListGroup.Item><Card.Text class="list">Number of horns : {this.props.horns}</Card.Text></ListGroup.Item>
    
    <ListGroup.Item><Card.Text class="list1" >
    <i class="fas fa-heart" >favorited: {this.state.votes}</i>
    </Card.Text></ListGroup.Item>
    <Button size="lg" class='button1' variant="dark" onClick={this.clickMe} style={{marginTop:'20px',marginLeft:'120px'}}> Click me </Button>{' '}
  </Card.Body>
  </ListGroup>
  
 
</Card>
</div>

        )
    }
}

export default HornedBeast
