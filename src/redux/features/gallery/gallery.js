import { apiSlice } from "../api/apiSlice";

export const galleryApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getGalleryFolder: builder.query({
      query: () => ({
        url: `gallery/image-folders/`,
      }),
    }),
    getGalleryFolderImage: builder.query({
      query: (id) => ({
        url: `gallery/image-folder/${id}`,
      }),
    }),
    getGalleryImages: builder.query({
      query: () => ({
        url: `gallery/images`,
      }),
    }),
    getImagesByFolder: builder.query({
      query: (id) => ({
        url: `gallery/list_images_in_folder/${id}`,
      }),
    }),
    getGalleryVideos: builder.query({
      query: () => ({
        url: `gallery/video/`,
      }),
    }),
  }),
});

export const {
  useGetGalleryFolderQuery,
  useGetGalleryFolderImageQuery,
  useGetGalleryImagesQuery,
  useGetGalleryVideosQuery,
  useGetImagesByFolderQuery,
} = galleryApi;
