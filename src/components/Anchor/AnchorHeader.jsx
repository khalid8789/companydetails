import React from "react";
import './Anchor.css'

const AnchorHeader = () =>{
    return(
        <nav className="nav">
            <ul className="ul">
                <li>
                    <a className="a" href="#">Home/</a>
                </li>
                <li>
                    <a className="report" href="#">
                    Reports & Insights
                    </a>
                </li>
            </ul>
        </nav>
    )
}; 

export default AnchorHeader;