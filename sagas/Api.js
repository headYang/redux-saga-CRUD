//Send GET/POST api requests to server
const urlGetMovies = 'http://localhost:3000/movies';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []
    return movies;
}
function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(urlGetMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear,
        }),
    });
    console.log(`response = ${JSON.stringify(response)}`);
    return yield (response.status === 201); //true or false
}

export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi
};