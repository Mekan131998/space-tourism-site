import React from "react";
import {Link} from 'react-router-dom'


const Home=()=>
        <div className="home-main">
        <div className="home-content">
                <h1>SO, YOU WANT TO TRAVEL TO</h1>
                <h1 className="space">SPACE</h1>
                <p>
                    Lets face it! If you want to go to space 
                    you might as well genuely go to outer space and hot hover kind 
                    of on the edge of it. Well sit back and relax 
                    because we'll give you truly out of this world experience
                </p>
                
            </div>
            
            <div className="explore">
                    <Link to="destination"><h1>EXPLORE</h1></Link>
                </div>
       
        </div>

export default Home;
