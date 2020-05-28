import axios from 'axios'
class FetchMovies {
    static async fetchPopular(query, page = 1) {
        let url
        try {
            if (query) {
                url = `https://api.themoviedb.org/3/movie/popular?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=${page}&${query}`
            } else {
                url = `https://api.themoviedb.org/3/movie/popular?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=${page}`
            }
        } catch (e) {
            console.log(e)
        }
        const response = await axios.get(url)
        return response.data.results
    }
    static async fetchTopRated(query, page = 1) {
        let url
        try {
            if (query) {
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=${page}&${query}`
            } else {
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=${page}`
            }
        } catch (e) {
            console.log(e)
        }
        const response = await axios.get(url)
        return response.data.results
    }
    static async fetchSortedMovies(sortBy) {
        const movies = await this.fetchMovies(`sort_by=${sortBy}`)
        return movies
    }
    static async fetchUpcoming(query, page = 1) {
        let url
        try {
            if (query) {
                url = `https://api.themoviedb.org/3/movie/upcoming?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=${page}&${query}`
            } else {
                url = `https://api.themoviedb.org/3/movie/upcoming?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US&page=${page}`
            }
        } catch (e) {
            console.log(e)
        }
        const response = await axios.get(url)
        return response.data.results
    }
    static async fetchAllMovies(query, page = 1) {
        let url
        try {
            if (query) {
                url = `https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&page=${page}&${query}`
            } else {
                url = `https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&page=${page}`
            }
        } catch (e) {
            console.log(e)
        }
        const response = await axios.get(url)
        return response.data.results
    }



    static async fetchCredits(movie_id) {
        let url
        try {
            if (movie_id){

                url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=fa141d49d3a1e439372e15d61f4d4607&language=en-US`
            }
        } catch (e) {
            console.log(e)
        }
        const response = await axios.get(url)
        return response.data.results
    }
}
export default FetchMovies
