import React from 'react'
import styles from './HomePage.module.scss'
import mainSperm from '../../imgs/home_page/main_sperm.png'
import static1 from '../../imgs/home_page/static_bacterium_1.png'
import static2 from '../../imgs/home_page/static_bacterium_2.png'
import static3 from '../../imgs/home_page/static_bacterium_3.png'
import static4 from '../../imgs/home_page/static_bacterium_4.png'
import animated1 from '../../imgs/home_page/animated_bacterium_1.png'
import animated2 from '../../imgs/home_page/animated_bacterium_2.png'
import animated3 from '../../imgs/home_page/animated_bacterium_3.png'
import animated4 from '../../imgs/home_page/animated_bacterium_4.png'
import PinkBtn from '../../UI/pinkBtn/PinkBtn'
import arrowIcon from '../../imgs/btn/chars/arrow.png'

const HomePage = ({ nextSlide }) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.hello}>Привет,</p>
                <p className={styles.title}>
                    Это <b>не</b>
                    <br />коммерческое
                    <br />задание
                </p>
            </div>
            <PinkBtn char={arrowIcon}
                position={{ bottom: '235px', right: '110px' }}
                onClick={() => nextSlide(1)}
            >
                Что дальше?
            </PinkBtn>
            {/* Статические изображения */}
            <img src={mainSperm} alt='bacterium' className={styles.mainSperm} />
            <img src={static1} alt='bacterium' className={styles.static1} />
            <img src={static2} alt='bacterium' className={styles.static2} />
            <img src={static3} alt='bacterium' className={styles.static3} />
            <img src={static4} alt='bacterium' className={styles.static4} />
            {/* Анимированные изображения */}
            <img src={animated1} alt='bacterium' className={styles.animated1} />
            <img src={animated2} alt='bacterium' className={styles.animated2} />
            <img src={animated3} alt='bacterium' className={styles.animated3} />
            <img src={animated4} alt='bacterium' className={styles.animated4} />
        </div>
    )
}

export default HomePage
