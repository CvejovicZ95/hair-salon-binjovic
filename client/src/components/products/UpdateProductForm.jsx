import React from "react";
import PropTypes from "prop-types";
import "./UpdateProductForm.scss";

export const UpdateProductForm = ({
  product,
  updatedName,
  updatedPreparate,
  updatedQuantity,
  updatedPrice,
  updatedInStock,
  setUpdatedName,
  setUpdatedPreparate,
  setUpdatedQuantity,
  setUpdatedPrice,
  setUpdatedInStock,
  handleSaveUpdate,
}) => (
  <div className="update-product-form">
    <h2>Update Product</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSaveUpdate(product._id);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </label>
      <label>
        Preparate:
        <input
          type="text"
          value={updatedPreparate}
          onChange={(e) => setUpdatedPreparate(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="text"
          value={updatedQuantity}
          onChange={(e) => setUpdatedQuantity(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(e.target.value)}
        />
      </label>
      <label>
        In Stock:
        <input
          type="checkbox"
          checked={updatedInStock}
          onChange={(e) => setUpdatedInStock(e.target.checked)}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  </div>
);

UpdateProductForm.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
  updatedName: PropTypes.string.isRequired,
  updatedPreparate: PropTypes.string.isRequired,
  updatedQuantity: PropTypes.string.isRequired,
  updatedPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  updatedInStock: PropTypes.bool.isRequired,
  setUpdatedName: PropTypes.func.isRequired,
  setUpdatedPreparate: PropTypes.func.isRequired,
  setUpdatedQuantity: PropTypes.func.isRequired,
  setUpdatedPrice: PropTypes.func.isRequired,
  setUpdatedInStock: PropTypes.func.isRequired,
  handleSaveUpdate: PropTypes.func.isRequired,
};
