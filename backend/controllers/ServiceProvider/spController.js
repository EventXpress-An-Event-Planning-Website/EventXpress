import asyncHandler from "express-async-handler";
import { 
  getSPprofileDetails,
  getSPPackDetails,
  getPackageDetails,
  getAllSPNames, 
  addSPToBlockPrefList 
} from "../../models/spModel.js";


//add service providers to block/preference list
const createBlockPrefSPList = asyncHandler(async(req,res)=>{
  let blockPrefList = ''

  const {
    blockPrefId,
    userId, 
    blockId,
    blockStatus
  }=req.body

  blockPrefList = await addSPToBlockPrefList(
    blockPrefId,
    userId, 
    blockId,
    blockStatus
  )

  if (blockPrefList) {
    res.status(201).json({
      id: blockPrefList.id
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


//get service provider data for the profile
const getSPprofile = asyncHandler(async (req, res) => {
  const userId  = req.query.id;
  const SPDetails = await getSPprofileDetails(userId);
  
  if (SPDetails) {
    res.status(200).json({
      data: SPDetails,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }

});


//get all packages for a service provider
const getAllPack = asyncHandler(async (req, res) => {
  const userId  = req.query.id;
  const PackDetails = await getSPPackDetails(userId);
  
  if (PackDetails) {
    res.status(200).json({
      PackDetails,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }

});


//view one package details
const getPacAllkDetails = asyncHandler(async (req, res) => {
  const package_id = req.query.package_id;
  const service = req.query.service;
  // console.log(service);
  const PackageDetails = await getPackageDetails(package_id,service);
  
  if (PackageDetails) {
    res.status(200).json({
      PackageDetails,
    });
  } else {
    res.status(404);
    throw new Error("Package not found");
  }
  
});


//get all service providers names
const getSPNames = asyncHandler(async (req, res) => {
  const userId  = req.query.id;
  const PNames = await getAllSPNames(userId);
  
  if (PNames) {
    res.status(200).json({
      PNames,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }

});



export { 
  getSPprofile,
  getAllPack,
  getPacAllkDetails,
  getSPNames,
  createBlockPrefSPList 
};
