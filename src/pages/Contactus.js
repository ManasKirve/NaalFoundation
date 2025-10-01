import React, { useState } from "react";

const Contactus = () => {
  const [alert, setAlert] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "d1902df3-02e2-4209-9270-f012b6eba237");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setAlert("Your email has been sent successfully!");
        e.target.reset();
      } else {
        setAlert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setAlert("Error sending message. Please try again later.");
    }

    setTimeout(() => setAlert(""), 4000); // remove alert after 4s
  };
  const [activeKey, setActiveKey] = useState(null);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h1>Contact Us</h1>
              <p className="lead">
                We'd love to hear from you. Reach out to us for any queries or
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section section-padding">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-7 d-flex">
              <div className="contact-form-card w-100">
                <h2>Send Us a Message</h2>
                {alert && <div className="alert-contact-email">{alert}</div>}
                <form onSubmit={handleFormSubmit}>
                  <div className="row align-items-stretch">
                    <div className="col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control h-100"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control h-100"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              <div className="contact-info-wrapper w-100">
                <div className="contact-info-card">
                  <div className="d-flex align-items-start justify-content-center flex-column">
                    <div className="mb-4">
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-map-marker-alt info-icon"></i>
                        <h3>Our Address</h3>
                      </div>
                      <p>
                        At Post Ujani, Taluka Ausa,
                        <br />
                        Dist Latur, Maharashtra , 413520
                      </p>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-envelope info-icon"></i>
                        <h3>Email Address</h3>
                      </div>
                      <p>naal.131020@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fas fa-phone-alt info-icon"></i>
                    <h3>Phone Number</h3>
                  </div>
                  <ul className="phone-list">
                    <li>+91 98814 49538</li>
                    <li>+91 9881897421</li>
                    <li>+91 8975736969</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Find Us Here</h2>
            <p className="section-subtitle">
              Visit our office to learn more about our work and how you can
              contribute.
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.297847196241!2d76.5086409871582!3d18.390831200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83c28689b6c3%3A0xd6056e3bb63abd71!2sUjani%2C%20Maharashtra%20413520!5e0!3m2!1sen!2sin!4v1692026271955!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NAAL Foundation Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to commonly asked questions about our foundation.</p>
          </div>
          <div className="accordion" id="faqAccordion">
            {[
              {
                id: '1',
                question: 'How can I make a donation?',
                answer: 'You can make a donation through our website using the Donate button, or contact us directly for bank transfer details. We accept both one-time and recurring donations.'
              },
              {
                id: '2',
                question: 'How can I volunteer with NAAL Foundation?',
                answer: 'We welcome volunteers who share our vision. You can fill out the volunteer form on our website or contact us directly to discuss opportunities.'
              },
              {
                id: '3',
                question: 'Where does my donation go?',
                answer: 'Your donations directly support our various programs including education, healthcare, and community development initiatives. We maintain full transparency in our financial reports.'
              },
              {
                id: '4',
                question: 'Can I visit your foundation?',
                answer: 'Yes, we welcome visitors during our office hours. Please contact us in advance to schedule a visit and learn more about our work.'
              }
            ].map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${activeKey !== faq.id && 'collapsed'}`}
                    type="button"
                    onClick={() => setActiveKey(activeKey === faq.id ? null : faq.id)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${activeKey === faq.id ? 'show' : ''}`}>
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contactus;
