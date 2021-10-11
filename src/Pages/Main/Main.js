import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'

const Main = () => {
    
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar />
            <Slider width='100%' />
            <Footer />
        </div>
    )
}

export default Main
