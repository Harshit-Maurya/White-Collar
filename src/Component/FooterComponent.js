import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						<li><Link to="/home"><i class="fa fa-angle-double-right"></i>Home</Link></li>
						<li><Link to="/aboutus"><i class="fa fa-angle-double-right"></i>About Us</Link></li>
						<li><Link to="/menu"><i class="fa fa-angle-double-right"></i>Menu</Link></li>
						<li><Link to="/contactus"><i class="fa fa-angle-double-right"></i>Contact Us</Link></li>
						<li><Link to="/FAQ"><i class="fa fa-angle-double-right"></i>FAQ</Link></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Services</h5>
					<ul class="list-unstyled quick-links">
                        <li><Link to="/home"><i class="fa fa-angle-double-right"></i>In-house</Link></li>
						<li><Link to="/aboutus"><i class="fa fa-angle-double-right"></i>Home Delivery</Link></li>
						<li><Link to="/menu"><i class="fa fa-angle-double-right"></i>Xprss Services</Link></li>
						<li><Link to="/contactus"><i class="fa fa-angle-double-right"></i>Contact Us</Link></li>
						<li><Link to="/FAQ"><i class="fa fa-angle-double-right"></i>FAQ</Link></li>					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Community</h5>
					<ul class="list-unstyled quick-links">
                        <li><Link to="/home"><i class="fa fa-angle-double-right"></i>Contributors</Link></li>
						<li><Link to="/aboutus"><i class="fa fa-angle-double-right"></i>Partners</Link></li>
						<li><Link to="/menu"><i class="fa fa-angle-double-right"></i>Blogs</Link></li>
						<li><Link to="/contactus"><i class="fa fa-angle-double-right"></i>Contact Us</Link></li>
						<li><Link to="/FAQ"><i class="fa fa-angle-double-right"></i>FAQ</Link></li>					</ul>
				</div>
			</div>
			    <div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.facebook.com/harshit.maurya.12"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="https://twitter.com/login"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="https://support.google.com/plus/?hl=en#topic=9259565"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="linkedin.com/in/harshit-maurya-877916151"><i class="fa fa-linkedin"></i></a></li>
					</ul>
				</div>
				
			</div>
                <div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><a>Ristorante White Collar</a> is a Registered MSP/ISO of Harsh, Inc. [a wholly owned subsidiary of Banaglore, Karnataka, India]</p>
					<p class="h6">© All right Reversed.<a class="text-green ml-2"  target="_blank"></a></p>
				</div>
				
			</div>	
        </div>    
        </div>     
    )
}

export default Footer;