const { toTitleCase, validateEmail } = require("../config/function");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
class Auth { 
  async isAdmin(req, res, next) {
    let { loggedInUserId } = req.body;
    try {
      let loggedInUserRole = await userModel.findById(loggedInUserId);
      return res.json({
        role: loggedInUserRole.role === "admin" ? true : false,
      });
    } catch {
      return next(new AppError("Something went wrong", 500));
    }
  }

  async allUser(req, res, next) {
    try {
      let allUser = await userModel.find({});
      return res.json({ users: allUser });
    } catch {
      return next(new AppError("Something went wrong", 500));
    }
  }

  /* User Registration/Signup controller  */
  async postSignup(req, res, next) {
    let {
      firstName,
      lastName,
      email,
      password,
      cPassword,
      role = "user",
    } = req.body;

    if (!firstName || !lastName || !email || !password || !cPassword) {
      return next(new AppError("Filed must not be empty", 400));
    }
    if (firstName.length < 3 || firstName.length > 25) {
      return next(new AppError("Name must be 3-25 charecter", 400));
    } else {
      if (validateEmail(email)) {
        firstName = toTitleCase(firstName);
        lastName = toTitleCase(lastName);
        if (password !== cPassword) {
          return next(
            new AppError("Password and confirm password do not match", 400)
          );
        }
        if ((password.length > 255) | (password.length < 8)) {
          return next(new AppError("Password must be 8 charecter", 400));
        } else {
          // If Email & Number exists in Database then:
          try {
            password = bcrypt.hashSync(password, 10);
            const data = await userModel.findOne({ email: email });
            if (data) {
              return next(new AppError("Email already exists", 400));
            } else {
              let newUser = new userModel({
                firstName,
                lastName,
                email,
                password,
                role,
              });
              newUser
                .save()
                .then((data) => {
                  return res.json({
                    success: "Account create successfully. Please login",
                  });
                })
                .catch((err) => {
                  return next(new AppError("Something went wrong", 500));
                });
            }
          } catch (err) {
            console.log(err)
            return next(new AppError("Something went wrong", 500));
          }
        }
      } else {
        error = {
          ...error,
          password: "",
          firstName: "",
          lastName: "",
          email: "Email is not valid",
        };
        console.log(error);
        return next(new AppError(error, 400)); 
      }
    }
  }

  /* User Login/Signin controller  */
  async postSignin(req, res, next) {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        error: "Fields must not be empty",
      });
    }
    try {
      const data = await userModel.findOne({ email: email });
      if (!data) {
        return next(new AppError("Invalid email or password", 400));
      } else {
        const login = await bcrypt.compare(password, data.password);
        if (login) {
          const token = jwt.sign(
            { _id: data._id, role: data.role },
            process.env.JWT_SECRET
          );
          const encode = jwt.verify(token, process.env.JWT_SECRET);
          return res.json({ 
            token: token,
            success: "Login successfully",
            data,
            user: encode,
          });
        } else {
          return next(new AppError("Invalid email or password", 400));
        }
      }
    } catch (err) {
      console.log(err);
      return next(new AppError("Something went wrong", 500));
    }
  }
}

const authController = new Auth();
module.exports = authController;
