import React from "react";
import "./footer.css";
import { FaCopyright} from 'react-icons/fa';

const LandingFooter = () => {
  return (
    // <div class='footer'>
    //     <div class='top'>
    //         <div class='logo-container'>
    //             <img src='../assets/images/alumniDiaries_logo_transparent.png' class='logo-img' width='30%' alt='logo'/>
    //         </div>
    //         <div class='links-container'>
    //             <div class='footer-title'>
    //                 Links
    //             </div>
    //             <ul class='footer-list'>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='../pages/home.php'>
    //                         <i class="footer-icon fas fa-home"></i>
    //                         Home
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='../pages/projects.php'>
    //                         <i class="footer-icon fas fa-project-diagram"></i>
    //                         Projects
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='../pages/donations.php'>
    //                         <i class="footer-icon fas fa-hand-holding-usd"></i>
    //                         Donations
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='../pages/developers.php'>
    //                         <i class="footer-icon fas fa-smile"></i>
    //                         Developers
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='../pages/faq.php'>
    //                         <i class="footer-icon fas fa-question-circle"></i>
    //                         FAQ
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='../pages/suggestions.php'>
    //                         <i class="footer-icon fas fa-lightbulb"></i>
    //                         Suggestions
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //         <div class='social-media-container'>
    //             <div class='footer-title'>
    //                 Social Media
    //             </div>
    //             <ul class='footer-list'>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='https://www.facebook.com/UCSC.LK' target='_blank'>
    //                         <i class="footer-icon fab fa-facebook-square"></i>
    //                         Facebook
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='https://www.linkedin.com/school/ucsc-lk/' target='_blank'>
    //                         <i class="footer-icon fab fa-linkedin"></i>
    //                         LinkedIn
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='https://twitter.com/ucsc_lk' target='_blank'>
    //                         <i class="footer-icon fab fa-twitter-square"></i>
    //                         Twitter
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='https://www.youtube.com/channel/UC0gdcqEL6ZZeT67s0IbOrHg' target='_blank'>
    //                         <i class="footer-icon fab fa-youtube"></i>
    //                         YouTube
    //                     </a>
    //                 </li>
    //                 <li class='footer-list-item'>
    //                     <a class='footer-link' href='https://ucsc.cmb.ac.lk/' target='_blank'>
    //                         <i class="footer-icon fas fa-globe"></i>
    //                         UCSC Web
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class='copyright'>
    //         Information Systems (18/19) | Group 07 | 2nd Year Group Project | 2021
    //     </div>
    // </div>
    <div className="footer-div">
      <div className="footer-main-div">
        <div className="footer-social-icons">
          <ul>
            <li>
              <a href="#" target="blank">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="blank">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#" target="blank">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-menu-one">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Hotels</a>
            </li>
            <li>
              <a href="#">Donations</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
         Copyright <FaCopyright/> IS 3113/SCS 3214 (18/19) | Group 23 | 3nd Year Group Project | 2022
      </div>
    </div>
  );
};
export default LandingFooter;
