import axios from 'axios'

class FetchMovies {
    static async fetchReviews(movieId) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=1`);
            return response.data.results
        } catch (e) {
            console.log(e)
        }
    }
    
    static async fetchPopular() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=1`);
            return response.data.results
        } catch (e) {
            console.log(e)
        }
    }
    
    static async fetchTopRated() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=1`);
            return response.data.results
        } catch (e) {
            console.log(e)
        }
    }
    
    static async fetchUpcoming() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=1`);
            return response.data.results
        } catch (e) {
            console.log(e)
        }
    }
    
    static async fetchSortedMovies(sortBy) {
        const movies = await this.fetchMovies(`sort_by=${sortBy}`)
        return movies
    }
    
    static async fetchAllMovies(query, page = 1) {
        let url
    
        if(query) {
            url = `https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&page=${page}&${query}`
        } else {
            url = `https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&page=${page}`
    
        }
    
        const response = await axios.get(url)
        return response.data.results
    }
}

export default FetchMovies
