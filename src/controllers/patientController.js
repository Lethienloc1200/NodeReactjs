import patientService from "../services/patientService";

let postBookAppointment = async (req, res) => {
  try {
    let data = await patientService.postBookAppointment(req.body);
    // console.log(data)
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  postBookAppointment: postBookAppointment,
};
