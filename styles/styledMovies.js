import styled from "styled-components";

// movie card

export const StyledMovieCard = styled.div`
  //slider card
  .movie-card:hover .movie-card-content {
    opacity: 1;
    border-radius: 1em;
  }
  .movie-card {
    text-align: center;
    position: relative;
    width: 90%;
  }

  img {
    width: 90%;
    height: 20em;
    object-fit: fill;
    overflow: hidden;
    border-radius: 1em;
    transition: all 0.2s ease-in;
  }

  .movie-card-content {
    background-image: linear-gradient(
        to top,
        rgba(127, 82, 158, 0.9),
        rgba(92, 45, 145, 0.9) 63%,
        rgba(37, 38, 90, 0.9)
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
    padding: 0 0.8em;
    text-align: left;
    position: absolute;
    z-index: 10;
    top: 0;
    transition: all 1.5s ease;
    opacity: 0;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    color: white;
    overflow: hidden;
  }

  .movie-card-button {
    min-width: 7em;
    width: 50%;
    padding: 2px;
    height: 30px;
    border-radius: 5px;
    border-width: 2px;
    background: #25265a;
    background: linear-gradient(90deg, #25265a 0, #5c2d91 60%, #7f529e 98%);
    opacity: 0.9;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 1;
      padding: 3px;
    }
    a {
      justify-content: center;
      background: #160a36;
      background: linear-gradient(90deg, #160a36 0, #241242 100%);
      display: flex;
      height: 100%;
      align-items: center;
      font-weight: 700;
      letter-spacing: -0.46px;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      max-width: 10em;
      width: 90%;
      height: 12em;
      object-fit: cover;
    }

    .movie-card-content {
      padding: 0 0.4em 0;

      h3 {
        font-size: 1.1em;
        margin: 6px 0 0;
      }
      p {
        font-size: 0.7em;
        margin: 4px 0 0;
      }
      span {
        font-size: 0.65em;
      }
    }
    .movie-card-button {
      min-width: 5em;
      width: 50%;
      height: 25px;
      a {
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: -0.46px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    //slider card responsive
    .movie-card-content {
      padding: 0 0.3em 0;
      h3 {
        font-size: 0.9em;
      }
      p {
        font-size: 0.7em;
        margin-top: 6px;
      }
    }
  }
`;

// movie slider

export const StyledMovieSlider = styled.div`
  padding: 40px 5%;
  border-bottom: 1px solid #201a3c;
  margin-bottom: 10em;

  //top content

  .top-content {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 5% 0 0;
    margin-bottom: 2em;
    .top-content-info * {
      margin: 0;
    }
    p {
      opacity: 0.6;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .top-content-button {
    padding: 2px;
    height: 30px;
    border-radius: 5px;
    border-width: 2px;
    background: #25265a;
    background: linear-gradient(90deg, #25265a 0, #5c2d91 60%, #7f529e 98%);
    opacity: 0.9;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 1;
      padding: 3px;
    }
    a {
      min-width: 12em;
      justify-content: center;
      background: #160a36;
      background: linear-gradient(90deg, #160a36 0, #241242 100%);
      display: flex;
      height: 100%;
      align-items: center;
      font-weight: 700;
      letter-spacing: -0.46px;
    }
  }

  //slider

  .slick-slide {
    text-align: -webkit-center;
  }
  .slick-slider,
  .slick-list,
  .slick-track {
    height: 20em;
  }
  .arrow {
    position: absolute;
    top: 47%;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    fill: white;
  }
  .arrow-right {
    right: -2em;
  }
  .arrow-left {
    left: -3em;
  }
  @media screen and (max-width: 768px) {
    //top content responsive

    .top-content-button {
      a {
        min-width: 10em;
      }
    }

    //slider responsive
    .arrow {
      display: none;
    }
    .slick-slider,
    .slick-list,
    .slick-track {
      height: 12em;
    }
  }
  @media screen and (max-width: 425px) {
    //top content responsive
    .top-content {
      flex-direction: column;
    }
    .top-content-button {
      align-self: start;
      margin-top: 1em;
    }
  }
`;

//movie list

export const StyledMovieList = styled.div`
  background: black;
  color: white;
  margin-top: 4em;
  padding: 3em 0;

  .movie-list-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    width: 90%;
    margin: auto;
  }
  .movie-card-content {
    left: 5%;
  }
  @media screen and (max-width: 768px) {
    .movie-list-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
