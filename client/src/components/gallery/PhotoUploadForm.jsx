import React, { useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import "./PhotoUploadForm.scss";

export const PhotoUploadForm = ({ handleSubmit: uploadHandler }) => {
    const [alt, setAlt] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [completed, setCompleted] = useState(false);

    const handlePhotoChange = (event) => {
        const imageFile = event.target.files[0];
        setImage(imageFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadHandler({ alt, image, category });
        setCompleted(true);
    };

    useEffect(() => {
        if (completed) {
            setAlt("");
            setImage(null);
            setCategory("");
        }
    }, [completed]);

    return (
        <form className="upload-photo-form" onSubmit={handleSubmit}> 
            <input
                type="text"
                name="alt"
                placeholder="Naziv"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
            />
            <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="" disabled>Kategorija</option>
                <option value="hair">hair</option>
                <option value="salon">salon</option>
                <option value="preparate">preparate</option>
            </select>
            <div className="upload-wrapper">
                <label>
                    <span className="upload-icon">
                        <FaUpload />
                    </span>
                    <span className="upload-label">Izaberite sliku:</span>
                    <input
                        type="file"
                        name="image"
                        className="upload-file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </label>
                {image && <p>Selected image: {image.name}</p>}
            </div>
            <button
                className="admin-button"
                type="submit"
            >
                Dodaj sliku
            </button>
            <ToastContainer/>
        </form>
    );
};

PhotoUploadForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
