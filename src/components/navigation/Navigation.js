import React from "react";
import "./Navigation.scss";

const Navigation = ({ click }) => {
    return (
        <nav className="topNav">
       
            <ul className="navCategories">

                <li className='nav-1'>
                    <i className="fa fa-globe" aria-hidden="true" />
                    <button onClick={() => click('all')} >all</button>
                </li>
                <li className='nav-2'>
                    <i className="fa fa-bookmark" aria-hidden="true" />
                    <button onClick={() => click('popular')} >popular</button>
                </li>
                <li className='nav-3'>
                    <i className="fa fa-star" aria-hidden="true" />
                    <button onClick={() => click('top-rated')} >top&ndash;rated</button>
                </li>
                <li className='nav-4'> 
                    <i className="fa fa-calendar" aria-hidden="true" />
                    <button onClick={() => click('upcoming')} >upcoming</button>
                </li>

            </ul>
            <span className='s-one'></span>
            {/* <span className='s-two'></span> */}
            <span className='s-three'></span>
        </nav>
    );
}
export default Navigation;
