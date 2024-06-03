import { apiSlice } from "../api/apiSlice";

export const BrochuresAndCollateralApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllBAC: builder.query({
      query: () => ({
        url: `brochureCollateral/get-all/`,
      }),
    }),
  }),
});

export const { useGetAllBACQuery } = BrochuresAndCollateralApi;
