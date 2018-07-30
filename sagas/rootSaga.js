import { call, all, fork } from 'redux-saga/effects';
import { watchFetchMovies, watchAddNewMovie } from './movieSaga';

export default function* rootSaga() {
    yield [
        fork(watchAddNewMovie),
        fork(watchFetchMovies)
    ]
}