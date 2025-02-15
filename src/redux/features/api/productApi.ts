import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "posts",
    }),
    getProductImages: builder.query({
      query: () => "photos",
    }),
  }),
});

export const { useGetProductsQuery, useGetProductImagesQuery } = productsApi;
