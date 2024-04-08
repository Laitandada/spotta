"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import styles from "../page.module.css";
import Link from "next/link";
import { auth, firestore } from "@/lib/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { setUser } from "@/lib/features/authSlice";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("hello")

    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      if (res) {
        try {
          const usersRef = collection(firestore, "users");
        
          const q = query(usersRef, where("userId", "==", res?.user.uid));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((docSnapshot) => {
            // Assuming you have a 'userId' field in your user documents
            const userId = docSnapshot.id;
            const userData = docSnapshot.data();
            console.log(userData);
            // Do something with userData
            dispatch(setUser(userData));
          });
        } catch (error) {
          console.error("Error searching for user:", error);
        }
      }

      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(error);
      console.log("error");
    }
  };

  return (
    <div className={styles.auth_overall}>
      <Navbar />
      <div className={styles.auth_form_overall}>
        <form className={styles.auth_form} onSubmit={handleSignIn}>
          <p className={styles.auth_form_header}>Sign In</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.auth_form_input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.auth_form_input}
          />
          <button type="submit" className={styles.auth_form_button}>
            Log In
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
              href="/sign-up"
              className={styles.auth_form_subHeadline_link}
              style={{ color: "#3366FF" }}
            >
              <p className={styles.auth_form_subHeadline_link}>Sign up</p>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
