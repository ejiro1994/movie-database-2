import React from "react";


const MovieItemPage = ({ movieDetails }) => {

	const title = movieDetails.title
	const adult = movieDetails.adult
	const bg = movieDetails.backdrop_path
	const overview = movieDetails.overview
	const posterPath = movieDetails.poster_path
	const releaseDate = movieDetails.release_date
	const voteAverage = movieDetails.vote_average


    let itembg = { background: `url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}) center/cover no-repeat` }


	return (

		<div className='MovieItemPage-container' style={itembg}>
				<div>title: {title}</div>
				<div>adult: {adult}</div>
				<div>bg: {bg}</div>
				<div>overview: {overview}</div>
				<div>posterpath: {posterPath}</div>
				<div>releaseDate: {releaseDate}</div>
				<div>voteAverage: {voteAverage}</div>
		</div>


	);
}
export default MovieItemPage;
