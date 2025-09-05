import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useProduct = () => {

    const {refetch, data:product = [], isLoading:productLoading} = useQuery ({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch("https://agromart-server.vercel.app/products");
            const data = await res.json()
            return data;
        }
    })
    return [product, refetch, productLoading]
};

export default useProduct;