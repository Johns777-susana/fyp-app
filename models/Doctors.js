const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  contactNo: {
    type: String,
  },
  address: {
    type: String,
  },
  education: {
    type: String,
  },
  speciality: {
    type: String,
  },
  doctorPic: {
    type: String,
  },
  bookedDate: [
    {
      bookedBy: {
        type: String,
      },
      date: {
        type: String,
      },
      bookedTime: {
        type: String,
      },
    },
  ],
  available: [
    {
      date: String,
      time: [{ from: Number, to: Number }],
    },
  ],
});

module.exports = Doctors = mongoose.model('doctors', DoctorSchema);
