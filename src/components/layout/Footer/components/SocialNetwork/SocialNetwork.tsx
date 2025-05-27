import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

import styles from './SocialNetwork.module.scss'

const SocialNetwork = () => {
  return (
    <ul className={styles.socialNetwork}>
        <li>
        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'> 
        <RiFacebookFill className={styles.iconLink} />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
        <BsInstagram className={styles.iconLink} />
        </a>
      </li>
      <li>
        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' aria-label='Youtube'>
        <FaYoutube className={styles.iconLink} />
        </a>
      </li>
    </ul>
  )
}

export default SocialNetwork