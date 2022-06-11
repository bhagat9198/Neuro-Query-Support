const multer = require('multer');
const uniqid = require('uniqid');
const mentorModal = require('./../modals/mentor');
const studentModal = require('./../modals/student');


exports.fileStorage = ({ fileStoragePath, filenamePrefix }) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      filePath = fileStoragePath;
      cb(null, `files/${fileStoragePath}`);
    },
    filename: function (req, file, cb) {
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

exports.userDetailsById = async ({ userType, _id }) => {
  let user;
  try {
    if (userType.toLowerCase() === 'mentor') {
      user = await mentorModal.findById(_id)
    } else if (userType.toLowerCase() === 'student') {
      user = await studentModal.findById(_id)
    }
    if (user.name) {
      return {
        status: true,
        data: {
          user
        },
        message: 'Success'
      }
    } else {
      return {
        status: false,
        message: 'No user find with specidfied id'
      }
    }
  } catch (error) {
    console.log('userDetails :: error :: ', error);
    return {
      status: false,
      message: error.message
    }
  }
}

exports.userDetailsByEmail = async ({ userType, email }) => {
  let user;
  try {
    if (userType.toLowerCase() === 'mentor') {
      user = await mentorModal.find({ email });
    } else if (userType.toLowerCase() === 'student') {
      user = await studentModal.find({ email });
    }
    if (user.name) {
      return {
        status: true,
        data: {
          user
        },
        message: 'Success'
      }
    } else {
      return {
        status: false,
        message: 'No user find with specidfied email'
      }
    }
  } catch (error) {
    console.log('userDetails :: error :: ', error);
    return {
      status: false,
      message: error.message
    }
  }
}
