import React, { useState, useEffect } from "react";
import "./UploadProductForm.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export const ProductUploadForm = ({ handleSubmit: createProductHandler }) => {
  const [name, setName] = useState("");
  const [preparate, setPreparate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProductHandler({
      name,
      preparate,
      category: "kerastase",
      quantity,
      price,
      inStock: true,
    });
    setCompleted(true);
  };

  useEffect(() => {
    if (completed) {
      setName("");
      setPreparate("");
      setQuantity("");
      setPrice("");
      setCompleted(false);
    }
  }, [completed]);

  return (
    <form className="create-product-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Naziv proizvoda:</label>
        <select
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        >
          <option value="" disabled>
            Izaberite naziv proizvoda
          </option>
          <option value="NUTRITIVE">NUTRITIVE</option>
          <option value="ELIXIR ULTIME">ELIXIR ULTIME</option>
          <option value="RESISTANCE">RESISTANCE</option>
          <option value="THERAPISTE">THERAPISTE</option>
          <option value="EXTENTIONISTE">EXTENTIONISTE</option>
          <option value="INITIALISTE">INITIALISTE</option>
          <option value="DENSFIQUE">DENSFIQUE</option>
          <option value="CHRONOLOGISTE">CHRONOLOGISTE</option>
          <option value="BLOND APSOLU">BLOND APSOLU</option>
          <option value="SYMBIOSE">SYMBIOSE</option>
          <option value="PREMIERE">PREMIERE</option>
          <option value="GENESIS">GENESIS</option>
          <option value="SPECIFIQUE">SPECIFIQUE</option>
          <option value="DISCIPLINE">DISCIPLINE</option>
          <option value="OLEO RELAX">OLEO RELAX</option>
          <option value="FUSIO SCRUB">FUSIO SCRUB</option>
        </select>
      </div>
      <div>
        <label htmlFor="preparate">Preparat:</label>
        <input
          type="text"
          id="preparate"
          value={preparate}
          onChange={(e) => setPreparate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Mililitara:</label>
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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
      <button type="submit">Dodaj proizvod</button>
      <ToastContainer />
    </form>
  );
};

ProductUploadForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
