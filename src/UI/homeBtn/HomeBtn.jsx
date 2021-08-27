import React from 'react'
import styles from './HomeBtn.module.scss'

// В кнопку передаем позицию в качестве объекта с полями top/bottom right/left

const HomeBtn = ({ position, click }) => {
    return (
        <div className={styles.homeBtn} style={position} onClick={() => click(0)}>
        </div>
    )
}

export default HomeBtn
