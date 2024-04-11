"use client"
import React, { useState } from 'react'
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from '@/lib/hooks';
import { logOutSearch, setSearchKey } from '@/lib/features/searchKeySlice';
import { useDispatch } from 'react-redux';
import { logOutUser } from '@/lib/features/authSlice';
function Navbar({searchKey}) {
    const dispatch = useDispatch();
const [display, setDisplay ] = useState(false);
    const handleInputChange = (e) => {
      const value = e.target.value;
      dispatch(setSearchKey(value));
    };
    const handleLogOut = (e) => {
      setDisplay(!display)
    };
    const handleLogOutUser = (e) => {
    dispatch(logOutUser())
    dispatch(logOutSearch())
    };

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
          {searchKey ? <input type='text' value={searchKey}   className={styles.search_input}/> : ""}

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
          onClick={handleLogOut}
        />

<div  className={display ? `${styles.logout_dropdown} `  :styles.logout_dropdown_hide}>
    <p onClick={handleLogOutUser} >Log out</p>
  </div>
         </div>  :  <Link  href="/sign-in"
     
     style={{ color: "transparent", textDecoration:"none",marginLeft:"auto" }}>
         <p className={styles.loginText}>Login</p> </Link>
    }
    </div>
    
 

   

  </div>
  )
}

export default Navbar