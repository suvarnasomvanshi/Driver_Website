import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => ({
                url: `/blog/get-all/`,
            }),
        }),
        getBlogDetail: builder.query({
            query: (id) => ({
                url: `/blog/single-call/${id}`,
            }),
        }),

    }),
});

export const {
    useGetBlogsQuery,
    useGetBlogDetailQuery
} = blogApi;
