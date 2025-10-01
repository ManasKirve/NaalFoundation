
const Donatenow = () => {
  return (
    <div className="n-donate">
      {/* Hero Section */}
      <div className="n-donate-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="n-donate-title">Make a Donation</h1>
              <p className="n-donate-subtitle">Your generosity can transform lives. Support our programs and initiatives through secure online donations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Details Section */}
      <div className="n-donate-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              {/* <p className="n-donate-intro">
                Your donations directly support our mission to create positive change in communities.
                We focus on sustainable development, education, and healthcare initiatives that make
                lasting impacts in the lives of those who need it most.
              </p> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-3">
              <div className="n-donate-qr-card">
                <h3>Donate via UPI</h3>
                <div className="n-donate-qr-wrapper">
                  {/* Replace with actual QR code image */}
                  <img
                    src="/assets/scannerimage.jpg"
                    alt="UPI QR Code"
                    className="img-fluid n-donate-qr"
                  />
                </div>
                <p className="n-donate-qr-instruction">Scan this QR code with any UPI app to donate instantly</p>
                <p className="n-donate-note">Your contributions help us create lasting change in communities.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="n-donate-qr-card">
                <h3>Donate via Bank Transfer</h3>

                <div className="n-donate-qr-wrapper">
                  <h5 className="n-donate-bank-name">Naal Foundation SBI Account Details:</h5>
                  <div><span className="colo-number-dontae">Account number: </span> 00000040086869541</div>
                  <div><span className="colo-number-dontae">IFSC Code: </span>SBIN0003800</div>
                  <div><span className="colo-number-dontae">MICR Code: </span>  413002562</div>



                </div>
                <p className="n-donate-qr-instruction">Transfer amount to the above account number </p>

                <p className="n-donate-note"></p>


              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Why Your Donation Matters Section */}
      {/* <div className="n-donate-section n-donate-bg-light">
        <div className="container">
          <h2 className="n-donate-section-title">Why Your Donation Matters</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="n-donate-impact-card">
                <i className="fas fa-graduation-cap n-donate-impact-icon"></i>
                <h3>Education Support</h3>
                <p>Providing quality education and learning resources to underprivileged children.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="n-donate-impact-card">
                <i className="fas fa-tint n-donate-impact-icon"></i>
                <h3>Clean Water</h3>
                <p>Ensuring access to clean and safe drinking water in rural communities.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="n-donate-impact-card">
                <i className="fas fa-heartbeat n-donate-impact-icon"></i>
                <h3>Healthcare Access</h3>
                <p>Supporting medical facilities and healthcare programs for those in need.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action Section */}
      {/* <div className="n-donate-cta">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="n-donate-cta-title">Be the Change You Want to See</h2>
              <p className="n-donate-cta-subtitle">Your contribution, no matter how small, can make a significant difference in someone's life.</p>
              <a href="#" className="n-donate-button">
                <i className="fas fa-mobile-alt me-2"></i>
                Donate Now via UPI
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Donatenow;
