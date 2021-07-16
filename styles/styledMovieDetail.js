import styled from "styled-components";

export const StyledMovieDetail = styled.div`
  background: black;
  width: 100vw;
  overflow: hidden;
  margin-top: 4em;
  .movie-detail-container {
    padding: 6em 5%;
    gap: 2em;
    position: relative;
    color: white;
    z-index: 1;
    display: flex;
    width: 100%;
    & > * {
      flex: 0 1 33%;
    }
  }
  .movie-detail-img {
    height: 30em;
    object-fit: contain;
  }
  .movie-detail-background {
    width: 100vw;
    object-fit: cover;
    height: 100%;
    opacity: 0.6;
    filter: blur(24px);
    position: absolute;
    z-index: -1;
    top: 0;
  }

  .movie-detail-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      padding: 1em 0.5em;
      margin: 1em 0;
      margin-right: 1em;
      text-align: center;
      color: white;
      font-weight: 600;
      text-transform: capitalize;
      min-width: 10em;
      max-width: 14em;
      max-height: 4em;
      width: 50%;
      padding: 1em 0.5em;
      border-radius: 5px;
      border-width: 2px;
      background: #25265a;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    .movie-detail-container {
      flex-direction: column;
      & > * {
        flex: 0 1 auto;
      }
    }
    .movie-detail-buttons {
      flex-direction: row;
      justify-content: center;
    }
  }
  @media screen and (max-width: 425px) {
    .movie-detail-buttons {
      flex-wrap: wrap;
    }
  }
`;
