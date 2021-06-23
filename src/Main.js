import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import hornsData from './data.json' 
import {Col } from 'react-bootstrap'
import SelectForm from './SelectForm'

export class Main extends Component {
    render() {
        
        return (
            <div> 
                <Col>
            {hornsData.map(horn=>{
            return  <HornedBeasts clicks ={0} title = {horn.title} image_url = {horn.image_url} description = {horn.description}/>
            })}
              </Col>

               <SelectForm />
            </div>
        )
    }
}

export default Main
