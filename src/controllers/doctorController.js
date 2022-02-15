import doctorService from "../services/doctorService";

let getTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await doctorService.getTopDoctorHomeService(+limit);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      errCode: -1,
      message: "erro from server doctor ",
    });
  }
};

let getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctors();
    return res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "err from server get all doctors",
    });
  }
};

let postInforDoctors = async (req, res) => {
  try {
    let response = await doctorService.saveDetailsInforDoctor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "err from server post doctor details",
    });
  }
};
let getDetailDoctorById = async (req, res) => {
  try {
    let inforDetail = await doctorService.getDetailDoctorByIdService(req.query.id);
    return res.status(200).json(inforDetail);
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "err from server get doctor details",
    });
  }
};

let bulkCreateSchedule = async (req, res) => {
  try {
    let infor = await doctorService.bulkCreateScheduleService(req.body);
    return res.status(200).json(infor);
  } catch (error) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "err from server get doctor details",
    });
  }
};
let getScheduleDoctorByDate = async (req, res) => {
  try {
    let infor = await doctorService.getScheduleByDateService(req.query.doctorId, req.query.date);
    return res.status(200).json({
      infor,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "err from server get doctor details",
    });
  }
};

let getExtraInforDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getExtraInforDoctorByIdService(req.query.doctorId);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "erro from server error",
    });
  }
};
let getProfileInforDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getProfileInforDoctorByIdService(req.query.doctorId);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "erro from server error",
    });
  }
};
module.exports = {
  getAllDoctors: getAllDoctors,
  getTopDoctorHome: getTopDoctorHome,
  postInforDoctors: postInforDoctors,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleDoctorByDate: getScheduleDoctorByDate,
  getExtraInforDoctorById: getExtraInforDoctorById,
  getProfileInforDoctorById: getProfileInforDoctorById,
};
