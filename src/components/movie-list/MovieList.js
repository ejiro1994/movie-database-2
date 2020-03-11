import React from 'react';
import MovieItem from './MovieItem'



const MovieList = ({ movies, level, click }) => {
	return (
		<ul className="movie-list">
		{movies.map(movie => {
				return (
					<MovieItem key={movie.id} movie={movie} click={click}/>
				)
			})
		}
		</ul>
	);
}

export default MovieList;
  