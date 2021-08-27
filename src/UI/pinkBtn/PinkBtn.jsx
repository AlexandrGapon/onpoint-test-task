import React from 'react'
import styles from './PinkBtn.module.scss'

// В кнопку передаем символ в виде ссылки на изображение для черного кружка и позицию в качестве объекта с полями top/bottom right/left

const PinkBtn = ({ char, position, children, click, clickValue }) => {
    return (
        <div className={styles.btn} style={position} onClick={() => {click(clickValue)
            console.log('click')}}>
            <div className={styles.eclipse}>
                <img className={styles.char} src={char} alt='btn_char' />
            </div>
            <span className={styles.text}>{children}</span>
        </div>
    )
}

export default PinkBtn
