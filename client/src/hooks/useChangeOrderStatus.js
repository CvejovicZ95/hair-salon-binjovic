import { toast } from "react-toastify";
import { markOrderAsProcessed, markOrderAsSent } from "../api/orderApi";

export const markOrderAsProcessedHandler = async (id) => {
  try {
    await markOrderAsProcessed(id);
    toast.success("Order marked as processed successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const markOrderAsSentHandler = async (id) => {
  try {
    await markOrderAsSent(id);
    toast.success("Order marked as sent successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};
