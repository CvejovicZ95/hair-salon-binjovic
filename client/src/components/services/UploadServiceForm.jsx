import React, { useState, useEffect } from "react";
import "./UploadServiceForm.scss"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";


export const ServiceUploadForm = ({ handleSubmit: createServiceHandler }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createServiceHandler({ name, price, category, deleted: false });
        setCompleted(true);
    };

    useEffect(() => {
        if (completed) {
            setName('');
            setPrice('');
            setCategory('');
            setCompleted(false);
        }
    }, [completed]);

    return (
        <form className="create-service-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Naziv usluge:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Cena:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="category">Kategorija:</label>
                <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="" disabled>Kategorija</option>
                    <option value="Feniranje">Feniranje</option>
                    <option value="Šišanje">Šišanje</option>
                    <option value="Farbanje">Farbanje</option>
                    <option value="Šatiranje/Blajhanje">Šatiranje/Blajhanje</option>
                    <option value="Steam pod">Steam pod</option>
                    <option value="Frizura">Frizura</option>
                    <option value="Keratin">Keratin</option>
                    <option value="Nadogradnja">Nadogradnja</option>
                    <option value="Tretmani">Tretmani</option>
                </select>
            </div>
            <button type="submit">Dodaj uslugu</button>
            <ToastContainer />
        </form>
    );
};

ServiceUploadForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
