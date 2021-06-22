import React, { Component } from 'react'


export class HornedBeasts extends Component {

    constructor(props){
        super(props); 
        this.state={click : props.click}
    }

    clickNumber=()=>{
        this.setState(
        { click : this.state.click+1}
        )
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} width= '300px' height= '250px'></img>
                <p>{this.props.description}</p>
                <img oneClick = {this.clickNumber} src= "https://cdn.kapwing.com/video_image-Bz5ouo4Jn.jpg" alt= "heart" width = '30px' height= '30px'></img>
                <span>{this.state.click}</span>
            </div>
        )
    }
}

export default HornedBeasts