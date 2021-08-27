import React from 'react'
import styles from './Pagination.module.scss'

// Передаем позицию в качестве объекта с полями top/bottom, left/right 

const Pagination = ({ position, pageIndex, setPageIndex }) => {

    const next = () => {
        if (pageIndex === 1) {
            return
        }
        setPageIndex(pageIndex + 1)
    }

    const prev = () => {
        if (pageIndex === 0) {
            return
        }
        setPageIndex(pageIndex - 1)
    }

    return (
        <div className={styles.container} style={position}>
            <div className={styles.prevBtn} onClick={prev}></div>
            <div className={(pageIndex === 0 && styles.active) || styles.paginationItem} key={Math.random()}></div> {/*в качестве key передаем рандомное число, чтобы анимация срабатывала при каждой смене класса*/}
            <div className={(pageIndex === 1 && styles.active) || styles.paginationItem} key={Math.random()}></div>
            <div className={styles.nextBtn} onClick={next}></div>
        </div>
    )
}

export default Pagination
