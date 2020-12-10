import React from "react";
import styled from 'styled-components';
const MovieItemPage = ({ movieDetails, backButton, movieCredits, movieTrailer, actorButton }) => {
	const title = movieDetails.title
	// const adult = movieDetails.adult
	const bg = movieDetails.backdrop_path
	const overview = movieDetails.overview
	const posterPath = movieDetails.poster_path
	const releaseDate = movieDetails.release_date
	const voteAverage = movieDetails.vote_average
	const movieBackdrop = `url(https://image.tmdb.org/t/p/w500/${bg}) center/cover no-repeat`
	const credit = movieCredits.name
	const youtubeTrailerId = movieTrailer[0].key

	console.log(youtubeTrailerId)

	const rating = movieDetails.vote_average

	const youtubeLink = `https://www.youtube.com/embed/${youtubeTrailerId}?autoplay=0`


	const Trailer = styled.div`
	display:flex;
	width: 100%;
	justify-content:center;
margin-top:5rem;


	`


	const MovieItemPageContainer = styled.div`

	max-width: 1100px;
	margin:auto;		
	`

	const MovieContainer = styled.div`
	display:flex;
	position:relative;
	`
	const MovieBG = styled.div`
	color: #fff;
	background: ${movieBackdrop} ;
	filter: blur(4px);
	-webkit-filter: blur(4px);
	height: 430px;
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
	margin-bottom:3rem;
}
&::after {
	content: '';
	position:absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	mix-blend-mode: hue;
	background: linear-gradient(to right, #172266, #00ff0d)#000;
}


`


const MovieInformationWrapper = styled.div`
position: absolute;
display:flex;
margin-top: 2rem ;
gap: 3rem;
color: #fff;
padding: 2rem;
	/* flex-direction: row; */

@media  screen and (max-width: 300px) {
	flex-direction: column;
}


.title {
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom:1rem;
}

.summary {
	line-height:2;
	margin-bottom: 1rem;
}

.releaseDate {
	margin-bottom: 2rem;
	font-weight: bold;
	text-transform: capitalize;
}

.rating {
	font-weight: bold;
}

`

	const MoviePoster = styled.img`
	/* background: url(https://image.tmdb.org/t/p/w500/${posterPath}) center/cover no-repeat; */
	width:230px;
	height: 350px;

	object-fit: cover ;
	border-radius: 10px;
`
	// 	const MovieInformation = styled.div`
	// 	position: absolute;
	// 	z-index: 1;
	// 	color:#fff;
	// 	margin:0 var(--margin-size) ;
	// 	.parent {
	// 		width:80vw;
	// 	padding-left: 3rem;
	// display: grid;
	// grid-template-columns: repeat(6, 1fr);
	// grid-template-rows: repeat(4, 1fr);
	// grid-column-gap: 0px;
	// grid-row-gap: 0px;
	// animation: fadeIn 4s   ease-in-out 0s  both;
	//     @keyframes fadeIn {
	//         0% {
	//             display: inline;
	//             opacity: 0;
	//             transform:translateY(-15px) 
	//         }
	//         25% {
	//             display: inline;
	//             opacity: 1;
	//             transform:translateY(0) 
	//         }
	//         100% {
	//             opacity: 1;
	//         }
	//     }
	// }
	// button {
	// 	margin: 2rem 0 4rem 2rem;
	// }
	// .div1 { grid-area: 1 / 1 / 4 / 3;
	// 	/* movie poster */
	// 	background: url(https://image.tmdb.org/t/p/w500/${posterPath}) center/cover no-repeat;
	// 	height:calc((var(--card-width)/2)*3);
	// 	border-radius: 10px;
	// }
	// .div2 { grid-area: 1 / 4 / 2 / 7; 
	// 	/* title */
	// 	font-size: 2rem;
	// 	font-weight: bold;
	// 	text-transform: uppercase;
	// 	/* -webkit-text-stroke-width: 1px;
	//   -webkit-text-stroke-color: black; */
	//   -webkit-text-fill-color: white; 
	//   height: 50px;
	// }
	// .div3 { grid-area: 2 / 4 / 4 / 7; 
	// /* description */
	// line-height: 2rem;
	// margin-bottom:2rem;
	// animation: fadeIn 4s  ease-in-out .5s  both;
	//     @keyframes fadeIn {
	//         0% {
	//             display: inline;
	//             opacity: 0;
	//             transform:translateY(15px) 
	//         }
	//         25% {
	//             display: inline;
	//             opacity: 1;
	//             transform:translateY(0) 
	//         }
	//         100% {
	//             opacity: 1;
	//         }
	//     }
	// }
	// .div4 { grid-area: 4 / 4 / 5 / 5; 
	// 		/* rating */
	// 		font-size: 1.5rem;
	// 		color:rgb(167, 255, 131);
	// 		animation: fadeIn 4s  ease-in-out 1s  both;
	// 		border: 1px solid rgb(167, 255, 131);
	// 		display:flex;
	// 		justify-content:center;
	// 		align-items:center;
	// 		border-radius: 10px;
	//     @keyframes fadeIn {
	//         0% {
	//             display: inline;
	//             opacity: 0;
	//             transform:translateY(15px) 
	//         }
	//         25% {
	//             display: inline;
	//             opacity: 1;
	//             transform:translateY(0) 
	//         }
	//         100% {
	//             opacity: 1;
	//         }
	//     }
	// 	span {
	// 		font-weight: bold;
	// 	}
	// }
	// .div5 { grid-area: 4 / 5 / 5 / 6;
	// 	/* trailer */
	//  }
	// .div6 { grid-area: 4 / 1 / 5 / 3;
	// 	/* release date */
	// 	margin: 1rem 0 0 0;
	// 	font-size: 1rem;
	// 	font-weight: bold;
	// 	text-transform: uppercase;
	//   -webkit-text-fill-color: white;  }
	// `

	const Actors = styled.div`
	margin-top:5rem;
	display: flex;
	flex-wrap:wrap;
	`

	const ActorCardContainer = styled.div`
    display:flex;
	flex-direction: column;
	width:200px;
	gap: 1rem;
	color: #fff;
	margin-bottom:2rem;
	cursor:pointer;

	a {
		all: unset
	}

`

	const ActorCardImg = styled.img`
width: 150px;
object-fit: cover;
border-radius: 10px;

`

	return (
		<MovieItemPageContainer>
			<button className='page-btn' onClick={(e) => backButton(e)}>BACK</button>

			<MovieContainer>
				<MovieBG >
				</MovieBG>
				<MovieInformationWrapper>
					<MoviePoster src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />





					<div className="parent">






						<div className='title'>   {title}</div>
						<div className="summary"> {overview}</div>
						<div>

						</div>
						<div className='releaseDate'>
							release date: {releaseDate}
						</div>
						<div> <p className='rating'> Rating: {Array(Math.round(rating / 2)).fill().map((_, i) => (<span>⭐️</span>))}</p>  </div>

					</div>











				</MovieInformationWrapper>
			</MovieContainer>
			<Trailer>
				<iframe width="560" height="315" src={youtubeLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</Trailer>
			<Actors>
				{/* <a href='#' onClick={(e) => actorButton(e)} backButton={backButton} actorNumber={0}><p>{movieCredits[0].name}</p></a>
				<a href='#' onClick={(e) => actorButton(e)} backButton={backButton} actorNumber={1}><p>{movieCredits[1].name}</p></a>
				<a href='#' onClick={(e) => actorButton(e)} backButton={backButton} actorNumber={2}><p>{movieCredits[2].name}</p></a> */}

				{movieCredits.map(actor => {
					return (
						
						

						<a href='#' onClick={(e) => actorButton(e)} backButton={backButton} actorNumber={actor.order}>
							<ActorCardContainer>
								<ActorCardImg src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
								<p>{actor.name}</p>

							</ActorCardContainer>
					
						
						</a>
					) 
				})}
			</Actors>


		</MovieItemPageContainer>
	);
}
export default MovieItemPage;
