import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { getServices } from "../api/serviceApi";

export const useGetServices = () => {
    const [groupedServices, setGroupedServices] = useState({});

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await getServices();

                const grouped = data.reduce((acc, service) => {
                    if (!acc[service.category]) {
                        acc[service.category] = [];
                    }
                    acc[service.category].push(service);
                    return acc;
                }, {});

                setGroupedServices(grouped);
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchServices();
    }, []);

    return { groupedServices };
};
