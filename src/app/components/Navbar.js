"use client"
import React from 'react'
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from '@/lib/hooks';
function Navbar({searchKey}) {
  
    const profileData =useAppSelector((state) => state.auth);
    const username = profileData?.user?.username;
    
      
  return (
<div className={searchKey ? `${styles.description} ${styles.description_bg}`  :styles.description}>

    <div className={styles.input_description}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/logo.svg"
          alt="logo Logo"
          className={styles.vercelLogo}
          width={150}
          height={34}
          priority
        />
      </a>
          {searchKey? <input type='text' value={searchKey} className={styles.search_input}/> : ""}

          {
         username && username ? <div className={styles.welcome}>
            <p>Welcome</p>
             <Image
          src="/welcomeImage.svg"
          alt="logo Logo"
          className={styles.vercelLogo}
          width={36}
          height={36}
          priority
        />
         </div>  :  <p className={styles.loginText}>Login</p> 
    }
    </div>


   

  </div>
  )
}

export default Navbar