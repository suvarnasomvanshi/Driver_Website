import { apiSlice } from "../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getAllReviews: builder.query({
            query: () => ({
                url: `/testimonial/get-all/`,
            }),
        })
    }),
});

export const {
    useGetAllReviewsQuery
} = reviewApi;
