import React from 'react'
import styles from './HomeBtn.module.scss'

// В кнопку передаем позицию в качестве объекта с полями top/bottom right/left

const HomeBtn = ({ position, ...props }) => {
    return (
        <div className={styles.homeBtn} style={position} {...props}>
        </div>
    )
}

export default HomeBtn
