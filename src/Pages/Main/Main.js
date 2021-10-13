import React from 'react'
import Courses from '../../Components/Courses/Courses'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'

const Main = () => {
    
    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar />
            <Slider width='100%' />
            <Courses />
            <Footer />
        </div>
    )
}

export default Main
