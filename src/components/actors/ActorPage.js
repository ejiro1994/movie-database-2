import React from 'react'
import './ActorPage.scss'
import styled from 'styled-components'
function ActorPage({ backButton, actor, movieCredits,  }) {

    const cast = actor[0]
    const person = movieCredits
    console.log('this is the person ' + cast.name);
    // console.log(actor[0].name);
const ActorCardContainer = styled.div`
    display:flex;
    flex-direction: column;

`

const ActorCardImg = styled.img`
height: 200px;
object-fit: cover;

`

    return (
        <div className='actorPage'>
            <button className='page-btn' onClick={(e) => backButton(e)}>BACK</button>
            


					<a href='#'><p> the actor is {cast.name}</p></a>

        </div>
    )
}

export default ActorPage
