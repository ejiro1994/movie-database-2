import React, { Component } from 'react'
import './App'
import './'
import FetchMovies from './FetchMovies'
import Header from './components/header/Header'
import MovieList from './components/movie-list/MovieList'
import Navigation from './components/navigation/Navigation'
import MovieItemPage from './components/movie-list/MovieItemPage'
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: "all",
			loading: false,
			movies: [],
			fullListOfMovies: [],
			page: 1,
			level: 0,
			currentMovieItem: {
				
			},
			currentMovieCredits: {
				
			},
			currentMovieTrailer: {
				
			},

		};
	}
	handleNavClick = async route => {
		this.setState({
			loading: true,
			level: 0,
			page: 1
		})
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
			this.setState({
				route: page,
				movies,
				loading: false
			})
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
			console.log('next')
			if (this.state.route === 'popular') {
				const movies = await FetchMovies.fetchPopular(null, this.state.page + 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page + 1
				}))
			} else if (this.state.route === 'top-rated') {
				const movies = await FetchMovies.fetchTopRated(null, this.state.page + 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page + 1
				}))
			} else if (this.state.route === 'upcoming') {
				const movies = await FetchMovies.fetchUpcoming(null, this.state.page + 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page + 1
				}))
			} else if (this.state.route === 'all') {
				const movies = await FetchMovies.fetchAllMovies(null, this.state.page + 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page + 1
				}))
			}
		}
		if (type === 'prev' && this.state.page > 1) {
			if (this.state.route === 'popular') {
				const movies = await FetchMovies.fetchPopular(null, this.state.page - 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page - 1
				}))
			} else if (this.state.route === 'top-rated') {
				const movies = await FetchMovies.fetchTopRated(null, this.state.page - 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page - 1
				}))
			} else if (this.state.route === 'upcoming') {
				const movies = await FetchMovies.fetchUpcoming(null, this.state.page - 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page - 1
				}))
			} else if (this.state.route === 'all') {
				const movies = await FetchMovies.fetchAllMovies(null, this.state.page - 1)
				this.setState(prevState => ({
					movies,
					page: prevState.page - 1
				}))
			}
		}
	}
	handleItemClick = async (e) => {
		e.preventDefault();
		console.log('ITEM CLICKED');
		// console.log(e.currentTarget.attributes.movieitemid.value);
		console.log('the state level', this.state.level);
		const movies = this.state.movies
		const movieitemid = e.currentTarget.attributes.movieitemid.value
		console.log('the movie item id is ', movieitemid);


		let movieCredits = await FetchMovies.fetchCredits(movieitemid)
		let movieTrailer = await FetchMovies.fetchTrailers(movieitemid)

		
		


		const clickedMovie = movies.filter(movie => {
			return movie.id == movieitemid;
		})
		// let level = this.state.level
		this.setState({
			level: 1,
			currentMovieItem: clickedMovie[0],
			currentMovieCredits: movieCredits,
			currentMovieTrailer: movieTrailer

		}
		)
		console.log('the movie creditsssssss',movieCredits);

		console.log('clicked movie', clickedMovie)


		console.log('these are the trailersssssssss' ,  movieTrailer  )
	}


	clickToBackOneLevel = (e) => {
		this.setState({
			level: 0,
		}
		)
	}
	componentDidMount() {
		this.fetchData()
	}
	render() {
		// console.log(this.state)
	
		const level = this.state.level
		const loading = this.state.loading
		if (!loading) {
			switch (level) {
				case 0:
					return (
						<div>

							<Header />
							<Navigation click={this.handleNavClick} />
							<div className='page-nav'>
								<button className='page-btn' onClick={() => this.changePage('prev')}><span className='fa fa-caret-left'></span>&nbsp;PREV</button>
								<button className='page-btn' onClick={() => this.changePage('next')} >NEXT&nbsp;<span className='fa fa-caret-right'></span></button>
							</div>
							<MovieList movies={this.state.movies} click={this.handleItemClick} />
						<div className='header-bg'></div>

						</div>
					);
				case 1:
					return (
						<div>

							<Header />
							<Navigation click={this.handleNavClick} />
							<MovieItemPage movieDetails={this.state.currentMovieItem} movieCredits={this.state.currentMovieCredits} movieTrailer={this.state.currentMovieTrailer} backButton={this.clickToBackOneLevel} />
						<div className='header-bg'></div>

						</div>
					);
			
			}
		
		}
		return (
			<div>
				<Header />
				<Navigation click={this.handleNavClick} />
				<svg xmlns="http://www.w3.org/2000/svg" className='loader' width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block"> <circle cx="50" cy="50" r="32" strokeWidth="4" stroke="#fff" strokeDasharray="50.26548 50.26548" fill="none" strokeLinecap="round" transform="rotate(193.247 50 50)"> <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50" /> </circle>
				</svg>
				<div className='header-bg'></div>

			</div>
		)
	}
}
export default App
/*
check if state is loading, if equal to false then enter second if conditional where you ask if level is equal to 0 or 1 etc
exit initial if statement to an else block which contains the return statement with loader in
*/
