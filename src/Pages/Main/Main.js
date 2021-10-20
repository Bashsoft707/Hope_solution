import React, { useState, useEffect } from 'react'
import News from '../../Components/News/News'
import Courses from '../../Components/Courses/Courses'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Features from '../../Components/Features/Features'

const Main = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=50cc1115495b4dcc9067059c743f6156')
        .then(response => response.json())
        .then(data => {
            setPosts(data.articles);
            console.log(data.articles)
        })
        .catch(err => console.log(err))
     }, [])

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar />
            <Slider width='100%' />
            <News posts={posts}/>
            <Courses />
            <Features />
            <Footer />
        </div>
    )
}

export default Main
