import { IBrigades, IConnectionState, IDepartment } from '../../data/models';
import { BASE_URL } from '../../data/urls';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataAPI = createApi({
    reducerPath: 'dataAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        getBrigades: build.query<IBrigades[], void>({
            query: () => '/getBrigadesData',
        }),
        getDepartments: build.query<IDepartment[], void>({
            query: () => '/getDepartments',
        }),
        getConnectionState: build.query<IConnectionState[], void>({
            query: () => '/getConnectionState',
        }),

        // filterByDepartments: build.mutation<IBrigades[], number>({
        //     query: (number) => ({
        //         url: '/getBrigadesData'
        //     }),
        // }),
    }),
});

export const {
    useGetBrigadesQuery,
    useGetDepartmentsQuery,
    useGetConnectionStateQuery,
} = dataAPI;
