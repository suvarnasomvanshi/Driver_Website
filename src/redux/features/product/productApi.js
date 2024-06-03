import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: `/product/`,
            }),
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
            }),
        }),
        getIntegration: builder.query({
            query: (id) => ({
                url: `/integrations`,
            }),
        }),
        getIntegrationCategories: builder.query({
            query: (id) => ({
                url: `/integrations/categories/`,
            }),
        }),
    }),
});

export const {
    useGetAllProductQuery,
    useGetSingleProductQuery,
    useGetIntegrationQuery,
    useGetIntegrationCategoriesQuery,
} = productApi;
