import { ADD_MOVIE, FETCH_FAILED, FETCH_MOVIE, FETCH_SUCCEEDED } from './actionTypes';

export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIE,
        sort
    }
}

export const addMovieAction = (newMovie, releaseYear) => {
    return {
        type: ADD_MOVIE,
        payload: {
            newMovie,
            releaseYear
        }
    }
}

//Action sent by Redux-saga
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }   
}