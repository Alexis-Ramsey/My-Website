import React from "react";
import './styles.css'
import Header from './components/Header'
import Header2 from './components/Header2'
import Body from './components/body'
import Body2 from './components/Body2'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

function App(){

    //SETTING GLOBAL USESTATES
    const [add, setAdd] = React.useState(0)
    console.log(add)
    const [hide, setHide] = React.useState(false)
    console.log(hide)

    return(
       <div className="container">
        <Header setAdd={setAdd}/>
        <Header2 add={add} setAdd={setAdd} hide={hide} setHide={setHide} />
        <Body />
        <Body2 />
        <Footer />
        <Footer2 />
       </div>
    )
}

export default App;