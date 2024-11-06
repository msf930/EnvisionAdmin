import styles from './ScheduleButton.module.css';



const ScheduleButton = ({isCenter}) => {

        return(
            <div className={isCenter ? `${styles.btnContCenter}` : `${styles.btnContStart}`}>
                <a href="https://www.google.com" target="_blank">
                    <button className={styles.btn}>Schedule Your Free Consultation</button>
                </a>
            </div>
        )
}

export default ScheduleButton;