import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllOrders } from "../api/orderApi";

export const useGetOrder = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        setAllOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchOrders();
  }, [allOrders]);

  return { allOrders };
};
