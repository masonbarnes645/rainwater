import styles from './CustomButton.module.css'

export default function CustomButton({ Icon }) {


    return (
        <div className={styles.circle}>
            {Icon && <Icon className={styles.icon} />}
        </div>
    )
}