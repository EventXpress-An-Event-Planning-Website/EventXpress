import { apiSlice } from "./apiSlice";
const USER_URL = '/api/serviceProvider'


export const packageSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      createPackage: builder.mutation({
        query: (data) => ({
          url: `${USER_URL}/createPackage`,
          method: 'POST',
          body: data
        })
      })
    })
});
  

export const {
    useCreatePackageMutation
    
  } = packageSlice