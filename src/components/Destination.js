import React from "react";
import data from "../data.json";
import { useState } from "react";

export default function Destination(){
    const [planets]=useState(data.destinations);
    const [value, setValue]=useState(0);

    const {name, images, description, distance, travel}=planets[value]

    return (
        <div className="destination-content">
            <section className="des-top">
                <div>
                    <h2>01 <span>Pick your destination</span></h2>
                </div>
            
            </section>
            <section className="below">
            <div className="image-des">
                <img 
                    src={images.png}
                    alt={name}
                    title={name}
                    className="block"
                    height="100px"                />
            </div>
            
            <article className="des-content">
                <div className="planets">
                    <ul className="planet-buttons">
                        {planets.map((item, index)=>(
                            <li key={index} className="btn">
                                <button onClick={()=>setValue(index)}
                                    className={index===value && "border-white"}
                                >
                                {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h2 className="Planet-name">{name}</h2>
                    <div className="planet-description">
                        <p >
                            {description}
                        </p>
                        <div className="line"></div>
                        <div className="time-distance">
                            <div className="distance">
                            <h6>Avg. Distance</h6>
                            <span>{distance}</span>
                            </div>
                            <div className="time">
                            <h6>Est. travel time</h6>
                            <span>{travel}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </article>
            </section>
        </div>
    )
}

