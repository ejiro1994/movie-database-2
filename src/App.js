import React, { Component } from 'react'
import './App'

import FetchMovies from './FetchMovies'

import MovieList from './components/movie-list/MovieList'
import Navigation from './components/navigation/Navigation'


class App extends Component {

	state = {
		route: "all",
		loading: false,
		movies: [],
		fullListOfMovies: [],
		page: 1
	}

	handleClick = async route => {
		this.setState({ loading: true })
		let movies = []
		let page

		switch(route) {
			case 'all':
				page = 'all'
				movies = this.state.fullListOfMovies
			break;

			case 'popular':
				page = 'popular';
				movies = await FetchMovies.fetchPopular()
			break;

			case 'top-rated':
				page = 'top-rated';
				movies = await FetchMovies.fetchTopRated()
			break;

			case 'upcoming':
				page = 'upcoming';
				movies = await FetchMovies.fetchUpcoming()
			break;
	
			default: 
				page = 'all'
				movies = this.state.fullListOfMovies
			break;
		}

		console.log('MOVIES', movies)
		setTimeout(() => {
			this.setState({ route : page, movies, loading: false })
		}, 1000)
	}

	// fetch URL = themovedb/allmovies
	// click event for popular which updates the feth URL to be URL = themoviedb/popularmovies

	

	fetchData = async () => {
		try {
			this.setState({ loading: true })
			const movies = await FetchMovies.fetchAllMovies()
			this.setState({
				loading: false,
				fullListOfMovies: movies,
				movies
			})

		} catch (e) {
			console.log(e.response.status)
		}
	}

	changePage = async type => {
		if(type === 'next') {
			const movies = await FetchMovies.fetchAllMovies(null, this.state.page + 1)
			this.setState(prevState => ({
				movies,
				page: prevState.page + 1
			}))
		} else if(type === 'prev') {
			if(this.state.page > 1) {
				const movies = await FetchMovies.fetchAllMovies(null, this.state.page - 1)
				this.setState(prevState => ({
						movies,
						page: prevState.page - 1
				}))
			}
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	render() {
		console.log(this.state)
		if(this.state.loading) return <p>Loading...</p>
		return (
			<div>
				<Navigation click={this.handleClick} />
				<MovieList movies={this.state.movies} />
				<div>

					<button onClick={() => this.changePage('prev')}>PREV</button>
					<button onClick={() => this.changePage('next')}>NEXT</button>

				</div>
			</div>


		)
	}
}


export default App