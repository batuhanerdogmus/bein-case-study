import { StyledMovieCard } from "../styles/styledMovies";
import Link from "next/link";
import slug from "slug";

export default function MovieCard({ movie }) {
  return (
    <StyledMovieCard>
      <div key={movie.id} className="movie-card">
        <img src={movie.image} alt="" />
        {/* hover content */}
        <div className="movie-card-content">
          <h3>{movie.title}</h3>
          <span>tür: {movie.genre}</span>
          <p>{movie.description}</p>
          <div className="movie-card-button">
            {/* dynamic routing */}
            <Link href={`/${movie.type}/${slug(movie.title)}-${movie.id}`}>
              <a>Hemen izle</a>
            </Link>
          </div>
        </div>
      </div>
    </StyledMovieCard>
  );
}
