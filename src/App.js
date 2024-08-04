import React from "react";
import './styles.css'
import Header from './components/Header'
import Header2 from './components/Header2'
import Body from './components/body'
import Body2 from './components/Body2'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

function App(){


    return(
       <div className="container">
        <Header />
        <Header2 />
        <Body />
        <Body2 />
        <Footer />
        <Footer2 />
       </div>
    )

}

export default App;