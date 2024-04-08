import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useAppSelector } from "@/lib/hooks";
import { firestore } from "@/lib/firebase/config";
import styles from "../page.module.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CreateReviewModal({ openModal, setIsOpen, searchKey }) {
  const profileData = useAppSelector((state) => state.auth);
  const userId = profileData?.user?.userId;
  const [reviewText, setReviewText] = useState("");

  const [amenities, setAmenities] = useState([]);
  const [userData, setUserData] = useState();
  const [rating, setRating] = useState(0);
  const [display, setDisplay] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const handleDisplayChange = () => {
    setDisplay(!display);
  };
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  console.log(rating, "rating");
  function closeModalModal() {
    setIsOpen(!openModal);
  }
  const router = useRouter();
  useEffect(() => {
    const findUserByUserId = async (userId) => {
      if (profileData) {
        try {
          const usersRef = collection(firestore, "users");
          const q = query(usersRef, where("userId", "==", userId));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((docSnapshot) => {
            const userId = docSnapshot.id;
            const userData = docSnapshot.data();
            console.log("User ID:", userId);
            console.log("User Data:", userData);
            setUserData(userData);
          });
        } catch (error) {
          console.error("Error searching for user:", error);
        }
      }
    };

    findUserByUserId(userId);
  }, [profileData]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      router.push("/sign-in");
      return;
    }

    try {
      await addDoc(collection(firestore, "reviews"), {
        area: searchKey,
        amenities: amenities,
        text: reviewText,
        rating: rating,
        user: userData,
        anonymous: anonymous,
        createdAt: new Date(),
      });

      setReviewText("");
      setRating(0);
      setAmenities([]);
      closeModalModal();
      console.log("Review submitted successfully");
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAmenities([...amenities, value]); // Add amenity if checked
    } else {
      setAmenities(amenities.filter((amenity) => amenity !== value)); // Remove amenity if unchecked
    }
  };
  //
  const isDataComplete =
    userId && reviewText && rating > 0 && amenities.length > 0;
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModalModal}
        className={styles.custom_styles}
        contentLabel="Review Modal"
      >
        <div className={styles.create_review_form}>
          <p className={styles.create_review_header}>Review Location</p>
          <p className={styles.create_review_subheader}>{searchKey}</p>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div className={styles.amenities_container_overall}>
              {/* Use checkboxes for selecting amenities */}
              <div className={styles.amenities_container}>
                {" "}
                <div className={styles.amenities_dropdown_text}>
                  Select Amenities:
                </div>
                <img
                  src="./arrowDown.svg"
                  alt="image"
                  onClick={handleDisplayChange}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div
                className={
                  display
                    ? `${styles.amenities_dropdown}`
                    : styles.amenities_dropdown_none
                }
              >
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="school"
                      checked={amenities.includes("school")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    School
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="hospital"
                      checked={amenities.includes("hospital")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Hospital
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="office"
                      checked={amenities.includes("office")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Office
                  </label>
                </div>
              </div>

              {/* Add more checkboxes for other amenities as needed */}
            </div>
            <div>
              {/* Add a component for selecting rating */}
              <p className={styles.create_review_form_rate}>Rate Location</p>

              <Rating
                initialRating={rating}
                emptySymbol={
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: " #FFC70066",

                      fontSize: "24px",
                      opacity: 0.4,
                    }}
                  />
                }
                fullSymbol={
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: " #FFC70066",

                      fontSize: "24px",
                      opacity: 1,
                    }}
                  />
                }
                onChange={handleRatingChange}
                style={{ marginBottom: "1rem" }}
              />
            </div>

            <p className={styles.create_review_form_write}>Write Review</p>
            <textarea
              value={reviewText}
              className={styles.create_review_form_textarea}
              rows={10}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
            ></textarea>
            <div className={styles.create_review_form_anonymous}>
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
              />
              <p className={styles.create_review_form_anonymous_text}>
                Post as Anonymous
              </p>
            </div>
            <div
              className={styles.create_review_form_buttons}
             
            >
              <button
                className={styles.create_review_form_buttons_submit}
                style={{
                    opacity: isDataComplete ? "1" : "0.5",
                    pointerEvents: isDataComplete ? "auto" : "none",
                  }}
                type="submit"
              >
                Submit Review
              </button>
              <button
                onClick={closeModalModal}
                className={styles.create_review_form_buttons_cancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default CreateReviewModal;
