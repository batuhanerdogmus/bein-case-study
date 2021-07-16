import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledMovieSlider } from "../styles/styledMovies";
import Link from "next/link";
import slug from "slug";
import MovieCard from "./movieCard";

//customize the arrows

function ArrowLeft(props) {
  return (
    <svg
      onClick={props.onClick}
      className="arrow arrow-left"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path d="M13.52.47a1.65 1.65 0 0 0-2.308 0L.382 11.098a1.257 1.257 0 0 0 0 1.804l10.83 10.628a1.65 1.65 0 0 0 2.307 0 1.577 1.577 0 0 0 0-2.264l-9.436-9.272 9.45-9.273A1.573 1.573 0 0 0 13.518.47z" />
    </svg>
  );
}
function ArrowRight(props) {
  return (
    <svg
      onClick={props.onClick}
      className="arrow arrow-right"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      <path d="M.48.47a1.65 1.65 0 0 1 2.308 0l10.83 10.628a1.257 1.257 0 0 1 0 1.804L2.789 23.53a1.65 1.65 0 0 1-2.307 0 1.577 1.577 0 0 1 0-2.264l9.436-9.272L.467 2.72A1.573 1.573 0 0 1 .482.47z" />
    </svg>
  );
}

export default function MovieSlider({ seed, des, genre, type }) {
  //slider settings
  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <StyledMovieSlider>
      <div className="top-content">
        <div className="top-content-info">
          <h2>{genre}</h2>
          <p>{des}</p>
        </div>
        <div className="top-content-button">
          <Link href={`/${type}`}>
            <a>Tüm {genre}i Gör</a>
          </Link>
        </div>
      </div>
      <Slider {...settings}>
        {seed.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Slider>
    </StyledMovieSlider>
  );
}
