import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import "./Slider.css";

const Slider = ({width}) => {
  const [value, setValue] = useState(0);

  const updateIndex = () => {
    if (value === 3) {
      setValue(0)
    } else {
      setValue(value + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(value + 1)
    }, 3000)
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, )

  return (
    <div
      key={SliderData[value].id}
      style={{ background: `url(${SliderData[value].image})`,  }}
      className="slider"
    >
      <div className="slider-info">
        <div className="container">
          <div className="slider-info-big">
            <h5>{SliderData[value].title}</h5>
            <p>{SliderData[value].description}</p>
            <a href="#getstarted">Ready to get started</a>
          </div>
          <div className='controls'>
            <a className='controls-theme prev' href='#prev' onClick={() => value === 0 ? setValue(3) : setValue(value - 1)}>
              <span><FaChevronLeft /></span>
            </a>
            <a className='controls-theme next' href='#next' onClick={() => value === 3 ? setValue(0) : setValue(value + 1)}>
              <span><FaChevronRight /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

// import React, { useState, useEffect, useRef } from 'react'
// import { css } from '@emotion/react'
// import SliderContent from './SliderContent'
// import Slide from './Slide'
// import Arrow from './Arrow'
// import Dots from './Dots'

// const getWidth = () => window.innerWidth

// const Slider = props => {
//   const [state, setState] = useState({
//     activeIndex: 0,
//     translate: 0,
//     transition: 0.45
//   })
//   const { translate, transition, activeIndex } = state
//   const autoPlayRef = useRef()

//   useEffect(() => {
//     autoPlayRef.current = nextSlide
//   })

//   useEffect(() => {
//     const play = () => {
//       autoPlayRef.current()
//     }

//     const interval = setInterval(play, props.autoPlay * 1000)
//     return () => clearInterval(interval)
//   }, [])

//   const nextSlide = () => {
//     if (activeIndex === props.slides.length - 1) {
//       return setState({
//         ...state,
//         translate: 0,
//         activeIndex: 0
//       })
//     }

//     setState({
//       ...state,
//       activeIndex: activeIndex + 1,
//       translate: (activeIndex + 1) * getWidth()
//     })
//   }

//   const prevSlide = () => {
//     if (activeIndex === 0) {
//       return setState({
//         ...state,
//         translate: (props.slides.length - 1) * getWidth(),
//         activeIndex: props.slides.length - 1
//       })
//     }

//     setState({
//       ...state,
//       activeIndex: activeIndex - 1,
//       translate: (activeIndex - 1) * getWidth()
//     })
//   }

//   return (
//     <div css={SliderCSS}>
//       <SliderContent
//         translate={translate}
//         transition={transition}
//         width={getWidth() * props.slides.length}
//       >
//         {props.slides.map((slide, i) => (
//           <Slide key={slide + i} content={slide} />
//         ))}
//       </SliderContent>

//       {!props.autoPlay && (
//         <>
//           <Arrow direction="left" handleClick={prevSlide} />
//           <Arrow direction="right" handleClick={nextSlide} />
//         </>
//       )}

//       <Dots slides={props.slides} activeIndex={activeIndex} />
//     </div>
//   )
// }

// Slider.defaultProps = {
//   slides: [],
//   autoPlay: null
// }

// const SliderCSS = css`
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   margin: 0 auto;
//   overflow: hidden;
// `

// export default Slider
