import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [filter, setFilter] = useState("education");
  const [currentImage, setCurrentImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "education",
      image: "/assets/Education/gallery-education-1.jpeg",
    },

    {
      id: 2,
      category: "Agriculture",
      image: "/assets/Agriculture/gallery-argruculture-1.jpeg",
    },
    {
      id: 3,
      category: "Healthcare",
      image: "/assets/Healthcare/gallery-healthcare-2.jpeg",
    },
    {
      id: 4,
      category: "education",
      image: "/assets/Education/gallery-education-2.jpeg",
    },
    {
      id: 5,
      category: "Agriculture",
      image: "/assets/Agriculture/gallery-argruculture-2.jpeg",
    },
    {
      id: 6,
      category: "Healthcare",
      image: "/assets/Healthcare/gallery-healthcare-1.jpeg",
    },
    {
      id: 7,
      category: "Environment",
      image: "/assets/Environment/gallery-enviroment-1.jpeg",
    },
    {
      id: 8,
      category: "education",
      image: "/assets/Education/gallery-education-3.jpeg",
    },
    {
      id: 9,
      category: "Environment",

      image: "/assets/Environment/gallery-enviroment-2.jpeg",
    },
    {
      id: 10,
      category: "education",
      image: "/assets/Education/gallery-education-4.jpeg",
    },

    {
      id: 11,
      category: "education",
      image: "/assets/Education/gallery-education-5.jpeg",
    },
    {
      id: 12,
      category: "education",
      image: "/assets/Education/gallery-education-6.jpeg",
    },
    {
      id: 13,
      category: "education",
      image: "/assets/Education/gallery-education-7.jpeg",
    },
    {
      id: 14,
      category: "education",
      image: "/assets/Education/gallery-education-8.jpeg",
    },
    {
      id: 15,
      category: "education",
      image: "/assets/Education/gallery-education-9.jpeg",
    },
    {
      id: 16,
      category: "education",
      image: "/assets/Education/gallery-education-10.jpeg",
    },
    {
      id: 17,
      category: "education",
      image: "/assets/Education/gallery-education-11.jpeg",
    },
    {
      id: 18,
      category: "education",
      image: "/assets/Education/gallery-education-12.jpeg",
    },
    {
      id: 19,
      category: "education",
      image: "/assets/Education/gallery-education-13.jpeg",
    },
    {
      id: 20,
      category: "education",
      image: "/assets/Education/gallery-education-14.jpeg",
    },
    {
      id: 21,
      category: "education",
      image: "/assets/Education/gallery-education-15.jpeg",
    },
    {
      id: 22,
      category: "education",
      image: "/assets/Education/gallery-education-16.jpeg",
    },
    {
      id: 23,
      category: "education",
      image: "/assets/Education/gallery-education-17.jpeg",
    },
    {
      id: 24,
      category: "education",
      image: "/assets/Education/gallery-education-18.jpeg",
    },
    {
      id: 25,
      category: "education",
      image: "/assets/Education/gallery-education-19.jpeg",
    },
    {
      id: 26,
      category: "education",
      image: "/assets/Education/gallery-education-20.jpeg",
    },
    {
      id: 27,
      category: "education",
      image: "/assets/Education/gallery-education-21.jpeg",
    },
    {
      id: 28,
      category: "education",
      image: "/assets/Education/gallery-education-22.jpeg",
    },
  ];

  const handleImageClick = (item) => {
    setCurrentImage(item);
  };

  const filteredItems =
    filter === "Education"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h1>Our Gallery</h1>
              <p className="lead">
                Inspiring moments from our journey of creating positive change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filter section-padding">
        <div className="container ">
          <div className="row filter-buttons ">
            <div className="col-md-12 d-none d-lg-flex d-flex align-items-center justify-content-center mb-4 ">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <button
                    className={`filter-btn ${
                      filter === "education" ? "active" : ""
                    }`}
                    onClick={() => setFilter("education")}
                  >
                    Education
                  </button>

                  <button
                    className={`filter-btn ${
                      filter === "Healthcare" ? "active" : ""
                    }`}
                    onClick={() => setFilter("Healthcare")}
                  >
                    Healthcare
                  </button>

                  <button
                    className={`filter-btn ${
                      filter === "Environment" ? "active" : ""
                    }`}
                    onClick={() => setFilter("Environment")}
                  >
                    Environment
                  </button>

                  <button
                    className={`filter-btn ${
                      filter === "Agriculture" ? "active" : ""
                    }`}
                    onClick={() => setFilter("Agriculture")}
                  >
                    Farmers
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-12 margin-minus-gallery d-flex d-lg-none align-items-center justify-content-center mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <div className="mb-3">
                    <button
                      className={`filter-btn = ${
                        filter === "education" ? "active" : ""
                      }`}
                      onClick={() => setFilter("education")}
                    >
                      Education
                    </button>

                    <button
                      className={`filter-btn = ${
                        filter === "Healthcare" ? "active" : ""
                      }`}
                      onClick={() => setFilter("Healthcare")}
                    >
                      Healthcare
                    </button>
                  </div>

                  <button
                    className={`filter-btn ${
                      filter === "Environment" ? "active" : ""
                    }`}
                    onClick={() => setFilter("Environment")}
                  >
                    Environment
                  </button>

                  <button
                    className={`filter-btn ${
                      filter === "Agriculture" ? "active" : ""
                    }`}
                    onClick={() => setFilter("Agriculture")}
                  >
                    Farmers
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              {filter === "education" && (
                <div className="">
                  <div className="blue-heading-gallery">Education</div>
                  <p>
                    We support bright and deserving students by providing
                    scholarships and resources, helping them pursue their dreams
                    without financial barriers. Through the
                    <b>
                      {" "}
                      First Headmaster of Shri Ganesh Vidyalaya,Sir Thoraji
                      Bapurao Chavan Scholarship
                    </b>
                    , we honor his legacy and encourage educational excellence.
                    Our goal is to nurture knowledge, confidence, and
                    opportunities for a better future.
                  </p>
                </div>
              )}

              {filter === "Agriculture" && (
                <div className="">
                  <div className="blue-heading-gallery">Farmers</div>
                  <p>
                    We extend financial support to farmers in need, helping them
                    overcome challenges and sustain their livelihoods. Our focus
                    is on empowering the farming community and strengthening the
                    backbone of our village economy.
                  </p>
                </div>
              )}

              {filter === "Healthcare" && (
                <div className="">
                  <div className="blue-heading-gallery">Healthcare</div>
                  <p>
                    We are committed to improving community health by providing
                    essential services such as ambulance support and access to
                    clean drinking water. Our efforts focus on ensuring timely
                    medical help and promoting overall well-being.
                  </p>
                </div>
              )}

              {filter === "Environment" && (
                <div className="">
                  <div className="blue-heading-gallery">Environment</div>
                  <p>
                    We actively engage in tree plantation drives to create a
                    greener tomorrow and raise awareness about sustainability.
                    Our efforts aim to protect nature and promote a healthier
                    environment for future generations.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="row g-4">
            {filteredItems.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div
                  className="gallery-item"
                  onClick={() => handleImageClick(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid border-image"
                  />
                  <div className="gallery-overlay">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="gallery-cta">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h2>Be Part of Our Story</h2>
              <p className="lead">Join us in making a difference. Your support can help us create more inspiring moments.</p>
              <div className="cta-buttons">
                <Link to="/donate" className="btn btn-primary me-3">Donate Now</Link>
                <button className="btn btn-outline-primary">Volunteer With Us</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Image Modal */}
      <div
        className={`modal fade ${currentImage ? "show" : ""}`}
        id="imageModal"
        tabIndex="-1"
        style={{ display: currentImage ? "block" : "none" }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={() => setCurrentImage(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={currentImage?.image}
                alt={currentImage?.title}
                className="img-fluid"
              />
              <p className="mt-3">{currentImage?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
