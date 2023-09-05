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

const getSPPackDetails = asyncHandler(
  async(userId)=>{
    
    const viewServiceProviderCakeDetails = `SELECT * FROM cakepackage WHERE userid=$1`
    const viewServiceProviderVenueDetails = `SELECT * FROM venuepackage WHERE userid=$1`
    const viewServiceProviderDecoDetails = `SELECT * FROM decorationpackage WHERE userid=$1`
    const viewServiceProviderLSoundsDetails = `SELECT * FROM lightsandsoundspackage WHERE userid=$1`
    const viewServiceProviderCateringDetails = `SELECT * FROM cateringpackage WHERE userid=$1`
    const viewServiceProviderPhotoDetails = `SELECT * FROM photographypackage WHERE userid=$1`

    const SPCakeData = await query(viewServiceProviderCakeDetails,[userId])
    const SPVenueData = await query(viewServiceProviderVenueDetails,[userId])
    const SPDecorationData = await query(viewServiceProviderDecoDetails,[userId])
    const SPLSoundData = await query(viewServiceProviderLSoundsDetails,[userId])
    const SPCateringData = await query(viewServiceProviderCateringDetails,[userId])
    const SPPhotographyData = await query(viewServiceProviderPhotoDetails,[userId])
    
    const allData = [
      SPCakeData.rows,
      SPVenueData.rows,
      SPDecorationData.rows,
      SPLSoundData.rows,
      SPCateringData.rows,
      SPPhotographyData.rows,
    ];
  
    // Remove empty arrays and flatten(remove sub arrays) the data
    const flattenedData = allData.filter((data) => data.length > 0).flat();
  
    if (flattenedData.length > 0) {
      return flattenedData;
    } else {
      throw new Error('Internal Error');
    }

  }
)

const getPackageDetails = asyncHandler(
  async(package_id)=>{
    const viewCakePackage = `SELECT * FROM cakepackage WHERE package_id=$1`
    const CakePackData = await query(viewCakePackage,[package_id])
    
    //console.log(CakePackData);
    return CakePackData.rows
    
  }
)

const getAllSPNames = asyncHandler(
  async()=>{
    const viewSPNames = `SELECT name, location FROM serviceprovider`
    const SPNames = await query(viewSPNames,[])

    if (SPNames.rowCount > 0) {
      return SPNames.rows
    } else {
      throw new Error('Internal Error')
    }
  }
)

export { getSPprofileDetails,getSPPackDetails,getPackageDetails,getAllSPNames }