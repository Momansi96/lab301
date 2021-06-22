import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App


