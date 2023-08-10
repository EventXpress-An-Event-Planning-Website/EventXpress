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
      }),

      addToDo: builder.mutation({
        query: (data) => ({
          url: `${USER_URL}/addToDo`,
          method: 'POST',
          body: data
        })
      }),

      viewToDo: builder.query({
        query: () => ({
          url: `${USER_URL}/viewToDo`,
        })
      })
    })
});
  

export const {
    useCreateMutation,
    useAddToDoMutation,
    useViewToDoQuery
    
  } = eventSlice