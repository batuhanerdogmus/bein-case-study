import API from "../../components/constant";
import slug from "slug";
import { StyledMovieDetail } from "../../styles/styledMovieDetail";
import Layout from "../../components/layout";
import Head from "next/head";

const FilmDetail = ({ movie }) => {
  return (
    <Layout>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <StyledMovieDetail>
        <div className="movie-detail-container">
          <img src={movie.image} className="movie-detail-background" />
          <img src={movie.image} alt="" className="movie-detail-img" />
          <div className="movie-detail-description">
            <h1>{movie.title}</h1>
            <p>Tür: {movie.genre} </p>
            <p>Yetişkinlik düzeyi: {movie.maturity} </p>
            <p> {movie.description} </p>
          </div>
          <div className="movie-detail-buttons">
            <div className="movie-detail-button">
              <a href="#">Giriş Yap</a>
            </div>
            <div className="movie-detail-button">
              <a href="#">30 Gün Ücrestiz İzle</a>
            </div>
          </div>
        </div>
      </StyledMovieDetail>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${API}/series`);
  const series = await res.json();
  const paths = series.map((serie) => {
    return { params: { slug: `${slug(serie.title)}-${serie.id}` } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // taking out id from route
  const id = params.slug.split("-").slice(-1)[0];
  // using id for fetch the data
  const res = await fetch(`${API}/series/` + id);
  const movie = await res.json();
  return {
    props: { movie },
  };
}

export default FilmDetail;
