import { ADD_MOVIE, FETCH_FAILED, FETCH_MOVIE, FETCH_SUCCEEDED, UPDATE_MOVIE } from '../actions/actionTypes';

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
                { name: action.newMovie.newMovie, releaseYear: action.newMovie.releaseYear }
            ];
        // case ADD_MOVIE:
        //     return
        case UPDATE_MOVIE:
            movies.map(editMovie => 
                (editMovie.id.toString() === action.updateMovie.id) ?
                    {
                        ...editMovie,
                        name: action.updateMovie.name,
                        releaseYear: action.updateMovie.releaseYear
                    }
                    : editMovie
                
                )
        default: 
            return movies;
    }
}
export default movieReducers;