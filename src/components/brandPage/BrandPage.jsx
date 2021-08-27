import React, { useState } from 'react'
import styles from './BrandPage.module.scss'
import bottlePic from '../../imgs/brand_page/img_block/bottle.png'
import blueBubblePic from '../../imgs/brand_page/img_block/blue_bubble.png'
import lightblueBubblePic from '../../imgs/brand_page/img_block/lightblue_bubble.png'
import pinkBubblePic from '../../imgs/brand_page/img_block/pink_bubble.png'
import redBubblePic from '../../imgs/brand_page/img_block/red_bubble.png'
import postIcon1 from '../../imgs/brand_page/post_icons/post_icon_1.png'
import postIcon2 from '../../imgs/brand_page/post_icons/post_icon_2.png'
import PinkBtn from '../../UI/pinkBtn/PinkBtn'
import plusIcon from '../../imgs/btn/chars/plus.png'
import Popup from '../popup/Popup'

const BrandPage = () => {

    const [popup, setPopup] = useState(false)

    return (
        <div className={styles.container}>

            {popup &&
                <Popup setPopup={setPopup} />
            }

            < div className={styles.titleContainer}>
                <p>Ключевое сообщение</p>
                <p className={styles.brand}>Brend<b>XY</b></p>
            </div>

            <div className={styles.postsContainer}>
                <div className={styles.post1}>
                    <img src={postIcon1} alt='dishes' />
                    <p>Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies</p>
                </div>
                <div className={styles.post2}>
                    <img src={postIcon2} alt='calendar' />
                    <p>A arcu<br />cursus vitae</p>
                </div>
            </div>
            <PinkBtn char={plusIcon}
                position={{ bottom: '125px', right: '80px' }}
                click={setPopup}
                clickValue={true}
            >
                Подробнее
            </PinkBtn>
            <div className={styles.imgContainer}>
                <img src={bottlePic} alt='bottle' className={styles.bottle} />
                <img src={blueBubblePic} alt='bubble' className={styles.blueBubble} />
                <img src={lightblueBubblePic} alt='bubble' className={styles.lightblueBubble1} />
                <img src={lightblueBubblePic} alt='bubble' className={styles.lightblueBubble2} />
                <img src={lightblueBubblePic} alt='bubble' className={styles.lightblueBubble3} />
                <img src={lightblueBubblePic} alt='bubble' className={styles.lightblueBubble4} />
                <img src={pinkBubblePic} alt='bubble' className={styles.pinkBubble1} />
                <img src={pinkBubblePic} alt='bubble' className={styles.pinkBubble2} />
                <img src={redBubblePic} alt='bubble' className={styles.redBubble} />
            </div>
        </div>
    )
}

export default BrandPage
