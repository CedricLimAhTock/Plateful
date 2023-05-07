import React from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
import './index.css'


const App = () => {
  return (
    <>
        <Header />
        <Search />
        <div className="card-gallery"></div>
        <Footer />
    </>
  )
}

export default App