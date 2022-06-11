

const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const studentModal = require('./../modals/student');
const mentorModal = require('./../modals/mentor');
const { userDetailsByEmail } = require("../services/utils");
const { log } = require("async");

const bycryptSaltRounds = Number(process.env.BYCRYPT_SALT_ROUNDS);
const bycryptSalt = process.env.BYCRYPT_SALT;
const jwtSecret = process.env.JWT_SECRET;

let filePath = '';
let fileName = '';
let fileNameOriginal = '';



///////////////////////////////////////////////

exports.fileStorage = ({ fileStoragePath, filenamePrefix }) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      filePath = fileStoragePath;
      cb(null, `files/${fileStoragePath}`);
    },
    filename: function (req, file, cb) {
      fileNameOriginal = file.originalname;
      fileName = `${filenamePrefix}-${file.originalname}`;
      cb(null, fileName);
    }
  });
}

exports.fileFilter = () => {
  return (req, file, cb) => {
    // if(file.mimetype === 'application/pdf') 
    // {
    //   cb(null, true);
    // } else {
    //   cb(null, false)
    // }
    cb(null, true);
  }
}

///////////////////////////////////////////////

exports.postSignup = (req, res, next) => {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const createdAt = req.body.createdAt;
  const updatedAt = req.body.updatedAt;
  const userType = req.body.userType;

  try {
    const userRes = await userDetailsByEmail({email});
    if(userRes.status) {
      return res.status(200).json({
        status: false,
        message: 'User already present by speficfed email. Try with different email'
      })
    }

    let hashedPwd = await new Promise((resolve, reject) => {
      bcrypt.hash(password, bycryptSaltRounds, (err, saltedPwd) => {
        console.log("postSignup :: saltedPwd :: ", saltedPwd);
        if (err) {
          console.log("err :: bcrypt.hash :: ", err.message);
          // return res.status(400).json({
          //   message: "Error :: " + err.message,
          //   status: false
          // });
          reject(err)
        }
        // hashedPwd = saltedPwd;
        resolve(saltedPwd)
      });
    })

    let newUser;
    if (userType.toLowerCase() === 'mentor') {
      const specialties = req.body.specialties;

      newUser = new mentorModal({
        name,
        email,
        password: hashedPwd,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        verfied: false,
        queries: [],
        chats: [],
        profileImg: {
          filePath: filePath,
          fileName: fileName,
          fileNameOriginal: fileNameOriginal,
        },
        specialties
      })
    }

    if (userType.toLowerCase() === 'student') {
      newUser = new studentModal({
        name,
        email,
        password: hashedPwd,
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
        verfied: false,
        queries: [],
        chats: [],
        profileImg: {
          filePath: filePath,
          fileName: fileName,
          fileNameOriginal: fileNameOriginal,
        }
      })
    }
    
    const savedUser =  newUser.save();

    return {
      status: true,
      message: 'success',
      data: {
        user: savedUser
      }
    }
  } catch(error) {
    console.log('postSignup :: error :: ', error);
    return res.status(200).json({
      status: false,
      message: error.message
    })
  }
}

exports.postSignin = (req, res, next) => {
  const email = req.user.email;
  const password = req.body.password;
  const userType = req.body.userType;

  try {
    const userRes = await userDetailsByEmail({email, userType})
    if(!userRes.status) {
      return res.status(200).json({
        status: false,
        message: 'No user found with specified email'
      })
    }

    const user = userRes.data.user;

    let isMatched = false;
    await bcrypt.compare(password, user.password, function (err, result) {
      console.log('postSignin :: bcrypt.compare :: result :: ', result);
      console.log('postSignin :: bcrypt.compare :: err :: ', err);
      if (err) {
        return res.status(200).json({
          status: false,
          message: 'Either your email or password is wrong'
        })
      }
      isMatched = true
    });

    return res.status(200).json({
      message: 'Success',
      data: {
        user
      },
      status: true
    })

  } catch(error) {
    console.log('postSignin :: error :: ', error);
    return  res.status(200).json({
      status: false,
      message: error.message
    })
  }
}

exports.postPasswordReset = (req, res, next) => {
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  return res.status(200).json({
    message: 'Success',
    data: {}
  })
}


exports.postgenerateToken = (req, res, next) => {
  const userType = req.body.userType;
  const email = req.body.email;
  const _id = req.body._id;

  try {
    const token = await jwt.sign({
      userType,
      email,
      _id
    }, jwtSecret);
    return res.status(200).json({
      message: 'Success',
      data: {}
    })
  } catch(error) {
    console.log('postgenerateToken :: error :: ', error);
    return res.status(200).json({
      status: false,
      message: error.message
    })
  }

  
}

exports.patchUserDetails = (req, res, next) => {
  const _id = req.body._id;
  const userType = req.body.userType;
  const lastActiveAt = req.body.lastActiveAt;
  const isActive = req.body.isActive;

  try {
    let user;
    if (userType.toLowerCase() === 'mentor') {
      user = await mentorModal.findById(_id);
    } else if (userType.toLowerCase() === 'student') {
      user = await studentModal.findById(_id);
    }

    if (!user.name) {
      return res.status(200).json({
        status: false,
        message: 'No user found'
      })
    }
    if (lastActiveAt) {
      user.lastActiveAt = new Date().getTime()
    }
    if (isActive) {
      user.isActive = true
    }
    if (isActive === 'false') {
      user.isActive = false
    }

    const savedUser = await user.save();

    return res.status(200).json({
      status: true,
      message: 'Success',
      data: {
        user: savedUser
      }
    });

  } catch(error) {
    console.log('patchUserDetails :: error :: ', error);
    return res.status(200).json({
      status: false,
      message: error.message
    })
  }
}


// exports.postPasswordReset = (req, res, next) => {
//   return res.status(200).json({
//     message: 'Success',
//     data: {}
//   })
// }