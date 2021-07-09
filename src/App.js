import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectedBeast from './SelectedBeast';
import hornsBeastData from './data.json';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
   hornsData: hornsBeastData ,
      displayModal: false,
  
      modalData: {}
    }
  }
  handleShowModal = (data) => {

    this.setState({
    displayModal:true,
    modalData:data,
  });
  }

  handleHideModal = () => {this.setState({
    displayModal: false});
}
viewBeasts = (hornsData) => {this.setState({hornsData});
}
 
render(){
 
  return(
    <div class='body'>
      <Header/>
      
        <Main selectedModal={this. handleShowModal}
        data={this.state.hornsData}
       viewBeasts={this.viewBeasts}  />
        <SelectedBeast exit= {this.handleHideModal } showData={this.state.displayModal} dataForModal={this.state.modalData}/>
    <Footer />
    </div>
    
  )
}


}

export default App