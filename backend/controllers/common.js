const MentorModal = require('./../modals/mentor');


exports.getMentors = async(req, res, next) => {
  const category = req.query.category;

  try {
    let dbRes;
    if (category) {
      dbRes = await MentorModal.find({ specialties: category })
    } else {
      dbRes = await MentorModal.find()
    }

    return res.status(200).json({
      status: true,
      message: 'Success',
      data: {
        mentors: dbRes
      }
    })

  } catch(error) {
    console.log('getMentors :: error :: ', error);
    return {
      status: false,
      message: error.message
    }
  }
}

