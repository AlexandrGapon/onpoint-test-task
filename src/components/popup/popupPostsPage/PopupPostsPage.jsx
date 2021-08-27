import React from 'react'
import styles from './PopupPostsPage.module.scss'

const PopupPostsPage = ({ posts }) => {
    return (
        <div className={styles.container}>
            {posts.map(p => (
                <div className={styles.popupPost} key={p.number}>
                    <p className={styles.postNumber}>{p.number}</p>
                    <p className={styles.postBody}>{p.body}</p>
                </div>
            )
            )}
        </div>
    )
}

export default PopupPostsPage
