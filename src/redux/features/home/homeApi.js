import { apiSlice } from "../api/apiSlice";

export const homeApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getHomeBanner: builder.query({
      query: () => ({
        url: `home/home_banners/`,
      }),
    }),
    getHomeModels: builder.query({
      query: () => ({
        url: `home/home_models/`,
      }),
    }),
    getHomeClients: builder.query({
      query: () => ({
        url: `globalStrategicPartner/list/`,
      }),
    }),
  }),
});

export const {
  useGetHomeBannerQuery,
  useGetHomeModelsQuery,
  useGetHomeClientsQuery,
} = homeApi;
