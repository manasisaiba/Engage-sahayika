import React from 'react';
import {Link} from 'react-router-dom';
import ss from '../img/blue.jpg';
import se from '../img/emp.jpg';
import sd from '../img/wfh.jpg';



const About = () => {
    return(
        
        <div className="about">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="about-img">
							<img src={ss} alt="Pizza"></img>
						</div>
					</div>
					<div className="col-6 p-25">
						<h3>About Us</h3>
						<h1>Welcome to SAHAYIKA</h1>
						<p>Placements in the blue color jobs market or the vocational sector is a specialized segment often overlooked by the larger job portals specifically for women
							 as they focus mainly on corporate profiles. A candidate searching for a blue collar job in India may not have a fancy resume or college degree needed by the large job portals to get placed. In order to bridge this gap we have launched a recruitment platform specifically designed for the vocational sector seamlessly integrated with Sector Skill Councils (SSC) and Training Partners. We are a recruitment platform 
							where entry level and experienced blue collar jobs can be searched in good companies across India.</p>
						<div className="about-btn">
							<Link to="/hire" className="btn btn-smart">KNOW MORE</Link>
							<Link to="/signup" className="btn btn-smart">REGISTER</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6 p-25">
						<h3>WOMEN RETURNEE PROGRAM</h3>
						<h1>Welcome to SAHAYIKA</h1>
						<p>Millions of professionals globally have adapted to the remote working model. And as the boundaries between work & personal life blur, it made way for women, who were on a career break, to return to being professionals. At SAHAYIKA, we understand how challenging it could be for a woman to make re-entry into the tech industry's ever-changing landscape.
							 So, we create opportunities for them to return and make an impact.</p>
						<div className="about-btn">
							<Link to="/hire" className="btn btn-smart">APPLY NOW</Link>
							<Link to="/signup" className="btn btn-smart">REGISTER</Link>
						</div>
					</div>
					<div className="col-6">
						<div className="about-img">
							<img src={sd} alt="Pizza"></img>
						</div>
					</div>
					
				</div>
				<div className="about-img">
							<img src={se} alt="Pizza"></img>
				</div>

			</div>
		</div>
        
        
    );
}
export default About;
