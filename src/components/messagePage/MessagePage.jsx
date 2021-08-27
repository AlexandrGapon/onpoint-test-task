import React, { useRef, useState } from 'react'
import styles from './MessagePage.module.scss'
import pic1 from '../../imgs/message_page/sperm_pic_1.png'
import pic2 from '../../imgs/message_page/sperm_pic_2.png'
import pic3 from '../../imgs/message_page/sperm_pic_3.png'
import pic4 from '../../imgs/message_page/sperm_pic_4.png'
import pic5 from '../../imgs/message_page/sperm_pic_5.png'

const text1 = ' consectetur adipisicing elit. Aut sint id molestiae debitis, aliquam dolorem maxime quam adipisci molestias accusamus enim reiciendis voluptate? Veniam doloribus magni impedit aliquam, praesentium quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nisi temporibus iste expedita obcaecati qui accusantium soluta cumque blanditiis repudiandae sequi, eius ex magnam eveniet itaque neque tempore. Nemo, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum voluptatibus porro fugiat, magnam corrupti commodi incidunt. Deserunt adipisci laborum, voluptates sit sequi dolorum alias ea illo tempora repellendus harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis exercitationem ex quo veniam, debitis illo in, sequi quas, eius soluta nisi incidunt nostrum! Placeat natus corrupti voluptates alias dolores?'

const text2 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi neque rerum iure sunt ducimus modi. Laboriosam voluptatibus distinctio eum, porro nihil veritatis officia aspernatur saepe similique consequatur corporis quo mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium placeat, repellendus quis excepturi voluptates, incidunt dolores eius dolor atque non ratione, ex perspiciatis? Minima eligendi laborum adipisci sapiente velit.'


const MessagePage = () => {

    // Реф для динамического вычисления высоты параграфа
    const paragraphRef = useRef()

    const [posY1, setPosY1] = useState(0)
    const [posY2, setPosY2] = useState(0)

    // Регулярка, чтобы достать число из transform: translate
    const trfRegExp = /[-0-9.]+(?=px)/

    // Инлайн стили
    const [styleIcon, setStyleIcon] = useState({ top: '-2px' })
    const [styleText, setStyleText] = useState({ transform: 'translateY(0)' })

    // Отношение высоты блока с текстом к диапозону скроллбара
    const [ratio, setRatio] = useState(0)

    const start = (e) => {
        setPosY1(e.touches[0].clientY)
        setStyleIcon({
            ...styleIcon,
            transition: ''
        })
        setRatio(((paragraphRef.current.clientHeight - 415) / 344).toFixed(4))
    }

    const action = (e) => {
        // Отключение слайдера во время движения ползунка
        e.stopPropagation()

        let transformIcon = parseInt(styleIcon.top)
        let transformText = +styleText.transform.match(trfRegExp)

        setPosY2(posY1 - e.touches[0].clientY)
        setPosY1(e.touches[0].clientY)

        // Блокировка ползунка скроллбара на границах (и я пока не придума, как пофиксить погрешности вычисления пикселей, поэтому на границах текстовый блок возвращается в исходное и конечное положения сам)
        if (posY2 > 0 && transformIcon <= -2) {
            setStyleText({
                ...styleText,
                transition: 'transform .3s',
                transform: 'translateY(0)'
            })
            return
        }

        if (posY2 < 0 && transformIcon >= 342) {
            setStyleText({
                ...styleText,
                transition: 'transform .3s',
                transform: `translateY(-${(paragraphRef.current.clientHeight - 385)}px)`
            })
            return
        }

        setStyleIcon({
            ...styleIcon,
            transition: 'top',
            top: `${transformIcon - posY2}px`
        })

        setStyleText({
            ...styleText,
            transition: 'transform',
            transform: `translateY(${Math.round((transformText + posY2 * ratio))}px)`
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>
                    Текст
                    <br />сообщения
                </p>
            </div>

            {/* Можно декомпозировать скроллбар/блок с текстом, но в данной таске это будет лишним */}
            <div className={styles.scrollBarContainer}>
                <div className={styles.scrollBar}></div>
                <div className={styles.scrollBarIcon} style={styleIcon} onTouchStart={start} onTouchMove={action}></div>
            </div>
            <div></div>
            <div className={styles.messageContainer}>
                <p className={styles.messageBody} ref={paragraphRef} style={styleText}>
                    <b>Lorem, ipsum dolor sit amet</b>{text1}
                    <br />
                    <br />
                    <br />
                    {text2}
                </p>
            </div>

            <img src={pic1} alt='bacterium' className={styles.image1} />
            <img src={pic2} alt='bacterium' className={styles.image2} />
            <img src={pic3} alt='bacterium' className={styles.image3} />
            <img src={pic4} alt='bacterium' className={styles.image4} />
            <img src={pic5} alt='bacterium' className={styles.image5} />
        </div>
    )
}

export default MessagePage
