import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { Link } from "react-router-dom";
import { useGetServices } from "../../hooks/useGetServices";
import { scrollToTop } from "../../hooks/useScrollToTop";
import "./Services.css";

export const Services = () => {
    const { groupedServices } = useGetServices();

    return (
        <div className="services-page">
            <Logo2 />
            <h1>CENOVNIK I USLUGE</h1>
            <div className="services-list">
                {Object.keys(groupedServices).map((category) => (
                    <div key={category} className="service-category">
                        <h2>{category}</h2>
                        {groupedServices[category].map((service) => (
                            <div key={service._id} className="service-item">
                                <h3>{service.name}</h3>
                                <p>{service.price} RSD</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Link to={"/reservation"}>
                <button onClick={scrollToTop} className="service-booking-btn">
                    ZAKAŽI SVOJ TRETMAN
                </button>
            </Link>
            <Footer />
        </div>
    );
};
