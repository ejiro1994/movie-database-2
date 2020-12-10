import React from 'react'
import './ActorPage.scss'
import styled from 'styled-components'
function ActorPage({ backButton, actor, movieCredits,  }) {

    const cast = actor[0]
    const person = movieCredits
    console.log('this is the person ' + cast.name);
    // console.log(actor[0].name);

    const ActorPageWrapper = styled.div`
    max-width: 1100px;
    margin: auto;
    display:flex; 
   
    p {
        font-weight: bold;
        color: #fff;
        text-transform:capitalize;

    }
    `

const ActorCardContainer = styled.div`
    display:flex;
    flex-direction: column;
    

`

const ActorCardImg = styled.img`
width: 300px;
object-fit: cover;
border-radius: 10px;
margin-right: 4rem;
`

    return (
        <>
            <button className='page-btn' onClick={(e) => backButton(e)}>BACK</button>
        <ActorPageWrapper className='actorPage'>
            

            <ActorCardImg src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>


                <div className="info">
                    <p>Character name: {cast.character}</p>
                    <p>Actor name: {cast.name}</p>
                    <p>known for: {cast.known_for_department}</p>
                </div>

               
        </ActorPageWrapper>
        </>
    )
}

export default ActorPage
