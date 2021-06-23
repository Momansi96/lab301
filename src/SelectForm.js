import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export class SelectForm extends Component {
    render() {
        return (
            <div>
                <Form>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>select number of horns</Form.Label>
    <Form.Control as="select">
      <option value= "1">1</option>
      <option value= "2">2</option>
      <option value= "3">3</option>
      <option value= "100">100</option>
      
    </Form.Control>
  </Form.Group>
</Form>
            </div>
        )
    }
}

export default SelectForm
