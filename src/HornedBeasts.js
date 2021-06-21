import React, { Component } from 'react'


export class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.source} alt={this.props.name}></img>
                <p>{this.props.par}</p>

            </div>
        )
    }
}

export default HornedBeasts