import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import hornsData from './data.json' 

export class Main extends Component {
    render() {
        
        return (
            <div>
            {hornsData.map(horn=>{
            return  <HornedBeasts clicks ={0} title = {horn.title} image_url = {horn.image_url} description = {horn.description}/>
            })}

            </div>
        )
    }
}

export default Main
