import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';
import { addMovieAction, fetchFailedAction, fetchSuccessAction, fetchMoviesAction } from '../actions';

//Action
const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction());
        },
        // onSuccessFetch: () => {
        //     dispatch(fetchSuccessAction());
        // },
        onAddMovie: (newmoive) => {
            dispatch(addMovieAction(newmoive));
        }
    }
};

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;