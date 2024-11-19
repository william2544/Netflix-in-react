import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import styles from './Footer.module.css'
export default function Footer() {
    return(
        <div className={styles['footer']}>
            <div className={styles["footer-icons"]}>
                <img src={facebook_icon} alt="facebook_icon" />
                <img src={instagram_icon} alt='instagram_icon' />
                <img src={twitter_icon} alt="twitter_icon" />
                <img src={youtube_icon} alt="youtube_icon" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Centre</li>
                <li>Gift Cards</li>
                <li>Media Centre</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Contact Us</li>
            </ul>
            <p className={styles['copy-right']}>@1997-2024 Netflix, Inc.</p>
        </div>
    )
};
