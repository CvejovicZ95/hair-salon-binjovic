import { Logo } from "../logo/Logo"
import {Footer} from "../layout/footer/Footer"
import "./ReservationPage.css"
import { Link } from "react-router-dom";

export const ReservationPage = () => {
    return (
        <div className="reservations">
            <Logo />
            <div className="reservation-info">
                <h1>Rezervišite Vaš tretman</h1>
                <h2>Zbog velikog obima posla, rezervacije se vrše isključivo telefonom.</h2>
                <h3>Za zakazivanje termina pozovite nas na broj:</h3>
                <p className="phone-number">034/338-599</p>
                <p className="service-paragraph">Pogledajte naše <Link to={"/services"}><span>usluge</span></Link> i otkrijte pravi tretman za Vas.</p>
            </div>

            <div className="additional-info">
                <p>Za sve dodatne informacije ili pitanja, slobodno nas kontaktirajte putem telefona ili direktno putem Instagrama.</p>
            </div>
            <Footer />
        </div>
    );
};