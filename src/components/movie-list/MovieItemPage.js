import React from "react";


const MovieItemPage = ({ movieDetails }) => {

	const title = movieDetails.title
	const adult = movieDetails.adult
	const bg = movieDetails.backdrop_path
	const overview = movieDetails.overview
	const posterPath = movieDetails.poster_path
	const releaseDate = movieDetails.release_date
	const voteAverage = movieDetails.vote_average

	return (

		<>
			<p>
				<div>title: {title}</div>
				<div>adult: {adult}</div>
				<div>bg: {bg}</div>
				<div>overview: {overview}</div>
				<div>posterpath: {posterPath}</div>
				<div>releaseDate: {releaseDate}</div>
				<div>voteAverage: {voteAverage}</div>
			</p>
		</>


	);
}
export default MovieItemPage;
