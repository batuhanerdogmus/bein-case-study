import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 4em;
  .banner-cover {
    background-image: linear-gradient(to bottom, rgba(3, 3, 40, 0) 46%, #030328),
      radial-gradient(
        circle at 41% 76%,
        rgba(3, 3, 40, 0.2),
        rgba(3, 3, 40, 0.06) 28%,
        #030328 51%
      );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .slick-list {
    height: 100vh;
  }
  .slick-slider {
    height: 100vh;
  }
  .banner-img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  .banner-img-mobile {
    display: none;
    width: 100vw;
    object-position: top;
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
    right: 5px;
  }
  .arrow-left {
    left: 16px;
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    top: 55%;
    list-style-type: none;

    li {
      margin: 0 0.25rem;
      text-decoration: none;
      width: 4rem;
    }
    .slick-active button {
      background-color: white;
    }
    button {
      display: block;
      width: 4rem;
      height: 0.2rem;
      padding: 0;
      background-color: rgba(216, 216, 216, 0.5);
      &::before {
        display: none;
      }
    }
  }
  .banner-info {
    position: absolute;
    top: 22vh;
    color: white;
    padding: 0 4em;
    z-index: 10;

    .info-title {
      font-size: 2.75em;
      font-weight: 800;
    }
    .info-des {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #cacccd;
      margin-bottom: 30px;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: -0.5px;
      font-size: 16px;
      font-weight: 700;
      height: 50px;
      width: 220px;
      background: #a71d8e;
      color: #fff;
      border-radius: 6px;
    }
  }

  @media screen and (max-width: 768px) {
    .arrow {
      display: none;
    }
    .slick-dots {
      top: 75%;
    }
    .banner-img {
      display: none;
    }
    .banner-img-mobile {
      display: block;
      height: 100vh;
      object-fit: cover;
    }
    .banner-info {
      text-align: -webkit-center;
      top: 45vh;
      width: 100vw;
      padding: 0;
      .info-title {
        font-size: 1.85em;
        font-weight: 800;
      }
      .info-des {
        margin-bottom: 16px;
      }
    }
  }
`;
