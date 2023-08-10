import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '/api/upload' });

export const uploadApiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    uploadSingle: builder.mutation({
      query: (file) => ({
        url: 'single',
        method: 'POST',
        body: file,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
    uploadMultiple: builder.mutation({
      query: (files) => ({
        url: 'multiple',
        method: 'POST',
        body: files,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
  }),
});

export const { useUploadSingleMutation, useUploadMultipleMutation } = uploadApiSlice;
