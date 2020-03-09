import React, { Component } from 'react'
import './App'
import './'
import FetchMovies from './FetchMovies'
import Header from './components/header/Header'
import MovieList from './components/movie-list/MovieList'
import Navigation from './components/navigation/Navigation'

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state =  {
			route: "all",
			loading: false,
			movies: [],
			fullListOfMovies: [],
			page: 1,
			level: 0
		};
	  }
	
	
	// state = {
	// 	route: "all",
	// 	loading: false,
	// 	movies: [],
	// 	fullListOfMovies: [],
	// 	page: 1,
	// 	level: 0
	// }
	handleNavClick = async route => {
		this.setState({ loading: true })
		let movies = []
		let page
		switch (route) {
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
		// console.log('MOVIES', movies)
		setTimeout(() => {
			this.setState({ route: page, movies, loading: false })
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
		if (type === 'next') {
			const movies = await FetchMovies.fetchAllMovies(null, this.state.page + 1)
			this.setState(prevState => ({
				movies,
				page: prevState.page + 1
			}))
		} else if (type === 'prev') {
			if (this.state.page > 1) {
				const movies = await FetchMovies.fetchAllMovies(null, this.state.page - 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page - 1
				}))
			}
		}
	}

	handleItemClick =   e => {
		let level = this.state.level
		this.setState({
			level : level + 1

		}
		
		)

		
		console.log('ITEM CLICKED');
		// console.log(e.target);

		
}

componentDidMount() {
	this.fetchData()
}
render() {
	// console.log(this.state)
	if (this.state.loading)
		return (
			<div>
				<Header />
				<Navigation click={this.handleNavClick} />
				<svg xmlns="http://www.w3.org/2000/svg" className='loader' width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block"> <circle cx="50" cy="50" r="32" strokeWidth="4" stroke="#fff" strokeDasharray="50.26548 50.26548" fill="none" strokeLinecap="round" transform="rotate(193.247 50 50)"> <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50" /> </circle>
				</svg>
			</div>
		)
	else if (!this.state.loading)
		return (
			<div>
				<Header />
				<Navigation click={this.handleNavClick} />
				{/* <div><iframe width="560" height="315" src="https://www.youtube.com/embed/Nvb9cDDFHtk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> */}
				<div className='page-nav'>
					<button className='page-btn' onClick={() => this.changePage('prev')}><span className='fa fa-caret-left'></span>&nbsp;PREV</button>
					<button className='page-btn' onClick={() => this.changePage('next')} >NEXT&nbsp;<span className='fa fa-caret-right'></span></button>
				</div>
				<MovieList movies={this.state.movies} click={this.handleItemClick} />
			</div>
		)

}
}
export default App