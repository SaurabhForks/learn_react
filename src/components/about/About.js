import React, { useState } from "react";
import "./about.css";
const About = () => {
    const [value, setValue] = useState("");
    //input
    //get length
    // giv warning at 10  normal color
    //if >15  wramnig color should be red


    return (
        <div className="wrap">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            {value.length > 10 && <p className={`${value.length > 15 && "red"}`}>x
                Charecter count is exceeded {value.length} Charecter
            </p>}
        </div>
    );
};

export default About;
