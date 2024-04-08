import React from 'react';

const HeroCard = ({ name, subheader, location, text, likes, dislikes, comments, amenity }) => {
  return (
    <div className={styles.home_card_overall}>
      <div className={styles.hero_card}>
        <div className={styles.hero_card_header_container}>
          <div className={styles.hero_card_header_image_container}>
            <img src="./avatar.svg" className={styles.hero_card_header_image} alt="image" />
            <div className={styles.hero_card_header_name_container}>
              <p className={styles.hero_card_header_image_header}>{name}</p>
              <p className={styles.hero_card_header_image_subheader}>{subheader}</p>
            </div>
          </div>
          <div className={styles.hero_card_header_location_container}>
            <p className={styles.hero_card_header_location_header}>{location}</p>
            <div className={styles.hero_card_header_location_image}>
              <img src="./ratings.svg" alt="image" />
            </div>
          </div>
        </div>
        <div className={styles.hero_card_body_text}>
          {text}
        </div>
        <div className={styles.hero_card_footer}>
          <div className={styles.hero_card_footer_number_container}>
            <img src="./thumbsUp.svg" alt="image" style={{ marginBottom: "4px" }} />
            <p className={styles.hero_card_footer_number}>{likes}</p>
            <img src="./thumbsDown.svg" alt="image" />
            <p className={styles.hero_card_footer_number}>{dislikes}</p>
            <img src="./comment.svg" alt="image" />
            <p className={styles.hero_card_footer_number}>{comments}</p>
          </div>
          <div className={styles.hero_card_footer_amenity}>
            <p className={styles.hero_card_footer_amenity_text}>{amenity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroCard