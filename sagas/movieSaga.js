import { FETCH_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED } from '../actions/actionTypes';
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