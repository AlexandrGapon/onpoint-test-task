import React, { useState } from 'react'
import Pagination from '../../UI/pagination/Pagination'
import styles from './Popup.module.scss'
import PopupPostsPage from './popupPostsPage/PopupPostsPage'

const page1 = [
    { number: '01', body: 'Lorem ipsum dolor sit amet, consectetur adipsicing elit' },
    { number: '02', body: 'Faucibus pulvinar elementiem integer enim' },
    { number: '03', body: 'Faucibus pulvinar elementiem integer enim' },
]

const page2 = [
    { number: '04', body: 'Mi bibendum neque egestas congue quisque egestas diam' },
    { number: '05', body: 'Venenatis lectus magna fringilla urna' },
    { number: '06', body: 'Venenatis lectus magna fringilla urna' },
]

const Popup = ({ setPopup }) => {

    const [pageIndex, setPageIndex] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.closeBtn} onClick={() => setPopup(false)}></div>
                < div className={styles.titleContainer}>
                    <p>Преимущества</p>
                    <p className={styles.brand}>Brend<b>XY</b></p>
                </div>
                <PopupPostsPage posts={pageIndex === 0 ? page1 : page2} />
                <Pagination position={{ left: '210px', bottom: '35px' }} pageIndex={pageIndex} setPageIndex={setPageIndex} />
            </div>
        </div>
    )
}

export default Popup
