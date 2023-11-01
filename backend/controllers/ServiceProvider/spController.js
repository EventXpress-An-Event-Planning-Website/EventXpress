import asyncHandler from "express-async-handler";
import { 
  getSPprofileDetails,
  getSPPackDetails,
  getPackageDetails,
  getAllSPNames, 
  addSPToBlockPrefList,
  getpreferenceList,
  getblockList,
  removeList,
  getSpBlockPrefList,
  getAllNotification,
  acceptedNotification,
  declinedNotification,
  getAllBusyDates,
  setAllBusyDates
  // editSPDetails
} from "../../models/spModel.js";


//add service providers to block/preference list
const createBlockPrefSPList = asyncHandler(async(req,res)=>{
  let blockPrefList = ''  //initialize the variable as empty string

  const {
    userId, 
    blockId,
    blockStatus
  }=req.body

  blockPrefList = await addSPToBlockPrefList(
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
    res.status(500);
    throw new Error("Notification failed");
  }

  //console.log(packageType);
});

const getAllNotifications = asyncHandler(async (req, res) => {
  const getNotifications = await getAllNotification();
  
  if (getNotifications) {
    res.status(200).json({
      getNotifications
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
  const blockPreflist = await getSpBlockPrefList(userId)
  // console.log(PNames);
  var SPNames=[] 
  
  if (PNames) {
    
    if (blockPreflist.length!==0) {
      
      for (const pname of PNames) {
        let isBlocked = false;
        for (const list of blockPreflist) {
          
          if (list.block_id===pname.id) {
            
            isBlocked = true;
            break;
          }
        }
        if (!isBlocked) {
          SPNames.push(pname);
        }
      }
      
      res.status(200).json(SPNames);
    }else{
      
      res.status(200).json(
        PNames,
      );
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }

});

const acceptNotification = asyncHandler(async (req, res) => {
  const notifyId = parseInt(req.params.notify_id);
  // console.log(notifyId);
   const response = await acceptedNotification(notifyId);
  
  if (response) {
    res.status(200).json({
      response
    });
  } else {
    res.status(500);
    throw new Error("Internal error");
  }
})
//get preference service providers names
const getPreferenceSPNames = asyncHandler(async (req, res) => {
  const userId  = req.query.id;
  const block_status = '1';
  const PNames = await getpreferenceList(userId, block_status);
  
  if (PNames) {
    res.status(200).json(
      PNames,
    );
  } else {
    res.status(404);
    throw new Error("User not found");
  }

});

const declineNotification = asyncHandler(async (req, res) => {
  const notifyId = parseInt(req.params.notify_id);
  // console.log(notifyId);
   const response = await declinedNotification(notifyId);
  
  if (response) {
    res.status(200).json({
      response
    });
  } else {
    res.status(500);
    throw new Error("Internal error");
  }
})

//get block service providers names
const getBlockSPNames = asyncHandler(async (req, res) => {
  const userId  = req.query.id;
  const block_status = '0';
  const PNames = await getblockList(userId, block_status);
  
  if (PNames) {
    res.status(200).json(
      PNames,
    );
  } else {
    res.status(404);
    throw new Error("User not found");
  }

});

const getBusyDates = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);
  // console.log(userId);
   const response = await getAllBusyDates(userId);
  // console.log(response);
  if (response) {
    res.status(200).json({
      response
    });
  } else {
    res.status(500);
    throw new Error("Internal error");
  }

});

const setBusyDates = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);
  const {date} = req.body;
  
   const response = await setAllBusyDates(userId,date);
  // console.log(response);
  if (response) {
    res.status(200).json({
      response
    });
  } else {
    res.status(500);
    throw new Error("Internal error");
  }

});

//remove from block list
const removeBlockPrefSPList = asyncHandler(async (req, res) => {
  const userId  = req.body.id;

  const PNames = await removeList(userId);
  
  if (PNames) {
    res.status(200).json(
      PNames,
    );
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});


//update service provider details
// const updateSPDetails = asyncHandler(async (req, res) => {
//   const userId = req.query.id;
//   const { spfacebook, spinstagram, sptwitter } = req.body;

//   const SPDetails = await editSPDetails(userId, spfacebook, spinstagram, sptwitter);

//   if (SPDetails) {
//     res.status(200).json({
//       data: SPDetails,
//     });
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });


export { 
  getSPprofile,
  getAllPack,
  getPacAllkDetails,
  getSPNames,
  createBlockPrefSPList,
  removeBlockPrefSPList,
  getPreferenceSPNames,
  getBlockSPNames,
  getAllNotifications, 
  acceptNotification, 
  declineNotification, 
  getBusyDates, 
  setBusyDates
  // updateSPDetails
};
