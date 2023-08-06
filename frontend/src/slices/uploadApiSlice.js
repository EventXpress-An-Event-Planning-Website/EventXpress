import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: '/api/upload' })

export const uploadApiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    uploadSingle: builder.mutation({
      query: (file) => ({
        url: 'single',
        method: 'POST',
        body: file,
      }),
    }),
    uploadMultiple: builder.mutation({
      query: (files) => ({
        url: 'multiple',
        method: 'POST',
        body: files,
      }),
    }),
  }),
})

export const { useUploadSingleMutation, useUploadMultipleMutation } =
  uploadApiSlice
