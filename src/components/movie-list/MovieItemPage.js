import React from "react";
import styled from 'styled-components';



const MovieItemPage = ({ movieDetails }) => {




	const title = movieDetails.title
	const adult = movieDetails.adult
	const bg = movieDetails.backdrop_path
	const overview = movieDetails.overview
	const posterPath = movieDetails.poster_path
	const releaseDate = movieDetails.release_date
	const voteAverage = movieDetails.vote_average
	const movieBackdrop = `url(https://image.tmdb.org/t/p/w500/${bg}) center/cover no-repeat`





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

	@media (max-width: 768px) {
		margin:0 ;

  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .3; }

    
}

	

}


&:after {
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
	margin:var(--margin-size);

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


}
.div3 { grid-area: 2 / 4 / 4 / 7; 
/* description */
}
.div4 { grid-area: 4 / 4 / 5 / 5; 
		/* rating */
		color:rgb(167, 255, 131);

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
	font-size: 2rem;
	font-weight: bold;
	text-transform: uppercase;
  -webkit-text-fill-color: white;  }


`


	// let itembg = { background: `url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}) center/cover no-repeat` }


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

					
					{/* <div>title: {title}</div>
					<div>adult: {adult}</div>
					<div>bg: {bg}</div>
					<div>overview: {overview}</div>
					<div>posterpath: {posterPath}</div>
					<div>releaseDate: {releaseDate}</div>
					<div>voteAverage: {voteAverage}</div> */}




					<div className="parent">
						<div className="div1"> </div>
						<div className="div2">   {title}</div>
						<div className="div3"> {overview}</div>
						<div className="div4"> Rating: <span className='span'>{voteAverage}</span> </div>
						<div className="div5"> Watch Trailer</div>
						<div className="div6"> release date: {releaseDate}</div>
					</div>
				</MovieInformation>

			</MovieContainer>
		</div>


	);
}
export default MovieItemPage;
