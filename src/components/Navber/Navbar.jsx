import React, { useEffect, useRef } from "react"
import logo from '../../assets/logo.png'
import bell_icon from '../../assets/bell_icon.svg'
import search_icon from '../../assets/search_icon.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import styles from './Navbar.module.css'
import { logOut } from "../../firebase"
export default function Navbar() {
    const navRef=useRef()

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY >= 80) {
                navRef.current.classList.add(styles['nav-dark'])
            }else{
                navRef.current.classList.remove(styles['nav-dark'])
            }
        })
    },[])
    return(
        <div className={styles["navbar"]} ref={navRef}>
            <div className={styles["navbar-left"]}>
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Show</li>
                    <li>Movie</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by language</li>
                </ul>
            </div>
            <div className={styles["navbar-right"]}>
                <img src={search_icon} alt="search icon" className={styles["icons"]}/>
                <p>children</p>
                <img src={bell_icon} alt="" className={styles["icons"]}/>
                <div className={styles["navbar-profile"]}>
                    <img src={profile_img} alt="" className={`${styles.icons} ${styles.profile}`}/>
                    <img src={caret_icon} alt="" className={styles["icons"]}/>
                    <div className={styles["dropdown"]}>
                        <p onClick={()=>logOut()}>Sign out of netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
