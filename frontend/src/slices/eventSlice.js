import { apiSlice } from "./apiSlice";
const USER_URL = '/api/customer'


export const eventSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      create: builder.mutation({
        query: (data) => ({
          url: `${USER_URL}/createEvent`,
          method: 'POST',
          body: data
        })
      })
    })
});
  

export const {
    useCreateMutation
    
  } = eventSlice