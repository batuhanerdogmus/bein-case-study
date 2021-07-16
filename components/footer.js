import { StyledFooter } from "../styles/styledFooter";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-left-colmn">
        <div className="footer-left-colmn-1">
          <ul>
            <li>keşfet</li>
            <li>film</li>
            <li>dizi</li>
            <li>spor</li>
            <li>çocuk</li>
            <li>canlı tv</li>
            <li>trt ebatv</li>
          </ul>
        </div>
        <div className="footer-left-colmn-2"></div>
        <ul>
          <li>Kısa Yollar</li>
          <li>Site Haritası</li>
          <li>Planlar</li>
          <li>Kupon Kodu</li>
          <li>Sıkça Sorulan Sorular</li>
          <li>Canlı Yardım</li>
        </ul>
        <div className="footer-left-colmn-3">
          <ul>
            <li>Legal</li>
            <li>Telif Hakkı Uyarısı</li>
            <li>Müşteri Aydınlatma Metni</li>
            <li>Çerez Aydınlatma Metni</li>
          </ul>
        </div>
      </div>
      <div className="footer-right-colmn">
        <div className="footer-right-colmn-1">
          <Image src={facebook} alt="facebook icon" width={50} height={50} />
        </div>
        <div className="footer-right-colmn-2">
          <Image src={instagram} alt="instagram icon" width={50} height={50} />
        </div>
      </div>
    </StyledFooter>
  );
}
