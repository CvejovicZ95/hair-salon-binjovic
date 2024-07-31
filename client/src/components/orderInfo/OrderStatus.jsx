import React from "react";
import PropTypes from "prop-types";
import "./OrderStatus.scss";

export const OrderStatus = ({ status, onProcessedClick, onSentClick }) => {
  const isProcessed = status.processed;
  const isSent = status.sent;

  return (
    <div>
      <button
        onClick={onProcessedClick}
        className={`status-btn ${isProcessed ? "processed" : ""}`}
        disabled={isProcessed}
      >
        {isProcessed ? "✔" : "Obrađena"}
      </button>
      <button
        onClick={onSentClick}
        className={`status-btn ${isSent ? "sent" : ""}`}
        disabled={isSent || !isProcessed}
      >
        {isSent ? "✔" : "Poslata"}
      </button>
    </div>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.shape({
    processed: PropTypes.bool.isRequired,
    sent: PropTypes.bool.isRequired,
  }).isRequired,
  onProcessedClick: PropTypes.func.isRequired,
  onSentClick: PropTypes.func.isRequired,
};
