import React, {useState} from 'react';
import data from '../data.json';

export default function Technology(){
    const [technology]=useState(data.technology);
    const [value, setValue]=useState(0);

    const {name, images, description}=technology[value];

    return(
        <div className="technology">
            <div className="space-launch">
                <h2>03 <span>SPACE LAUNCH 101</span></h2>
            </div>
            <div className="technology-content">
                <div className="tech-first">
                    <ul className="tech-num-btn">
                        {technology.map((item, index)=>(
                            <li key={index} className="circle-num">
                                <button onClick={()=>setValue(index)}
                                className={index===value && "btn-white"}>
                                    {index+1}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tech-second">
                    <p>The technology</p>
                    <h2 className="tech-name">{name}</h2>
                    <p className="description">{description}</p>
                </div>
                <div className="tech-third">
                    <img src={images.portrait}
                        alt={name}
                        title={name}
                        className="tech-img"
                    />
                </div>
            </div>

        </div>
    )
};