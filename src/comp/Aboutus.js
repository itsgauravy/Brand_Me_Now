import { Link } from "react-router-dom";

function Aboutus() {
    return (
        <section className="aboutus">
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>About Us</h3>
                        <h6>Leading Personalised Workwear & clothing store</h6>
                        <p>Brand Me Now is a custom workwear and promotional clothing supplier, we provide high quality, custom printed and embroidered clothing to businesses looking to enhance their image through comfortable clothing, or to hand-out some corporate gifts for clients, our personalized printed T-shirts are the absolute best.


                            At Brand Me Now we are dedicated to our customers, we are very interested in the success of your promotional project just like you. We ensure that each step of the way is managed by our highly experienced team of merchandising specialists. From product sourcing and design, through to print and production.


                            We help companies, businesses, and groups to create their own clothing in a timely and straightforward way no matter the numbers.  We aim to bring out team spirit in your staff with our quality and radiant outfits.


                            We’re breaking barriers and advancing our garment printing tech and intelligent logo quality control just as technology advances. We aim to give you an excellent workwear buying experience.

                            At Brand Me Now we are keen on delivering all your orders promptly, be it printed t-shirts, embroidered polo shirts, personalized hoodies, or more we provide you top-notch quality on a timely basis.</p>
                    </div>
                </div>
                <hr/>
                <div className="row ">
                    <div className="col-md-6">
                        <h3>Contact us</h3>
                        <ul>
                            <li> <i class="bi bi-telephone-fill"></i> Call us - +01 23165498</li>
                            <li> <i class="bi bi-envelope-fill"></i> Email us - Brandmenow123@gmail.com</li>
                            <li> <i class="bi bi-geo-alt-fill"></i> Headquaters - Lindon House, Birmingham B29 6EN</li>
                        </ul>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <h3>Social Links </h3>
                        <ul>
                            <li><Link to="/about"><i className="bi bi-facebook"></i> facebook </Link></li>
                            <li><Link to="/about"><i className="bi bi-instagram"></i> instagram </Link></li>
                            <li><Link to="/about"><i className="bi bi-linkedin"></i> linkedin. </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Aboutus;