import React from "react";
import styled from 'styled-components';
const MovieItemPage = ({ movieDetails, backButton, movieCredits }) => {
	const title = movieDetails.title
	const adult = movieDetails.adult
	const bg = movieDetails.backdrop_path
	const overview = movieDetails.overview
	const posterPath = movieDetails.poster_path
	const releaseDate = movieDetails.release_date
	const voteAverage = movieDetails.vote_average
	const movieBackdrop = `url(https://image.tmdb.org/t/p/w500/${bg}) center/cover no-repeat`
	const credit = movieCredits.name


	const MovieContainer = styled.div`
	display:flex;
	position:relative;
	`
	const MovieBG = styled.div`
	color: #fff;
	background: ${movieBackdrop} ;
	filter: blur(4px);
	-webkit-filter: blur(4px);
	height: 80vh;
	width: 100vw;
	animation: fadein 3s ease-in-out forwards;
	margin:0 var(--margin-size);
	@media (max-width: 1300px) {
		margin:0 ;
	}
	@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .6; }
	}	
}
&::after {
	content: '';
	position:absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	mix-blend-mode: hue;
	background: linear-gradient(to right, #000046, #1cb5e0)#000;
}
`

	const MovieInformation = styled.div`
	position: absolute;
	z-index: 1;
	color:#fff;
	margin:0 var(--margin-size) ;
	.parent {
		width:80vw;
	padding-left: 3rem;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
animation: fadeIn 4s   ease-in-out 0s  both;
    @keyframes fadeIn {
        0% {
            display: inline;
            opacity: 0;
            transform:translateY(-15px) 
        }
        25% {
            display: inline;
            opacity: 1;
            transform:translateY(0) 
        }
        100% {
            opacity: 1;
        }
    }
}
button {
	margin: 2rem 0 4rem 2rem;
}
.div1 { grid-area: 1 / 1 / 4 / 3;
	/* movie poster */
	background: url(https://image.tmdb.org/t/p/w500/${posterPath}) center/cover no-repeat;
	height:calc((var(--card-width)/2)*3);
	border-radius: 10px;
}
.div2 { grid-area: 1 / 4 / 2 / 7; 
	/* title */
	font-size: 2rem;
	font-weight: bold;
	text-transform: uppercase;
	/* -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black; */
  -webkit-text-fill-color: white; 
  height: 50px;
}
.div3 { grid-area: 2 / 4 / 4 / 7; 
/* description */
line-height: 2rem;
margin-bottom:2rem;
animation: fadeIn 4s  ease-in-out .5s  both;
    @keyframes fadeIn {
        0% {
            display: inline;
            opacity: 0;
            transform:translateY(15px) 
        }
        25% {
            display: inline;
            opacity: 1;
            transform:translateY(0) 
        }
        100% {
            opacity: 1;
        }
    }
}
.div4 { grid-area: 4 / 4 / 5 / 5; 
		/* rating */
		font-size: 1.5rem;
		color:rgb(167, 255, 131);
		animation: fadeIn 4s  ease-in-out 1s  both;
		border: 1px solid rgb(167, 255, 131);
		display:flex;
		justify-content:center;
		align-items:center;
		border-radius: 10px;
    @keyframes fadeIn {
        0% {
            display: inline;
            opacity: 0;
            transform:translateY(15px) 
        }
        25% {
            display: inline;
            opacity: 1;
            transform:translateY(0) 
        }
        100% {
            opacity: 1;
        }
    }
	span {
		font-weight: bold;
	}
}
.div5 { grid-area: 4 / 5 / 5 / 6;
	/* trailer */
 }
.div6 { grid-area: 4 / 1 / 5 / 3;
	/* release date */
	margin: 1rem 0 0 0;
	font-size: 1rem;
	font-weight: bold;
	text-transform: uppercase;
  -webkit-text-fill-color: white;  }
`
	return (
		<div className='MovieItemPage-container'>
			<MovieContainer>
				<MovieBG
					href="https://github.com/styled-components/styled-components"
					target="_blank"
					rel="noopener"
					primary
				>
				</MovieBG>
				<MovieInformation>


					<button className='page-btn' onClick={(e) => backButton(e)}>BACK</button>
					<div className="parent">
						<div className="div1"> </div>
						<div className="div2">   {title}</div>
						<div className="div3"> {overview}</div>
						<div className="div4"><p>Rating: <span className='span'>{voteAverage}</span></p>  </div>
						<div className="div5">Actors:
						{movieCredits[0].name}
						{movieCredits[1].name}
						{movieCredits[2].name}
						{movieCredits[3].name}
						{movieCredits[4].name}
						
						</div>
						<div className="div6">
							release date: {releaseDate}
						</div>
					</div>
					{/* <div><iframe width="560" height="315" src="https://www.youtube.com/embed/Nvb9cDDFHtk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
				</MovieInformation>
			</MovieContainer>
		</div>
	);
}
export default MovieItemPage;
