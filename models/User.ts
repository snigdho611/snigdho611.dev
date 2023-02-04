import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    projectsData: {
      type: [
        {
          id: Number,
          title: String,
          description: String,
          stacks: [String],
          // url: String,
        },
      ],
    },
  },
  {
    _id: false,
  }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
// module.exports = mongoose.models.User || User;
