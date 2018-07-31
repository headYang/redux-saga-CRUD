import { ADD_MOVIE, FETCH_FAILED, FETCH_MOVIE, FETCH_SUCCEEDED, UPDATE_MOVIE } from './actionTypes';

export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIE,
        sort
    }
}

export const addMovieAction = (newMovie) => {
    // console.log(newMovie);
    return {
        type: ADD_MOVIE,
        newMovie
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
//update existing movie
export const updateItemAction = (updateMovie) => {
    return {
        type: UPDATE_MOVIE,
        updateMovie
    }
}
//action sent by redux-saga
export const updateItemSuccessAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie
    }
}