import React, { useState } from 'react'
import styles from './App.module.scss'
import HomePage from './components/homePage/HomePage'
import HomeBtn from './UI/homeBtn/HomeBtn'
import logo from '../src/imgs/logo.png'
import MessagePage from './components/messagePage/MessagePage'
import BrandPage from './components/brandPage/BrandPage'

const App = () => {

  // Переменные
  const [slideIndex, setSlideIndex] = useState(0)
  const [posInit, setPosInit] = useState(0)
  const [posX1, setPosX1] = useState(0)
  const [posX2, setPosX2] = useState(0)

  // Регулярка для получения числа пикселей из transform: translate
  const trfRegExp = /[-0-9.]+(?=px)/

  // Инлайн классы
  const [styleTrack, setStyleTrack] = useState({ transform: 'translateX(0px)' })

  // functions
  const slide = (slide) => {
    setStyleTrack({
      ...styleTrack,
      transition: 'transform .5s',
      transform: `translateX(-${slide * 1024}px)`
    })
  }

  const goSlide = (slideIndex) => {
    slide(slideIndex)
    setSlideIndex(slideIndex)
  }

  // start
  const start = (e) => {
    setPosInit(e.touches[0].clientX)
    setPosX1(e.touches[0].clientX)
    setStyleTrack({
      ...styleTrack,
      transition: ''
    })
  }

  // action
  const action = (e) => {
    let transform = +styleTrack.transform.match(trfRegExp)

    setPosX2(posX1 - e.touches[0].clientX)
    setPosX1(e.touches[0].clientX)

    // Оключение слайдера на границах
    if (slideIndex === 0 && posX2 < 0) {
      return
    }

    if (slideIndex === 2 && posX2 > 0) {
      return
    }

    setStyleTrack({
      ...styleTrack,
      transform: `translateX(${transform - posX2}px)`
    })
  }

  // end
  const end = (e) => {

    if (Math.abs(posInit - posX1) > 350) {
      if (posInit < posX1 && slideIndex > 0 && posInit !== posX1) {
        setSlideIndex(slideIndex - 1)
        slide(slideIndex - 1)
        return
      }
      if (posInit > posX1 && slideIndex < 2 && posInit !== posX1) {
        setSlideIndex(slideIndex + 1)
        slide(slideIndex + 1)
        return
      }
    }
    if (posInit !== posX1) {
      slide(slideIndex)
    }
  }

  return (
    <div className={styles.app} onTouchStart={start} onTouchMove={action} onTouchEnd={end}>
      <HomeBtn
        position={{ top: '25px', left: '70px' }}
        click={goSlide}
      />
      <div className={styles.swiperList}>
        <div className={styles.swiperTrack} style={styleTrack}>
          <HomePage nextSlide={goSlide} />
          <MessagePage />
          <BrandPage />
        </div>
      </div>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default App
