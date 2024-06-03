import { apiSlice } from "../api/apiSlice";

export const CareersApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => ({
        url: `carrer/get-all/`,
      }),
    }),
    getSingleJobs: builder.query({
      query: (id) => ({
        url: `carrer/single-get/${id}/`,
      }),
    }),
    ApplyInAJob: builder.mutation({
      query: (formData) => ({
        url: "carrer/career_apply/",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const {
  useGetJobsQuery,
  useGetSingleJobsQuery,
  useApplyInAJobMutation,
} = CareersApi;
