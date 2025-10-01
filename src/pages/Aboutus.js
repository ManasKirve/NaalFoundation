import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  // Put this at the top of your file
  const members = [
    { initials: 'SD', name: 'Sachin Dhavan', position: 'Chairman' },
    { initials: 'SM', name: 'Somnath Mukade', position: 'Secretary' },
    { initials: 'PS', name: 'Prashant Shinde', position: 'Treasurer' },
    { initials: 'PC', name: 'Prashant Chavan', position: 'Member' },
    { initials: 'KB', name: 'Kailashkumar Bardapure', position: 'Member' },
    { initials: 'SS', name: 'Sachin Salgare', position: 'Member' },
    { initials: 'MM', name: 'Mahesh Mule', position: 'Member' },
    { initials: 'DP', name: 'Dadasaheb Patil', position: 'Member' },
    { initials: 'AS', name: 'Abdulla Sherikar', position: 'Member' },
    { initials: 'SK', name: 'Sopan Kage', position: 'Member' },
    { initials: 'DJ', name: 'Dhanraj Jadhav', position: 'Member' },
    { initials: 'SJ', name: 'Sanjay Joshi', position: 'Member' },
    { initials: 'GM', name: 'Girish Mahabole', position: 'Member' },
    { initials: 'SD', name: 'Sandeep Dhotare', position: 'Member' },
    { initials: 'RW', name: 'Rahul Waghe', position: 'Member' },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h1>About NAAL Foundation</h1>
              <p className="lead">Together for education, health, farmers, and the environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title text-start">Our Story</h2>
              <p>
                We completed our schooling at Shri Ganesh Vidyalaya, Ujani, and passed our 10th standard in two batches during the years 1998 and 1999. Since childhood, we have shared a strong bond of friendship and today, we are working across diverse sectors such as Legal, IT, Health, and Education. With a common vision to serve society, we came together during the challenging times of the COVID-19 pandemic and established the Naal Foundation on 2nd March 2021. The word Naal means "umbilical cord," symbolizing our deep-rooted connection with our village and the responsibility to contribute towards its development. Through this foundation, we aim to provide scholarships to bright and deserving students, offer ambulance services, support farmers financially, ensure clean drinking water for students, and participate in tree plantation drives to promote a greener environment.
              </p>
            </div>
            <div className="col-lg-6">
              <video className="img-fluid rounded shadow-lg" controls>
                <source src="/assets/videoaboutus.mp4" type="video/mp4" />
                <track src="/assets/videoaboutus.vtt" kind="subtitles" srclang="en" label="English" />
                Your browser does not support the video tag.
              </video>


            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="value-card ">
                <i className="fas fa-heart value-icon mt-2"></i>
                <h3 className='fw-semibold'>Compassion</h3>
                <p>We believe in caring for every individual with empathy and kindness. Our initiatives are driven by a genuine desire to uplift lives and spread hope.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="value-card">
                <i className="fas fa-chart-line value-icon mt-2"></i>
                <h3 className='fw-semibold'>Impact</h3>
                <p>Through our focused efforts, we aim to create meaningful changes that touch the lives of students, farmers, and the community at large.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="value-card">
                <i className="fas fa-users value-icon mt-2"></i>
                <h3 className='fw-semibold'>Community</h3>
                <p>Rooted in our village, we work hand in hand with people to build stronger bonds and foster collective growth for a better tomorrow.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="value-card">
                <i className="fas fa-star value-icon mt-2"></i>
                <h3 className='fw-semibold'>Excellence</h3>
                <p>We strive to deliver the highest standards in every initiative, ensuring sustainable development and long-lasting positive outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements section-padding">
        <div className="container">
          <h2 className="section-title text-start ">Our Founder Members</h2>
          <div className='row g-4 mt-3'>
            {members.map((member, index) => (
              <div key={index} className='col-md-4 mb-4 d-flex align-items-center justify-content-start'>

                <div className='d-flex align-items-center gap-4 justify-content-center'>
                  <div className=''>
                    <div className='circle-intial'>
                      <div className="text-inile">{member.initials}</div>
                    </div>
                  </div>
                  <div className=''>
                    <div className="members-text">{member.name}</div>
                    <div className='text-muted'>{member.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h2>Join Our Mission</h2>
              <p className="lead">Together, we can make a lasting difference in the lives of those who need it most. Join us in our mission to create positive change.</p>
              <div className="cta-buttons">

                <Link to="/donate" className="btn btn-primary">Make a Donation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
