import React, { useState } from "react";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { Link } from "react-router-dom";
import { useGetServices } from "../../hooks/useGetServices";
import { scrollToTop } from "../../hooks/useScrollToTop";
import "./Services.scss";

export const Services = () => {
    const { groupedServices } = useGetServices();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="services-page">
            <Logo2 />
            <h1>CENOVNIK I USLUGE</h1>
            <div className="categories">
                <select
                    value={selectedCategory}
                    onChange={handleChangeCategory}
                    className="category-select"
                >
                    <option value="">Izaberite kategoriju</option>
                    {Object.keys(groupedServices).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="services-list">
                {selectedCategory &&
                    groupedServices[selectedCategory].map((service) => (
                        <div key={service._id} className="service-item">
                            <h3>{service.name}</h3>
                            <p>{service.price} RSD</p>
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

