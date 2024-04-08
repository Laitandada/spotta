"use client";
import { useState } from "react";


import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import styles from "../page.module.css";
import Link from "next/link";
import { auth, firestore } from "@/lib/firebase/config";

import { setUser } from "@/lib/features/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
const SignUp = () => {
 
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add validation for password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log({ res });

      // Save user data to Firestore
      await addDoc(collection(firestore, 'users'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
       userId : res?.user.uid
      });

      dispatch(setUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
       userId : res?.user.uid

      }));
      router.push("/");
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',

      });
      // Optionally, you can show a success message to the user
      console.log("successful");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.auth_overall}>
      <Navbar />
      <div className={styles.auth_form_overall}>
        <form className={styles.auth_form} onSubmit={handleSubmit}>
          <p className={styles.auth_form_header}>Sign Up</p>
          <div style={{display:'flex',justifyContent:"space-between",gap:"20px"}}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName} onChange={handleChange} 
            className={styles.auth_form_input}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName} onChange={handleChange} 
            className={styles.auth_form_input}
          />
          </div>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formData.username} onChange={handleChange} 
            className={styles.auth_form_input}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email} onChange={handleChange} 
            className={styles.auth_form_input}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password} onChange={handleChange} 
            className={styles.auth_form_input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword} onChange={handleChange} 
            className={styles.auth_form_input}
          />
          <button type="submit" className={styles.auth_form_button}>
            Signup
          </button>

          <p className="mt-10">Or</p>
          <div className={styles.auth_form_socials}>
            <img
              src="./Google.svg"
              className={styles.hero_card_header_image}
              alt="image"
            />
            <div className={styles.auth_form_socials_text}>
              Login with Google
            </div>
          </div>
          <div className={styles.auth_form_socials}>
            <img
              src="./facebook.svg"
              className={styles.hero_card_header_image}
              alt="image"
            />
            <div className={styles.auth_form_socials_text}>
              Login with Facebook
            </div>
          </div>
          <div className={styles.auth_form_socials}>
            <img
              src="./apple.svg"
              className={styles.hero_card_header_image}
              alt="image"
            />
            <div className={styles.auth_form_socials_text}>
              Login with Apple
            </div>
          </div>
          <p className={styles.auth_form_subHeadline}>Forgot your password</p>
          <p className={styles.auth_form_subHeadline}>
            Dont have an account{" "}
            <Link
              href="/sign-in"
              className={styles.auth_form_subHeadline_link}
              style={{ color: "#3366FF" }}
            >
              <p className={styles.auth_form_subHeadline_link}>Login in</p>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
