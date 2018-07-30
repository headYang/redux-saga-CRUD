import { ADD_MOVIE, FETCH_FAILED, FETCH_MOVIE, FETCH_SUCCEEDED } from '../actions/actionTypes';

const INITIAL_STATE = [{ name: '', releaseYear:''}];

const movieReducers = (movies = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        case ADD_MOVIE:
            console.log(action);
            return [
                ...movies,
                { name: action.payload.newMovie, releaseYear: action.payload.releaseYear }
            ];
        
        default: 
            return movies;
    }
}
export default movieReducers;