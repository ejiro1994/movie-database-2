import React from "react";

const MovieItem = ({ movie, clickForMoreInfo }) => {

    let bg = { background: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}) center/cover no-repeat` }

    // console.log(bg);
    return (
        // <div className="movieCard">
        <li className="movie-item card"  movieitemid={movie.id} onClick={(e) => clickForMoreInfo(e)}>
            <div>
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
            </div>
        </li>

    );
}

export default MovieItem;
