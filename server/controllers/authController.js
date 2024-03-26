import bcrypt from "bcrypt";
import User from "../models/userSchema.js";

// ? ---------------
// ? User Registration
// ? ---------------

export const registration = async (req, res) => {
  console.log("User Registration API");

  const userExist = await User.findOne({ email: req.body.email });

  if (userExist) {
    return res.status(400).send({
      status: "Failed",
      message: "This Student is already exist",
    });
  } else {
    try {
      // Generate Hashed Password
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);

      // Create a New User
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPass,
        course: req.body.course,
        phoneNumber: req.body.phoneNumber,
        profilePic: req.body.profilePic || "",
      });
      console.log(newUser, "==>> new User");

      // Save User in Db and Respond
      const user = await newUser.save();
      res.status(200).send({
        status: "Success",
        message: "User Signed up Successfully",
        data: user,
      });
    } catch (error) {
      console.log(error, "==> error in User Registration");

      res.status(500).send({
        status: "Failed",
        message: error.message,
      });
    }
  }
};

// ? ---------------
// ? User Login
// ? ---------------

export const login = async (req, res) => {
  console.log("User Login API");

  try {
    // For Finding User
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        status: "Failed",
        message: "User not Found",
      });
    }

    // Verifying Password
    const verifyPassword = await bcrypt.compare(req.body.password, user.password);
    if (!verifyPassword) {
      return res.status(400).send({
        status: "Failed",
        message: "Wrong Password",
      });
    }

    // Login Response
    res.status(200).send({
      status: "Success",
      message: "User Signed in Successfully",
      data: [user],
    });
  } catch (error) {
    console.log(error, "==> error in User Login");

    res.status(404).send({
      status: "Failed",
      message: error.message,
    });
  }
};
