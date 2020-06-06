import React from "react"

import Navbar from "./custom_components/Navbar"
import MainContent from "./custom_components/MainContent"
import Footer from "./custom_components/Footer"
import CovidForm from "./custom_components/CovidForm"

function Zapp(){
    return (
        <div>
        <CovidForm />
            <Navbar/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default Zapp