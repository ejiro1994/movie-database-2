import React from "react";
import styled from 'styled-components';


const MovieItem = ({ movie, clickForMoreInfo }) => {

    let card_bg = { background: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}) ` }
      //  center/cover no-repeat
    let bg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    
    let rating =  movie.vote_average;


    const MovieCardContainer = styled.div`
    cursor: pointer;
        display: inline-flex;
    width: 399px;
    height: 231px;
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0px;
    padding-bottom: 0px;
    color: #fff;
    margin-right: 60px;
    margin-bottom: 80px;

    &::after {
    
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-position: bottom !important;
    background-size: 200% !important;
    transition: all 1s ease-out;

    &:hover {
        background-size: 100% !important;
        background-position: center !important;
    }



    filter: blur(39px) brightness(1) contrast(110%) ;
    width: 429px;
    height: 187px;
    z-index: -1;

    background-clip: border-box;
    clip-path: inset(0 round 25px);
    mix-blend-mode: screen;
   ${card_bg}

}
   &::before {
           content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-position: bottom !important;
    background-size: 200% !important;
    transition: all 1s ease-out;

    &:hover {
        background-size: 100% !important;
        background-position: center !important;
    }



    filter: blur(39px) brightness(1) contrast(110%) ;
    width: 429px;
    height: 187px;
    z-index: -1;

    background-clip: border-box;
    clip-path: inset(0 round 25px);
    mix-blend-mode: screen;

              background: rgb(0, 0, 0);
    filter: blur(0) !important;
    mix-blend-mode: hard-light;
        }


    `

    const BottomInfo = styled.div`
     text-transform: capitalize;

   
    display: flex;
    position: absolute;
    bottom: -58px;
    width: 95%;
    justify-content: space-between;

    `

    const MovieName = styled.div`
        font-weight: 600;
        width: 60%;
    `


const MovieImage = styled.img`
 height: 215px;
        // position: absolute;
        border-radius: 13px;
        box-shadow: 5px 5px 25px #000000ba;
`
    const InfoSection = styled.div`
     user-select: none;

        cursor: pointer;

        .movie-title {
            text-transform: capitalize;
            margin-bottom: 5px;
            font-size: 16px;
            font-weight:bold;
            /* mix-blend-mode: exclusion */
        }

        display: inline-block;
        margin-top : 60px;
        margin-left: 16px;

        .movie-description {
            margin-bottom: 9px;
            overflow: hidden;
            height: 130px;
            /* mix-blend-mode: difference; */
        /* box-shadow: 5px 5px 25px #000000ba; */


        }

        .buttons {
            display: flex;
            justify-content: space-between;
            width: 100%;

            button {
                all: unset;
                text-transform: capitalize;
            }

        }
    `

    return (
        
        <li className="movie-item card"  movieitemid={movie.id} onClick={(e) => clickForMoreInfo(e)}>
            {/* <div>
                <div className="wrapper" style={bg} movieitemid={movie.id}>
                    <div className="header">
                        <div className="date">
                            <span className="day">{new Date(movie.release_date).toString().substring(7, 10)}</span>
                            <span className="month">{new Date(movie.release_date).toString().substring(3, 7)}</span>
                            <span className="year">{new Date(movie.release_date).toString().substring(10, 15)}</span>
                        </div>
                        <ul className="menu-content">
                            <li>
                                <i href="/" className="fa fa-bookmark-o"></i>
                            </li>
                        </ul>
                    </div> 
                    <div className="data">
                        <div className="content">
                            <span className="author" style={{ fontWeight: 600, color: '#a7ff83' }}>Rating {movie.vote_average}</span>
                            <h1 className="title">
                                <a href="/">{movie.title}</a>
                            </h1>
                            <p className="text">
                                {movie.overview.substring(0, 100)}...
                        </p>
                            <a href="/" className="button">
                                Read more
                        </a>
                        </div>
                    </div>
                </div>
            </div> */}

            <MovieCardContainer 
             movieitemid={movie.id}  
             >
                <BottomInfo 
                >
                    <MovieName 
                    >{movie.title}</MovieName>
                    <div>
                    rating: {Array(Math.round(rating / 2)).fill().map((_, i) => (<span>⭐️</span>))}
                    </div> 
                     {/* {movie.vote_average} */}
                        {console.log(Math.round(rating/2))}
                        
                </BottomInfo>
            {/* {console.log(bg)} */}
                <MovieImage src={bg} alt="movie poster" 
                draggable="false"/>
                    <InfoSection 
                    >
                        <h2 
                        class="movie-title"
                        >storyline</h2>
                        <p 
                        class="movie-description"
                        >
                        {movie.overview.substring(0, 100)}...
                    </p>
                    </InfoSection>
            </MovieCardContainer>



        </li>

    );
}

export default MovieItem;
