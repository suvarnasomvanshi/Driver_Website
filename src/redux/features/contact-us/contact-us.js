import { apiSlice } from "../api/apiSlice";

export const ContacUsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getConTactDetails: builder.query({
      query: () => ({
        url: `contact_us/contact_details/`,
      }),
    }),
    getOurOffice: builder.query({
      query: (i) => ({
        url: `contact_us/our_offices/`,
      }),
    }),
  }),
});
export const { useGetConTactDetailsQuery, useGetOurOfficeQuery } = ContacUsApi;
