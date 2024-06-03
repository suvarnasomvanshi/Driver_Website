import { apiSlice } from "../api/apiSlice";

export const aboutApi = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getBannerContent: builder.query({
            query: () => ({
                url: `/about_us/list/`,
            }),
        }),
        getVissionContent: builder.query({
            query: () => ({
                url: `/about_us/our_visions/`,
            }),
        }),
        getTeamContent: builder.query({
            query: () => ({
                url: `/about_us/leadership_team/`,
            }),
        }),
        getCardContent: builder.query({
            query: () => ({
                url: `/about_us/cards/`,
            }),
        }),
    }),
});

export const {
    useGetBannerContentQuery,
    useGetVissionContentQuery,
    useGetTeamContentQuery,
    useGetCardContentQuery
} = aboutApi;
