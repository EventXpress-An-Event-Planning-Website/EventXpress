import asyncHandler from "express-async-handler";
import { getSPprofileDetails,getSPCakePackDetails } from "../../models/spModel.js";

const getSPprofile = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  
  const SPDetails = await getSPprofileDetails(userId);
  
  if (SPDetails) {
    res.status(200).json({
      data: SPDetails,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }

  //console.log(packageType);
});

const getAllCakePack = asyncHandler(async (req, res) => {
  const CakePackDetails = await getSPCakePackDetails();
  
  if (CakePackDetails) {
    res.status(200).json({
      CakePackDetails,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }

  //console.log(packageType);
});

export { getSPprofile,getAllCakePack };
