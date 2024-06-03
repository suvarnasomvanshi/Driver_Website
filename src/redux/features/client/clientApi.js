import { apiSlice } from "../api/apiSlice";

export const clientApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getClientLogo: builder.query({
      query: () => ({
        url: `/client/get/`,
      }),
    }),
    getSupport: builder.query({
      query: () => ({
        url: `/support/list`,
      }),
    }),
  }),
});

export const {
  useGetClientLogoQuery,
  useGetSupportQuery
} = clientApi;
