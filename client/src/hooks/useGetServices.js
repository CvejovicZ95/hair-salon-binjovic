import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { getServices, deleteService, createService, updateService } from "../api/serviceApi";

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

    const createServiceHandler = async ({ name, price, category, deleted }) => {
        try {
            await createService(name, price, category, deleted);
            const data = await getServices();
            const grouped = data.reduce((acc, service) => {
                if (!acc[service.category]) {
                    acc[service.category] = [];
                }
                acc[service.category].push(service);
                return acc;
            }, {});
            setGroupedServices(grouped);
            toast.success('Uspesno ste dodali uslugu');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const deleteServiceHandler = async (id) => {
        try {
            await deleteService(id);
            const updatedServices = Object.keys(groupedServices).reduce((acc, category) => {
                acc[category] = groupedServices[category].filter((service) => service._id !== id);
                return acc;
            }, {});
            setGroupedServices(updatedServices);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const updateServiceHandler = async (id, updatedName, updatedPrice, updatedCategory) => {
        try {
            await updateService(id, updatedName, updatedPrice, updatedCategory);
            const updatedService = Object.keys(groupedServices).reduce((acc, category) => {
                acc[category] = groupedServices[category].map((service) =>
                    service._id === id
                        ? { ...service, name: updatedName, price: updatedPrice, category: updatedCategory }
                        : service
                );
                return acc;
            }, {});
            setGroupedServices(updatedService);
            toast.success('Uspesno ste promenili podatke usluge.');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return { groupedServices, createServiceHandler, deleteServiceHandler, updateServiceHandler };
};
