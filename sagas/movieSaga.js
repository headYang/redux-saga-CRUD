import { FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED, ADD_MOVIE } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects'; 
import { Api } from './Api';

function* fetchMovie() {
    try{
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error});

    }   
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIE, fetchMovie);
}
function* addNewMovie(action) {
    try {
        console.log('action:', action);
        const result = yield Api.insertNewMovieFromApi(action.newMovie);
        if(result === true) {
            put({type: FETCH_MOVIE, sort: 'desc'});
        }
    } catch(error) {
        console.log(error)
    }
}

export function* watchAddNewMovie() {
    // yield takeLatest(ADD_MOVIE, addNewMovie);
}