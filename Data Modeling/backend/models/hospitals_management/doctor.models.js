import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
    },

    workInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true },
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
