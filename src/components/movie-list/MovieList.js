import React from 'react';
import MovieItem from './MovieItem'

import './movie-list.scss'

const MovieList = ({ movies }) => {
	return (
		<ul className="movie-list">
		{movies.map(movie => {
				return (
					<MovieItem key={movie.id} movie={movie}/>
				)
			})
		}
		</ul>
	);
}

export default MovieList;
