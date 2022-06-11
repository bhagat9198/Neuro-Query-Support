var stringSimilarity = require("string-similarity");
const MentorModal = require('./../modals/mentor');
const TicketModal = require('./../modals/ticket');


exports.postUpdateTicket = async(req, res, next) => {
  const status = req.body.status;
  const message = req.body.message;
  const sender_id = req.body.sender_id;
  const sender_name = req.body.sender_name;
  const _id = req.body._id;

  try {
    const ticket = await TicketModal.findById(_id);
    if(!ticket.query) {
      return res.status(200).json({
        status: false,
        message: 'Invalid Ticket Id'
      })
    }

    if(status) {
      ticket.status = status
    }

    if(message) {
      if(!ticket.messages) {
        ticket.messages = []
      }
      ticket.messages.unshift({
        createdAt: new Date().getTime(),
        modifiedAt: new Date().getTime(),
        isModified: false,
        message,
        sender_id,
        sender_name
      })
    }


    const updatedTicket = await ticket.save();
    console.log('postGenerateTicket :: updatedTicket :: ', updatedTicket);
    return res.status(200).json({
      status: true,
      message: 'Success',
      data: {
        ticket: updatedTicket
      }
    })

  } catch(error) {
    console.log('postGenerateTicket :: error :: ', error);
    return {
      status: false,
      message: error.message
    }
  }
}

exports.postGenerateTicket = async(req, res, next) => {
  const query = req.body.query;
  const repoter_id = req.body.repoter_id;
  const repoter_name = req.body.repoter_name;
  const assigne_name = req.body.assigne_name;
  const assigne_id = req.body.assigne_id;
  const category = req.body.category;
  const status = req.body.status;

  try {
    const newTicket = new TicketModal({
      query, repoter_id, repoter_name, 
      assigne_name, assigne_id, category, status,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    })

    const savedTicket = await newTicket.save();
    console.log('postGenerateTicket :: savedTicket :: ', savedTicket);
    return res.status(200).json({
      status: true,
      message: 'Success',
      data: {
        ticket: savedTicket
      }
    })

  } catch(error) {
    console.log('postGenerateTicket :: error :: ', error);
    return {
      status: false,
      message: error.message
    }
  }
}

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

exports.postSearchQueries = async(req, res, next) => {
  const query = req.query.query;

  try {
    const allTickets = await TicketModal.find().sort({date: -1})
    const bestMatches = await stringSimilarity.findBestMatch(query, allTickets);
    
    return res.status(200).json({
      status: true,
      message: 'Success',
      data: {
        tickets: bestMatches
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

