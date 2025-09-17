import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useEmployee = () => {

    const {refetch, data: employee = [], isLoading: employeeLoading} = useQuery({
        queryKey: ["employee"] ,
        queryFn: async() => {
            const res = await fetch("https://agromart-server.vercel.app/employees");
            const data = await res.json()
            console.log(data)
            return data;
        }
    })
    return [refetch, employee, employeeLoading];
};

export default useEmployee;