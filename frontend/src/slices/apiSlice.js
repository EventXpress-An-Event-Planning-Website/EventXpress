import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { uploadApiSlice } from './uploadApiSlice.js'


const baseQuery = fetchBaseQuery({ baseUrl: '' })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
})

// Inject the upload endpoints from uploadApiSlice
apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    ...uploadApiSlice.endpoints,
  }),
})

export const { useBaseQuery } = apiSlice // You can add other exported hooks as needed

export const { useUploadSingleMutation, useUploadMultipleMutation } =
  uploadApiSlice
