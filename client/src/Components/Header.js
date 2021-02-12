import React from 'react';
import {Link} from 'react-router-dom';
import ss from '../img/blue.jpg';

const Header=()=>{
    return(
        
<div className="banner">

	<div className="banner_content">
		
		<div className="container">
			
			<div className="row">
					
					<div className="col-6 p-25">
					
						<h1>EMPOWERING WOMEN</h1><h1> Find Best Blue Collar Jobs</h1>
						<h2>Aims to help empower women in every sector be it large or small !!</h2>
						<div className="about-btn">
						<Link to="/about" className="btn btn-smart">KNOW MORE</Link>
					<Link to="/hire" className="btn btn-smart">HIRE NOW</Link>
					<Link to="/hirecandidate" className="btn btn-smart">GET HIRED</Link>
						</div>
					</div>
					<div className="col-6">
						<div className="about-img">
							<img src={ss} alt="Pizza"></img>
						</div>
					</div>
				</div>
				
				
		</div>
	</div>
</div>
        
    );
}
export default Header;
