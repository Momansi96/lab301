  
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import hornsBeastData  from './data.json'



export class HornFilter extends React.Component {



     filter= (e) => {
        const numOfHorns = parseInt(e.target.value);
        let   hornsData= hornsBeastData ;
        if (numOfHorns) {
            hornsData  = hornsBeastData.filter((item) => item.horns === numOfHorns);
        }
        this.props.viewBeasts(hornsData);
      }
    render() {
        return (
            <Container>
            <Form>
              <Form.Group id='group' >
              
                <Form.Label class="labeel">View the beasts by the number of horns :</Form.Label>
                <Form.Control id="forme" as="select" onChange={this.filter}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>100</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Container>
        )
  }
      
    }


export default HornFilter
