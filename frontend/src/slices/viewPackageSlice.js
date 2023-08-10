import { apiSlice } from "./apiSlice";
const USER_URL = '/api/customer'


export const viewPackageSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      viewPackage: builder.query({
        query: () => ({
          url: `${USER_URL}/viewPackage`,
        })
      })
    })
});
  

export const {
    useViewPackageQuery
    
  } = viewPackageSlice