import React, { useState } from "react";
import { Logo2 } from "../logo2/Logo2";
import { ServiceUploadForm } from "./UploadServiceForm";
import { Footer } from "../layout/footer/Footer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useGetServices } from "../../hooks/useGetServices";
import { scrollToTop } from "../../hooks/useScrollToTop";
import { useAuthContext } from "../../context/authContext";
import "./Services.scss";

const categoryList = [
    "Feniranje",
    "Šišanje",
    "Farbanje",
    "Šatiranje/Blajhanje",
    "Steam pod",
    "Frizura",
    "Keratin",
    "Nadogradnja",
    "Tretmani"
];

export const Services = () => {
    const { authUser } = useAuthContext();
    const { groupedServices, deleteServiceHandler, createServiceHandler, updateServiceHandler } = useGetServices();
    const [selectedCategory, setSelectedCategory] = useState('');

    const [updatedName, setUpdatedName] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState('');
    const [updatedCategory, setUpdatedCategory] = useState('')
    const [selectedService, setSelectedService] = useState(null)
    // eslint-disable-next-line
    const [isUpdating, setIsUpdating] = useState(false)

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleDeleteService = async (id) => {
        const confirmed = window.confirm('Da li ste sigurno da želite da obrišete uslugu?');
        if (confirmed) {
            try {
                await deleteServiceHandler(id);
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    const handleUpdate = (service) => {
        setSelectedService(service);
        setUpdatedName(service.name);
        setUpdatedPrice(service.price);
        setUpdatedCategory(service.category);
        setIsUpdating(true);
    };

    const handleSaveUpdate = async (id) => {
        try {
            await updateServiceHandler(id, updatedName, updatedPrice, updatedCategory);
            setSelectedService(null);
            setIsUpdating(false);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="services-page">
            <Logo2 />
            {authUser && (<ServiceUploadForm handleSubmit={createServiceHandler} />)}
            <h1>CENOVNIK I USLUGE</h1>
            <div className="categories">
                <select
                    value={selectedCategory}
                    onChange={handleChangeCategory}
                    className="category-select"
                >
                    <option value="">Izaberite kategoriju</option>
                    {categoryList.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="services-list">
                {selectedCategory &&
                    groupedServices[selectedCategory]
                        .filter(service => !service.deleted)
                        .map((service) => (
                            <div key={service._id} className="service-item">
                                {selectedService && selectedService._id === service._id ? (
                                    <div className="update-service-form">
                                        <input
                                            type="text"
                                            value={updatedName}
                                            onChange={(e) => setUpdatedName(e.target.value)}
                                            placeholder="Naziv usluge"
                                            required
                                        />
                                        <input
                                            type="number"
                                            value={updatedPrice}
                                            onChange={(e) => setUpdatedPrice(e.target.value)}
                                            placeholder="Cena"
                                            required
                                        />
                                        <select
                                            value={updatedCategory}
                                            onChange={(e) => setUpdatedCategory(e.target.value)}
                                            required
                                        >
                                            <option value="" disabled>Kategorija</option>
                                            {categoryList.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        <button onClick={() => handleSaveUpdate(service._id)}>Snimi</button>
                                    </div>
                                ) : (
                                    <>
                                        <h3>{service.name}</h3>
                                        <p>{service.price} RSD</p>
                                        {authUser && (
                                            <div className="buttons">
                                                <button onClick={() => handleUpdate(service)} className="edit-button">Promeni</button>
                                                <button onClick={() => handleDeleteService(service._id)} className="delete-button">Obriši</button>
                                            </div>
                                        )}
                                    </>
                                )}
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
