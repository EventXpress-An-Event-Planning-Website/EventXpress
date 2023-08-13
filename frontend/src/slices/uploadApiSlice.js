import { apiSlice } from './apiSlice';

const UPLOAD_URL = '/api/upload';

export const uploadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadSingle: builder.mutation({
      query: (file) => ({
        url: `${UPLOAD_URL}/single`,
        method: 'POST',
        body: file,
      }),
    }),
    uploadMultiple: builder.mutation({
      query: (files) => ({
        url: `${UPLOAD_URL}/multiple`,
        method: 'POST',
        body: files,
      }),
    }),
  }),
});

export const { useUploadSingleMutation, useUploadMultipleMutation } = uploadApiSlice;
