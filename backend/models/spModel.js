import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler'


const getSPprofileDetails = asyncHandler(
    async(userId)=>{
      
      const viewServiceProviderDetails = `SELECT * FROM serviceprovider WHERE id=$1`
      const SPProfileData = await query(viewServiceProviderDetails,[userId])
      
      if (SPProfileData.rowCount > 0) {
        return SPProfileData.rows[0]
      } else {
        throw new Error('Internal Error')
      }

    }
)

const getSPCakePackDetails = asyncHandler(
  async()=>{
    
    const viewServiceProviderCakeDetails = `SELECT * FROM cakepackage`
    const SPCakeData = await query(viewServiceProviderCakeDetails,[])
    
    if (SPCakeData.rowCount > 0) {
      return SPCakeData.rows
    } else {
      throw new Error('Internal Error')
    }

  }
)

export { getSPprofileDetails,getSPCakePackDetails }