import React, {useState} from "react";
import data from '../data.json';

export default function Crew(){
    const [people]=useState(data.crew);
    const [value, setValue]=useState(0);

    const {name, images, role, bio}=people[value];

    return(
        <div className="crew">
            <div className="crew-meet">
                <h2>02 <span>MEET OUR CREW</span></h2>
            </div>
            <div className="crew-content">
                <div className="left-content">
                    <h2 className="role">{role}</h2>
                    <h1 className="name">{name}</h1>
                    <p className="bio">
                        {bio}
                    </p>
                    <ul className="crew-buttons">
                        {people.map((item, index)=>(
                            <li key={index} className="circle-btn">
                                <button onClick={()=>setValue(index)}
                                className={index===value && "brigter"}>
                                </button>
                                </li>
                        ))}
                    </ul>
                </div>
                <div className="right-content">
                    <img 
                        src={images.png}
                        alt={name}
                        title={name}
                        className="crew-img"
                    />
                </div>
            </div>


        </div>
    )
}
