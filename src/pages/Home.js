import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Bootstrap is loaded globally from CDN, so it's on window.bootstrap
    if (window.bootstrap) {
      const carouselEl = document.getElementById("heroCarousel");
      if (carouselEl) {
        const carousel = new window.bootstrap.Carousel(carouselEl, {
          interval: 3000, // 3s autoplay
          wrap: true, // infinite loop
          pause: false, // don’t pause on hover
        });

        // force autoplay cycle to start immediately
        carousel.cycle();
      }
    }
  }, []);
  const slides = [
    {
      img: "/assets/HeroSlider/hero-1.jpeg",
      text: "Naal Foundation supports deserving students through the Sir Thoraji Bapurao Chavan Scholarship, honoring his legacy and promoting excellence.",
    },
    {
      img: "/assets/HeroSlider/hero-2.jpeg",
      text: "We promote tree plantation drives and donated pump starter board covers to the Gram Panchayat for community benefit.",
    },
    {
      img: "/assets/HeroSlider/hero-3.jpeg",
      text: "Naal Foundation ensures clean drinking water for school students, supporting their health and learning environment.",
    },
    {
      img: "/assets/HeroSlider/hero-5.jpeg",
      text: "Naal Foundation contributed ₹1 lakh to ambulance services, ensuring timely medical care for the community.",
    },
    {
      img: "/assets/HeroSlider/hero-4.jpeg",
      text: "We provided financial assistance to families of farmers who lost their lives to suicide, offering relief in tough times.",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade  "
        data-bs-ride="carousel"
        data-bs-interval="8000"
        data-bs-wrap="true"
      >
        {/* Indicators */}
        <div className="carousel-indicators hide">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="carousel-overlay"></div>
              <img
                src={slide.img}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />

              <div className="custom-caption" style={{ maxWidth: "550px" }}>
                <div className="contet-hero-slider">{slide.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev carousel-control"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel-control"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About Us Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 margin-bottom-mobile ">
              <div>
                <h2 className="section-title">About Us</h2>
                <p className="text-start">
                  Naal Foundation, established on 2nd March 2021 at Ujani, is a
                  charitable organization dedicated to working at the village
                  level. The foundation was created with the vision of uplifting
                  rural communities through education, environment, healthcare,
                  and farmer welfare.
                </p>
                <p>
                  One of its prime initiatives is providing scholarships to
                  deserving and hardworking students, helping them shape a
                  brighter future. Through the First Headmaster of{" "}
                  <b> Shri Ganesh Vidyalaya, Sir Thoraji Bapurao Chavan </b>{" "}
                  Scholarship, we honor his legacy and inspire educational
                  excellence.
                </p>

                <p>
                  It also promotes environmental conservation through regular
                  tree plantation drives. To support farmers, the foundation
                  provides assistance and guidance aimed at strengthening
                  agricultural sustainability. In the field of healthcare, it
                  extends ambulance services and conducts awareness programs to
                  ensure timely support and better well-being for villagers.
                  Through these efforts, Naal Foundation continues to serve
                  society with compassion, commitment, and a spirit of selfless
                  service.
                </p>

                {/* <p className="text-start">
                  One of its prime initiatives is providing scholarships to
                  deserving and hardworking students, helping them shape a
                  brighter future. It also promotes environmental conservation
                  through regular tree plantation drives. To support farmers,
                  the foundation offers help and guidance aimed at improving
                  agricultural sustainability. In the field of healthcare, it
                  organizes medical services and awareness programs to ensure
                  better well-being for villagers. Through these efforts, Naal
                  Foundation continues to serve society with compassion,
                  commitment, and a spirit of selfless service.
                </p> */}

                <div>
                  <Link className="no-decration" to="/About">
                    <button className="dark-button ">
                      Learn More <i class="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="about-img-wrapper main-img">
                  <img
                    src="/assets/image1about.jpeg"
                    alt="Gallery 1"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="about-img-wrapper">
                      <img
                        src="/assets/image2about.jpeg"
                        alt="Gallery 2"
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-img-wrapper">
                      <img
                        src="/assets/image3about.jpeg"
                        alt="Gallery 3"
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section id="mission-vision" className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title"> Mission & Vision</h2>
          <div className="row">
            <div className="col-md-6 margin-bottom-mobile">
              <div className="mission-card">
                <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                  <div>
                    <i className="fas fa-bullseye mission-icon"></i>
                  </div>

                  <div className="text-start">
                    <div className="miss-vission-text">Our Mission</div>
              
                  </div>
                </div>

                <p className="text-start">
                  Our mission is to bring positive change in rural communities
                  through education, health, environment, and farmer welfare. We
                  provide scholarships and guidance to deserving students, and
                  offer ambulance services to ensure timely access to
                  healthcare. Through tree plantation and awareness drives, we
                  work to protect the environment. We support farmers to
                  strengthen agriculture and improve their well-being. With
                  dedication and compassion, we strive to uplift villages,
                  reduce inequalities, and build a sustainable future.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vision-card">
                <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                  <div>
                    <i className="fas fa-eye mission-icon"></i>
                  </div>

                  <div className="text-start">
                    <div className="miss-vission-text">Our Vision</div>
                  
                  </div>
                </div>
                <p className="text-start">
                  Our vision is to build a self-reliant and progressive rural
                  society where education, health, environment, and agriculture
                  grow together sustainably. We aim to empower underprivileged
                  students with scholarships and guidance, while ensuring
                  healthier communities through accessible healthcare. By
                  promoting tree plantation and environmental awareness, we work
                  towards greener villages. Supporting farmers remains at the
                  heart of strengthening rural India. With compassion and
                  equality, we aspire to create opportunities for all and a
                  brighter future for generations ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

<section id="mission-vision" className="section-padding bg-light">
  <div className="container">
    <h2 className="section-title"> Mission & Vision</h2>
    <div className="row">
      
      {/* Mission Card */}
      <div className="col-md-6 margin-bottom-mobile">
        <div className="mission-card">
          <div className="card-image">
            <img src="/assets/mission.jpeg" className="imag-mission-vission img-fluid" />
          </div>
          <div className=" text-start padding-boday-vission">
            <ul className="text-dark">
              <li>Education & Scholarships – Providing scholarships and guidance to deserving students.</li>
              <li>Healthcare Access – Offering ambulance services and timely medical support.</li>
              <li>Environment Protection – Promoting tree plantation and awareness drives.</li>
              <li>Farmer Welfare – Supporting farmers to strengthen agriculture and improve livelihoods.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision Card */}
      <div className="col-md-6">
        <div className="vision-card">
          <div className="card-image">
            <img src="/assets/vission.jpeg" className="imag-mission-vission img-fluid" />
          </div>
          <div className=" text-start padding-boday-vission">
            <ul className="text-dark ">
              <li>Progressive Rural Society – Building self-reliant, sustainable villages.</li>
              <li>Student Empowerment – Guiding underprivileged students with scholarships.</li>
              <li>Health & Environment – Ensuring healthcare and greener communities.</li>
              <li>Agriculture Strength – Supporting farmers at the core of rural growth.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




    
      {/* Problems We Solve Section */}
      {/* <section id="problems" className="section-padding">
        <div className="container">
          <h2 className="section-title">How We Solve</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="problem-card">
                <i className="fas fa-graduation-cap problem-icon"></i>
                <h3>Education</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="problem-card">
                <i className="fas fa-heartbeat problem-icon"></i>
                <h3>Healthcare</h3>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="problem-card">
                <i className="fas fa-leaf problem-icon"></i>
                <h3>Agriculture</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Preview Section */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="gallery-item-wrapper">
                <img
                  src="/assets/gallery1.jpeg"
                  alt="Gallery 1"
                  className="img-fluid rounded gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item-wrapper">
                <img
                  src="/assets/gallery2.jpeg"
                  alt="Gallery 2"
                  className="img-fluid rounded gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item-wrapper">
                <img
                  src="/assets/gallery3.jpeg"
                  alt="Gallery 3"
                  className="img-fluid rounded gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item-wrapper">
                <img
                  src="/assets/gallery4.jpeg"
                  alt="Gallery 4"
                  className="img-fluid rounded gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item-wrapper">
                <img
                  src="/assets/gallery5.jpeg"
                  alt="Gallery 5"
                  className="img-fluid rounded gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item-wrapper">
                <img
                  src="/assets/gallery6.jpeg"
                  alt="Gallery 6"
                  className="img-fluid rounded gallery-img"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/gallery" className="btn btn-primary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section id="" className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="impact-card">
                <h3 className="impact-number">375 +</h3>
                <p>Patients benefited through ambulance services</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="impact-card">
                <h3 className="impact-number">450 +</h3>
                <p>Students provided with clean drinking water facilities</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="impact-card">
                <h3 className="impact-number">70 +</h3>
                <p>Trees planted through plantation drives</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="impact-card">
                <h3 className="impact-number">15 +</h3>
                <p>Scholarships and rewards given to students</p>
              </div>
            </div>
            {/* <div className="col-md-2">
              <div className="impact-card">
                <h3 className="impact-number">1 </h3>
                <p> Farmer’s family supported with financial assistance in a suicide case</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}

      {/* <section id="impact" className="section-padding">
        <div className="container">
         
          <div className="row ">
               <div className="col-lg-6">
                <div className='row'>
                         <div className='col-md-6 '>
                            <div className='mb-2'>
                                <img src="https://placehold.co/600x400" alt="Gallery 1" className="img-fluid rounded" />
                            </div>
                            <div>
                              <img src="https://placehold.co/600x300" alt="Gallery 1" className="img-fluid rounded" />
                            </div>
                      </div>
                      <div className='col-md-6 '>
                          <div  className='mb-2'>
                              <img src="https://placehold.co/600x300" alt="Gallery 1" className="img-fluid rounded" />
                            </div>
                            <div>
                                <img src="https://placehold.co/600x400" alt="Gallery 1" className="img-fluid rounded" />
                            </div>
                          
                      </div>
                  </div>


            </div>
            <div className="col-lg-6 ">
              <div>
                    <h2 className="section-title">Our Impact</h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                 <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div>
            
              </div>
              </div>
             
            </div>
         
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-intro mb-4">
            Have questions? We'd love to hear from you. Send us a message and
            we'll get back to you as soon as possible.
          </p>
          <div className="d-flex justify-content-center gap-4 d-none d-lg-flex ">
            <div className="quick-contact">
              <i className="fas fa-phone me-2"></i>
              <span clas>+91 98814 49538</span>
            </div>
            <div className="quick-contact">
              <i className="fas fa-envelope me-2"></i>
              <span>naal.131020@gmail.com</span>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-4 flex-column d-lg-none">
            <div className="quick-contact">
              <i className="fas fa-phone me-2"></i>
              <span clas>+91 98814 49538</span>
            </div>
            <div className="quick-contact">
              <i className="fas fa-envelope me-2"></i>
              <span>naal.131020@gmail.com</span>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
