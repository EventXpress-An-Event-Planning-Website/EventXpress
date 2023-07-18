import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '/api' });

export const uploadApiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    uploadSingle: builder.mutation({
      query: (file) => ({
        url: 'upload/single',
        method: 'POST',
        body: file,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
    uploadMultiple: builder.mutation({
      query: (files) => ({
        url: 'upload/multiple',
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
