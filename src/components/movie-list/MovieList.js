import React from 'react';
import MovieItem from './MovieItem'



const MovieList = ({ movies, level, clickForMoreInfo }) => {
	return (
		<ul className="movie-list">
		{movies.map(movie => {
				return (
					<MovieItem key={movie.id} movie={movie} clickForMoreInfo={clickForMoreInfo}/>
				)
			})
		}
		</ul>
	);
}

export default MovieList;
  