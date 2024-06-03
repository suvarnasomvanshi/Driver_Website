import { apiSlice } from "../api/apiSlice";

export const contactApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    //start
    createContact: builder.mutation({
      query: (contactInfo) => ({
        url: "contact_us/create/",
        method: "POST",
        body: contactInfo,
        headers: {
          "Content-Type": "application/json"
        },
      }),
    }),
    createPartner: builder.mutation({
      query: (contactInfo) => ({
        url: "partner/create/",
        method: "POST",
        body: contactInfo,
        headers: {
          "Content-Type": "application/json"
        },
      }),
    }),
  }),
});

export const { useCreateContactMutation, useCreatePartnerMutation } = contactApi;
