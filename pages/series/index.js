import API from "../../components/constant";
import { StyledMovieList } from "../../styles/styledMovies";
import MovieCard from "../../components/movieCard";
import Layout from "../../components/layout";
import Head from "next/head";
const MovieList = ({ movies }) => {
  return (
    <Layout>
      <Head>
        <title>Diziler</title>
      </Head>
      <StyledMovieList>
        <div className="movie-list-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </StyledMovieList>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API}/series`);
  const movies = await res.json();
  return {
    props: { movies },
  };
}
export default MovieList;
