import styles from "./Logo.module.css"

export function Logo() {
    return (
        <h1 className={styles.logo}>
            <span role="img" aria-label="metal hand emoji">🤘</span>
            <span role="img" aria-label="keyboard emoji">🎹</span>
            <span role="img" aria-label="notes emoji">🎶</span>
        </h1>
    )
}