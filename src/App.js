import React, { Component } from 'react'
import './App'
import './'

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
		if(this.state.loading) return <div > <Navigation click={this.handleClick} /><svg className='loader' xmlns="http://www.w3.org/2000/svg"  width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block"> <path d="M21.95034 79.53448a40 40 0 0054.63845-58.43492 42 40 43.077 01-54.63845 58.43492" fill="#fff"> <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"/> </path> </svg></div>
		return (
			<div>
				<Navigation click={this.handleClick} />
				{/* <div><iframe width="560" height="315" src="https://www.youtube.com/embed/Nvb9cDDFHtk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
				<div className='page-nav'>
					<button className='page-btn' onClick={() => this.changePage('prev')}><span className='fa fa-caret-left'></span>&nbsp;PREV</button>
					<button className='page-btn' onClick={() => this.changePage('next')} >NEXT&nbsp;<span className='fa fa-caret-right'></span></button>
				</div>
				<MovieList movies={this.state.movies}/>
				
			</div>


		)
	}
}


export default App