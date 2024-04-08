import React from 'react'
import Image from "next/image";
import styles from "../page.module.css";
import Navbar from './Navbar';
function Homepage() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.home_section}>
        <div className={styles.home_section_one}>
          <p className={styles.home_heading}>
            Find a place you will love to live!
          </p>
          <p className={styles.home_subHeading}>
            See through the lenses of people who have lived or visited the
            neighbourhood you might have in mind.
          </p>
          <div className={styles.home_input_container}>
            <input type="text" placeholder='Enter Address' className={styles.home_input} />
          </div>
          <button className={styles.home_button}>Search</button>
        </div>
        <div className={styles.home_section_two}>
          <div className={styles.home_overlay}>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.home_card_overall}>
              <div className={styles.hero_card}>
                <div className={styles.hero_card_header_container}>
                  <div className={styles.hero_card_header_image_container}>
                    <img
                      src="./avatar.svg"
                      className={styles.hero_card_header_image}
                      alt="image"
                    />
                    <div className={styles.hero_card_header_name_container}>
                      <p className={styles.hero_card_header_image_header}>
                        James T.
                      </p>
                      <p className={styles.hero_card_header_image_subheader}>
                        5 months ago
                      </p>
                    </div>
                  </div>
                  <div className={styles.hero_card_header_location_container}>
                    <p className={styles.hero_card_header_location_header}>
                      Ikate, Lekki
                    </p>
                    <div className={styles.hero_card_header_location_image}>
                      <img src="./ratings.svg" alt="image" />
                    </div>
                  </div>
                </div>
                <div
                  className={styles.hero_card_body_text}
                >
                  There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.
                </div>
                <div className={styles.hero_card_footer}>

                  <div className={styles.hero_card_footer_number_container}>
                  <img src="./thumbsUp.svg" alt="image" style={{marginBottom:"4px"}} />
                    <p className={styles.hero_card_footer_number}>24</p>
                  <img src="./thumbsDown.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>02</p>
                  <img src="./comment.svg" alt="image" />
                    <p className={styles.hero_card_footer_number}>125</p>

                  </div>

                  <div className={styles.hero_card_footer_amenity}>
                  <p className={styles.hero_card_footer_amenity_text}>Traffic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Homepage