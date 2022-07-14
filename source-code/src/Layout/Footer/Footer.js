import instagram from "../../Images/instagram.png";
import facebook from "../../Images/facebook.png";
import twitter from "../../Images/twitter.png";
export default function Footer(){
    return(
        <footer>
            <section className="footer-top aem-Grid aem-Grid--12">
                <div className="footer-top-item aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <h2 className="footer-top-title">Account</h2>
                    <ul className="footer-top-list">
                        <li>Sign In</li>
                        <li>Register</li>
                        <li>Order Status</li>
                    </ul>
                </div>
                <div className="footer-top-item aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <h3 className="footer-top-title">About Us</h3>
                    <ul className="footer-top-list">
                        <li>Our Story</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="footer-top-item aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <h4 className="footer-top-title">Help</h4>
                    <ul className="footer-top-list">
                        <li>Contact Us</li>
                        <li>Order Status</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className="footer-top-item aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <h5 className="footer-top-title">Follow Us!</h5>
                    <ul className="footer-top-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</li>
                        <li>
                            <img className="social-icon" src={instagram} alt="instagram"/>
                            <img className="social-icon" src={facebook} alt="facebook"/>
                            <img className="social-icon" src={twitter} alt="twitter"/>
                        </li>
                    </ul>
                </div>

            </section>
            <section className="footer-bottom aem-Grid aem-Grid--12">
                <a href="#/home" aria-label="Home" className="footer-logo aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <span data-content="VENIA">VENIA</span>
                </a>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                    <p className="copyright">&copy;Company Name Address Ave, City Name, State ZIP</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                    <ul className="f-bootom-text">
                        <li><a href="/" aria-label="Terms of Use">Terms of Use</a></li>
                        <li><a href="/" aria-label="Privacy Policy">Privacy Policy</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}