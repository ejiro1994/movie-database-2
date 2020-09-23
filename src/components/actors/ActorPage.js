import React from 'react'
import './ActorPage.scss'

function ActorPage({ backButton, actor, movieCredits,  }) {

    const person = movieCredits
    console.log('this is the person ' + person[0].name);


    return (
        <div className='actorPage'>
            {/* <h1>this is the actors page</h1> */}
            <button className='page-btn' onClick={(e) => backButton(e)}>BACK</button>
            <p></p>
					<a href='#'><p> the actor is </p></a>

        </div>
    )
}

export default ActorPage
