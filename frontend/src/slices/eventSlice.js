import { createApi,fetchBaseQuery  } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "./apiSlice";
const USER_URL = '/api/customer'

// const baseQuery = fetchBaseQuery({ baseUrl: '/api/customer' });


export const eventSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      create: builder.mutation({
        query: (data) => ({
          url: `${USER_URL}/createEvent`,
          method: 'POST',
          body: data
        })
      }),
      getEvent: builder.query({
        query: () => ({
          url: `${USER_URL}/myEvents`,
        })
      })
    })
});
  

export const {
    useCreateMutation,
    useGetEventQuery
    
  } = eventSlice