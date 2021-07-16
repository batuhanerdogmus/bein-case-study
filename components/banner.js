import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledBanner } from "../styles/styledBanner";

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

export default function Banner() {
  //slider settings
  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <StyledBanner>
      <Slider {...settings}>
        <div>
          <img
            className="banner-img"
            src="https://beinconnect.azureedge.net/uploads/promo/39e9dc8f-2d45-48e3-a579-38e686f743aa.jpg"
            alt="lig"
          />
          <img
            className="banner-img-mobile"
            src="https://beinconnect.azureedge.net/uploads/promo/55f2754e-d183-46e0-a930-10059bbf9365.jpg"
            alt="lig-mobile"
          />

          {/* gradient cover */}
          <div className="banner-cover"></div>

          {/* info card */}
          <div className="banner-info">
            <div className="info-title"> Süper Lig'de Son Fırsat! </div>
            <div className="info-des">
              Gelecek sezon Süper Lig heyecanını kaçırma! <br /> Üstelik Yeni
              Sezon öncesi son fırsat!
            </div>
            <a>Hemen Satın Al</a>
          </div>
        </div>
        <div>
          <img
            className="banner-img"
            src="https://beinconnect.azureedge.net/uploads/promo/48755069-7333-4036-bae6-a20ea7b22d9e.jpg"
            alt="nevers"
          />
          <img
            className="banner-img-mobile"
            src="https://beinconnect.azureedge.net/uploads/promo/93405087-5603-45af-bf37-8416a8603a87.jpg"
            alt="nevers-mobile"
          />
          <div className="banner-info">
            <div className="info-title"> Mare of Easttown </div>
            <div className="info-des">
              "Mare of Easttown" tüm bölümleriyle beIN Connect'te! <br />{" "}
              Üstelik 30 Gün Ücretsiz!
            </div>
            <a>30 Gün Ücretsiz İzle!</a>
          </div>
        </div>
        <div>
          <img
            className="banner-img"
            src="https://beinconnect.azureedge.net/uploads/promo/f3d4f37d-a378-43c5-bce1-40592077a7fc.jpg"
            alt="easttown"
          />
          <img
            className="banner-img-mobile"
            src="https://beinconnect.azureedge.net/uploads/promo/2788d0c5-d5a1-4d24-97d2-b34d51058893.jpg"
            alt="easttown-mobile"
          />
          <div className="banner-info">
            <div className="info-title"> The Nevers </div>
            <div className="info-des">
              HBO'nun merakla beklenen dizisi Eğlence Paketi'nde! <br /> Üstelik
              30 Gün Ücretsiz!
            </div>
            <a>30 Gün Ücretsiz İzle!</a>
          </div>
        </div>
      </Slider>
    </StyledBanner>
  );
}
