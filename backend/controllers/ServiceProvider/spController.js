import asyncHandler from "express-async-handler";
import { getSPprofileDetails,getSPCakePackDetails, getAllNotification, acceptedNotification, declinedNotification, getAllBusyDates,setAllBusyDates } from "../../models/spModel.js";

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

export { getSPprofile,getAllCakePack, getAllNotifications, acceptNotification, declineNotification, getBusyDates, setBusyDates };
