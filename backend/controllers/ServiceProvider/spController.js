import asyncHandler from "express-async-handler";
import { getSPprofileDetails,getSPPackDetails,getPackageDetails,getAllSPNames } from "../../models/spModel.js";

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

const getPacAllkDetails = asyncHandler(async (req, res) => {
  const { package_id } = req.params;
  const PackageDetails = await getPackageDetails(package_id);

  if (PackageDetails) {
    res.status(200).json({
      PackageDetails,
    });
  } else {
    res.status(404);
    throw new Error("Package not found");
  }
  
});

const getSPNames = asyncHandler(async (req, res) => {
  const PNames = await getAllSPNames();
  
  if (PNames) {
    res.status(200).json({
      PNames,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }

});

export { getSPprofile,getAllPack,getPacAllkDetails,getSPNames };
