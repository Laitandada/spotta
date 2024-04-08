"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../page.module.css";
import CreateReviewModal from "../components/CreateReviewModal";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase/config";
import { formatDistanceToNow } from 'date-fns';
import { useAppSelector } from "@/lib/hooks";
function Reviews() {

  const searchKey =useAppSelector((state) => state.search.searchKey);

  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'reviews'));
        const reviewsData = [];
        querySnapshot.forEach((doc) => {
          reviewsData.push({ id: doc.id, ...doc.data() });
        });
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews: ', error);
      }
    };

    fetchReviews();
  }, []);
console.log(reviews,"reviews")
  function openModal() {
    setIsOpen(true);
  }

 
 
  const amenities = [
    "Swimming Pool",
    "Gym",
    "Spa",
    "Tennis Court",
    "Restaurant",
    "Bar",
    "Concierge Service",
    "Free Wi-Fi",
    "Parking",
    "Room Service",
    "Restaurant",
    "Bar",
    "Concierge Service",
    "Free Wi-Fi",
    "Parking",
    "Room Service",
    "Room Service",
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === amenities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? amenities.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.auth_overall}>
      <Navbar searchKey={searchKey} />
      <div className={styles.review_location_container}>
        <div className={styles.review_location_texts}>
          <p className={styles.review_location_texts_header}>{searchKey}</p>
          <p className={styles.review_location_texts_subheader}>
            "450" , Reviews (People are raving about the selected location)
          </p>
        </div>
        <div className={styles.review_location_leave_container}>
          <button
            className={styles.auth_form_button}
            style={{ marginTop: "0px" }}
            onClick={openModal}
          >
            Leave a review
          </button>
          <div className={styles.review_location_leave_container_Box}>
            <img src="./bookmark.svg" alt="images for review" />
          </div>
          <div className={styles.review_location_leave_container_Box}>
            <img src="./share.svg" alt="images for review" />
          </div>
        </div>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carousel_box}>
          <div
            className={styles.carousel_items}
            style={{ transform: `translateX(${currentIndex * 1}%)` }}
          >
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.carousel_item}>
                {amenity}
              </div>
            ))}
          </div>
          <button className={styles.arrow} onClick={prevSlide}>
            {"<"}
          </button>
          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={nextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
       {
        reviews.length > 0 ? ( <div className={styles.review_body_overall}>
          {" "}
          <div className={styles.review_body}>
          <div className={styles.review_body_reviews}>
          {reviews.map((review, index) => (
          <div  key={index}className={styles.review_card_overall} >
                <div className={styles.hero_card} style={{paddingBottom:"1rem", borderBottom:"1px solid #eee"}}>
                  <div className={styles.hero_card_header_container}>
                    <div className={styles.hero_card_header_image_container}>
                      <img
                        src="./avatar.svg"
                        className={styles.hero_card_header_image}
                        alt="image"
                      />
                      <div className={styles.hero_card_header_name_container} style={{flexDirection:'row',alignItems:'center',gap:"10px"}}>
                        <p className={styles.hero_card_header_image_header}  style={{fontSize:"16px",lineHeight:"16px",fontFamily:"Inter", fontWeight:"400"}}>
                          {review.user.username}
                        </p>
                        <p className={styles.hero_card_header_image_subheader}  style={{fontSize:"16px",lineHeight:"16px",fontFamily:"Inter", fontWeight:"400",opacity:"0.5"}}>
                        {formatDistanceToNow(new Date(review.createdAt.seconds * 1000), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                    <div className={styles.hero_card_header_location_container} style={{width:"auto",flexDirection:'row',alignItems:'center'}}>
                    <div className={styles.hero_card_header_location_image} style={{height:"auto"}}>
                        <img src="./singleStar.svg" alt="image" style={{height:"17px"}} />
                      </div>
                      <p className={styles.hero_card_header_location_header} style={{fontSize:"16px",lineHeight:"16px",fontFamily:"Inter", fontWeight:"400"}} >
                      {review.rating}.0
                      </p>
                     
                    </div>
                  </div>
                  <div
                    className={styles.hero_card_body_text}
                    style={{fontSize:"20px",lineHeight:"24px",fontFamily:"Inter", fontWeight:"200"}}
                  >
                  {review.text}
                  </div>
                  <div className={styles.hero_card_footer}>
  
                    <div className={styles.hero_card_footer_number_container} style={{gap:"10px",marginTop:"0.5rem"}}>
                    <img src="./thumbsUpReview.svg" alt="image" style={{marginBottom:"4px"}} />
                      <p className={styles.hero_card_footer_number} style={{color:"#0D2159", fontSize:'14px'}}>24</p>
                    <img src="./thumbsDownReview.svg" alt="image" />
                      <p className={styles.hero_card_footer_number} style={{color:"#0D2159", fontSize:'14px'}}>02</p>
                    <img src="./commentsReview.svg" alt="image" />
                      <p className={styles.hero_card_footer_number} style={{color:"#0D2159", fontSize:'14px'}}>125</p>
  
                    </div>
  
                   
                  </div>
                </div>
              </div>
          ))}
          </div>
          <div className={styles.review_body_images}>
          <img src="./placeHolder.svg" alt="images for review" />
          <img src="./placeHolder.svg" alt="images for review" />
          <img src="./placeHolder.svg" alt="images for review" />
          <img src="./placeHolder.svg" alt="images for review" />
          </div>
          </div>
        </div>): <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%",height:"60%"}}>     <img src="./emptyState.svg" alt="images for review" /> </div>
       }
     
      <CreateReviewModal openModal={modalIsOpen} setIsOpen={setIsOpen} searchKey={searchKey}/>
    </div>
  );
}

export default Reviews;
