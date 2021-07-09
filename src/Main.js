import React, { Component } from 'react'
import HornedBeast from './HornedBeast.js';
import { CardColumns } from 'react-bootstrap'
import HornFilter from './HornFilter.js';

class Main extends Component {
    // raiseVotes=(votes)=>{
    //     return votes+1
    // }
    render() {
        
              
        return (
            <div class='card'>
                 <HornFilter
          viewBeasts={this.props.viewBeasts} 
        />
        <div class='carrd'>
              <CardColumns >
              {
              this.props.data.map(beast=>{ 
                 return(
                    <HornedBeast
                    title={beast.title} 
                    horns={beast.horns}
                    description={beast.description}
                     image_url={beast.image_url}
                      votes={beast.votes} 
                      totalVotes={this.raiseVotes}
                      showModal={this.props.selectedModal}/>
                     
                 )
              
               
            })}
              </CardColumns>
              
</div>
             </div>
        )
    }
}

export default Main