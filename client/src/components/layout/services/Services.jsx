import { Link } from "react-router-dom";
import "./Services.css";
import { scrollToTop } from "../../../hooks/useScrollToTop";

export const Services = () => {
  return (
    <div className="services" id="services">
      <h1>USLUGE</h1>
      <div className="services-first-section">

        <div className="service">
          <div className="image-container">
            <img src="binjovic1.jpg" alt="binjovic" width={"350px"} />
            <div className="overlay-text">Hair Colour Services</div>
          </div>
          <div className="service-content">
            <h2>BALAYAGE HAIR COLOUR</h2>
            <p>Balayage is a French word meaning to sweep or to paint. It allows for a sun-kissed natural looking hair colour.</p>
            
            <Link to={"/reservation"}><button  onClick={scrollToTop} className="service-button">ZAKAŽI SVOJ TRETMAN</button></Link>
          </div>
        </div>

        <div className="service">
          <div className="image-container">
            <img src="binjovic3.jpg" alt="binjovic" width={"350px"} />
            <div className="overlay-text">Haircuts Services</div>
          </div>
          <div className="service-content">
            <h2>ŠIŠANJE ZA SVE DUŽINE KOSE</h2>
            <p>Bilo da želite da promenite dužinu, stil, šiške ili nešto drugo, naš tim će vam pomoći da pronađete izgled koji je savršen za vas.</p>

            <Link to={"/reservation"}><button  onClick={scrollToTop} className="service-button">ZAKAŽI SVOJ TRETMAN</button></Link>
          </div>
        </div>

        <div className="service">
          <div className="image-container">
            <img src="binjovic2.jpg" alt="binjovic" width={"350px"} />
            <div className="overlay-text">Hair Styling Services</div>
          </div>
          <div className="service-content">
            <h2>PRANJE, FENIRANJE, STILIZOVANJE</h2>
            <p>Za kosu bilo koje dužine i teksture, naši obučeni tim pruža neverovatne rezultate za savršen izgled nakon feniranja.</p>

            <Link to={"/reservation"}><button  onClick={scrollToTop} className="service-button">ZAKAŽI SVOJ TRETMAN</button></Link>
          </div>
        </div>
      </div>
      <Link to={'/services'}><button className="prices-button" onClick={scrollToTop}>C E N O V N I K &nbsp; U S L U G A</button></Link>
    </div>
    
  );
};
