import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler'

//add service providers to block/preference list
const addSPToBlockPrefList = asyncHandler(
  async(
    blockPrefId,
    userId, 
    blockId,
    blockStatus
  )=>{
    const createBlockPrefQuery = `INSERT INTO blocklist(blockpref_id, my_id, block_id, block_status) VALUES($1, $2, $3, $4)`
    const createBlockPrefList = await query(createBlockPrefQuery, [
      blockPrefId,
      userId, 
      blockId,
      blockStatus
    ])

    if(createBlockPrefList.rowCount>0){
      console.log('block user',createBlockPrefList);
      return createBlockPrefList.rows
    }
    else{
      throw new Error('Internal Error')
    }
  }
)

//get service provider data for the profile
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

//get all packages for a service provider
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

//view one package details
const getPackageDetails = asyncHandler(
  async(package_id,service)=>{
    const viewCakePackage = `SELECT * FROM ${service}package WHERE package_id=$1`
    const CakePackData = await query(viewCakePackage,[package_id])
    
    //console.log(CakePackData);
    if (CakePackData.rowCount > 0) {
      return CakePackData.rows
    } else {
      throw new Error('Internal Error')
    }
    
  }
)

//get all service providers names
const getAllSPNames = asyncHandler(
  async(userId)=>{
    const viewSPNames = `SELECT name, location FROM serviceprovider WHERE id !=$1`
    const SPNames = await query(viewSPNames,[userId])

    if (SPNames.rowCount > 0) {
      return SPNames.rows
    } else {
      throw new Error('Internal Error')
    }
  }
)

export { 
  getSPprofileDetails,
  getSPPackDetails,
  getPackageDetails,
  getAllSPNames, 
  addSPToBlockPrefList 
}