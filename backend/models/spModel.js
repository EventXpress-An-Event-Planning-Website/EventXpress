import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler'

//add service providers to block/preference list
const addSPToBlockPrefList = asyncHandler(
  async(
    userId, 
    blockId,
    blockStatus
  )=>{
    const createBlockPrefQuery = `INSERT INTO blocklist(my_id, block_id, block_status) VALUES($1, $2, $3)`
    const createBlockPrefList = await query(createBlockPrefQuery, [
      userId, 
      blockId,
      blockStatus
    ])

    if(createBlockPrefList.rowCount>0){
      // console.log('block user',createBlockPrefList);
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
    const viewServiceProviderStageDetails = `SELECT * FROM stagepackage WHERE userid=$1`

    const SPCakeData = await query(viewServiceProviderCakeDetails,[userId])
    const SPVenueData = await query(viewServiceProviderVenueDetails,[userId])
    const SPDecorationData = await query(viewServiceProviderDecoDetails,[userId])
    const SPLSoundData = await query(viewServiceProviderLSoundsDetails,[userId])
    const SPCateringData = await query(viewServiceProviderCateringDetails,[userId])
    const SPPhotographyData = await query(viewServiceProviderPhotoDetails,[userId])
    const SPStageData = await query(viewServiceProviderStageDetails,[userId])
    
    const allData = [
      SPCakeData.rows,
      SPVenueData.rows,
      SPDecorationData.rows,
      SPLSoundData.rows,
      SPCateringData.rows,
      SPPhotographyData.rows,
      SPStageData.rows
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
    const viewSPNames = `SELECT * FROM serviceprovider WHERE id !=$1`
    const SPNames = await query(viewSPNames,[userId])
    
    if (SPNames.rowCount > 0) {
      return SPNames.rows
    } else {
      throw new Error('Internal Error')
    }
  }
)


const getSpBlockPrefList = asyncHandler(
  async(userId)=>{
    try {
      const createBlockPrefQuery = `SELECT * FROM blocklist WHERE my_id=$1`
      const createBlockPrefList = await query(createBlockPrefQuery, [userId])
      return createBlockPrefList.rows
    } catch (error) {
      throw new Error(error)
    }
  }
)

//get preference list of a service provider
const getpreferenceList = asyncHandler(
  async(userId, block_status)=>{
    const viewPreferenceList = `SELECT * FROM serviceprovider s
      INNER JOIN blocklist b ON s.id = b.block_id
      WHERE b.block_status =$2 AND b.my_id=$1 ; `
    const prefList = await query(viewPreferenceList,[userId, block_status])
    // console.log(prefList.rows);
    if (prefList.rowCount > 0) {
      
      return prefList.rows
    } else {
      throw new Error('Internal Error')
    }
  }
)

//get block list of a service provider
const getblockList = asyncHandler(
  async(userId, block_status)=>{
   
    const viewBlockList = `SELECT * FROM serviceprovider s
      INNER JOIN blocklist b ON s.id = b.block_id
      WHERE b.block_status =$2 AND b.my_id=$1 ; `
    const blockList = await query(viewBlockList,[userId, block_status])
    // console.log(blockList.rows);
    if (blockList.rowCount > 0) {
      
      return blockList.rows
    } else {
      throw new Error('Internal Error')
    }
  }
)

//remove service provider from block list
const removeList = asyncHandler(
  async(userId)=>{
    const removeSPNames = `DELETE FROM blocklist WHERE block_id=$1`
    const SPNames = await query(removeSPNames,[userId])
    return true
    
  }
)

//view preference list for each packages
const preferencePredefineList = asyncHandler(
  async(userId, block_status)=>{
    const viewPrefNames = `SELECT * FROM venuepackage
    JOIN blocklist ON venuepackage.userid = blocklist.block_id
    WHERE blocklist.block_status = 1; `
    const prefNames = await query(viewPrefNames,[userId, block_status])
  }
)

//delete packages
// const removePack = asyncHandler(
//   async(package_id,service)=>{
//     const viewCakePackage = `DELETE * FROM ${service}package WHERE package_id=$1`
//     const CakePackData = await query(viewCakePackage,[package_id])
    
//     //console.log(CakePackData);
//     if (CakePackData.rowCount > 0) {
//       return CakePackData.rows
//     } else {
//       throw new Error('Internal Error')
//     }
    
//   }
// )

export { 
  getSPprofileDetails,
  getSPPackDetails,
  getPackageDetails,
  getAllSPNames, 
  addSPToBlockPrefList,
  getpreferenceList,
  getblockList,
  removeList,
  getSpBlockPrefList,
  preferencePredefineList
  // removePack
}