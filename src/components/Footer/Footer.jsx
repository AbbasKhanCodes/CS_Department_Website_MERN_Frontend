import Styles from "./FooterStyle.module.css";
import { motion } from "framer-motion";

// Animation
let animate = {};
const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
if (!isMobile) {
  animate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
} else {
  animate = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };
}
//if the width >= 768px, boxVariants will be empty, resulting in no animation
//you need to refresh the page, it doesn't work when you resize it!

const Footer = () => {
  return (
    <>
      <motion.div
        className={`${Styles.Container}`}
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={animate}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Footer Start */}
        <div className="container-fluid bg-primary text-light footer wow fadeIn">
          <div className="container py-5 px-lg-5">
            <h3 style={{ color: "chocolate", marginBottom: "36px" }}>
              AWKUM | Computer Science
            </h3>
            <div className="row g-5">
              <div className="col-md-6 col-lg-3 contactInfo">
                <h4 className="text-white mb-4">Contact info</h4>
                <p>
                  <i className="fa fa-map-marker-alt me-3"></i>Garden Campus,
                  Abdul Wali Khan University Mardan
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3"></i>+92-937-9230801-4
                </p>
                <p>
                  <i className="fa fa-envelope me-3"></i>webadmin@awkum.edu,pk
                </p>
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://twitter.com/AWKUMofficial"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.facebook.com/awkumofficial"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.youtube.com/watch?v=289LSeFWBh4"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="btn btn-outline-light btn-social"
                    href="https://www.linkedin.com/school/abdul-wali-khan-university-mardan/?viewAsMember=true"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Quick Link</h4>
                <a
                  className="btn btn-link"
                  href="https://awkum.edu.pk/admissions/"
                >
                  Admissions
                </a>
                <a
                  className="btn btn-link"
                  href="https://awkum.edu.pk/about-us/"
                >
                  About Us
                </a>

                <a
                  className="btn btn-link"
                  href="https://awkum.edu.pk/academics/"
                >
                  Academics
                </a>
                <a
                  className="btn btn-link"
                  href="https://awkum.edu.pk/administration/vice-chancellor-secretariat/"
                >
                  Administration
                </a>
                <a
                  className="btn btn-link"
                  href="https://awkum.edu.pk/faculties-colleges/"
                >
                  Faculties
                </a>
              </div>

              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p>Stay Connected with the Latest News & Updates</p>
                <div className="position-relative w-100 mt-3">
                  <input
                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                    style={{ height: "48px" }}
                  />
                  <button
                    type="button"
                    className="newsletterBtn btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i className="fa fa-paper-plane text-primary-gradient fs-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-lg-5">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy;{" "}
                  <a className="border-bottom" href="https://awkum.edu.pk/">
                    Abdul Wali Khan University Mardan©2023.
                  </a>
                  , All Right Reserved.
                  {/*  This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                  <a className="border-bottom" href="https://awkum.edu.pk/">
                    AWKUM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </motion.div>
    </>
  );
};

export default Footer;
