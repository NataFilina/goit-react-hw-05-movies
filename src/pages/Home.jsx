import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchMovies } from 'hooks';
import { ThreeCircles } from 'react-loader-spinner';

const Home = () => {
  const { movies, error, isLoading } = useFetchMovies();
  return (
    <>
      {isLoading && (
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{ margin: '0 47%' }}
        />
      )}
      {error && <h2>Something went wrong</h2>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
