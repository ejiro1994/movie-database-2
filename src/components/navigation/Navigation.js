import React from "react";
import "./Navigation.scss";

const Navigation = ({ click }) => {
    return (
        <nav className="topNav">

            <ul className="navCategories">

                <li className='nav-1'>

                    <button onClick={() => click('all')} >
                        <i className="fa fa-globe" aria-hidden="true" />
                        all
                    </button>
                </li>
                <li className='nav-2'>

                    <button onClick={() => click('popular')} >
                        <i className="fa fa-bookmark" aria-hidden="true" />
                        popular
                        </button>
                </li>
                <li className='nav-3'>

                    <button onClick={() => click('top-rated')} >
                        <i className="fa fa-star" aria-hidden="true" />
                        top&ndash;rated
                    </button>
                </li>
                <li className='nav-4'>

                    <button onClick={() => click('upcoming')} >
                        <i className="fa fa-calendar" aria-hidden="true" />
                        upcoming
                    </button>
                </li>

            </ul>
            <span className='s-one'></span>
            {/* <span className='s-two'></span> */}
            <span className='s-three'></span>
        </nav>
    );
}
export default Navigation;
